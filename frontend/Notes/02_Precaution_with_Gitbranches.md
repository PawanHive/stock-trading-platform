# Managing Multiple Feature Branches (Solo Developer Guide)

Sometimes while working on one feature, another feature becomes a higher priority. Git branches are designed to handle this situation.

---

# Scenario

Suppose I am currently working on:

```text
feature/auth
```

The feature is only 60% complete.

Suddenly, I realize that I need to start working on:

```text
feature/payment
```

before finishing authentication.

This is completely normal and Git supports this workflow.

---

# Recommended Approach: Commit Current Progress and Switch

Before switching branches, save your current work.

```bash
git add .
git commit -m "wip: auth feature partially completed"
```

> WIP = Work In Progress

Now switch back to main:

```bash
git checkout main
```

Create the new feature branch:

```bash
git checkout -b feature/payment
```

Work on the payment feature.

Whenever needed, return to the authentication branch:

```bash
git checkout feature/auth
```

Continue from exactly where you left off.

Git preserves the state of each branch independently.

---

# Alternative Approach: Using Git Stash

If I do not want to commit unfinished work:

Save changes temporarily:

```bash
git stash
```

Switch branches:

```bash
git checkout main
git checkout -b feature/payment
```

Later, return to the previous branch:

```bash
git checkout feature/auth
git stash pop
```

This restores the saved changes.

---

# Recommendation for Beginners

Prefer making a WIP commit instead of using stash frequently.

Example:

```bash
git commit -m "wip: authentication progress"
```

Benefits:

- Work is saved permanently.
- Easy to understand.
- Visible in Git history.
- Less chance of forgetting stashed changes.

---

# Can Multiple Feature Branches Exist Simultaneously?

Yes.

Example:

```text
main

feature/auth
feature/payment
feature/profile
```

Git is designed to support multiple branches at the same time.

This does not create problems by itself.

---

# Important Precaution: Branch Dependencies

A feature branch should ideally be independent.

### Example

Suppose:

```text
feature/payment
```

requires code that exists only in:

```text
feature/auth
```

and authentication has not been merged into main yet.

Now there are two options.

---

## Option A: Finish Authentication First (Recommended)

Workflow:

```text
feature/auth
      ↓
Merge into main
      ↓
Create feature/payment
```

Benefits:

- Cleaner Git history.
- Easier merges.
- Fewer conflicts.

This is usually the best choice.

---

## Option B: Create Payment Branch from Auth Branch

If payment absolutely depends on authentication:

```bash
git checkout feature/auth
git checkout -b feature/payment
```

Branch structure:

```text
main
 │
 └── feature/auth
         │
         └── feature/payment
```

Now payment inherits all authentication code.

This works, but it can make merging more complicated later.

Use this approach only when necessary.

---

# Recommended Workflow for Solo MERN Projects

Suppose:

```text
feature/auth
```

is unfinished and suddenly:

```text
feature/payment
```

becomes more important.

### Step 1: Save Current Progress

```bash
git add .
git commit -m "wip: auth progress"
```

### Step 2: Create New Feature Branch

```bash
git checkout main
git checkout -b feature/payment
```

### Step 3: Complete Payment Feature

Work normally.

### Step 4: Merge Payment into Main

```bash
git checkout main
git merge feature/payment
```

### Step 5: Delete Merged Branch

```bash
git branch -d feature/payment
```

### Step 6: Return to Authentication

```bash
git checkout feature/auth
```

Continue development.

---

# Practical Branch Limit

Try not to keep too many active branches.

### Good

```text
main
feature/auth
feature/payment
```

---

### Still Manageable

```text
main
feature/auth
feature/payment
feature/profile
```

---

### Difficult to Manage

```text
main
feature/auth
feature/payment
feature/profile
feature/chat
feature/admin
feature/search
feature/notifications
feature/settings
```

Too many active branches make it harder to remember:

- Which feature is complete.
- Which feature is under development.
- Which branch should be merged next.

---

# Best Practice for Solo Developers

Ideal:

```text
main
feature/current-work
```

Completely acceptable:

```text
main
feature/auth
feature/payment
feature/profile
```

Try to keep active feature branches between **1 and 3** whenever possible.

---

# Key Takeaways

- Multiple feature branches can exist simultaneously.
- Commit or stash work before switching branches.
- Prefer WIP commits over stash when learning Git.
- Keep feature branches independent whenever possible.
- Avoid creating feature branches that depend on unfinished feature branches.
- Finish and merge features regularly.
- Delete branches after successful merges.
- Keep the number of active branches small and manageable.
- For solo projects, 1–3 active feature branches are usually enough.