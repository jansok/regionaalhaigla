# Cypress-Regionaalhaigla

UI automation tests for https://www.regionaalhaigla.ee

# Installation

Before running test use should install NodeJS at your environment: https://nodejs.org/en/download/
Go to the root and perform command: 
npm install (Will install all components based on package.json file)

# Running tests

## To completion (by default, all tests headlessly in the Electron browser)
npx cypress run 

## In headless mode
npx cypress run --headless

## In headed mode
npx cypress run --headed

## In specific browser
npx cypress run --browser chrome

## Only certain tests
npx cypress run --spec **/filename.spec.js

## In a interactive runner that allows to see commands as they execute while viewing the application under test
npx cypress open