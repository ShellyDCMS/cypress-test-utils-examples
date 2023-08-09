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
The **driver pattern** basically means that we have an additional class which is responsible of “bridging the gap” between our test file and our component.
It will help our tests be **unaware** of the inner works of a component. 
In addition, if we **change** something in the component which causes the test to fail, we will just have to amend the driver and the tests will just pass again when the same logic works.

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
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/d29b23c2-7fec-4e6a-b761-de78eb166447)
### Driver Composition
Just like Lego:tm:, we can create more elaborated drivers by composing them from smaller ones
![ezgif com-video-to-gif (5)](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/e89771b5-e0a3-4bce-87f5-cc70032a5492)
### Driver Composition Example
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/fd9ed402-dc49-4818-8798-f08ee33d835a)
### Tests Example
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/79bc30a2-6258-4937-b7f3-611b0a9b1ca6)
### Integration Driver Example
#### Front End Integration Tests
Runing the front end application while mocking the backend server
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/16f3a3f9-493d-4c0e-bec1-3bfb58b873ab)
### Integration Tests Example
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/23642b91-fd27-44ee-b9a0-95fe18e0c004)
### E2E Tests Example
Using cypress as a helper robot that behaves like a user to click around the app and verify it functions correctly
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/1c0c8fc6-3167-4fdb-a98a-159a51a93981)

## Starting Point
Main branch contains the following components
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/5edf6f5d-3b28-486e-b236-d6b1b5f2de70)
Let's add a "pokeomon-go" component, to fetch a pokemon by index.
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/003cf40f-d32a-43c0-9d0f-5377a6fa1235)

### Files Structure
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/ac287165-5844-4364-92c5-56d9e10f41ac)
### Cypress Files Structure
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/c64b1b45-3874-4736-bb98-88d6bc4c7c41)

You can eaither practice TDD - adding another failing test every time and then making it work by adding functionnallity
Or you can add tests only to the already implemented pokemon-go component; In that case, switch to `add-tests-workshop-starter` branch.
## Let's Go!
### Add your first integration test
Add the following Integration test (it is an image on purpose to avoid copy&paste so you develop some "Muscle Memory") 
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/862739d1-3e77-4223-a9a9-9fa4fb261f13)

Run the test:
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/ec34919d-caf2-4f46-ad3c-df05ec7050b5)

### Add Pokemon Go Component Tests and Driver
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/09f00bfe-bc90-4b71-bf1c-b73a24dc5071)

If you get stuck, you can always take a peek at the `add-tests-workshop-solution` branch

## Build a Bug Trap
Jump to Pokemon #33
Then to #888And then back to #33
Can you spot the difference?
Let's add a test to "trap" the defect befroe we fix it
![image](https://github.com/ShellyDCMS/cypress-test-utils-examples/assets/60476837/d316e5a4-fa97-4517-b3a1-3b6c91514679)

Now, fix the defect!

## Take aways
1. Note how appart of renderning components, the tests and drivers look practically the same, regardless of weather this is a react, angular or a lit application.
2. Note how using test drivers impacts tests readability and maintainability







