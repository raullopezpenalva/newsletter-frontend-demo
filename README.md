# Newsletter Frontend Demo

A demo web application that showcases a complete **newsletter system flow**, including subscription, verification, unsubscribe management and API documentation.

This project is part of my personal portfolio and is designed to demonstrate how a frontend SPA can interact with multiple backend services through a clean API design and reverse proxy architecture.

---

## Overview

This demo simulates a real-world newsletter workflow:

- Users can subscribe to a newsletter
- Email verification is required for new users
- Backend generates personalized unsubscribe links
- Users can unsubscribe using token-based URLs
- Developers can explore and test the API via Swagger UI

The application is built as a **Single Page Application (SPA)** and integrates with backend services using a reverse proxy.

---

## Features

- Newsletter subscription form
- Conditional subscription flow (`userCreated`)
- Email verification via tokenized links
- Unsubscribe flow with token validation
- Unsubscribe links generation for active subscribers
- API documentation viewer (Swagger UI)
- Contact form integrated with external backend
- Reverse proxy architecture (Nginx)

---

## Architecture

The system is composed of:

```text
Frontend (React + Vite SPA)
        │
        ▼
Nginx (reverse proxy)
        │
        ├── /api/v1/newsletter → newsletter-service (Docker)
        ├── /api/v1/contact    → contact-service (production)
        └── /v3/api-docs       → OpenAPI spec
```
**Key Concepts**

- Single Origin Architecture → avoids CORS issues
- Reverse Proxy Routing → multiple services behind one entrypoint
- Token-based flows → verify & unsubscribe patterns
- OpenAPI integration → interactive API exploration

**Project structure**
```
src/
├── api/
│   ├── client.ts
│   ├── newsletterApi.ts
│   └── docsApi.ts
│
├── components/
│   ├── domain/
│   │   ├── SubscribeForm.tsx
│   │   ├── GeneratedLinksPanel.tsx
│   │   ├── ContactForm.tsx
│   │   └── SwaggerViewer.tsx
│   │
│   ├── layout/
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   │
│   ├── ui-patterns/
│   │   ├── Bullet.tsx
│   │   ├── BulletList.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── SubSection.tsx
│   │
│   └── ui-primitives/
│       ├── Button.tsx
│       ├── Stack.tsx
│       └── Text.tsx
│
├── hooks/
│   ├── useSubscribe.ts
│   ├── useGenerateLinks.ts
│   └── useUnsubscribeFlow.ts
│
├── pages/
│   ├── HomePage.tsx
│   ├── DocsPage.tsx
│   ├── AdminPage.tsx
│   └── UnsubscribePage.tsx
│
├── styles/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── components.css
│   ├── layout.css
│   └── pages.css
│
├── types/
│   ├── api.ts
│   └── newsletter.ts
│
├── router.tsx
├── App.tsx
├── index.css
└── main.tsx
```
---
## Getting Started (Docker)

The easiest way to run the demo is using Docker.

**What gets started**

The docker-compose setup includes:

- Frontend (Nginx) → serves the built SPA
- Newsletter backend → prebuilt image with API [Backend-Repository](https://github.com/raullopezpenalva/Newsletter-Service)
- Database → persistent storage
- Maildev → email testing tool

**Run the project**
```bash
docker compose up --build -d
```
**Access the application**
```
http://localhost:80
```
**MailDev(email testing)**
```
http://localhost:1080
```
You can use MailDev to view verification emails.

## Development Mode
For local development:
```bash
npm install
npm run dev
```
The app will run on:
```
http://localhost:5173
```
**Dev proxy**
In development, Vite is configured to proxy API requests:
```
Frontend → Vite Dev Server → Backend services
```
This avoids CORS issues while working locally.

## API Documentation
The project includes an interactive API documentation page powered by Swagger UI.
**Route**
```
/docs
```
**Features**
- Explore all endpoints
- Inspect request/response models
- Execute API calls directly from the UI

The documentation is loaded dynamically from:
```
/v3/api-docs
```
---
## Newsletter Flow

**Subscribe**
- User submits email
- If `userCreated = false` → verification required (use MailDev)
- If `userCreated = true` → direct subscription

**Verify**
- User receives email with token (in MailDev)
- Opens `/verify?token=...`
- Frontend calls backend to confirm subscription

**Generate Unsubscribe Links**
- Backend generates links for all active users
- Used by external services to send emails

**Unsubscribe**
- User clicks personalized link
- Opens /unsubscribe?token=...
- Backend validates token and removes subscription
---
## Contact Page

The demo includes a contact form for questions about the project.

- Integrated with an external contact-service
- Routed through Nginx reverse proxy
- No CORS required (same-origin architecture)
---
## Technologies
- React
- TypeScript
- Vite
- Docker / Docker Compose
- Nginx (reverse proxy)
- Swagger UI (OpenAPI)
- Spring Boot (backend service)
---
## Purpose

This project is designed to demonstrate:

- Frontend–backend integration
- API-driven development
- Reverse proxy architecture
- Real-world email workflow patterns
- DevOps-oriented system design
---
## Author

**Raúl López Penalva**

If you have any questions about the project, architecture or implementation, feel free to reach out through the contact page.

## License

MIT License.