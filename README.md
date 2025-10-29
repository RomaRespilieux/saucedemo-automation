# saucedemo-automation
Cypress practice project with automated tests for saucedemo website

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
