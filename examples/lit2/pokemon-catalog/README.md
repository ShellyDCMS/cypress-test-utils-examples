# PokemonCatalog

## [Live Demo](https://shellydcms.github.io/cypress-test-utils-examples/lit/)

![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/cf8e168f-bc10-48a1-9723-1851358d8165)


This is an example app to demonstrate the use of @shellygo/cypress-test-utils test helpers to test an Lit application in all levels:

- Component (Testing a component in the browser)
- Integration (Testing the entire Front End while intercepting http requests and mocking Back End responses)
- E2E

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4300/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running component tests & integration tests

Run `npm run cy:open` to execute the tests via Cypress.

## Running end-to-end tests

Run `npm run cy-e2e:open` to execute the end-to-end tests via Cypress
