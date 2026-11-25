# Mian Mohammad Hanif Law Associates (Est. 1996)

A modern, prestigious, responsive corporate law firm website built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**, specifically designed for effortless, high-performance deployment on **Vercel**.

---

## 🏛️ About The Firm

* **Founder & Senior Associate**: Mian Mohammad Hanif (28+ years of legal excellence, Civil Law specialty).
* **Advocates**: Supreme Court & High Court Advocates conducting high-stakes litigation, regulatory advisory, and master contract drafting.
* **Standing Counsel & Advisory Appointments**:
  * Board of Revenue Punjab (BOR) — Settlement & Rehabilitation Wing
  * Lahore Electric Supply Company (LESCO)
  * Federal Government Employees Housing Authority (FGEHA)
  * Government of Pakistan (Ministry of Law, Justice and Human Rights)
  * Punjab Small Industries Corporation (PSIC)
* **22 Practice Areas**: Constitutional, Civil, Power Sector, Land Revenue, Settlement & Rehabilitation, Colonization, Corporate, Criminal, Taxation, Trademarks, Copyrights, Patents, Arbitration, Aviation, and more.

---

## 🚀 How to Deploy on Vercel

Next.js is the native framework of Vercel. You have two options to deploy this site live in minutes:

### Option 1: Deploy via GitHub (Recommended for Continuous Updates)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mian Mohammad Hanif Law Associates website"
   ```
   Create a new repository on your GitHub account (e.g., `hanif-law-associates`) and push:
   ```bash
   git remote add origin https://github.com/<your-username>/hanif-law-associates.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**:
   * Go to [https://vercel.com](https://vercel.com) and log in (or sign up with GitHub).
   * Click **"Add New..."** $\rightarrow$ **"Project"**.
   * Select your `hanif-law-associates` repository and click **"Import"**.
   * Vercel will automatically detect **Next.js** framework with default build settings (`npm run build`).
   * Click **"Deploy"**.

3. **Live Deployment**:
   * Within ~45 seconds, your site is live with a free SSL certificate at `https://<project-name>.vercel.app`.
   * Any future push to `main` branch will automatically trigger a new deployment.

---

### Option 2: Deploy Directly via Vercel CLI

If you want to deploy immediately without using GitHub first:

1. Open your terminal in this directory:
   ```bash
   npx vercel
   ```
2. Follow the interactive prompts:
   * **Set up and deploy?** Press `y`
   * **Which scope do you want to deploy to?** Choose your Vercel account
   * **Link to existing project?** Press `n`
   * **What's your project's name?** Press Enter (or type `hanif-law-associates`)
   * **In which directory is your code located?** Press Enter (`./`)
3. For production deployment:
   ```bash
   npx vercel --prod
   ```

---

### Adding a Custom Domain on Vercel

If the law firm purchases a custom domain (e.g. `haniflawassociates.com` or `haniflaw.pk`):
1. In your Vercel Project Dashboard, navigate to **Settings** $\rightarrow$ **Domains**.
2. Type your domain name and click **Add**.
3. Add the DNS records (A record pointing to `76.76.21.21` or CNAME to `cname.vercel-dns.com`) at your domain registrar. Vercel automatically generates free renewal SSL certificates.

---

## 🛠️ Local Development

To run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To verify production build locally:

```bash
npm run build
npm start
```
