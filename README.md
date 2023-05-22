## E-core Test Automation Assessment

This is an automation project for E-core.

---

### About

Written in cypress, this automation includes three test cases: two for logins and one for an invoice detail. Full details can be found in the PDF in the root directory.

---

### Installation

To set up this project, you will need [Node.js](https://nodejs.org/) installed on your computer.

After cloning this repository and having Node.js, install Cypress by typing the command `npm install` in the root folder of this project.

### Running Automation

You can run this automation in your terminal using the command `npm run cy:run`

#### Parameters

You can and some parameters to Cypress execution. To add a parameter, you must type **--** after the `npm run cy:run` command, then type the parameter you want.

-   Browser

By default, Cypress uses Electron to run the tests, but you can change the browser by using the parameter `--browser` and giving the name of the browser that you want to use.
For example, if you want to run on Chrome, use `npm run cy:run -- --browser chrome`.

-   Specs

If you want to run just some specs, you can use the parameter `--spec` to run them. For example, if you want to run just login specs, use the command `npm run cy:run -- --spec "cypress/e2e/login/login.cy.js"` and it will run just the tests that are inside the _login.cy.js_ file. You can also give multiple specs in a directory, by using \*. For example, `npm run cy:run -- --spec "cypress/e2e/login/*"` will run all specs inside _cypress/e2e/login/_ folder.

---
