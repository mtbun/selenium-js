# Eteration Academy Test Automation

This repository contains automated tests for the Eteration Academy website using Selenium WebDriver and JavaScript.

## Project Structure

```
├── config/
│   └── config.js           # Configuration parameters
├── pages/
│   ├── basePage.js         # Base page object with common methods
│   ├── homePage.js         # Home page object
│   └── instructorsPage.js  # Instructors page object
├── test/
│   └── instructorTest.js   # Test for instructor page
└── utils/
    └── logger.js           # Logging utility
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google Chrome

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd eteration-test-automation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

Run all tests:
```bash
npm test
```

Run a specific test:
```bash
npx mocha test/instructorTest.js
```

## Test Description

### Instructor Test

Verifies that:
1. The Eteration Academy website loads successfully
2. The instructors page is accessible from the home page
3. The instructor list is not empty
4. The instructor count matches the expected number

## Coding Standards

- ESLint is used for code quality
- Prettier is used for code formatting

## Screenshots

Failed tests automatically capture screenshots in the `screenshots/` directory.

