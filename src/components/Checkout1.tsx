"use client"

import { useState } from "react"
import { ArrowLeft, Check, Shield, CreditCard, User, Mail, Lock, Star } from "lucide-react"
import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import { RadioGroup, RadioGroupItem } from "../ui/RadioGroup"
import { Separator } from "../ui/Separator"
import { Progress } from "../ui/Progress"

type Step = "plan" | "account" | "billing" | "payment" | "review" | "success"

export default function CheckOut1() {
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
  })
   
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const updateFormData = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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

      <Button onClick={nextStep} className="w-full" size="lg">
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
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
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
              onChange={handleChange}
              placeholder="john@company.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Create a secure password"
              required
            />
            <p className="text-xs text-muted-foreground">Must be at least 8 characters with numbers and symbols</p>
          </div>

          <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
            <Shield className="h-4 w-4 text-blue-600" />
            <p className="text-sm text-blue-800">Your data is encrypted and secure</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Button onClick={nextStep} className="flex-1">
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
              onChange={handleChange}
              placeholder="+44 20 1234 5678"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Business Street"
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                value={formData.postalCode}
                onChange={(e) => updateFormData("postalCode", e.target.value)}
                placeholder="SW1A 1AA"
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
        <Button onClick={nextStep} className="flex-1">
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
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => updateFormData("cardNumber", e.target.value)}
                  placeholder="1234 5678 9012 3456"
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
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
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
        <Button onClick={nextStep} className="flex-1">
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
        <Button onClick={nextStep} className="flex-1" size="lg">
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
            <Progress value={progress} className="h-2" />
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
    </div>
  )
}
