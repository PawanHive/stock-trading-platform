# Connecting MongoDB Atlas with Node.js / MERN Backend

## Overview

The basic connection architecture is:

```text
React / Frontend
       ↓
Node.js + Express Backend
       ↓
Mongoose
       ↓
MongoDB Atlas
       ↓
MongoDB Database
```

You **do not need MongoDB installed locally** when using MongoDB Atlas.

---

# Step 1 — Create / Open MongoDB Atlas Cluster

Go to MongoDB Atlas:

https://www.mongodb.com/atlas

Open your project and create or select your cluster.

Example:

```text
Project
   ↓
Cluster
   ↓
Database
```

Example:

```text
Zerodha Project
      ↓
ZerodhaCluster
```

---

# Step 2 — Create a Database User

In MongoDB Atlas:

```text
Security
   ↓
Database Access
   ↓
Add New Database User
```

Create a username and password.

Example:

```text
Username: ZerodhaUser
Password: ********
```

### Important

The MongoDB **database user** is different from your MongoDB Atlas login account.

Your Node.js application will use this database user's credentials to connect to MongoDB.

---

# Step 3 — Allow Your IP Address

Go to:

```text
Security
   ↓
Network Access
   ↓
IP Access List
```

Click:

```text
Add IP Address
```

Then choose:

```text
Add My Current IP Address
```

Atlas only allows connections from IP addresses that are included in the project's IP access list.

### Avoid unnecessarily using:

```text
0.0.0.0/0
```

This allows connections from anywhere and is less secure.

For local development, adding your current IP address is preferable.

---

# Step 4 — Get MongoDB Connection String

Go to:

```text
Database
   ↓
Clusters
   ↓
Connect
   ↓
Drivers
```

Select:

```text
Driver: Node.js
```

Atlas will provide a connection string similar to:

```text
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

The connection string generally follows this structure:

```text
mongodb+srv://USERNAME:PASSWORD@CLUSTER/DATABASE
```

Example:

```text
mongodb+srv://ZerodhaUser:YOUR_PASSWORD@zerodhacluster.xxxxx.mongodb.net/zerodha?retryWrites=true&w=majority
```

Here:

```text
ZerodhaUser
    ↓
Database username

YOUR_PASSWORD
    ↓
Database user's password

zerodhacluster.xxxxx.mongodb.net
    ↓
MongoDB Atlas cluster

zerodha
    ↓
Database name
```

---

# Step 5 — Create `.env` File

Inside your Node.js backend project:

```text
backend/
│
├── index.js
├── package.json
├── .env
├── .gitignore
└── models/
```

Create:

```text
.env
```

Add your MongoDB connection string:

```env
MONGO_URL=mongodb+srv://ZerodhaUser:YOUR_PASSWORD@zerodhacluster.xxxxx.mongodb.net/zerodha?retryWrites=true&w=majority
```

---

# Step 6 — Protect `.env`

Your `.env` file contains sensitive credentials.

Add it to `.gitignore`:

```gitignore
node_modules/
.env
```

### NEVER do this:

```javascript
mongoose.connect("mongodb+srv://username:password@...");
```

Don't hard-code database credentials directly into your source code.

Use:

```text
.env
```

instead.

### Important

Never upload your `.env` file to GitHub.

---

# Step 7 — Install Required Packages

Open the terminal inside your backend folder.

Run:

```bash
npm install mongoose dotenv
```

Check Mongoose:

```bash
npm list mongoose
```

---

# Step 8 — Connect Node.js to MongoDB Atlas

Example `index.js`:

```javascript
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = 8080;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
```

Start your server:

```bash
node index.js
```

Or if using Nodemon:

```bash
nodemon index.js
```

Expected output:

```text
Connected to MongoDB Atlas
Server running on port 8080
```

If you see these messages, your Node.js backend has successfully connected to MongoDB Atlas.

---

# Step 9 — Create a MongoDB Model

Create:

```text
models/
└── User.js
```

`User.js`:

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

---

# Step 10 — Use the Model in Your Backend

In `index.js`:

```javascript
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    app.listen(8080, () => {
      console.log("Server running on port 8080");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
```

---

# Step 11 — Test Database Connection

Create a test route:

```javascript
app.get("/create-user", async (req, res) => {
  const user = await User.create({
    name: "Pawan",
    email: "pawan@example.com",
    age: 23
  });

  res.json(user);
});
```

Start your server:

```bash
nodemon index.js
```

Then open:

```text
http://localhost:8080/create-user
```

If everything works, MongoDB will create a document.

---

# Step 12 — Check MongoDB Atlas

Open MongoDB Atlas:

```text
Database
   ↓
Browse Collections
```

You should see something similar to:

```text
zerodha
   ↓
users
   ↓
Pawan
```

Your Node.js application has successfully written data to MongoDB Atlas.

---

# Complete Project Structure

A basic backend can look like:

```text
backend/
│
├── models/
│   └── User.js
│
├── routes/
│   └── user.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

---

# Complete Connection Flow

```text
                  INTERNET
                     │
                     ▼
              ┌──────────────┐
              │ React / Vite │
              │  Frontend    │
              └──────┬───────┘
                     │
                     │ HTTP Request
                     ▼
              ┌──────────────┐
              │ Node.js      │
              │ Express      │
              │ Backend      │
              └──────┬───────┘
                     │
                     │ Mongoose
                     ▼
              ┌──────────────┐
              │ MongoDB Atlas│
              │   Cluster    │
              └──────┬───────┘
                     │
                     ▼
                  Database
                     │
                     ▼
                Collections
                     │
                     ▼
                 Documents
```

---

# Example MERN Request Flow

Suppose your React frontend wants to get user holdings.

```text
React Dashboard
      ↓
GET /holdings
      ↓
Express Backend
      ↓
Route
      ↓
Mongoose Model
      ↓
MongoDB Atlas
      ↓
holdings collection
      ↓
MongoDB documents
      ↓
Mongoose
      ↓
Express
      ↓
React Dashboard
```

---

# Important MongoDB Atlas Requirements

Before connecting, make sure all three are correct:

```text
1. MongoDB Atlas Cluster
        +
2. Database User
        +
3. IP Address Allowed
        =
   Backend Can Connect
```

If any one of these is wrong, the connection can fail.

---

# Common Connection Problems

## 1. `querySrv ECONNREFUSED`

Example:

```text
querySrv ECONNREFUSED
```

Possible causes:

- Internet/DNS problem
- Incorrect MongoDB Atlas connection string
- Network restrictions
- DNS resolution problem
- Incorrect cluster hostname

---

## 2. Authentication Failed

Example:

```text
MongoServerError: Authentication failed
```

Check:

```text
Username
Password
Database user
Connection string
```

Make sure you're using the **database user's** username and password.

---

## 3. IP Not Allowed

You may see an error related to:

```text
IP address not allowed
```

Go to:

```text
MongoDB Atlas
   ↓
Security
   ↓
Network Access
```

Add your current IP address.

---

## 4. Password Contains Special Characters

If your MongoDB password contains special characters such as:

```text
@
:
/
?
#
%
```

the password may need to be **URL encoded** before putting it into the connection string.

For example, a password containing:

```text
@
```

may need to be represented as:

```text
%40
```

---

# Security Rules

### Rule 1 — Never expose your password

Don't post this publicly:

```env
MONGO_URL=mongodb+srv://username:password@...
```

---

### Rule 2 — Never commit `.env`

Your `.gitignore` should contain:

```gitignore
.env
```

---

### Rule 3 — Don't hard-code credentials

Bad:

```javascript
mongoose.connect(
  "mongodb+srv://username:password@cluster.mongodb.net/database"
);
```

Good:

```javascript
mongoose.connect(process.env.MONGO_URL);
```

---

### Rule 4 — If credentials are exposed

If you accidentally publish your MongoDB password:

```text
1. Change/rotate the database password
2. Update your .env
3. Check Git history if it was committed
4. Remove exposed credentials from the repository
```

Changing the password is especially important because simply deleting the password from the latest file does not necessarily remove it from Git history.

---

# Quick Setup Checklist

Use this checklist whenever connecting a new Node.js project to MongoDB Atlas:

```text
[ ] Create MongoDB Atlas project
[ ] Create MongoDB Atlas cluster
[ ] Create database user
[ ] Add current IP address
[ ] Get Node.js connection string
[ ] Create .env
[ ] Add MONGO_URL
[ ] Add .env to .gitignore
[ ] Install mongoose
[ ] Install dotenv
[ ] Load dotenv
[ ] Use mongoose.connect()
[ ] Start Node.js server
[ ] Check connection message
[ ] Create a model
[ ] Test inserting data
[ ] Check Browse Collections in Atlas
```

---

# The Short Version

When you already have an Atlas cluster, the essential process is:

```text
1. Atlas → Database Access
       ↓
   Create database user

2. Atlas → Network Access
       ↓
   Add your IP

3. Atlas → Connect → Drivers
       ↓
   Copy connection string

4. Backend → .env
       ↓
   MONGO_URL=...

5. Install packages

   npm install mongoose dotenv

6. index.js

   require("dotenv").config();

   mongoose.connect(process.env.MONGO_URL);

7. Start server

   nodemon index.js

8. Verify

   Connected to MongoDB Atlas
```

---

# Final Mental Model

Remember this:

```text
MongoDB Atlas
     ↑
     │
 Mongoose
     ↑
     │
 Node.js / Express
     ↑
     │
 React
```

**Mongoose is the bridge between your Node.js backend and MongoDB.**

Your React frontend normally does **not** connect directly to MongoDB Atlas.

The secure architecture is:

```text
React
  │
  │ API Request
  ▼
Express / Node.js
  │
  │ Mongoose
  ▼
MongoDB Atlas
```