import { loadStripe } from "@stripe/stripe-js"

// Initialize Stripe with your publishable key
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

// Only load Stripe if the key is available
export const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null

// Check if we're in demo mode
export const isStripeConfigured = !!stripePublishableKey

// Payment processing utilities
export const formatAmountForStripe = (amount: number): number => {
  return Math.round(amount * 100) // Convert to cents
}

export const formatAmountFromStripe = (amount: number): number => {
  return amount / 100 // Convert from cents
}
