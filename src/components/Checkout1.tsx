
import { useState } from "react"
import { ArrowLeft, Check, Shield, Star } from "lucide-react"
import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import { Separator } from "../ui/Separator"
import PrivacyPolicy from "./PrivacyNotice"
import  TermsAndConditions from "./TermsAndConditions"
import  Modal from "./Modal"
import {
  isValidEmail,
} from "../lib/utils"

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

// Simple Progress Bar Component
const ProgressBar = ({ value, className = "" }: { value: number; className?: string }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
    <div
      className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
)

type Step = "plan" | "account" | "billing" 

export default function CheckOut1() { 
  const stripe = useStripe();
  const elements = useElements();

  
  const [loading, setLoading] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false); 
  const [currentStep, setCurrentStep] = useState<Step>("plan")
  const [formData, setFormData] = useState({
    plan: "essential",
    users: 1,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "United Kingdom",
    termsAccepted: false,

  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // 1. Create payment intent on backend
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 3500 }) // e.g., £35.00 in pence
    });

    const { clientSecret } = await response.json();

    // 2. Confirm card payment on frontend
    const cardElement = elements.getElement(CardElement); // instance

if (!cardElement) {
  alert("Please enter your card details.");
  setLoading(false);
  return;
}

const result = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: cardElement, 
  },
});


    if (result.error) {
      // Show error to customer
      alert(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      alert('Payment succeeded!');
      // Proceed with your flow
    }

    setLoading(false);
  }
   
          
  const steps = [
    { id: "plan", title: "Plan", completed: false },
    { id: "account", title: "Account", completed: false },
    { id: "billing", title: "Billing", completed: false },
  ]

  const getCurrentStepIndex = () => steps.findIndex((step) => step.id === currentStep)
   const progress = ((getCurrentStepIndex() + 1) / steps.length) * 100

  const nextStep = () => {
    const stepOrder: Step[] = ["plan", "account", "billing",]
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const stepOrder: Step[] = ["plan", "account", "billing",]
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1])
    }
  } 

  const updateFormData = (field: string, value: string | number| boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
 
  
    const validatePlanStep = () => {
    return formData.users >= 1
  }

  const validateAccountStep = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.company.trim() !== "" &&
      formData.password.trim() !== "" &&
      isValidEmail(formData.email) &&
      formData.password.length >= 8 &&
      formData.termsAccepted
      
    )
  }

   const validateBillingStep = () => {
    const phoneValid = formData.phone.trim() !== "" && formData.phone.length >= 10
    const postcodeValid = formData.postalCode.trim() !== "" && formData.postalCode.length >= 5

    return (
      formData.phone.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.postalCode.trim() !== "" &&
      phoneValid &&
      postcodeValid
    )
  }


  const canProceedToNextStep = () => {
    switch (currentStep) {
      case "plan":
        return validatePlanStep()
      case "account":
        return validateAccountStep()
      case "billing":
        return validateBillingStep()
      default:
        return null
    }
  }

  const renderPlanStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Confirm Your Plan</h1>
        <p className="text-muted-foreground">Review your selected plan and customize as needed</p>
      </div>

      <Card className="border-2 border-primary">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Essential Plan</CardTitle>
          <div className="text-3xl font-bold">
            £35 <span className="text-base font-normal text-muted-foreground">/user/month</span>
          </div>
          <CardDescription>Perfect for small businesses getting started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {["24/7 monitoring", "Help desk support", "Basic security", "Monthly reports", "Email support"].map(
              (feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{feature}</span>
                </div>
              ),
            )}
          </div>

          <Separator />

          <div className="space-y-3">
            <Label htmlFor="users">Number of users</Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateFormData("users", Math.max(1, formData.users - 1))}
                disabled={formData.users <= 1}
              >
                -
              </Button>
              <Input
                id="users"
                type="number"
                value={formData.users}
                onChange={(e) => updateFormData("users", Number.parseInt(e.target.value) || 1)}
                className="w-20 text-center"
                min="1"
              />
              <Button variant="outline" size="sm" onClick={() => updateFormData("users", formData.users + 1)}>
                +
              </Button>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total monthly cost:</span>
              <span className="text-2xl font-bold">£{formData.users * 35}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Billed monthly • Cancel anytime</p>
          </div>
        </CardContent>
      </Card>

      
      <Button onClick={nextStep} className="w-full" size="lg" disabled={!canProceedToNextStep()}>
        Continue to Account Setup
      </Button>
    </div>
  )

  const renderAccountStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Create Your Account</h1>
        <p className="text-muted-foreground">Set up your account to get started</p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                 onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@company.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your Company Ltd"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Create a secure password"
              required
            />
            <p className="text-xs text-muted-foreground">Must be at least 8 characters with numbers and symbols</p>
          </div>

          <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
            <Shield className="h-4 w-4 text-blue-600" />
            <p className="text-sm text-blue-800">Your data is encrypted and secure</p>
          </div>

           <div className="flex items-start gap-3 p-4 border rounded-lg">
            <input
              type="checkbox"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={(e) => updateFormData("termsAccepted", e.target.checked)}
              className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
           
        By clicking, you agree to our{" "}
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => setShowPrivacy(true)}
        >
          Privacy Policy
        </span>{" "}
        and{" "}
        <span
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={() => setShowTerms(true)}
        >
          Terms of Service
        </span>
         
          {/* Privacy Modal */}
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
         <PrivacyPolicy />  
      </Modal>

      {/* Terms Modal */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms and Conditions"
      >
         <TermsAndConditions />  
      </Modal>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
      <Button onClick={nextStep} className="w-full" size="lg" disabled={!canProceedToNextStep()}>
        Continue to Billing
      </Button>
      </div>
    </div>
  )

  const renderBillingStep = () => (
    <form onSubmit={handleSubmit}  className="space-y-6">
      <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Billing Information</h1>
        <p className="text-muted-foreground">Enter your billing details</p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+44 20 1234 5678"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
               onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="123 Business Street"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => updateFormData("city", e.target.value)}
                placeholder="London"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode">Post Code</Label>
              <Input
                id="postalCode"
                value={formData.postalCode}
                onChange={(e) => updateFormData("postalCode", e.target.value)}
                placeholder="SW1 1AA"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={formData.country}
              onChange={(e) => updateFormData("country", e.target.value)}
              disabled
            />
          </div>


          <div className="space-y-2">
          <Label>Credit or debit card</Label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={!canProceedToNextStep() || loading || !stripe}
      >
        {loading ? "Processing..." : "Continue to Payment"}
      </Button>
      </div>
    </div>
    </form>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {(
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-muted-foreground">
                Step {getCurrentStepIndex() + 1} of {steps.length}
              </h2>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">Secure Checkout</span>
              </div>
            </div>
            <ProgressBar value={progress} className="h-2" />
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm p-6">
          {currentStep === "plan" && renderPlanStep()}
          {currentStep === "account" && renderAccountStep()}
          {currentStep === "billing" && renderBillingStep()}

        </div>

        {(
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 customer rating</span>
              </div>
              <span>•</span>
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        )}
      </div>

      


   
    </div>
  )
}
