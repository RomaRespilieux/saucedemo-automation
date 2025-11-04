# saucedemo-automation
This is a Cypress practice project with automated tests for https://www.saucedemo.com/. 
The goal was to gain hands-on experience with end-to-end testing, improve my understanding of test automation, and explore best practices in writing automated tests.

Key aspects of the project include:

**Tools & Technologies**: Cypress and JavaScript were used to implement the test suite.
**Test Design**: I created test cases covering both happy and unhappy flows to ensure robust coverage of user scenarios.
**Reporting**: A reporting functionality was integrated to track and visualize test results effectively.
**Structure**: For this project, I intentionally did not use the Page Object Model (POM) structure, focusing instead on direct test implementation to better understand Cypress's native capabilities.

## Project structure
saucedemo-automation/
├── cypress/
│   ├── e2e/
│      └── authorization.cy.js
│      └── checkout.cy.js
│      └── footer.cy.js
│      └── logout.cy.js
│      └── navigation.cy.js
│      └── products.cy.js
│      └── shoppingcart.cy.js
│      └── unhappyflow.cy.js
│   ├── fixtures/
│      └── example.json
│   ├── reports/
│   ├── screenshots/
│   └── support/
│       └── commannds.js
│       └── e2e.js
├── fixtures/
│   ├── test_main.py
│   └── test_utils.py
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md

## Testing types
A total of 39 test cases were created, covering:
* End-to-end user flows
* Performance checks
* Basic security validations

## Prerequisites
``Node.js`` and ``npm`` need to be installed

You can check if these are already installed with following commands:

`node -v`

`npm -v`

If these are not installed yet follow these steps:

> Go to the official Node.js website: https://nodejs.org

> Download the LTS version (recommended for most users).

> Run the installer and follow the setup instructions.

> After installation, verify it.

## Make new project
Create a new project folder:
Either manually
Or with following command: 
`mkdir my-cypress-project`

## Set up project
Move into the project folder:
`cd my-cypress-project`

Initialize a new Node.js project by creating a package.json file with default values.
`npm init -y`

Install Cypress locally as a dev dependency for your project.
`npm install cypress --save-dev`

Open Cypress to openn the Cypress App. For this project we will choose e2e testing.
`npx cypress open`

## Test execution
To execute these tests run folling command:
`npx cypress run`

## Reporting
TODO

## Config files
TODO
