// Alternatively you can use CommonJS syntax:
// require('./commands')
import "@cypress/code-coverage/support";
import { mount } from "cypress/angular";
import { Runnable } from "mocha";
import * as addContext from "mochawesome/addContext";

const titleToFileName = (title: string) => title.replace(/[:\/]/g, "");

Cypress.on("test:after:run", (test: Runnable, runnable: Mocha.Test) => {
  if (test["state"] === "failed") {
    let parent = runnable.parent;
    let filename = "";
    while (parent && parent.title) {
      filename = `${titleToFileName(parent.title)} -- ${filename}`;
      parent = parent.parent;
    }
    filename += `${titleToFileName(test["title"])} (failed).png`;
    //@ts-ignore
    addContext({ test }, `../screenshots/${Cypress.spec.name}/${filename}`);
  }
  // always add the video
  //@ts-ignore
  addContext({ test }, `../videos/${Cypress.spec.name}.mp4`);
});

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);

// Example use:
// cy.mount(MyComponent)
