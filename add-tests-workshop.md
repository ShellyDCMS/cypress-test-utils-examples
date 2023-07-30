# Hands On Cypress tests workshop
If you wish to get "hands-on", you can practice adding the pokemon-go component tests.

## Prerequisits

`git clone https://github.com/ShellyDCMS/cypress-test-utils-examples`

`cd cypress-test-utils-examples`

`yarn`

`cd examples/<framework>/pokemon-catalog`

`yarn`

`npm run build`

`npm run start`

`npm run cy:open`

## Test Drivers 
The *driver pattern* basically means that we have an additional class which is responsible of “bridging the gap” between our test file and our component.
It will help our tests be unaware of the inner works of a component. 
In addition, if we change something in the component which causes the test to fail, we will just have to amend the driver and the tests will just pass again when the same logic works.

### Structure
Every Driver exposes the following public properties
#### given
The given property will hold methods which will allow us to set pre-conditions before something takes place.
This is a classic place to have methods which will set the inputs which are going to be passed down to our component.
#### when
The when property will hold methods of “events” which will take place like render, click, hover, etc.
#### get
The get property will hold methods which will give our tests access to the “output” of the component in a “black box” fashion

### Driver Example
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/74d1d376-35cf-4954-a8da-29c98bae2d72)
### Test Example
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/63d7bf70-9fbf-43c9-ac16-29fa92d0612a)
### Driver Composition Example
Just like Lego:tm:, we can create more elaborated drivers by composing them from smaller ones
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/fd9ed402-dc49-4818-8798-f08ee33d835a)
### Tests Example
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/491c5f37-3e70-479d-83d8-ad4316da8fae)
### Integration Driver Example
#### Front End Integration Tests
Runing the front end application while mocking the backend server
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/16f3a3f9-493d-4c0e-bec1-3bfb58b873ab)
### Integration Tests Example
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/617fadbc-8e85-4bef-bbf4-6c102c9d5b7a)
### E2E Tests Example
Using cypress as a helper robot that behaves like a user to click around the app and verify it functions correctly
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/acc535db-5dee-4fb5-a2fc-99e3b4a6ad33)


## Let's Go!

Main branch contains the following components
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/5edf6f5d-3b28-486e-b236-d6b1b5f2de70)
Let's add a "pokeomon-go" component, to fetch a pokemon by index.
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/003cf40f-d32a-43c0-9d0f-5377a6fa1235)

You can eaither practice TDD - adding another failing test every time and then making it work by adding functionnallity
Or you can add tests only to the already implemented pokemon-go component; In that case, switch to `add-tests-workshop-starter` branch.

### Add your first integration test




