# Pharma Company Website

A full-stack pharma distribution company website.

- **frontend/** — React (Vite) website: Home, About Us, Our Products, Pharma Distribution,
  Surgical Supplies, Hospital Supply Division, Brands We Deal In, Why Choose Us,
  Request Quotation, Contact Us, GST & Drug License Details.
- **backend/** — Node.js + TypeScript + Express API using Nodemailer to email
  Contact Us and Request Quotation form submissions to your inbox.

## 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `backend/.env`:

```
PORT=5000
CLIENT_URL=http://localhost:5173

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_app_password_here   # use a Gmail "App Password", not your login password

RECEIVER_EMAIL=sales@yourpharmacompany.com
```

> **Gmail App Password**: Go to your Google Account → Security → 2-Step Verification →
> App Passwords → generate one for "Mail". Use that 16-character password as `EMAIL_PASS`.
> You can also use any other SMTP provider (Outlook, Zoho, SendGrid, etc.) by changing
> `EMAIL_HOST` / `EMAIL_PORT`.

Run the backend in development:

```bash
npm run dev
```

The API will run at `http://localhost:5000`. Test it: `GET http://localhost:5000/`

Build for production:

```bash
npm run build
npm start
```

## 2. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
```

Edit `frontend/.env` if your backend runs on a different URL:

```
VITE_API_URL=http://localhost:5000/api
```

Run the frontend in development:

```bash
npm run dev
```

The site will run at `http://localhost:5173`.

Build for production:

```bash
npm run build
```

This outputs a static site to `frontend/dist`, which you can deploy to any static
host (Vercel, Netlify, etc.), while the backend can be deployed separately
(Render, Railway, EC2, etc.). Just make sure `VITE_API_URL` (frontend) and
`CLIENT_URL` (backend, for CORS) point to each other's deployed URLs.

## 3. Editing Company Data

All editable content lives in `frontend/src/data/`:

- `companyInfo.js` — name, phone, email, address, GST number, drug license numbers, map link
- `products.js` — medicines & surgical items (add/edit/remove products here — the site is fully dynamic)
- `brands.js` — brand list shown on Home and "Brands We Deal In"
- `navLinks.js` — navigation menu structure

## 4. How the Contact / Quotation Forms Work

1. User fills the form on the website (`ContactForm.jsx` or `QuotationForm.jsx`).
2. Frontend sends a POST request to the backend (`/api/contact` or `/api/quotation`).
3. Backend validates the data, formats a HTML email, and sends it via Nodemailer
   to `RECEIVER_EMAIL` (your inbox).
4. The customer sees a success/error toast notification on the site.

## 5. Adding Product / Brand Images

Place images in:
- `frontend/public/assets/images/medicines/`
- `frontend/public/assets/images/surgical/`
- `frontend/public/assets/brands/`

Then reference them in `products.js` / `brands.js` via their `/assets/...` path.
