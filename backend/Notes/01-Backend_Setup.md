## Step 1: `npm init`
## Step 2: Edit `package.json`

```json
  "scripts": {
    "start": "nodemon index.js"
  },
```

## Step 3: `npm i -D nodemon`

## Step 4: install multiple technology
```npm
npm i express body-parser cors dotenv mongoose passport passport-local passport-local-mongoose
```
## Step 5: setup server `index.js`
```js
const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

```
## Step 6: start server 
- `npm start`