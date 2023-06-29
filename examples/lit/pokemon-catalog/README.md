# PokemonCatalog

## [Live Demo](https://pages.eos2git.cec.lab.emc.com/data-manager/test-utils/lit/)

![image](https://media.eos2git.cec.lab.emc.com/user/12359/files/77e72afa-d531-4038-b5b8-a5433a795f31)

This is an example app to demonstrate the use of dell-cypress-test-utils test helpers to test an Lit application in all levels:

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
