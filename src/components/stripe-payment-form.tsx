"use client"

import type React from "react"

import { useState } from "react"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { stripePromise, isStripeConfigured } from "../lib/stripe"
import { Button } from "../ui/Button"
import { Card, CardContent } from "../ui/Card"
import { Alert, AlertDescription } from "../ui/Alert"
import { Loader2, CreditCard, Lock, AlertCircle, Info } from "lucide-react"

interface PaymentFormProps {
  clientSecret: string
  amount: number
  currency: string
  customerEmail: string
  customerName: string
  onSuccess: (paymentIntentId: string) => void
  onError: (error: string) => void
  isDemo?: boolean
}

const PaymentForm = ({
  clientSecret,
  amount,
  currency,
  customerEmail,
  customerName,
  onSuccess,
  onError,
  isDemo = false,
}: PaymentFormProps) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [cardComplete, setCardComplete] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setIsProcessing(true)
    setPaymentError(null)

    // Demo mode - simulate payment processing
    if (isDemo) {
      try {
        // Simulate processing time
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Extract payment intent ID from demo client secret
        const paymentIntentId = clientSecret.replace("demo_client_secret_", "demo_pi_")
        onSuccess(paymentIntentId)
      } catch (error) {
        setPaymentError("Demo payment failed")
        onError("Demo payment failed")
      } finally {
        setIsProcessing(false)
      }
      return
    }

    // Real Stripe payment processing
    if (!stripe || !elements) {
      setPaymentError("Payment system is not ready. Please try again.")
      setIsProcessing(false)
      return
    }

    if (!clientSecret) {
      setPaymentError("Payment setup is incomplete. Please try again.")
      setIsProcessing(false)
      return
    }

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      setPaymentError("Card element not found")
      setIsProcessing(false)
      return
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: customerName || "",
            email: customerEmail || "",
          },
        },
      })

      if (error) {
        const errorMessage = error.message || "Payment failed"
        setPaymentError(errorMessage)
        onError(errorMessage)
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        onSuccess(paymentIntent.id)
      } else {
        setPaymentError("Payment was not completed successfully")
        onError("Payment was not completed successfully")
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred"
      setPaymentError(errorMessage)
      onError(errorMessage)
    } finally {
      setIsProcessing(false)
    }
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
        fontFamily: "system-ui, -apple-system, sans-serif",
      },
      invalid: {
        color: "#9e2146",
      },
    },
    hidePostalCode: true,
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isDemo && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>Demo Mode: This is a simulated payment. No real charges will be made.</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span className="font-medium">{isDemo ? "Demo Payment Details" : "Payment Details"}</span>
            </div>

            {!isDemo && (
              <div className="p-4 border rounded-lg bg-gray-50">
                <CardElement
                  options={cardElementOptions}
                  onChange={(event) => {
                    setCardComplete(event.complete)
                    if (event.error) {
                      setPaymentError(event.error.message)
                    } else {
                      setPaymentError(null)
                    }
                  }}
                />
              </div>
            )}

            {isDemo && (
              <div className="p-4 border rounded-lg bg-blue-50">
                <div className="text-center text-blue-800">
                  <p className="font-medium">Demo Payment Form</p>
                  <p className="text-sm mt-1">Click "Pay" to simulate a successful payment</p>
                </div>
              </div>
            )}

            {paymentError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{paymentError}</AlertDescription>
              </Alert>
            )}

            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <Lock className="h-4 w-4 text-green-600" />
              <p className="text-sm text-green-800">
                {isDemo
                  ? "Demo mode - No real payment will be processed"
                  : "Your payment is secured by 256-bit SSL encryption and processed by Stripe"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Total Amount:</span>
          <span className="text-2xl font-bold">
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: currency,
            }).format(amount)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {isDemo ? "Demo payment - no charges will be made" : "You will be charged monthly until you cancel"}
        </p>
      </div>

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={(!isDemo && (!stripe || !cardComplete)) || isProcessing}
      >
        {isProcessing ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            {isDemo ? "Processing Demo Payment..." : "Processing Payment..."}
          </>
        ) : (
          <>
            <Lock className="h-4 w-4 mr-2" />
            {isDemo ? "Demo Pay " : "Pay "}
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: currency,
            }).format(amount)}
          </>
        )}
      </Button>
    </form>
  )
}

interface StripePaymentFormProps {
  clientSecret: string
  amount: number
  currency: string
  customerEmail: string
  customerName: string
  onSuccess: (paymentIntentId: string) => void
  onError: (error: string) => void
  isDemo?: boolean
}

export default function StripePaymentForm(props: StripePaymentFormProps) {
  // If Stripe is not configured or we're in demo mode, render without Elements wrapper
  if (!isStripeConfigured || props.isDemo) {
    return <PaymentForm {...props} isDemo={true} />
  }

  // Check if Stripe is available
  if (!stripePromise) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Payment system is not configured. Please contact support.</AlertDescription>
      </Alert>
    )
  }

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm {...props} />
    </Elements>
  )
}
