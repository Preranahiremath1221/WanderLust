﻿# 🏕️ Wanderlust

Wanderlust is a full-stack web application for listing and reviewing campgrounds. Users can create accounts, add new campgrounds with images, leave reviews, and manage their own listings.

---

## 🚀 Features

- ✅ User Authentication (Register/Login/Logout)
- ✅ Create, Edit, Delete Campground Listings
- ✅ Upload Campground Images via Cloudinary
- ✅ Add and Delete Reviews
- ✅ Flash Messages for Feedback
- ✅ Form Validation and Error Handling
- ✅ Responsive UI with Bootstrap
- ✅ MongoDB for Database Management

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Others |
|---------|---------|----------|--------|
| EJS     | Express.js | MongoDB | Mongoose |
| Bootstrap | Node.js  | MongoDB Atlas (or Localhost) | Cloudinary, Multer |

---

## 📂 Folder Structure


│
├── models/ # Mongoose models (User, Listing, Review)
├── routes/ # All Express routes
├── views/ # EJS templates
│ ├── listings/
│ ├── reviews/
│ └── users/
├── public/ # Static files (CSS, JS)
├── middleware.js # Custom middlewares
├── app.js # Entry point
├── package.json
└── README.md


---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
npm install
npm start


