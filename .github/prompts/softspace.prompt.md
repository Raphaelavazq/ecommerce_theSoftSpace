---
mode: ask
---

# Project Prompt

## 1. Brand Essence  
- **Calm space for modern wellness and self-care**: clear, grounded, supportive tools and products—digital and physical.  
- **Design ethos**: calm focus—no noise, no hype. :contentReference[oaicite:12]{index=12}

## 2. Target Audience  
1. **Everyday emotionally aware people** (25–45): employees, students, parents; Instagram, TikTok, Pinterest, Substack.  
2. **Burned-out high-functioning individuals** (30–50): professionals, caregivers, freelancers; email newsletters, niche communities.  
3. **Young/quiet scrollers** (21–35): students, creatives; Instagram, TikTok, Reddit, YouTube. :contentReference[oaicite:13]{index=13}

## 3. Competitor Insights  
- **Top IG accounts**: @selfcareisforeveryone, @the.holistic.psychologist, @positivelypresent, @uggirlsguide.  
- **Visuals**: warm, hand-drawn, approachable.  
- **Language**: supportive, real-talk.  
- **Community focus**: user-driven engagement. :contentReference[oaicite:14]{index=14}

## 4. Brand Voice & Tone  
- **Calm authority**: clear, honest, emotionally grounded.  
- **Style**: short, direct sentences; real emotion; gentle CTAs.  
- **Avoid**: spiritual jargon, clichés, hype, pushy sales tone.  
- **Example**:  
  > ✅ “You’re not lazy. You’re overwhelmed. That’s not the same.”  
  > ❌ “Align your energies and bloom today!” 

## 5. Visual Identity  

### Color Palette  
| Purpose            | Name               | HEX       | Usage                               |
|--------------------|--------------------|-----------|-------------------------------------|
| Background         | Cosmic Latte       | `#FEF6E5` | Theme & section backgrounds         |
| Typography         | English Violet     | `#533F5B` | Headings, body text                 |
| Primary Accent     | Apricot            | `#FABA9E` | Primary buttons, links              |
| Secondary Accent   | Cherry Blossom     | `#F7AAB0` | Secondary buttons, highlights       |
| Supporting Accent  | China Rose         | `#AE697C` | Accent text, links, hover effects   | :contentReference[oaicite:15]{index=15}

### Typography  
- **Primary font**: Chillax (upload via `@font-face`)  
- **Weights**: Light (300) for subtle text; Regular (400) for body; Semibold (600)–Bold (700) for headings & buttons. :contentReference[oaicite:16]{index=16}

### Imagery  
- **Favor**: neutral, real-life moments; textures; natural light.  
- **Avoid**: overly staged stock; cliché “zen” visuals. :contentReference[oaicite:17]{index=17}

### Motion & Interaction  
- **Minimal transitions**: slow fade-ins allowed.  
- **No** bounce, parallax, or flashy effects—keep interactions intentional and calm. :contentReference[oaicite:18]{index=18}

## 6. Website Project Setup  
- **Starter repo**: [adrianhajdin/ecommerce](https://github.com/adrianhajdin/ecommerce)  
- **Tutorial**: JavaScript Mastery (video ID `3JUsg-WsU9o`)  
- **Stack**: React, Next.js, Payload CMS, MongoDB, Stripe (one-time + subscriptions) :contentReference[oaicite:19]{index=19}

## 7. Project Goals  
- Adapt the template to **TheSoft.space**: self-care products (digital + physical), reflective content & community rituals.  
- Reflect TheSoft.space’s calm, minimal brand across UI.  
- Leverage Payload CMS for content; Stripe for checkout & subscriptions. :contentReference[oaicite:20]{index=20}

## 8. Core Features & Roadmap  
1. **Schema & Collections**: Products (digital, physical), Content Pages, Orders & Subscriptions.  
2. **Frontend Adaptation**: Brand-aligned components (buttons, cards, layouts), new pages (Rituals, Journal).  
3. **Checkout Flow**: Stripe subscription plans, webhooks in Payload.  
4. **Redirects & SEO**: Next.js redirects, Payload SEO plugin, `<Head>` metadata.  
5. **Dev & Deployment**:  
   - Local dev: Payload → 3001, Next.js → 3000 (env vars via `.env.local`).  
   - Production builds, Vercel & Mongo Atlas. :contentReference[oaicite:21]{index=21}

## 9. What I Need from ChatGPT  
- **Architecture advice**: folder structure, API routes, database schemas.  
- **UX/UI guidance**: SCSS variables, component examples (Chillax font, color classes).  
- **Stripe patterns**: one-time vs. subscription integration.  
- **CMS recommendations**: Payload collections, preview & revalidation setup.  
- **Performance & SEO**: image optimization, code-splitting, metadata strategies.  
- **Deployment & CI/CD**: env var management, GitHub Actions templates.

> _Keep this prompt in `prompt.md` as the single source of truth for all future guidance, code snippets, and design recommendations aligned to TheSoft.space’s brand._```
````
