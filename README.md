# Keeys High School — Full Stack Website

> **Nursery to 10th Standard · State Syllabus · Mattewada, Warangal, Telangana**

A complete school management web application with public-facing pages and a role-based management portal.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Bootstrap 5, Vanilla JS |
| Backend | Node.js + Express |
| Database | MySQL |
| Auth | JWT (JSON Web Tokens) |
| File Upload | Multer |

---

## Folder Structure

```
keeys-high-school/
├── backend/
│   ├── config/
│   │   └── db.js                  # MySQL connection pool
│   ├── controllers/               # Business logic
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── studentController.js
│   │   ├── staffController.js
│   │   ├── admissionController.js
│   │   ├── paymentController.js
│   │   ├── announcementController.js
│   │   └── contactController.js
│   ├── middleware/
│   │   ├── auth.js                # JWT verification
│   │   └── roleCheck.js           # Role-based access control
│   ├── routes/                    # RESTful API routes
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── students.js
│   │   ├── staff.js
│   │   ├── admissions.js
│   │   ├── payments.js
│   │   ├── announcements.js
│   │   └── contacts.js
│   ├── uploads/                   # Uploaded admission documents
│   ├── .env                       # Environment variables
│   ├── package.json
│   └── server.js                  # Express app entry point
├── frontend/
│   ├── css/
│   │   └── style.css              # School-themed stylesheet
│   ├── js/
│   │   ├── api.js                 # Fetch-based API helper
│   │   ├── main.js                # Public page scripts
│   │   └── dashboard.js           # Shared dashboard utilities
│   ├── dashboard/
│   │   ├── admin.html             # Admin dashboard
│   │   ├── principal.html         # Principal dashboard
│   │   ├── staff.html             # Staff dashboard
│   │   └── student.html           # Student dashboard
│   ├── index.html                 # Home page
│   ├── login.html                 # Login page
│   ├── contact.html               # Contact page
│   ├── admission.html             # Online admission form
│   └── payment.html               # Exam fee payment
└── database/
    └── schema.sql                 # Database tables + seed data
```

---

## Prerequisites

- **Node.js** v16+ — https://nodejs.org/
- **MySQL** 8.0+ — https://dev.mysql.com/downloads/
- **npm** (comes with Node.js)

---

## Setup Instructions

### 1. Create the Database

Open MySQL Workbench or the MySQL shell:

```sql
-- Run as root or a user with CREATE DATABASE privilege
CREATE USER IF NOT EXISTS 'krishna'@'localhost' IDENTIFIED BY 'krishna';
GRANT ALL PRIVILEGES ON keeys_school.* TO 'krishna'@'localhost';
FLUSH PRIVILEGES;
```

Then import the schema:

```bash
mysql -u krishna -pkrishna < database/schema.sql
```

Or inside MySQL shell:
```sql
SOURCE /full/path/to/keeys-high-school/database/schema.sql;
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment (optional)

The `.env` file is already pre-configured. Edit it if your MySQL setup differs:

```
PORT=5000
DB_HOST=localhost
DB_USER=krishna
DB_PASSWORD=krishna
DB_NAME=keeys_school
JWT_SECRET=KeeyHighSchoolJWTSecret2025!Secure
JWT_EXPIRES_IN=24h
```

### 4. Start the Server

```bash
# Development (auto-restart on file changes)
npm run dev

# OR Production
npm start
```

### 5. Open the Website

Visit: **http://localhost:5000**

---

## Demo Login Accounts

All demo accounts use the password: **`Admin@123`**

| Role | Email |
|------|-------|
| Admin | admin@keeyshighschool.in |
| Principal | principal@keeyshighschool.in |
| Staff | staff@keeyshighschool.in |
| Student | student@keeyshighschool.in |

---

## Pages

| URL | Description |
|-----|-------------|
| `/` or `/index.html` | Home page with announcements |
| `/contact.html` | Contact form + Google Maps |
| `/login.html` | Login (all roles) |
| `/admission.html` | Public admission form |
| `/payment.html` | Exam fee payment |
| `/dashboard/admin.html` | Admin control panel |
| `/dashboard/principal.html` | Principal portal |
| `/dashboard/staff.html` | Staff portal |
| `/dashboard/student.html` | Student portal |

---

## API Endpoints

### Authentication
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/auth/login` | Public |
| POST | `/api/auth/register` | Admin |
| GET | `/api/auth/me` | Authenticated |

### Users
| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/users` | Admin, Principal |
| GET | `/api/users/:id` | Admin, Principal |
| PUT | `/api/users/:id` | Admin |
| DELETE | `/api/users/:id` | Admin |

### Students
| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/students` | Admin, Principal, Staff |
| GET | `/api/students/me` | Student |
| GET | `/api/students/:id` | Admin, Principal, Staff |
| PUT | `/api/students/:id` | Admin, Principal, Staff |
| GET | `/api/students/:id/results` | Authenticated |

### Admissions
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/admissions` | **Public** |
| GET | `/api/admissions` | Admin, Principal |
| GET | `/api/admissions/:id` | Admin, Principal |
| PUT | `/api/admissions/:id/status` | Admin |

### Payments
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/payments` | Authenticated |
| GET | `/api/payments` | Admin, Principal, Staff |
| GET | `/api/payments/student/:id` | Authenticated |
| PUT | `/api/payments/:id/status` | Admin |

### Announcements
| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/announcements` | **Public** |
| POST | `/api/announcements` | Admin, Principal |
| PUT | `/api/announcements/:id` | Admin, Principal |
| DELETE | `/api/announcements/:id` | Admin |

### Contacts
| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/contacts` | **Public** |
| GET | `/api/contacts` | Admin, Principal |
| PUT | `/api/contacts/:id/read` | Admin |

---

## Database Tables

| Table | Description |
|-------|-------------|
| `users` | All system users (admin, principal, staff, student) |
| `students` | Student-specific details linked to users |
| `staff` | Staff-specific details linked to users |
| `admissions` | Online admission applications |
| `payments` | Exam fee payment records |
| `announcements` | School news and announcements |
| `contacts` | Contact form submissions |
| `exam_results` | Student exam scores (bonus module) |

---

## Role-Based Access Control

| Feature | Admin | Principal | Staff | Student |
|---------|-------|-----------|-------|---------|
| View all users | ✅ | ✅ | ❌ | ❌ |
| Create/delete users | ✅ | ❌ | ❌ | ❌ |
| Manage admissions | ✅ | View | ❌ | ❌ |
| Approve admissions | ✅ | ❌ | ❌ | ❌ |
| View students | ✅ | ✅ | ✅ | Own only |
| View payments | ✅ | ✅ | ✅ | Own only |
| Post announcements | ✅ | ✅ | ❌ | ❌ |
| View contacts | ✅ | ✅ | ❌ | ❌ |

---

## Security Features

- Passwords hashed with **bcryptjs** (10 salt rounds)
- **JWT** tokens with 24h expiry
- SQL injection prevention via **parameterized queries**
- Input validation with **express-validator**
- File upload type and size restrictions
- CORS configured
- Role-based middleware on all protected routes

---

## Social Media

- **Facebook:** https://www.facebook.com/Keeyshighschool/
- **Instagram:** https://www.instagram.com/keeys1993/

---

**Keeys High School** · Near Masjid, Mattewada, Warangal – 506007, Telangana
