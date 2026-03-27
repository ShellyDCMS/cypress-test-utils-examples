---
description: How to write Cypress component tests and drivers using the driver pattern from @shellygo/cypress-test-utils. Use when creating new tests, adding test coverage, or writing drivers for components and services. Portable across repositories.
---

# Write Tests & Drivers

**Cypress component tests** with the **driver pattern** from `@shellygo/cypress-test-utils`. Every tested component/service has a **driver** (setup/interaction layer) and a **test file** (assertions).

---

## Core Concepts

### Framework & Libraries

- **Test runner**: Cypress component tests
- **Driver utilities**: `@shellygo/cypress-test-utils` — provides `CypressHelper` (interaction layer) and `then()` (assertion wrapper)
- **Random data**: `chance` npm package — never hard-code arbitrary strings
- **Mock data builders**: Use the `builder-pattern` package for type-safe random data factories

### Driver Structure

Every driver has three sections — each spreads from the base:

- **`given`** — set props and configure mocks before rendering
- **`when`** — render the component and trigger interactions
- **`get`** — query elements and retrieve spies for assertions

---

## Step 1: Identify What You're Testing

- **Component** → create `<Component>.driver.tsx` + `<Component>.cy.ts`
- **Service** → create `<service>.driver.ts` + `<service>.cy.ts`

## Step 2: Create the Driver

### Component Driver Template

```typescript
import { CypressHelper } from "@shellygo/cypress-test-utils";
import { CypressReactComponentHelper } from "@shellygo/cypress-test-utils/react";
import type { Attributes, ReactNode } from "react";
import { IProps, PokemonImageComponent } from "./pokemon-image.component";

export class MyComponentDriver {

  private props: IProps;
  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    beforeEach(() => {
      // For components with ALL optional props:
      this.props = {};
      // For components with REQUIRED props, set sensible defaults:
      // this.props = { items: [], onSubmit: () => {} };
    });
  };

  given = {
    title: (title: string) => {
      this.props.title = title;
    },
    count: (count: number) => {
      this.props.count = count;
    },
    // Boolean params MUST default to true for readability
    isActive: (value: boolean = true) => {
      this.props.isActive = value;
    },
    // Spy pattern for callbacks
    onClickSpy: () => {
      this.props.onClick = this.helper.given.spy('onClick');
    },
  };

  when = {
    render: (
      type: typeof PokemonImageComponent,
      props?: (Attributes & Partial<IProps>) | null,
      ...children: ReactNode[]
    ) => {
      const mergedProps: Attributes & IProps = { ...this.props, ...props };
      this.reactComponentHelper.when.mount(type, mergedProps, children);
    }
  };
    clickButton: () => this.helper.when.click('my-button'),
    waitUntil: (checkFunction: () => any) => this.helper.when.waitUntil(checkFunction),
  };

  get = {
    container: () => this.helper.get.elementByTestId('my-component'),
    titleText: () => this.helper.get.elementsText('my-title'),
    buttonElement: () => this.helper.get.elementByTestId('my-button'),
    onClickSpy: () => this.helper.get.spy('onClick'),
  };
}
```


### Service Driver Template

```typescript
import { CypressHelper } from '@shellygo/cypress-test-utils';
import { MyService } from './my.service';

export class MyServiceDriver {
  private helper = new CypressHelper();
  private service!: MyService;
  private lastResult: any;

  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    beforeEach(() => {
      this.service = new MyService();
      this.lastResult = undefined;
    });
  };

  given = {
    apiReturns: (data: any) => {
      this.helper.given
        .stubObjectMethod(this.service, 'fetchData')
        .resolves(data);
    },
  };

  when = {
    formatData: (input: string) => {
      this.lastResult = this.service.formatData(input);
    },
    fetchData: (id: string) =>
      this.helper.when.waitUntil(() => this.service.fetchData(id)),
  };

  get = {
    lastResult: () => this.lastResult,
  };
}
```

### Key Driver Rules

3. **Boolean `given` methods must default to `true`**: `isActive: (value: boolean = true) => { ... }` — reads better as `given.isActive()` instead of `given.isActive(true)`
4. **Reset props in `beforeAndAfter`**: `this.props = {}` or `this.props = { ...defaults }` for components with required props — prevents state leaking between describes
5. **Full decoupling from Cypress** — never use `cy.*`, `Cypress.*`, `.click()`, `.type()`, `.should()`, or any direct Cypress command/assertion in drivers or tests. All interaction goes through `CypressHelper` methods (`this.helper.given.*`, `this.helper.when.*`, `this.helper.get.*`). All assertions go through `then()` from `@shellygo/cypress-test-utils`. This decouples tests from the Cypress API so the underlying framework can be swapped without rewriting tests
6. **Spies**: `this.helper.given.spy('name')` to create, `this.helper.get.spy('name')` to retrieve — never `cy.spy()`
7. **Stubs**: `this.helper.given.stubObjectMethod(obj, 'method')` — never `cy.stub()`
8. **Waiting**: `when.waitUntil(() => condition)` via `this.helper.when.waitUntil()`. Expose it as `waitUntil` in the driver's `when` object. Wait for a visible condition (e.g. text appearing) rather than arbitrary timeouts — never `cy.wait()`
9. **Service mocking**: `this.helper.given.stubObjectMethod(obj, 'method')` for sync (`.returns(val)`) and async (`.resolves(val)` / `.rejects(err)`) stubs. Use `.onCall(n).resolves(val)` for sequential responses. Retrieve stubs via `this.helper.get.stub('method')`. For fully stubbed instances: `this.helper.given.stubbedInstance(MyService)` — never `cy.stub()` or `cy.spy()`
10. **HTTP interception**: `this.helper.given.intercept(url, alias, method?)` to observe requests, `this.helper.given.interceptAndMockResponse({ url, alias, method?, response? })` to mock responses. Retrieve request data via `this.helper.get.requestBody(alias)`, `this.helper.get.requestQueryParams(alias)`, `this.helper.get.requestHeader(alias)`, `this.helper.get.requestUrl(alias)`. Wait for responses via `this.helper.when.waitForResponse(alias)` — never `cy.intercept()` or `cy.wait('@alias')`
11. **`data-hook` ownership** — a `data-hook` string must only appear in the driver of the component that defines it. Parent/page drivers must delegate to the child driver's `get`/`when` methods instead of referencing the `data-hook` value directly via `this.helper`. This ensures that renaming a `data-hook` attribute requires a change in exactly one driver.

### Driver Composition

**`data-hook` attributes are implementation details.** Only the driver of the component where a `data-hook` attribute is defined should reference it directly via `this.helper`. Parent drivers, page drivers, and any other consumer must delegate to the owning driver. This way, if a `data-hook` value changes, only one driver needs updating.

**Rule: Never duplicate `data-hook` strings across drivers.** If `HeaderDriver` owns `header-about-button`, then `HomePageDriver` must call `this.headerDriver.when.clickAbout()` — not `this.helper.when.click('header-about-button')`.


**Parent/page drivers** — instantiate child drivers and expose their full `when`/`get` objects as namespaced properties. Only use `this.helper` directly for `data-hook` attributes owned by the parent component itself:

```typescript
export class PageDriver {
  private headerDriver = new HeaderDriver();
  private tabNavigationDriver = new TabNavigationDriver();
  private sidebarDriver = new SidebarDriver();
  private rulesGridDriver = new RulesGridDriver();

  when = {
   render: (
      type: typeof PokemonCatalog,
      props?: (Attributes & Partial<IPokemonCatalogPros>) | null,
      ...children: ReactNode[]
    ) => {
      const mergedProps: Attributes & IPokemonCatalogPros = {
        ...props,
        ...this.props
      };
      this.reactComponentHelper.when.mount(type, mergedProps, children);
    },
    // Expose full child driver when objects
    header: this.headerDriver.when,
    tabNavigation: this.tabNavigationDriver.when,
    sidebar: this.sidebarDriver.when,
    // Only use this.helper directly for data-hook owned by THIS component
    clickClearFilters: () => this.helper.when.click('clear-all-filters'),
  };

  get = {
    ...this._get,
    // Owned by this component — direct access OK
    homePage: () => this.helper.get.elementByTestId('home-page'),
    // Expose full child driver get objects
    header: this.headerDriver.get,
    tabNavigation: this.tabNavigationDriver.get,
    sidebar: this.sidebarDriver.get,
    rulesGrid: this.rulesGridDriver.get,
  };
}

// Usage in tests:
when.header.clickAbout();
when.tabNavigation.clickTab('videos');
get.header.header();                   // HeaderDriver.get.header()
get.rulesGrid.numberOfRuleCards();     // RulesGridDriver.get.numberOfRuleCards()
get.sidebar.container();               // SidebarDriver.get.container()
```

**Leaf drivers** — same pattern, expose the full sub-driver:

```typescript
export class CardHeaderDriver  {
  private subtitleDriver = new RuleSubtitleDriver();

  get = {
    subtitle: this.subtitleDriver.get,
  };
}

// Usage in tests:
get.subtitle.subtitleText();
```

### Mocking Services

Use `CypressHelper` methods to mock service dependencies — never raw `cy.stub()` or `cy.spy()`.

#### Stubbing a service method (returns a value)

```typescript
// In driver's given:
given = {
  ...this._given,
  serviceReturns: (value: number) => {
    this.helper.given
      .stubObjectMethod(this.service, 'calculate')
      .returns(value);
  },
};
```

#### Stubbing an async service method (resolves/rejects)

```typescript
given = {
  fetchResolves: (data: any) => {
    this.helper.given
      .stubObjectMethod(this.service, 'fetchData')
      .resolves(data);
  },
  fetchRejects: (error: Error) => {
    this.helper.given
      .stubObjectMethod(this.service, 'fetchData')
      .rejects(error);
  },
};
```

#### Stubbing a prototype method (shared across instances)

When you need to stub a method on all instances of a class (e.g. a service imported by the component under test), stub the prototype:

```typescript
given = {
  getRawFileContentResolves: (content: string) => {
    this.helper.given
      .stubObjectMethod(GithubService.prototype, 'getRawFileContent')
      .resolves(content);
  },
};
```

#### Creating a fully stubbed instance

```typescript
// All methods are stubs, optionally override specific properties
const serviceMock = this.helper.given.stubbedInstance(MyService);
const serviceMock = this.helper.given.stubbedInstance(MyService, { baseUrl: '/api' });
```

#### Stubbing window globals (e.g. fetch)

```typescript
given = {
  fetchReturnsJson: (jsonResponse: Record<string, any>) => {
    this.helper.given
      .stubObjectMethod(window, 'fetch')
      .resolves(new Response(JSON.stringify(jsonResponse), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }));
  },
};
```

#### Sequential stub responses (different response per call)

```typescript
given = {
  fetchReturnsSequence: (responses: Record<string, any>[]) => {
    const stub = this.helper.given.stubObjectMethod(window, 'fetch');
    responses.forEach((json, index) => {
      stub.onCall(index).resolves(new Response(JSON.stringify(json), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }));
    });
  },
};
```

#### Retrieving stubs for assertions

```typescript
get = {
  fetchDataStub: () => this.helper.get.stub('fetchData'),
};

// In test:
then(get.fetchDataStub()).shouldHaveBeenCalled();
then(get.fetchDataStub()).shouldHaveBeenCalledOnce();
then(get.fetchDataStub()).shouldHaveBeenCalledTimes(2);
then(get.fetchDataStub()).shouldHaveBeenCalledWith('expected-arg');
```

---

### Intercepting HTTP Requests

Use `CypressHelper` to intercept real HTTP requests (e.g. from `fetch` or `XMLHttpRequest`) — never raw `cy.intercept()`.

#### Intercept only (observe without mocking response)

```typescript
given = {
  interceptApiCall: () => {
    this.helper.given.intercept('**/api/rules/**', 'fetchRules');
  },
  interceptPost: () => {
    this.helper.given.intercept('**/api/rules', 'createRule', 'POST');
  },
};
```

#### Intercept and mock a response

```typescript
given = {
  rulesResponse: (rules: any[]) => {
    this.helper.given.interceptAndMockResponse({
      url: '**/api/rules**',
      alias: 'fetchRules',
      response: { body: rules },
    });
  },
  loginResponse: (token: string) => {
    this.helper.given.interceptAndMockResponse({
      method: 'POST',
      url: '**/login',
      alias: 'login',
      response: { token },
    });
  },
  networkError: () => {
    this.helper.given.interceptAndMockResponse({
      url: '**/api/data**',
      alias: 'dataRequest',
      response: { forceNetworkError: true },
    });
  },
  notFound: () => {
    this.helper.given.interceptAndMockResponse({
      url: '**/api/missing**',
      alias: 'missingResource',
      response: { statusCode: 404 },
    });
  },
  withHeaders: () => {
    this.helper.given.interceptAndMockResponse({
      url: '**/api/session',
      alias: 'session',
      response: { headers: { 'XSRF-Token': 'token' } },
    });
  },
};
```

#### Waiting for intercepted requests

```typescript
when = {
  waitForRulesFetch: () => this.helper.when.waitForResponse('fetchRules'),
  waitForMultipleFetches: () => this.helper.when.waitForResponses('fetchRules', 3),
  waitForLastFetch: () => this.helper.when.waitForLastCall('fetchRules', 10000),
};
```

---

### Verifying Outgoing HTTP Request Data

After intercepting a request, use `CypressHelper` `get` methods to verify its payload, query params, headers, and URL. This is essential for testing that services send correct data to APIs.

#### Available getters for intercepted requests

| Method | Returns | Description |
|:-------|:--------|:------------|
| `helper.get.requestBody(alias)` | `Chainable<any>` | Request body (parsed JSON object or buffer) |
| `helper.get.requestQueryParams(alias)` | `Chainable<{[k: string]: string}>` | Query parameters as key-value pairs |
| `helper.get.requestHeader(alias)` | `Chainable<{[key: string]: string \| string[]}>` | Request headers |
| `helper.get.requestUrl(alias)` | `Chainable<string>` | Full request URL |
| `helper.get.responseBody(alias)` | `Chainable<any>` | Response body |
| `helper.get.responseHeader(alias)` | `Chainable<{[key: string]: string \| string[]}>` | Response headers |
| `helper.get.numberOfRequests(alias)` | `Chainable<number>` | Number of requests intercepted with this alias |

#### Driver pattern for exposing request data

```typescript
// In driver's get:
get = {
  
  createRuleRequestBody: () => this.helper.get.requestBody('createRule'),
  createRuleRequestUrl: () => this.helper.get.requestUrl('createRule'),
  createRuleRequestHeader: () => this.helper.get.requestHeader('createRule'),
  searchQueryParams: () => this.helper.get.requestQueryParams('searchRules'),
  fetchRulesCallCount: () => this.helper.get.numberOfRequests('fetchRules'),
};
```

#### Test examples — verifying request payload

```typescript
describe('Given a new rule is submitted', () => {
  const title = chance.sentence({ words: 3 });
  const description = chance.paragraph();

  beforeEach(() => {
    given.interceptCreateRule();   // sets up intercept with alias 'createRule'
    given.createRuleResponse();
    when.render();
    when.fillTitle(title);
    when.fillDescription(description);
    when.submitForm();
    when.waitForCreateRule();      // waits for the intercepted response
  });

  it('Then the request body should contain the title', () => {
    then(get.createRuleRequestBody()).shouldDeepNestedInclude({ title });
  });

  it('Then the request body should contain the description', () => {
    then(get.createRuleRequestBody()).shouldDeepNestedInclude({ description });
  });
});
```

#### Test examples — verifying query params

```typescript
describe('Given a search is performed', () => {
  const searchTerm = chance.word();

  beforeEach(() => {
    given.interceptSearch();  // alias: 'searchRules'
    when.render();
    when.search(searchTerm);
    when.waitForSearch();
  });

  it('Then the query params should include the search term', () => {
    then(get.searchQueryParams()).shouldDeepNestedInclude({ q: searchTerm });
  });
});
```

#### Test examples — verifying request headers

```typescript
it('Then the request should include the auth header', () => {
  then(get.createRuleRequestHeader()).shouldDeepNestedInclude({
    authorization: `token ${expectedToken}`,
  });
});
```

#### Test examples — verifying request URL

```typescript
it('Then the request URL should target the correct endpoint', () => {
  then(get.createRuleRequestUrl()).shouldInclude('/api/rules');
});
```

#### Test examples — verifying number of requests

```typescript
it('Then it should have made exactly one API call', () => {
  then(get.fetchRulesCallCount()).shouldEqual(1);
});
```

#### Full driver example with HTTP interception

```typescript
export class MyFeatureDriver extends BaseTestDriver<MyFeatureDriverProps> {
  beforeAndAfter = () => {
    this.helper.beforeAndAfter();
    beforeEach(() => {
      this.props = {};
    });
  };

  given = {
    interceptSaveRule: () => {
      this.helper.given.interceptAndMockResponse({
        method: 'POST',
        url: '**/api/rules',
        alias: 'saveRule',
        response: { id: 'new-rule-id', status: 'created' },
      });
    },
    interceptFetchRules: (rules: any[]) => {
      this.helper.given.interceptAndMockResponse({
        url: '**/api/rules**',
        alias: 'fetchRules',
        response: { body: rules },
      });
    },
  };

  when = {
    waitForSave: () => this.helper.when.waitForResponse('saveRule'),
    waitForFetch: () => this.helper.when.waitForResponse('fetchRules'),
  };

  get = {
    saveRuleRequestBody: () => this.helper.get.requestBody('saveRule'),
    saveRuleRequestHeader: () => this.helper.get.requestHeader('saveRule'),
    saveRuleRequestUrl: () => this.helper.get.requestUrl('saveRule'),
    fetchRulesQueryParams: () => this.helper.get.requestQueryParams('fetchRules'),
    fetchRulesCallCount: () => this.helper.get.numberOfRequests('fetchRules'),
  };
}
```

---

## Step 3: Create the Test File

### Test Template

The test file is a `.cy.ts` file (no JSX). It imports the component, context providers, and `RenderFactory`, then configures rendering in `beforeEach`:

```typescript
import { then } from '@shellygo/cypress-test-utils';
import Chance from 'chance';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { MyComponentDriver } from './MyComponent.driver';
import { RenderFactory } from '../../__test-utils__/renderer';
import { MyComponent } from './MyComponent';

const chance = new Chance();

describe('MyComponent', () => {
  const driver = new MyComponentDriver();
  const { given, when, get } = driver;
  driver.beforeAndAfter();

  beforeEach(() => {
    const renderFactory = new RenderFactory({
      getReactOptions: () => ({
        type: MyComponent,
        props: get.props() as any,
        children: get.children(),
      }),
      wrappers: [
        { type: MemoryRouter },
        { type: ThemeProvider },
      ],
    });
    given.renderer(renderFactory.createRenderer());
  });

  describe('Given a title is provided', () => {
    const title = chance.sentence({ words: 3 });

    beforeEach(() => {
      given.title(title);
    });

    describe('When the component is rendered', () => {
      beforeEach(() => {
        when.render();
      });

      it('Then the title should be displayed', () => {
        then(get.titleText()).shouldEqual(title);
      });
    });
  });

  describe('Given the component is active', () => {
    beforeEach(() => {
      given.isActive();  // defaults to true
      given.onClickSpy();
    });

    describe('When the button is clicked', () => {
      beforeEach(() => {
        when.render();
        when.clickButton();
      });

      it('Then onClick should have been called', () => {
        then(get.onClickSpy()).shouldHaveBeenCalledOnce();
      });
    });
  });
});
```

### Key Test Rules

1. **BDD structure**: `describe('Given ...') → describe('When ...') → it('Then ...')`
2. **One assertion per `it` block** — never multiple `then()` calls in one test
3. **Random data for all test values** — use `chance` (strings, numbers, URLs, names, emails, etc.)
4. **Never hard-code arbitrary strings** — only hard-code business logic constants (e.g. `'Copy Counter'`)
5. **Assertions use `then()` from `@shellygo/cypress-test-utils`** — e.g. `then(get.text()).shouldEqual(expected)`. Never use `.should()`, `expect()`, or any direct Cypress assertion
6. **Props are set in `beforeEach`**, rendering is in a nested `beforeEach`, assertions in `it`
7. **Destructure driver at top**: `const { given, when, get } = driver;`
8. **No direct Cypress API in test files** — never use `cy.*`, `Cypress.*`, or call `.click()`/`.type()` on Cypress chainables. All setup goes through `given`, all actions through `when`, all queries through `get`, all assertions through `then()`. Use `when.waitUntil(() => get.elementByText('expected text'))` instead of `cy.wait()` for async waits
9. **Never assert on implementation details (CSS classes, internal state)** — CSS class names are implementation details that can change without affecting functionality. Do not use `shouldHaveClass`, `shouldInclude`/`shouldNotInclude` on class strings, or any assertion that reads the `class` attribute. Instead, assert on **actual computed styles** using `shouldHaveCss` on the element. This decouples tests from the CSS framework (Tailwind, CSS modules, plain CSS, etc.) so class names can be renamed, refactored, or replaced without breaking tests. Drivers should **never expose class-name getters** (e.g. `orbClass`, `dropzoneClass`) — expose the element itself and let the test assert on its computed style.
10. **Verify outgoing HTTP request data** — when testing services or components that make HTTP calls, intercept the request and assert on its body, query params, headers, and URL using `then(get.requestBody()).shouldDeepNestedInclude(...)`, `then(get.queryParams()).shouldDeepNestedInclude(...)`, etc. Each assertion gets its own `it` block. This ensures the service sends the correct payload to the API.
11. **Never write weak existence-only assertions** — `shouldExist` alone is almost never sufficient. Always assert on something the user actually sees or interacts with: visible text (`shouldEqual`, `shouldInclude`), visibility (`shouldBeVisible`), enabled/disabled state (`shouldBeEnabled`, `shouldBeDisabled`), or a computed style (`shouldHaveCss`). For example, to verify a Cancel button, assert both that the button is visible **and** that its text is `'Cancel'`. Each property gets its own `it` block. The goal is to catch real regressions — an element can "exist" while being invisible, empty, or showing the wrong text.
12. **Store mock data in variables** — any data passed to `given` methods (e.g. `given.fileContent(path, JSON.stringify(data))`) must be stored in a variable declared at the `describe` scope so it is accessible from `it` blocks for assertions. Never inline hard-coded literals into `given` calls — the test body cannot reference them. Use builders from `dataBuilder.ts` to construct structured data, and `chance` for scalar values.

### Style Assertion Examples

```tsx
// ✅ Correct — assert on what the user actually sees (computed styles)
then(get.dropzone()).shouldHaveCss('cursor', 'not-allowed');
then(get.dropzone()).shouldHaveCss('border-color', 'rgb(59, 130, 246)');
then(get.dropzone()).shouldHaveCss('background-color', 'rgb(239, 246, 255)');
then(get.celestial()).shouldHaveCss('color', 'rgb(245, 158, 11)');
then(get.orb()).shouldHaveCss('background-image', 'radial-gradient(circle at 30% 30%, ...)');
then(get.selectedItem()).shouldHaveCss('box-shadow', 'rgb(255, 255, 255) 0px 0px 0px 2px, ...');

// ❌ Wrong — asserting on implementation details (class names)
then(get.orbClass()).shouldInclude('orb-light');
then(get.element()).shouldHaveClass('border-blue-500');
then(get.celestialClass()).shouldInclude('sun');
then(get.dropzoneClass()).shouldNotInclude('bg-blue-50');
```

### Mock Data Builders

Use the `builder-pattern` package to create randomized mock data factories:

```typescript
import { Builder } from 'builder-pattern';
import Chance from 'chance';

const chance = new Chance();

export function aMyType(overrides?: Partial<MyType>): MyType {
  const builder = Builder<MyType>()
    .field1(chance.word())
    .field2(chance.integer({ min: 0, max: 100 }));

  if (overrides) {
    Object.entries(overrides).forEach(([key, value]) => {
      (builder as any)[key](value);
    });
  }
  return builder.build();
}
```

Usage:

```typescript
const item = aMyType();                                    // fully random
const item2 = aMyType({ title: chance.sentence(), active: true }); // with overrides
```

#### Builders for structured mock data in `given` calls

When mock data is passed to `given` methods (e.g. file content, API responses), it must be:
1. **Built using a builder** — never hard-code JSON structures inline
2. **Stored in a variable** at `describe` scope — so `it` blocks can reference the same data for assertions

```typescript
// ✅ Correct — builder + variable at describe scope
const metaData = aMetaData();
const labelsConfig = aLabelsConfig();
const rules: MockRuleData[] = chance.n(aMockRuleData, 2);

beforeEach(() => {
  given.fileContent('meta-data.json', JSON.stringify(metaData));
  given.fileContent('labels-config.json', JSON.stringify(labelsConfig));
});

it('Then the visitors count should match', () => {
  then(get.visitorsCount()).shouldEqual(metaData.visitorsCount);
});
```

```typescript
// ❌ Wrong — hard-coded inline, inaccessible from test body
beforeEach(() => {
  given.fileContent('meta-data.json', JSON.stringify({ visitorsCount: '42' }));
  given.fileContent('labels-config.json', JSON.stringify({
    categories: [{ id: 'languages', title: 'Languages', items: ['react'] }],
  }));
});

// Cannot reference '42' or the category items in it() blocks!
```

## Step 4: Add `data-hook` Attributes

Every testable element in the component must have a `data-hook` attribute:

```tsx
<div data-hook="my-component">
  <h2 data-hook="my-title">{title}</h2>
  <button data-hook="my-button" onClick={onClick}>Click</button>
</div>
```


## Step 6: Run Tests

```bash
# Run all component tests
npx cypress run --component

# Run a specific test file
npx cypress run --component --spec "src/components/MyComponent/MyComponent.cy.ts"
```

## Checklist

- [ ] `beforeAndAfter` resets `this.props` with defaults for required props
- [ ] Boolean `given` methods default to `true`
- [ ] Test file imports `chance` and uses random data everywhere
- [ ] No hard-coded arbitrary strings — only business logic constants
- [ ] BDD structure: Given/When/Then
- [ ] One assertion per `it` block
- [ ] All testable elements have `data-hook` attributes
- [ ] Spies use `helper.given.spy()` / `helper.get.spy()` — never raw Cypress
- [ ] No direct Cypress API (`cy.*`, `Cypress.*`, `.click()`, `.should()`, `expect()`) in tests or drivers — all through `CypressHelper`, driver `given`/`when`/`get`, and `then()`
- [ ] No CSS class assertions — use `shouldHaveCss('property', 'value')` on elements, never `shouldHaveClass` or class string checks
- [ ] Service stubs use `helper.given.stubObjectMethod()` — never raw `cy.stub()`
- [ ] HTTP intercepts use `helper.given.intercept()` or `helper.given.interceptAndMockResponse()` — never raw `cy.intercept()`
- [ ] Outgoing request data (body, query params, headers, URL) verified via `helper.get.requestBody(alias)`, `helper.get.requestQueryParams(alias)`, etc.
- [ ] Waiting for intercepted requests uses `helper.when.waitForResponse(alias)` — never `cy.wait('@alias')`
- [ ] Test file is a `.cy.ts` file — sets up `RenderFactory` with `getReactOptions` and `wrappers` in `beforeEach`
- [ ] `given.renderer(renderFactory.createRenderer())` called in test file `beforeEach`
- [ ] Dynamic wrapper props use function form `wrappers: () => [...]` when provider props depend on driver state
- [ ] No weak existence-only assertions — every `it` asserts on visible text, visibility, state, or style, not just `shouldExist`
- [ ] Mock data stored in variables at `describe` scope — never hard-coded inline in `given` calls; structured data built with builders from `dataBuilder.ts`
- [ ] `data-hook` ownership enforced — each `data-hook` string referenced via `this.helper` only in the owning component's driver; parent/page drivers delegate through child driver instances
