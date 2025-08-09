// import React from "react";


// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   CartesianGrid,
//   Line
// } from "recharts";

// type KPI = {
//   title: string;
//   value: string;
//   meta?: string;
//   trend?: string; // e.g. '+18%'
//   icon?: React.ReactNode;
// };

// const kpis: KPI[] = [
//   { title: "Active jobs", value: "2", meta: "+2 from last month" },
//   { title: "Top applications", value: "136", meta: "+18% from last month", trend: "+18%" },
//   { title: "Qualified candidates", value: "35", meta: "7.1% qualification rate" },
//   { title: "Avg. hire time", value: "14 days", meta: "-3 days improvement", trend: "-3d" }
// ];

// const chartData = [
//   { month: "Jan", applied: 80, interviewed: 35 },
//   { month: "Feb", applied: 82, interviewed: 38 },
//   { month: "Mar", applied: 95, interviewed: 42 },
//   { month: "Apr", applied: 82, interviewed: 60 },
//   { month: "May", applied: 55, interviewed: 40 },
//   { month: "Jun", applied: 55, interviewed: 40 },
//   { month: "Jul", applied: 85, interviewed: 62 },
//   { month: "Aug", applied: 72, interviewed: 54 },
//   { month: "Sep", applied: 62, interviewed: 43 },
//   { month: "Oct", applied: 58, interviewed: 28 }
// ];

// const recentActivity = [
//   {
//     name: "Sarah Chen",
//     role: "Senior front-end developer",
//     action: "Interview scheduled",
//     time: "2h ago",
//     score: 94,
//     status: "screening"
//   },
//   {
//     name: "Marcus Johnson",
//     role: "Senior front-end developer",
//     action: "Assessment scheduled",
//     time: "2h ago",
//     score: 78,
//     status: "assessment"
//   }
// ];

// export default function RecruiterDashboard(): JSX.Element {
//   return (
//     <div className="min-h-screen flex bg-gray-50 text-slate-900">
//       {/* Sidebar */}
//       <aside className="w-64 bg-purple-800 text-white hidden md:flex flex-col p-6 gap-6">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center font-bold">L</div>
//           <div className="text-lg font-semibold">Lantana</div>
//         </div>

//         <nav className="flex-1">
//           <ul className="space-y-3">
//             <li>
//               <a
//                 href="#"
//                 className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 shadow-sm"
//                 aria-current="page"
//               >
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <rect x="3" y="3" width="7" height="7" rx="1" />
//                   <rect x="14" y="3" width="7" height="7" rx="1" />
//                   <rect x="14" y="14" width="7" height="7" rx="1" />
//                   <rect x="3" y="14" width="7" height="7" rx="1" />
//                 </svg>
//                 <span className="font-medium">Dashboard</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M3 7h18" />
//                   <path d="M3 12h18" />
//                   <path d="M3 17h18" />
//                 </svg>
//                 <span>Jobs</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <circle cx="12" cy="8" r="3" />
//                   <path d="M6 20a6 6 0 0112 0" />
//                 </svg>
//                 <span>Candidates</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
//                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M3 12h18" />
//                 </svg>
//                 <span>Assessment</span>
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <div className="pt-4 border-t border-white/10">
//           <button className="w-full py-2 rounded-full bg-white text-purple-800 font-semibold">Post a job</button>
//         </div>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-6 md:p-10">
//         <header className="flex items-center justify-between mb-6">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-extrabold">Overview</h1>
//             <p className="text-sm text-slate-500">Recruitment pipeline & performance</p>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="hidden sm:flex items-center gap-3">
//               <button className="px-4 py-2 rounded-md bg-white shadow-sm text-sm">Export</button>
//               <button className="px-4 py-2 rounded-md border">Filters</button>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="text-right">
//                 <div className="text-sm text-slate-500">Signed in as</div>
//                 <div className="font-medium">Recruiter • Lantana</div>
//               </div>
//               <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center font-medium">LS</div>
//             </div>
//           </div>
//         </header>

//         {/* KPI cards */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           {kpis.map((k, i) => (
//             <article
//               key={i}
//               className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
//               aria-labelledby={`kpi-${i}`}
//             >
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 id={`kpi-${i}`} className="text-sm text-slate-500">
//                     {k.title}
//                   </h3>
//                   <div className="mt-2 flex items-baseline gap-3">
//                     <div className="text-2xl md:text-3xl font-extrabold">{k.value}</div>
//                     {k.trend && (
//                       <div
//                         className={`text-sm font-medium px-2 py-1 rounded-lg bg-emerald-100 text-emerald-700`}
//                         aria-hidden
//                       >
//                         {k.trend}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="text-slate-400 text-sm">{k.meta}</div>
//               </div>
//             </article>
//           ))}
//         </section>

//         {/* Chart + Activity */}
//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
//             <div className="flex items-center justify-between mb-4">
//               <div>
//                 <h2 className="text-lg font-semibold">Job Statistics</h2>
//                 <p className="text-sm text-slate-500">Applied vs Interviewed — last 10 months</p>
//               </div>
//               <div className="text-sm text-slate-500">Legend: <span className="ml-2 inline-flex items-center"><span className="w-3 h-3 rounded-full bg-purple-700 mr-2"></span>Job Applied</span> <span className="ml-4 inline-flex items-center"><span className="w-3 h-3 rounded-full bg-slate-300 mr-2"></span>Job Interviewed</span></div>
//             </div>

//             <div style={{ width: "100%", height: 320 }}>
//               <ResponsiveContainer width="100%" height={320}>
//                 <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
//                   <XAxis dataKey="month" tick={{ fontSize: 12 }} />
//                   <YAxis tickFormatter={(v) => `${v}%`} />
//                   <Tooltip formatter={(value: number) => `${value}%`} />
//                   <Legend />
//                   <Bar dataKey="applied" name="Applied" radius={[8, 8, 0, 0]} barSize={18} />
//                   <Bar dataKey="interviewed" name="Interviewed" radius={[8, 8, 0, 0]} barSize={18} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             <div className="mt-4 text-sm text-slate-500">Tip: hover a bar to view exact numbers. Use the legend to toggle series visibility.</div>
//           </div>

//           <aside className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
//             <div className="flex items-center justify-between">
//               <h3 className="text-lg font-semibold">Recent Activity</h3>
//               <button className="text-sm px-3 py-1 rounded-md border">See all</button>
//             </div>

//             <ul className="space-y-4">
//               {recentActivity.map((r, idx) => (
//                 <li key={idx} className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center font-medium text-purple-800">{r.name
//                     .split(" ")
//                     .map((s) => s[0])
//                     .slice(0, 2)
//                     .join("")}</div>

//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="font-medium">{r.name}</div>
//                         <div className="text-sm text-slate-500">{r.role} • <span className="text-slate-400">{r.time}</span></div>
//                       </div>
//                       <div className="text-right">
//                         <div className="text-sm text-slate-500">Score</div>
//                         <div className="mt-1 font-semibold">{r.score}%</div>
//                       </div>
//                     </div>

//                     <div className="mt-2 flex items-center gap-2">
//                       <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-violet-50 text-violet-700">{r.status}</span>
//                       <button className="text-xs px-2 py-1 rounded-md border">View</button>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-auto text-xs text-slate-400">Actions: click a candidate to open the profile or drag to prioritize. Keyboard accessible: use tab and enter.</div>
//           </aside>
//         </section>

//         {/* Accessibility & footer note */}
//         <footer className="mt-8 text-sm text-slate-500">Built with accessible colors, keyboard navigation, and responsive layout. Want a Figma version or a production-ready component split into smaller parts?</footer>
//       </main>
//     </div>
//   );
// }


import { useState } from "react"
import { ArrowLeft, Check, Shield, CreditCard, User, Mail, Lock, Star } from "lucide-react"

// Mock UI components
const Button = ({ children, onClick, className = "", size = "default", variant = "default", disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-4 py-2 rounded font-medium transition-colors
      ${size === "lg" ? "px-6 py-3 text-lg" : ""}
      ${size === "sm" ? "px-2 py-1 text-sm" : ""}
      ${variant === "outline" ? "border border-gray-300 bg-white hover:bg-gray-50" : "bg-blue-600 text-white hover:bg-blue-700"}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      ${className}
    `}
  >
    {children}
  </button>
)

const Card = ({ children, className = "" }) => (
  <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 pb-2 ${className}`}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
)

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm text-gray-600 mt-1 ${className}`}>
    {children}
  </p>
)

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-2 ${className}`}>
    {children}
  </div>
)

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    {...props}
  />
)

const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}>
    {children}
  </label>
)

const Separator = () => (
  <hr className="border-gray-200" />
)

// Validation functions
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Simple Progress Bar Component
const ProgressBar = ({ value, className = "" }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
    <div
      className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
)

// Modal components
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

const PrivacyPolicy = () => (
  <div className="space-y-4 text-sm">
    <p>We respect your privacy and are committed to protecting your personal data.</p>
    <p>This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights.</p>
    <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
  </div>
)

const TermsAndConditions = () => (
  <div className="space-y-4 text-sm">
    <p>By using our service, you agree to these terms and conditions.</p>
    <p>You must be at least 18 years old to use our service.</p>
    <p>We reserve the right to modify these terms at any time with reasonable notice.</p>
  </div>
)

type Step = "plan" | "account" | "billing"

export default function CheckOut() { 
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [currentStep, setCurrentStep] = useState("plan")
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
   
  const steps = [
    { id: "plan", title: "Plan", completed: false },
    { id: "account", title: "Account", completed: false },
    { id: "billing", title: "Billing", completed: false },
  ]

  const getCurrentStepIndex = () => steps.findIndex((step) => step.id === currentStep)
  const progress = ((getCurrentStepIndex() + 1) / steps.length) * 100

  const nextStep = () => {
    const stepOrder = ["plan", "account", "billing"]
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const stepOrder = ["plan", "account", "billing"]
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1])
    }
  }

  const updateFormData = (field, value) => {
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
        return false
    }
  }

  const renderPlanStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Confirm Your Plan</h1>
        <p className="text-gray-600">Review your selected plan and customize as needed</p>
      </div>

      <Card className="border-2 border-blue-600">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Essential Plan</CardTitle>
          <div className="text-3xl font-bold">
            £35 <span className="text-base font-normal text-gray-600">/user/month</span>
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
                onChange={(e) => updateFormData("users", parseInt(e.target.value) || 1)}
                className="w-20 text-center"
                min="1"
              />
              <Button variant="outline" size="sm" onClick={() => updateFormData("users", formData.users + 1)}>
                +
              </Button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total monthly cost:</span>
              <span className="text-2xl font-bold">£{formData.users * 35}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Billed monthly • Cancel anytime</p>
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
        <p className="text-gray-600">Set up your account to get started</p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
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
            <p className="text-xs text-gray-600">Must be at least 8 characters with numbers and symbols</p>
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
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
            />
            <label htmlFor="termsAccepted" className="text-sm">
              By checking this box, you agree to our{" "}
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
            </label>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" onClick={prevStep} className="flex-1">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Button onClick={nextStep} className="flex-1" size="lg" disabled={!canProceedToNextStep()}>
          Continue to Billing
        </Button>
      </div>

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
  )

  const renderBillingStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Billing Information</h1>
        <p className="text-gray-600">Enter your billing details</p>
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
              className="bg-gray-50"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" onClick={prevStep} className="flex-1">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Button className="flex-1" size="lg" disabled={!canProceedToNextStep()}>
          Continue to Payment
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-gray-600">
              Step {getCurrentStepIndex() + 1} of {steps.length}
            </h2>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm text-green-600">Secure Checkout</span>
            </div>
          </div>
          <ProgressBar value={progress} className="h-2" />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          {currentStep === "plan" && renderPlanStep()}
          {currentStep === "account" && renderAccountStep()}
          {currentStep === "billing" && renderBillingStep()}
        </div>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 customer rating</span>
            </div>
            <span>•</span>
            <span>30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </div>
  )
}