# 🐛 Issue-Lister

A minimal web app to fetch and display all **"good first issues"** from any public GitHub repository. Built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

- 🔎 Enter any GitHub repository URL.
- 🧠 Automatically extracts repo `owner` and `name`.
- ✅ Lists all open issues labeled `good first issue`.
- 🌐 Uses GitHub REST API (with optional token for higher rate limits).
- 📱 Responsive design, mobile-friendly.

---

## 📦 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **GitHub REST API**

---

## 🛠 Setup & Run

### 1. Clone the repo

```bash
git clone https://github.com/sujal-cs/good-first-issue-lister
cd issue-lister
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add GitHub token (optional but recommended)

Create a `.env.local` file:

```
GITHUB_TOKEN=ghp_your_token_here
```

> 🔒 The token should have `public_repo` access.
> Get one here: [https://github.com/settings/tokens](https://github.com/settings/tokens)

### 4. Run the dev server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧩 Folder Structure (App Router)

```
app/
  page.tsx         # Main UI
  api/
    issues/
      route.ts     # API handler for GitHub issues

components/
  IssueForm.tsx    # Input form for GitHub repo URL
  IssueList.tsx    # Individual issue card
  Navbar.tsx       # Top navbar
```

---

## 📌 Example GitHub URLs

```
https://github.com/vercel/next.js
https://github.com/mui/material-ui
```

---

## 🤖 Future Ideas

* 🔍 Filter issues by avaliable labels
* 🧠 AI-generated issue summaries

---

> Made by Sujal (sujallokhande70@gmail.com)
