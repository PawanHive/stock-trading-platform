# Git Branch Practice Guide 🚀
## Full Flow — Branch to Delete

---

## Step 1 — Make Sure You're on Main & Updated

```bash
git checkout main
git pull
```

---

## Step 2 — Create a New Branch

```bash
git checkout -b practice/hello-test
```

Verify:

```bash
git branch
```

Expected:

```
  main
  security/addi
* practice/hello-test   ← you are here
```

---

## Step 3 — Do Some Work

Open `app.js` in VS Code and add something like:

```javascript
// practice comment one
const greet = () => {
    console.log("hello from practice branch")
}
greet()
```

---

## Step 4 — Commit First Change

```bash
git add .
git commit -m "practice: added greet function"
```

---

## Step 5 — Do More Work

Add one more line in `app.js`:

```javascript
// practice comment two
console.log("second commit from practice branch")
```

Then commit:

```bash
git add .
git commit -m "practice: added second comment"
```

---

## Step 6 — Push Branch to Remote

```bash
git push origin practice/hello-test
```

✅ Branch is now on GitHub!

---

## Step 7 — Create Pull Request on GitHub

```
1. Go to github.com/PawanHive/git
2. You'll see yellow bar → "Compare & pull request" button
3. Click it
4. Add title: "Practice PR - hello test"
5. Click "Create pull request"
6. Click "Merge pull request"
7. Click "Confirm merge"
```

✅ Merged on GitHub!

---

## Step 8 — Come Back to Terminal & Pull

```bash
git checkout main
git pull
```

This brings merged changes to your local main.

---

## Step 9 — Delete Branch Locally & Remotely

```bash
# delete local
git branch -d practice/hello-test

# delete remote
git push origin --delete practice/hello-test
```

---

## Step 10 — Verify Everything Clean

```bash
git branch -a
```

Expected:

```
* main
  security/addi
  remotes/origin/main
```

`practice/hello-test` gone everywhere! ✅

---

## Full Flow Summary

```
main → create branch → commit → commit → push
     → PR on GitHub → merge PR → pull main
     → delete local → delete remote ✅
```