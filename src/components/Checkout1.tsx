"use client"

import { useState } from "react"
import { ArrowLeft, Check, Shield, CreditCard, User, Mail, Lock, Star } from "lucide-react"
import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import { RadioGroup, RadioGroupItem } from "../ui/RadioGroup"
import { Separator } from "../ui/Separator"
import {
  isValidEmail,
  isValidCardNumber,
  isValidExpiryDate,
  isValidCVV,

} from "../lib/utils"

// Simple Progress Bar Component (fallback)
// const SimpleProgress = ({ value, className }: { value: number; className?: string }) => (
//   <div className={cn("relative h-2 w-full overflow-hidden rounded-full bg-gray-200", className)}>
//     <div
//       className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
//       style={{ width: ${value}% }}
//     />
//   </div>
// )

// Simple Progress Bar Component
const ProgressBar = ({ value, className = "" }: { value: number; className?: string }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
    <div
      className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
)
type Step = "plan" | "account" | "billing" | "payment" | "review" | "success"

export default function CheckOut1() { 
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
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    termsAccepted: false,

  })
   
          
  const steps = [
    { id: "plan", title: "Plan", completed: false },
    { id: "account", title: "Account", completed: false },
    { id: "billing", title: "Billing", completed: false },
    { id: "payment", title: "Payment", completed: false },
    { id: "review", title: "Review", completed: false },
  ]

  const getCurrentStepIndex = () => steps.findIndex((step) => step.id === currentStep)
  const progress = ((getCurrentStepIndex() + 1) / steps.length) * 100

  const nextStep = () => {
    const stepOrder: Step[] = ["plan", "account", "billing", "payment", "review", "success"]
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const stepOrder: Step[] = ["plan", "account", "billing", "payment", "review", "success"]
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

  const validatePaymentStep = () => {
    if (formData.paymentMethod === "card") {
      return (
        formData.nameOnCard.trim() !== "" &&
        formData.cardNumber.trim() !== "" &&
        formData.expiryDate.trim() !== "" &&
        formData.cvv.trim() !== "" &&
        isValidCardNumber(formData.cardNumber) &&
        isValidExpiryDate(formData.expiryDate) &&
        isValidCVV(formData.cvv)
      )
    }
    return true
  }

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case "plan":
        return validatePlanStep()
      case "account":
        return validateAccountStep()
      case "billing":
        return validateBillingStep()
      case "payment":
        return validatePaymentStep()
      case "review":
        return true
      default:
        return false
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
            £99 <span className="text-base font-normal text-muted-foreground">/user/month</span>
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
              <span className="text-2xl font-bold">£{formData.users * 99}</span>
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
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                value={formData.postalCode}
                onChange={(e) => updateFormData("postalCode", e.target.value)}
                placeholder="SW1A 1AA"
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
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
      <Button onClick={nextStep} className="w-full" size="lg" disabled={!canProceedToNextStep()}>
        Continue to Payment
      </Button>
      </div>
    </div>
  )

  const renderPaymentStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Payment Method</h1>
        <p className="text-muted-foreground">Choose how you'd like to pay</p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <RadioGroup value={formData.paymentMethod} onValueChange={(value) => updateFormData("paymentMethod", value)}>
            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                <CreditCard className="h-4 w-4" />
                Credit or Debit Card
              </Label>
              <div className="flex gap-1">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  V
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  M
                </div>
              </div>
            </div>
          </RadioGroup>

          {formData.paymentMethod === "card" && (
            <div className="space-y-4 pt-4 border-t">
              <div className="space-y-2">
                <Label htmlFor="nameOnCard">Name on Card</Label>
                <Input
                  id="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={(e) => updateFormData("nameOnCard", e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => updateFormData("cardNumber", e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    value={formData.expiryDate}
                    onChange={(e) => updateFormData("expiryDate", e.target.value)}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    value={formData.cvv}
                   onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
            <Lock className="h-4 w-4 text-green-600" />
            <p className="text-sm text-green-800">256-bit SSL encryption • Your payment is secure</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
      <Button onClick={nextStep} className="w-full" size="lg" disabled={!canProceedToNextStep()}>
       Review Order
      </Button>
      </div>
    </div>
  )

  const renderReviewStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Review Your Order</h1>
        <p className="text-muted-foreground">Please review your details before completing your purchase</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Plan Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Essential Plan</span>
              <span>£99/user/month</span>
            </div>
            <div className="flex justify-between">
              <span>Number of users</span>
              <span>{formData.users}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Monthly Total</span>
              <span>£{formData.users * 99}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Account Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name:</span>
              <span>
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span>{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Company:</span>
              <span>{formData.company}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>•••• •••• •••• {formData.cardNumber.slice(-4)}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <p className="text-sm text-center">
          By completing this purchase, you agree to our Terms of Service and Privacy Policy. Your subscription will
          auto-renew monthly.
        </p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
      <Button onClick={nextStep} className="w-full" size="lg" disabled={!canProceedToNextStep()}>
        Complete Purchase
      </Button>
      </div>
    </div>
  )

  const renderSuccessStep = () => (
    <div className="text-center space-y-6">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <Check className="h-8 w-8 text-green-600" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-green-600">Welcome to Essential!</h1>
        <p className="text-muted-foreground">Your account has been created successfully</p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="text-center space-y-2">
            <h3 className="font-semibold">Order Confirmation</h3>
            <p className="text-sm text-muted-foreground">Order #ESS-2025-001234</p>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>
                Essential Plan ({formData.users} user{formData.users > 1 ? "s" : ""})
              </span>
              <span>£{formData.users * 99}/month</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Next billing date:</span>
              <span>{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="font-semibold">What's Next?</h3>
        <div className="grid gap-3 text-left">
          <div className="flex items-start gap-3 p-3 border rounded-lg">
            <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium">Check your email</p>
              <p className="text-sm text-muted-foreground">We've sent setup instructions to {formData.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 border rounded-lg">
            <User className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium">Set up your team</p>
              <p className="text-sm text-muted-foreground">Invite team members and configure permissions</p>
            </div>
          </div>
        </div>
      </div>

      <Button className="w-full" size="lg">
        Go to Dashboard
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {currentStep !== "success" && (
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
          {currentStep === "payment" && renderPaymentStep()}
          {currentStep === "review" && renderReviewStep()}
          {currentStep === "success" && renderSuccessStep()}
        </div>

        {currentStep !== "success" && (
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

      {/* Bio Modal */}
      {showPrivacy && (
              <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy – UK GDPR & PECR Compliant</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: 04/08/2025</p>

      <div className="space-y-6 text-base leading-relaxed">
        <p><strong>Company Name:</strong> R2 System Solution Ltd</p>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Who We Are</h2>
          <p>
            We are R2 System Solution Ltd, the data controller for your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. What Data We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Name and contact details</li>
            <li>Payment information (handled via third-party)</li>
            <li>Purchase and subscription history</li>
            <li>Usage data (e.g., IP address, device)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Process orders and subscriptions</li>
            <li>Provide customer support</li>
            <li>Improve our services</li>
            <li>Send marketing emails (only with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Legal Basis for Processing</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Contract (to deliver services)</li>
            <li>Legal obligation (e.g., tax)</li>
            <li>Consent (marketing)</li>
            <li>Legitimate interests (fraud prevention)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Sharing Your Data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Payment processors</li>
            <li>Delivery partners</li>
            <li>Legal/regulatory bodies (if required)</li>
          </ul>
          <p className="mt-2">We never sell your personal information.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Marketing Preferences</h2>
          <p>
            You can opt-in or out of marketing communications at any time via your account or the unsubscribe link in our emails.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Object to processing</li>
            <li>Data portability</li>
            <li>Complain to the ICO (<a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://ico.org.uk/</a>)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Data Retention</h2>
          <p>
            We retain your data for as long as necessary to provide services and comply with applicable laws (e.g., tax purposes).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">9. Cookies</h2>
          <p>
            We use cookies to improve user experience. You can manage cookie preferences in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact</h2>
          <ul className="list-inside space-y-1">
            <li><strong>Data Protection Officer:</strong> Ridwan Akorede</li>
            <li><strong>Email:</strong> <a href="mailto:privacy@r2systemsolution.co.uk" className="text-blue-600 underline">privacy@r2systemsolution.co.uk</a></li>
            <li><strong>Registered Address:</strong> Harley House, 29 Cambray Place, Cheltenham, GL50 1JN</li>
          </ul>
        </section>
      </div>
    </div>
            )}


    {/* Bio Modal */}
      {showTerms && (
              <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions – UK</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: 04/08/2025</p>

      <div className="space-y-6 text-base leading-relaxed">
        <p><strong>Company Name:</strong> R2 System Solution Ltd</p>
        <p><strong>Registered Address:</strong> Harley House, 29 Cambray Place, Cheltenham, GL50 1JN</p>
        <p><strong>Company Number:</strong> 16179444</p>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
          <p>
            These terms govern your use of our subscription services on <a href="https://r2systemsolution.co.uk" className="text-blue-600 underline">https://r2systemsolution.co.uk</a>. 
            By subscribing, you agree to these Terms and our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Subscription Services</h2>
          <p>
            We offer monthly, quarterly, and annual subscriptions for our Essential, Professional, and Enterprise plans. 
            Subscriptions will auto-renew unless cancelled.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Pricing and Payment</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>All prices are not inclusive of VAT unless stated otherwise.</li>
            <li>Payment is taken in advance using secure third-party processors (Stripe).</li>
            <li>Failed payments may result in service interruption.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Free Trials and Promotions</h2>
          <p>
            Free trials are offered at our discretion and are limited to one per customer. 
            If not cancelled, the subscription converts to a paid plan after the trial period.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Cancellation and Refunds</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You can cancel anytime via your account dashboard or by contacting us.</li>
            <li>
              Under UK law, you have a 14-day cooling-off period from the subscription start date, unless you have accessed digital/downloaded content.
            </li>
            <li>
              We reserve the right to refuse refunds after this period unless required by law (e.g., faulty goods).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">6. User Obligations</h2>
          <p>
            You agree to provide accurate information, keep your account secure, and not misuse the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Intellectual Property</h2>
          <p>
            All content and branding remain the property of R2 System Solution Ltd. 
            You may not reproduce or redistribute without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Limitation of Liability</h2>
          <p>
            We are not liable for any indirect losses or business interruption. 
            Our total liability is limited to the amount paid in the previous 3 months.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">9. Amendments</h2>
          <p>
            We may update these Terms. Changes will be posted on our website, and continued use constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
          <ul className="list-inside space-y-1">
            <li><strong>Email:</strong> <a href="mailto:privacy@r2systemsolution.co.uk" className="text-blue-600 underline">privacy@r2systemsolution.co.uk</a></li>
            <li><strong>Phone:</strong> 01452 905204</li>
            <li><strong>Address:</strong> Harley House, 29 Cambray Place, Cheltenham, GL50 1JN</li>
          </ul>
        </section>
      </div>
    </div>
            )}
    </div>
  )
}