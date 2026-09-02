# How to Connect `MongoDB` with our application `Backend`

## Step 1: Create `.env` File

Add your MongoDB connection string:

```env
MONGO_URL=mongodb+srv://ZerodhaUser:YOUR_PASSWORD@zerodhacluster.xxxxx.mongodb.net/zerodha?retryWrites=true&w=majority
```

## Step 2: Install Required Packages

```bash
npm install mongoose dotenv
```
## Step 3: Connect Backend Server to MongoDB Atlas Cloud database

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
npm start
```

## Step 4: 
## Step 1: 
## Step 1: 

### .files 
github by default never take file which start with dot.
Example: 
- `.env`
- `.gitignore`