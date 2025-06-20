# TheSoft.space Ecommerce

## Overview

A calm, purposeful ecommerce platform for digital and physical self-care products. Built with Next.js, Tailwind CSS, Payload CMS, Stripe, and MongoDB.

## Tech Stack

* **Frontend:** Next.js (React), Tailwind CSS
* **Backend & CMS:** Payload CMS (Node.js, Express, MongoDB)
* **Database:** MongoDB Atlas via Mongoose
* **Payments:** Stripe (one-time and subscription) with webhooks
* **Deployment:** Vercel (Next.js) and MongoDB Atlas

## Prerequisites

* Node.js v18 or higher
* npm or yarn
* MongoDB Atlas account and connection string
* Stripe account with API keys

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/theSoft-space-ecommerce.git
   cd theSoft-space-ecommerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or yarn install
   ```

3. **Configure environment variables**
   Create a file at `./.env.local` with:

   ```bash
   NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3001
   MONGODB_URI="<your-mongodb-atlas-connection-string>"
   PAYLOAD_SECRET="<randomly-generated-secret>"

   STRIPE_PUBLIC_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   ```

## Running Locally

1. **Start Payload CMS** (port 3001)

   ```bash
   cd payload
   npm run dev
   ```

2. **Start Next.js App** (port 3000)

   ```bash
   cd ../web
   npm run dev
   ```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
/theSoft-space-ecommerce
├── payload           # Payload CMS project
│   ├── collections   # MongoDB schemas and access control
│   └── server.ts     # CMS configuration and routes
├── web               # Next.js frontend
│   ├── components    # Reusable UI components (Tailwind)
│   ├── pages         # App routes and API endpoints
│   ├── public        # Static assets and images
│   └── styles        # Global CSS and Tailwind config
├── .env.local        # Local environment variables
├── package.json      # Project scripts and dependencies
└── README.md         # This file
```

## Stripe Integration

* **One-time payments:** `/api/checkout/session`
* **Subscription plans:** `/api/subscriptions/create`
* **Webhooks:** `/api/webhooks/stripe` (configured in Payload)

> **Note:** Register your webhook endpoint in the Stripe Dashboard using `STRIPE_WEBHOOK_SECRET`.

## Admin & Content Management

* Access the Payload CMS Admin at `http://localhost:3001/admin`
* Manage collections: products, content pages, orders, subscriptions
* Secure the Admin with `PAYLOAD_SECRET` and role-based access controls

## Build & Deploy

1. **Build for production**

   ```bash
   # Payload CMS
   cd payload
   npm run build

   # Next.js
   cd ../web
   npm run build
   ```

2. **Configure Vercel**

   * Set environment variables in Vercel dashboard to match `.env.local`
   * Deploy the `web` folder as the Next.js project
   * Ensure `payload` project is running on a server or use Vercel Serverless Functions

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/xyz`)
3. Commit your changes (`git commit -m "Add feature xyz"`)
4. Push to your branch (`git push origin feature/xyz`)
5. Open a Pull Request

## License

MIT © TheSoft.space
