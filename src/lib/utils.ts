import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and tailwind-merge
 * This ensures that Tailwind CSS classes are properly merged and conflicting classes are resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as currency (GBP)
 */
export function formatCurrency(amount: number, currency = "GBP"): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Formats a date to a readable string
 */
export function formatDate(date: Date | string | number): string {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates UK phone number format
 */
export function isValidUKPhone(phone: string): boolean {
  // Remove all spaces and common separators for validation
  const cleaned = phone.replace(/[\s\-$$$$]/g, "")

  // UK phone number patterns:
  // Mobile: +447xxxxxxxxx or 07xxxxxxxxx (11 digits total)
  // Landline: +44xxxxxxxxxx or 0xxxxxxxxxx (10-11 digits total)
  const ukPhoneRegex = /^(\+447\d{9}|07\d{9}|\+44[1-9]\d{8,9}|0[1-9]\d{8,9})$/

  return ukPhoneRegex.test(cleaned)
}

/**
 * Validates UK postcode format
 */
export function isValidUKPostcode(postcode: string): boolean {
  const postcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}$/i
  return postcodeRegex.test(postcode.replace(/\s/g, ""))
}

/**
 * Formats card number with spaces
 */
export function formatCardNumber(cardNumber: string): string {
  return cardNumber
    .replace(/\s/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim()
}

/**
 * Masks card number for display (shows only last 4 digits)
 */
export function maskCardNumber(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\s/g, "")
  if (cleaned.length < 4) return cleaned
  return "•••• •••• •••• " + cleaned.slice(-4)
}

/**
 * Validates credit card number using Luhn algorithm
 */
export function isValidCardNumber(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, "")

  if (!/^\d+$/.test(cleaned) || cleaned.length < 13 || cleaned.length > 19) {
    return false
  }

  let sum = 0
  let isEven = false

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = Number.parseInt(cleaned.charAt(i), 10)

    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }

    sum += digit
    isEven = !isEven
  }

  return sum % 10 === 0
}

/**
 * Validates expiry date (MM/YY format)
 */
export function isValidExpiryDate(expiry: string): boolean {
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
  if (!expiryRegex.test(expiry)) return false

  const [month, year] = expiry.split("/")
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear() % 100
  const currentMonth = currentDate.getMonth() + 1

  const expiryYear = Number.parseInt(year, 10)
  const expiryMonth = Number.parseInt(month, 10)

  if (expiryYear < currentYear) return false
  if (expiryYear === currentYear && expiryMonth < currentMonth) return false

  return true
}

/**
 * Validates CVV (3 or 4 digits)
 */
export function isValidCVV(cvv: string): boolean {
  return /^\d{3,4}$/.test(cvv)
}

/**
 * Generates a random order ID
 */
export function generateOrderId(prefix = "ORD"): string {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 8)
  return `${prefix}-${timestamp}-${randomStr}`.toUpperCase()
}

/**
 * Calculates the next billing date (30 days from now)
 */
export function getNextBillingDate(): Date {
  const nextBilling = new Date()
  nextBilling.setDate(nextBilling.getDate() + 30)
  return nextBilling
}

/**
 * Debounce function for form inputs
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Capitalizes the first letter of each word
 */
export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase())
}

/**
 * Truncates text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + "..."
}

/**
 * Checks if a value is empty (null, undefined, empty string, or empty array)
 */
export function isEmpty(value: any): boolean {
  if (value == null) return true
  if (typeof value === "string") return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === "object") return Object.keys(value).length === 0
  return false
}

/**
 * Creates a delay (useful for loading states)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
