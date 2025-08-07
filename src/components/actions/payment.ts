"use server";

import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20" as any, // Explicit version (cast to any to bypass strict literal check)
    })
  : null;

export interface PaymentData {
  amount: number;
  currency: string;
  customerEmail: string;
  customerName: string;
  description: string;
  metadata?: Record<string, string>;
}

export interface PaymentResult {
  success: boolean;
  clientSecret?: string;
  error?: string;
  paymentIntentId?: string;
  isDemo?: boolean;
}

export async function createPaymentIntent(paymentData: PaymentData): Promise<PaymentResult> {
  if (!stripe) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      clientSecret: "demo_client_secret_" + Date.now(),
      paymentIntentId: "demo_pi_" + Date.now(),
      isDemo: true,
    };
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(paymentData.amount * 100),
      currency: paymentData.currency.toLowerCase(),
      description: paymentData.description,
      metadata: {
        customerEmail: paymentData.customerEmail,
        customerName: paymentData.customerName,
        ...paymentData.metadata,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      success: true,
      clientSecret: paymentIntent.client_secret!,
      paymentIntentId: paymentIntent.id,
      isDemo: false,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create payment intent",
      isDemo: false,
    };
  }
}

export async function confirmPayment(paymentIntentId: string) {
  if (paymentIntentId.startsWith("demo_pi_")) {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
      success: true,
      status: "succeeded",
      amount: 99,
      currency: "GBP",
      receiptUrl: null,
      isDemo: true,
    };
  }

  if (!stripe) {
    return {
      success: false,
      error: "Payment system is not configured",
      isDemo: true,
    };
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
  expand: ['charges'],
}) as unknown as Stripe.PaymentIntent & {
  charges: Stripe.ApiList<Stripe.Charge>;
};


    const charge = paymentIntent.charges.data[0];

    return {
      success: paymentIntent.status === "succeeded",
      status: paymentIntent.status,
      amount: paymentIntent.amount / 100,
      currency: paymentIntent.currency.toUpperCase(),
      receiptUrl: charge?.receipt_url ?? null,
      isDemo: false,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to confirm payment",
      isDemo: false,
    };
  }
}

export async function generateReceipt(paymentIntentId: string) {
  if (paymentIntentId.startsWith("demo_pi_")) {
    return {
      success: true,
      receipt: {
        id: paymentIntentId,
        amount: 99,
        currency: "GBP",
        status: "succeeded",
        created: new Date(),
        receiptUrl: null,
        receiptNumber: "DEMO-" + Date.now(),
        description: "Demo Essential Plan Payment",
        metadata: {},
      },
      isDemo: true,
    };
  }

  if (!stripe) {
    return {
      success: false,
      error: "Payment system is not configured",
      isDemo: true,
    };
  }

  try {
   const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
  expand: ["charges.data.balance_transaction"],
}) as unknown as Stripe.PaymentIntent & {
  charges: Stripe.ApiList<Stripe.Charge & { balance_transaction: Stripe.BalanceTransaction }>;
};


    const charge = paymentIntent.charges.data[0];

    return {
      success: true,
      receipt: {
        id: paymentIntent.id,
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency.toUpperCase(),
        status: paymentIntent.status,
        created: new Date(paymentIntent.created * 1000),
        receiptUrl: charge?.receipt_url ?? null,
        receiptNumber: charge?.receipt_number ?? undefined,
        description: paymentIntent.description ?? "",
        metadata: paymentIntent.metadata,
      },
      isDemo: false,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to generate receipt",
      isDemo: false,
    };
  }
}
