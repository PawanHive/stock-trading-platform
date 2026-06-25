# MongoDB Atlas Setup Guide for Zerodha Clone

## Overview

MongoDB Atlas follows this hierarchy:

```text
Organization
 └── Project
      └── Cluster
           └── Database
                └── Collections
```

Example:

```text
Organization: Personal
Project: Zerodha Clone
Cluster: ZerodhaCluster
Database: zerodha

Collections:
- users
- holdings
- positions
- orders
```

---

# Step 1: Sign In to MongoDB Atlas

1. Open MongoDB Atlas.
2. Sign in using your existing account.
3. Use the same account that was used for previous projects (e.g., Stenest).

---

# Step 2: Create a New Project

1. Locate the Project dropdown in the top-left corner.
2. Click **Create Project** or **New Project**.
3. Enter:

```text
Project Name: Zerodha Clone
```

4. Click **Next**.

---

# Step 3: Skip Team Members

Since this is a personal learning project:

1. Skip inviting members.
2. Click **Create Project**.

---

# Step 4: Create a Cluster

After project creation:

1. Click **Build a Database**.
2. Select **Free Tier (M0)**.
3. Choose:
   - Cloud Provider: AWS
   - Region: Closest available region

Example:

```text
Cloud Provider: AWS
Region: Mumbai / Singapore
```

4. Cluster Name:

```text
ZerodhaCluster
```

or

```text
Cluster0
```

5. Click **Create Deployment**.

Wait a few minutes for the cluster to be provisioned.

---

# Step 5: Create Database User

Create a database user.

Example:

```text
Username: zerodhaadmin
Password: <generated-password>
```

Save the password safely.

Click:

```text
Create User
```

---

# Step 6: Configure Network Access

Atlas will ask which IP addresses can access the database.

For development:

```text
0.0.0.0/0
```

This allows access from anywhere.

Options:

- Add Current IP Address
- Allow Access From Anywhere

For learning purposes, Allow Access From Anywhere is easiest.

Click **Finish**.

---

# Step 7: Obtain Connection String

Once the cluster is ready:

1. Click **Connect**.
2. Select **Drivers**.
3. Select **Node.js**.

Atlas provides a connection string similar to:

```text
mongodb+srv://zerodhaadmin:<password>@zerodhacluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

Replace:

```text
<password>
```

with your actual password.

---

# Step 8: Create Backend Project

Recommended backend structure:

```text
backend/
│
├── server.js
├── models/
├── routes/
├── controllers/
├── config/
└── .env
```

---

# Step 9: Initialize Node.js Project

Open terminal inside backend folder.

Initialize project:

```bash
npm init -y
```

Install dependencies:

```bash
npm install express mongoose cors dotenv
```

Install development dependency:

```bash
npm install nodemon --save-dev
```

---

# Step 10: Create Environment Variables

Create a `.env` file.

```env
PORT=3002

MONGO_URL=mongodb+srv://zerodhaadmin:YOUR_PASSWORD@zerodhacluster.xxxxx.mongodb.net/zerodha
```

---

# Step 11: Connect Backend to MongoDB

Example connection code:

```javascript
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
```

---

# Step 12: Start Backend Server

Run:

```bash
npm start
```

Expected output:

```text
MongoDB Connected
```

If this message appears, the connection is successful.

---

# Step 13: Create Collections

For Zerodha Clone, create collections such as:

```text
users
holdings
positions
orders
```

Example Holding Schema:

```javascript
const holdingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String
});
```

---

# Recommended Backend Development Flow

```text
1. Create Atlas Project
2. Create Cluster
3. Create Database User
4. Configure Network Access
5. Get Connection String
6. Setup Express Backend
7. Connect Mongoose
8. Create Schemas
9. Insert Sample Data
10. Build APIs
11. Connect Dashboard to APIs
12. Add Authentication
```

---

# Notes

- One MongoDB Atlas account can contain multiple projects.
- One project can contain one or more clusters.
- Free Tier (M0) is sufficient for learning and portfolio projects.
- No need to create a new organization for every project.
- Create a separate project for each major application.

Example:

```text
Organization
│
├── Stenest
├── Zerodha Clone
├── AI Project
└── Portfolio Backend
```