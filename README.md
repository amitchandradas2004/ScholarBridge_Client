# 🎓 ScholarBridge

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/BetterAuth-purple?style=for-the-badge" />
</p>

<h3 align="center">
Discover • Save • Apply • Achieve
</h3>

---

# 🌐 Live Demo

Experience the live version of ScholarBridge:

<p align="center">
  <a href="https://scholarbridge-client.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Website-6366F1?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
</p>

🔗 **Live Website:**  
[Click Here](https://scholarbridge-client.vercel.app)

### Demo Features

- 🔍 Search scholarships by name and university
- 🎓 Filter by degree level and funding type
- ↕️ Sort scholarships by latest, amount, deadline, and name
- 📝 Add and manage scholarship listings
- 🔐 Secure authentication system
- 📱 Fully responsive design

---

## 📌 Project Overview

**ScholarBridge** is a full-stack scholarship discovery platform that helps students discover scholarship opportunities from universities around the world.

The platform allows students to search, filter, sort, and explore scholarships while scholarship providers can create and manage scholarship listings.

The goal of ScholarBridge is to make scholarship discovery easier, faster, and more accessible for students.

---

# ✨ Features

## 🎓 Scholarship Discovery

✅ Browse scholarships from different universities  
✅ Search by scholarship name and university name  
✅ Filter scholarships by:

- Degree Level
- Funding Type

✅ Sort scholarships by:

- Latest Added
- Oldest Added
- Highest Amount
- Lowest Amount
- Deadline
- Scholarship Name

---

## 🔐 Authentication

- Secure authentication using **Better Auth**
- User session management
- Protected routes
- Profile management

---

## 📝 Scholarship Management

- Add scholarship opportunities
- View scholarship details
- Manage created scholarships
- Store official scholarship application links

---

## ⚡ User Experience

- Responsive modern UI
- Dark theme design
- Loading skeletons
- Pagination
- Empty state handling
- Search feedback
- Smooth animations

---

# 🛠️ Technology Stack

## Frontend

| Technology            | Usage                 |
| --------------------- | --------------------- |
| Next.js               | React Framework       |
| TypeScript            | Type Safety           |
| Tailwind CSS          | Styling               |
| HeroUI                | UI Components         |
| Framer Motion         | Animations            |
| React Aria Components | Accessible Components |

## Backend

| Technology    | Usage          |
| ------------- | -------------- |
| Node.js       | Runtime        |
| Express.js    | API Server     |
| MongoDB       | Database       |
| MongoDB Atlas | Cloud Database |
| Better Auth   | Authentication |

---

# 📂 Project Structure

```
SCHOLARBRIDGE_CLIENT
│
├── public
│
├── src
│ │
│ ├── app
│ │ │
│ │ ├── addScholarships
│ │ │ └── page.tsx
│ │ │
│ │ ├── api
│ │ │ ├── auth
│ │ │ │ └── [...all]
│ │ │ │
│ │ │ └── routes
│ │ │
│ │ ├── login
│ │ │ └── page.tsx
│ │ │
│ │ ├── myScholarships
│ │ │ ├── DeleteScholarshipModal.tsx
│ │ │ ├── loading.tsx
│ │ │ ├── page.tsx
│ │ │ └── ScholarshipTable.tsx
│ │ │
│ │ ├── profile
│ │ │ ├── NotUserFound.tsx
│ │ │ ├── page.tsx
│ │ │ └── ProfileCard.tsx
│ │ │
│ │ ├── scholarships
│ │ │ ├── [id]
│ │ │ │ └── page.tsx
│ │ │ │
│ │ │ ├── DegreeFilter.tsx
│ │ │ ├── FundingFilter.tsx
│ │ │ ├── loading.tsx
│ │ │ ├── page.tsx
│ │ │ ├── Pagination.tsx
│ │ │ ├── SearchNotFound.tsx
│ │ │ ├── SearchScholarship.tsx
│ │ │ └── SortScholarship.tsx
│ │ │
│ │ ├── signup
│ │ │ └── page.tsx
│ │ │
│ │ ├── favicon.ico
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ ├── loading.tsx
│ │ ├── not-found.tsx
│ │ └── page.tsx
│ │
│ ├── Assets
│ │ └── logo.png
│ │
│ ├── components
│ │ │
│ │ ├── Banner
│ │ │
│ │ ├── Featured
│ │ │
│ │ ├── Footer
│ │ │
│ │ ├── Homepage
│ │ │
│ │ ├── Navbar
│ │ │
│ │ ├── Scholarship
│ │ │
│ │ └── Skeletons
│ │
│ ├── lib
│ │ │
│ │ ├── actions
│ │ │ └── scholarships.ts
│ │ │
│ │ ├── api
│ │ │ └── scholarship.ts
│ │ │
│ │ ├── auth-client.ts
│ │ └── auth.ts
│ │
│ ├── types
│ │ └── scholarship.ts
│ │
│ └── proxy.ts
│
├── .env
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

# 🚀 Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/amitchandradas2004/ScholarBridge_Client.git
```

---

# Frontend Setup

Go to client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000

BETTER_AUTH_SECRET=your_secret_key
```

Run development server:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

# Backend Setup

Go to server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string
```

Run server:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

# 🔗 API Documentation

## Get All Scholarships

```
GET /api/scholarship
```

### Query Parameters

```
?page=
&search=
&degreeLevel=
&fundingType=
&sort=
```

Example:

```
GET /api/scholarship?page=1&sort=amount-desc
```

---

## Add Scholarship

```
POST /api/scholarship
```

Example Request:

```json
{
  "scholarshipName": "MEXT Scholarship",
  "universityName": "University of Tokyo",
  "countryName": "Japan",
  "degreeLevel": "Master's",
  "fundingType": "Fully Funded",
  "amount": "50000",
  "deadline": "2027-01-01",
  "officialLink": "https://example.com"
}
```

---

# 📌 Future Improvements

- ⭐ Save favorite scholarships
- 🔔 Deadline reminder notifications
- 📧 Email alerts
- 👤 Student dashboard
- 📊 Admin analytics dashboard
- 🤖 AI scholarship recommendation system

---

# 👨‍💻 Author

## Amit Chandra Das

Full Stack Developer

<p>
<a href="https://github.com/amitchandradas2004">
GitHub
</a>
&nbsp; | &nbsp;
<a href="https://linkedin.com/in/amitchandradas2004">
LinkedIn
</a>
</p>

---

# 📄 License

This project is licensed under the MIT License.

---

<p align="center">
Built with ❤️ using Next.js, TypeScript, Express.js and MongoDB
</p>
