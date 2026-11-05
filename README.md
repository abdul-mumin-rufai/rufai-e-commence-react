# React E-Commerce Web Application

A modern, fast, and responsive full-stack e-commerce web application built with **React**, **Vite**, **Tailwind CSS**, and **DaisyUI** on the frontend, powered by a **Node.js RESTful API** with **Axios** for data fetching, and deployed seamlessly to **Firebase Hosting**.

![Firebase Hosting](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0E2D?style=for-the-badge&logo=daisyui&logoColor=white)

**Live Demo:** [https://rufai-projects-react-e-commence.web.app/](https://rufai-projects-react-e-commence.web.app/)

---

## 🚀 Tech Stack

### **Frontend**

- **Library/Bundler:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/) (Component Library)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Deployment:** [Firebase Hosting](https://firebase.google.com/docs/hosting)

### **Backend**

- **Runtime:** [Node.js](https://nodejs.org/)
- **Architecture:** RESTful API Architecture

---

## ✨ Features

- 📱 **Fully Responsive UI:** Styled with Tailwind CSS and DaisyUI theme components for clean mobile and desktop layouts.
- ⚡ **Lightning Fast Build:** Powered by Vite for instant Hot Module Replacement (HMR) and optimized build outputs.
- 🛒 **Dynamic Shopping Experience:** Real-time product browsing, dynamic routing, and interactive shopping cart operations.
- 🔄 **Asynchronous Data Fetching:** Integrated Axios client configured for smooth REST API integration.
- ☁️ **Global CDN Deployment:** Hosted on Firebase Hosting for ultra-low latency and global distribution.

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js:** `>= 18.x`
- **npm** or **yarn** or **pnpm**
- **Firebase CLI:** (`npm install -g firebase-tools`)

### 1. Clone the Repository

```bash
git clone https://github.com/abdul-mumin-rufai/rufai-e-commence-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and configure your backend API base URL:

```env
VITE_API_BASE_URL=https://your-node-backend-api.com/api
```

### 4. Run the Local Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the application.

---

## 📦 Building and Deployment

### **Building for Production**

To build the static production assets into the `dist` directory:

```bash
npm run build
```

### **Deploying to Firebase Hosting**

1. Log into your Firebase account:

   ```bash
   firebase login
   ```

2. Initialize Firebase (if not already configured):

   ```bash
   firebase init hosting
   ```

   - Set your public directory to `dist`
   - Configure as a single-page app (SPA): `Yes`

3. Deploy the build to Firebase:
   ```bash
   firebase deploy --only hosting
   ```

---

## 📁 Project Structure

```text
├── public/                # Static assets (images, favicon, etc.)
├── src/
│   ├── assets/            # Project images and icons
│   ├── components/        # Reusable DaisyUI / React components (Navbar, Footer, ProductCard)
│   ├── pages/             # Page views (Home, Products, Cart, Checkout)
│   ├── services/          # Axios API configuration and endpoint requests
│   ├── App.jsx            # Main app component & routes
│   ├── main.jsx           # Application entry point
│   └── index.css          # Tailwind CSS & DaisyUI imports
├── .firebaserc            # Firebase project configuration
├── firebase.json          # Firebase hosting rewrite rules
├── tailwind.config.js     # Tailwind CSS & DaisyUI plugins configuration
├── vite.config.js         # Vite bundler configuration
└── package.json           # Node.js dependencies and scripts
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
