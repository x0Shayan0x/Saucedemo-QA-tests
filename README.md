# SauceDemo — Automated QA Test Suite

Automated end-to-end tests for [saucedemo.com](https://www.saucedemo.com). Covers core user flows across four user accounts with varying application behaviours. Basic
tests run on four users to practice automating site functionality and writing test cases in playwright.



## Test Users

| Username | Password | 
|----------|----------|
| `standard_user` | `secret_sauce` | 
| `problem_user` | `secret_sauce` | 
| `error_user` | `secret_sauce` | 



## Tests ran
- Login tests on standard_user and locked_out user
- Adding items test on problem_user, standard_user, and error_user
- Removing items test on problem_user
- image correctness on problem_user

## 🗂 Project Structure

```
saucedemo-playwright/
├── tests/
│   ├── login.spec.js          # TC001, TC002 — authentication tests
│   ├── cart.spec.js           # TC003, TC004 — add to cart tests
│   └── problem_user.spec.js         # TC005, TC006 — remove from cart tests
├── pages/
    └── inventoryPage.js 
│   └── LoginPage.js           # Page Object Model for login
├── playwright.config.js
├── package.json
└── README.md
```

---

##  Getting Started

### Prerequisites

- Node.js v18+
- npm

### Install

```bash
git clone https://github.com/your-username/saucedemo-playwright.git
npm install
npx playwright install
```

### Run all tests

```bash
npx playwright test
```

### View the HTML report

```bash
npx playwright show-report
```


## What I Learned

- Writing reliable Playwright selectors using `.nth()` instead of array bracket notation
- Structuring tests with the Page Object Model for reusability
- The difference between a test **status** (pass/fail) and a **bug type** (new vs known defect)
- Looping over dynamic DOM elements safely by re-querying locators each iteration

---
