# WebdriverIO SauceDemo Automation Tests

This repository contains automated tests for the [SauceDemo](https://www.saucedemo.com/) website using WebdriverIO. The tests cover three main scenarios involving different user types, cart actions, and checkout verifications.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Test Scenarios](#test-scenarios)
  - [Scenario 1: Locked Out User](#scenario-1-locked-out-user)
  - [Scenario 2: Standard User Purchase](#scenario-2-standard-user-purchase)
  - [Scenario 3: Performance Glitch User](#scenario-3-performance-glitch-user)
- [Running the Tests](#running-the-tests)
- [Generating Test Reports](#generating-test-reports)
- [Repository Link](#repository-link)

---
## Prerequisites

1. **Node.js** (version 22.11.0 or higher recomended) - [Download here](https://nodejs.org/)
2. **Allure Report** - You can install it via npm:
   ```bash
   npm install -g allure-commandline --save-dev

# Installation
1. Clone the repository:

```bash

git clone https://github.com/sanjatul/SwagLab.git
cd SwagLab
```

2. Install the required dependencies:
```bash
npm install
```

## Test Scenarios

### Scenario 1: Locked Out User
- **Objective:** Try logging in with `locked_out_user` and verify the error message.
- **Command:** `npm run test-lockout-user`

### Scenario 2: Standard User Purchase
- **Objective:** Log in with `standard_user`, reset the app state, add three items to the cart, and complete the purchase journey. Verify all product names, total price, and the success message after checkout. Finally, reset the app state again and log out.
- **Command:** `npm run test-standard-user`

### Scenario 3: Performance Glitch User
- **Objective:** Log in with `performance_glitch_user`, reset the app state, sort items by name (Z to A), add the first item to the cart, and complete the checkout process. Verify product names, total price, and the success message, then reset the app state and log out.
- **Command:** `npm run test-performance-glitch`
## Running the Tests
You can run each test scenario individually or run all scenarios together.

Run All Tests Sequentially
1. To execute all tests together in a sequential order, use:

```bash
npm run-suite
```
2. Run Individual Test Scenarios
Each scenario can be run independently using the commands below.

Scenario 1: Locked Out User

```bash
npm run test-lockout-user
```
Scenario 2: Standard User Purchase

```bash
npm run test-standard-user
```
Scenario 3: Performance Glitch User

```bash
npm run test-performance-glitch
```
## Generating Test Reports
After each test execution, you can generate an Allure report to view the results.

Run the following command to generate and open the report:

```bash
npm run get-report
```
This command will:

Generate a new report in the allure-results folder.
Automatically open the Allure report in your default browser.
## Repository Link
`https://github.com/sanjatul/SwagLab.git` 

