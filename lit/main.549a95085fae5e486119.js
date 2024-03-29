/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/pokemon-catalog/pokemon-catalog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/components/pokemon-catalog/pokemon-catalog.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonCatalog: () => (/* binding */ PokemonCatalog)
/* harmony export */ });
/* harmony import */ var _components_pokemon_go_pokemon_go_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/pokemon-go/pokemon-go.component */ "./src/components/pokemon-go/pokemon-go.component.ts");
/* harmony import */ var _components_pokemon_image_pokemon_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/pokemon-image/pokemon-image.component */ "./src/components/pokemon-image/pokemon-image.component.ts");
/* harmony import */ var _lit_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/context */ "./node_modules/@lit/context/development/index.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/pokemon.service */ "./src/services/pokemon.service.ts");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _pokemon_catalog_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pokemon-catalog.component.scss */ "./src/components/pokemon-catalog/pokemon-catalog.component.scss");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};







let PokemonCatalog = class extends lit__WEBPACK_IMPORTED_MODULE_4__.LitElement {
  constructor() {
    super();
    this.isNextDisabled = () => !this.pokemon.next || !this.pokemonService;
    this.isPrevDisabled = () => !this.pokemon.previous || !this.pokemonService;
    this.loadPokemon = async () => this.pokemon = await this.pokemonService.getPokemonByOffset();
    this.loadNext = async () => {
      this.onNext && this.onNext();
      this.pokemon = await this.pokemonService.getPokemon(this.pokemon.next);
    };
    this.loadPrev = async () => {
      this.pokemon = await this.pokemonService.getPokemon(this.pokemon.previous);
      this.onPrev && this.onPrev();
    };
    this.getPokemonIndex = () => Number(
      this.pokemon?.results[0].url.split("/").filter((element) => element).pop()
    );
    this.getPokemonName = () => this.pokemon?.results[0].name;
    this.getOffsetFromIndex = (index) => (Number(index) - 1).toString();
    this.fetchPokemonByOffset = async (index) => {
      const pokemon = await this.pokemonService?.getPokemonByOffset(this.getOffsetFromIndex(index));
      if (pokemon?.results.length) {
        this.pokemon = pokemon;
      } else {
        alert(`pokemon ${index} not found`);
      }
    };
    const image = new _components_pokemon_image_pokemon_image_component__WEBPACK_IMPORTED_MODULE_1__.PokemonImageComponent();
    new _components_pokemon_go_pokemon_go_component__WEBPACK_IMPORTED_MODULE_0__.PokemonGoComponent();
  }
  static get styles() {
    return _pokemon_catalog_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"];
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.pokemonService.getPokemon)
      this.loadPokemon();
  }
  render() {
    return !this.pokemon ? "" : lit__WEBPACK_IMPORTED_MODULE_4__.html`
          <div class="catalog">
            <pokemon-image pokemonIndex="${this.getPokemonIndex()}"></pokemon-image>
            <h2 data-hook="pokemon-name">${this.pokemon.results[0].name}</h2>
            <p data-hook="count">${this.getPokemonIndex()} of ${this.pokemon.count}</p>
            <div>
              <button data-hook="prev" @click="${this.loadPrev}" .disabled="${this.isPrevDisabled()}">Prev</button>
              <button data-hook="next" @click="${this.loadNext}" .disabled="${this.isNextDisabled()}">Next</button>
            </div>
            <div>
              <pokemon-go .onSubmit="${this.fetchPokemonByOffset}"></pokemon-go>
            </div>
          </div>
        `;
  }
};
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.property)()
], PokemonCatalog.prototype, "onPrev", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.property)()
], PokemonCatalog.prototype, "onNext", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.state)()
], PokemonCatalog.prototype, "pokemon", 2);
__decorateClass([
  (0,_lit_context__WEBPACK_IMPORTED_MODULE_2__.consume)({ context: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__.pokemonServiceContext }),
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.property)({ attribute: false })
], PokemonCatalog.prototype, "pokemonService", 2);
PokemonCatalog = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.customElement)("pokemon-catalog")
], PokemonCatalog);


/***/ }),

/***/ "./src/components/pokemon-go/pokemon-go.component.ts":
/*!***********************************************************!*\
  !*** ./src/components/pokemon-go/pokemon-go.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonGoComponent: () => (/* binding */ PokemonGoComponent)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _pokemon_go_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemon-go.component.scss */ "./src/components/pokemon-go/pokemon-go.component.scss");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let PokemonGoComponent = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    this.inputValue = "";
    this.handleInputChange = (event) => this.inputValue = event.target.value;
    this.handleKeyDown = (event) => {
      if (!event.ctrlKey && !["Delete", "Backspace", "ArrowLeft", "ArrowRight", "Enter", "Control"].includes(event.key) && /[^0-9]/g.test(event.key)) {
        event.preventDefault();
      }
    };
    this.handleFormSubmit = (event) => {
      event.preventDefault();
      this.onSubmit(this.inputValue);
      this.inputValue = "";
    };
  }
  static get styles() {
    return _pokemon_go_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <form class="go" @submit=${this.handleFormSubmit}>
        <input
          data-hook="pokemon-index"
          type="text"
          .value=${this.inputValue}
          @input=${this.handleInputChange}
          @keydown=${this.handleKeyDown}
          placeholder="Pokemon"
        />
        <button type="submit" .disabled=${this.inputValue === ""} data-hook="go">Go</button>
      </form>
    `;
  }
};
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], PokemonGoComponent.prototype, "inputValue", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], PokemonGoComponent.prototype, "onSubmit", 2);
PokemonGoComponent = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("pokemon-go")
], PokemonGoComponent);


/***/ }),

/***/ "./src/components/pokemon-image/pokemon-image.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/pokemon-image/pokemon-image.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonImageComponent: () => (/* binding */ PokemonImageComponent)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _pokemon_image_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemon-image.component.scss */ "./src/components/pokemon-image/pokemon-image.component.scss");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



let PokemonImageComponent = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  constructor() {
    super(...arguments);
    this.showFallbackImage = false;
    this.onImageError = (event) => {
      this.showFallbackImage = true;
    };
    this.getPokemonImage = () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.pokemonIndex}.gif`;
    this.getFallbackImage = () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonIndex}.png`;
  }
  static get styles() {
    return _pokemon_image_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("pokemonIndex")) {
      this.showFallbackImage = false;
    }
  }
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <div>
        ${this.showFallbackImage ? lit__WEBPACK_IMPORTED_MODULE_0__.html` <img
              data-hook="pokemon-fallback-image"
              src="${this.getFallbackImage()}"
              class="pokemon-fallback"
              alt="pokemon"
            />` : lit__WEBPACK_IMPORTED_MODULE_0__.html`<img
              data-hook="pokemon-image"
              src="${this.getPokemonImage()}"
              class="pokemon"
              alt="pokemon"
              @error="${this.onImageError}"
            />`}
      </div>
    `;
  }
};
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], PokemonImageComponent.prototype, "pokemonIndex", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], PokemonImageComponent.prototype, "showFallbackImage", 2);
PokemonImageComponent = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("pokemon-image")
], PokemonImageComponent);


/***/ }),

/***/ "./src/services/pokemon.service.ts":
/*!*****************************************!*\
  !*** ./src/services/pokemon.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonService: () => (/* binding */ PokemonService),
/* harmony export */   pokemonServiceContext: () => (/* binding */ pokemonServiceContext)
/* harmony export */ });
/* harmony import */ var _lit_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/context */ "./node_modules/@lit/context/development/index.js");

const pokemonServiceContext = (0,_lit_context__WEBPACK_IMPORTED_MODULE_0__.createContext)("__pokemon_context__");
class PokemonService {
  constructor() {
    this.baseUrl = "https://pokeapi.co/api/v2/pokemon";
    this.getPokemon = async (url) => await (await fetch(url)).json();
    this.getPokemonByOffset = async (offset = "0") => {
      const params = new URLSearchParams({ limit: "1", offset });
      const fetchUrl = new URL(this.baseUrl);
      fetchUrl.search = params.toString();
      return this.getPokemon(fetchUrl);
    };
  }
}


/***/ }),

/***/ "./src/components/pokemon-catalog/pokemon-catalog.component.scss":
/*!***********************************************************************!*\
  !*** ./src/components/pokemon-catalog/pokemon-catalog.component.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`:host{display:flex;height:95vh}.catalog{display:flex;flex-direction:column;align-self:center;align-items:center;width:100vw}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./src/components/pokemon-go/pokemon-go.component.scss":
/*!*************************************************************!*\
  !*** ./src/components/pokemon-go/pokemon-go.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`.go{padding-top:.5rem}input[type=text]{padding:.5rem}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./src/components/pokemon-image/pokemon-image.component.scss":
/*!*******************************************************************!*\
  !*** ./src/components/pokemon-image/pokemon-image.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`.pokemon{height:4rem}.pokemon-fallback{height:8rem}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`.app{background-color:#80a7f7;min-height:95vh;display:flex;flex-direction:column;justify-content:center;font-size:calc(10px + 2vmin);color:#fff}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./node_modules/@lit/context/development/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@lit/context/development/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextConsumer: () => (/* reexport safe */ _lib_controllers_context_consumer_js__WEBPACK_IMPORTED_MODULE_2__.ContextConsumer),
/* harmony export */   ContextEvent: () => (/* reexport safe */ _lib_context_request_event_js__WEBPACK_IMPORTED_MODULE_0__.ContextRequestEvent),
/* harmony export */   ContextProvider: () => (/* reexport safe */ _lib_controllers_context_provider_js__WEBPACK_IMPORTED_MODULE_3__.ContextProvider),
/* harmony export */   ContextRoot: () => (/* reexport safe */ _lib_context_root_js__WEBPACK_IMPORTED_MODULE_4__.ContextRoot),
/* harmony export */   consume: () => (/* reexport safe */ _lib_decorators_consume_js__WEBPACK_IMPORTED_MODULE_6__.consume),
/* harmony export */   createContext: () => (/* reexport safe */ _lib_create_context_js__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   provide: () => (/* reexport safe */ _lib_decorators_provide_js__WEBPACK_IMPORTED_MODULE_5__.provide)
/* harmony export */ });
/* harmony import */ var _lib_context_request_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/context-request-event.js */ "./node_modules/@lit/context/development/lib/context-request-event.js");
/* harmony import */ var _lib_create_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/create-context.js */ "./node_modules/@lit/context/development/lib/create-context.js");
/* harmony import */ var _lib_controllers_context_consumer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/controllers/context-consumer.js */ "./node_modules/@lit/context/development/lib/controllers/context-consumer.js");
/* harmony import */ var _lib_controllers_context_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/controllers/context-provider.js */ "./node_modules/@lit/context/development/lib/controllers/context-provider.js");
/* harmony import */ var _lib_context_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/context-root.js */ "./node_modules/@lit/context/development/lib/context-root.js");
/* harmony import */ var _lib_decorators_provide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/decorators/provide.js */ "./node_modules/@lit/context/development/lib/decorators/provide.js");
/* harmony import */ var _lib_decorators_consume_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/decorators/consume.js */ "./node_modules/@lit/context/development/lib/decorators/consume.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */









/***/ }),

/***/ "./node_modules/@lit/context/development/lib/context-request-event.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/context/development/lib/context-request-event.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextRequestEvent: () => (/* binding */ ContextRequestEvent)
/* harmony export */ });
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ContextRequestEvent extends Event {
  /**
   *
   * @param context the context key to request
   * @param callback the callback that should be invoked when the context with the specified key is available
   * @param subscribe when, true indicates we want to subscribe to future updates
   */
  constructor(context, callback, subscribe) {
    super("context-request", { bubbles: true, composed: true });
    this.context = context;
    this.callback = callback;
    this.subscribe = subscribe ?? false;
  }
}


/***/ }),

/***/ "./node_modules/@lit/context/development/lib/context-root.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/context/development/lib/context-root.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextRoot: () => (/* binding */ ContextRoot)
/* harmony export */ });
/* harmony import */ var _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context-request-event.js */ "./node_modules/@lit/context/development/lib/context-request-event.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

class ContextRoot {
  constructor() {
    this.pendingContextRequests = /* @__PURE__ */ new Map();
    this.onContextProvider = (event) => {
      const pendingRequestData = this.pendingContextRequests.get(event.context);
      if (pendingRequestData === void 0) {
        return;
      }
      this.pendingContextRequests.delete(event.context);
      const { requests } = pendingRequestData;
      for (const { elementRef, callbackRef } of requests) {
        const element = elementRef.deref();
        const callback = callbackRef.deref();
        if (element === void 0 || callback === void 0) {
        } else {
          element.dispatchEvent(new _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__.ContextRequestEvent(event.context, callback, true));
        }
      }
    };
    this.onContextRequest = (event) => {
      if (event.subscribe !== true) {
        return;
      }
      const element = event.composedPath()[0];
      const callback = event.callback;
      let pendingContextRequests = this.pendingContextRequests.get(event.context);
      if (pendingContextRequests === void 0) {
        this.pendingContextRequests.set(event.context, pendingContextRequests = {
          callbacks: /* @__PURE__ */ new WeakMap(),
          requests: []
        });
      }
      let callbacks = pendingContextRequests.callbacks.get(element);
      if (callbacks === void 0) {
        pendingContextRequests.callbacks.set(element, callbacks = /* @__PURE__ */ new WeakSet());
      }
      if (callbacks.has(callback)) {
        return;
      }
      callbacks.add(callback);
      pendingContextRequests.requests.push({
        elementRef: new WeakRef(element),
        callbackRef: new WeakRef(callback)
      });
    };
  }
  /**
   * Attach the ContextRoot to a given element to intercept `context-request` and
   * `context-provider` events.
   *
   * @param element an element to add event listeners to
   */
  attach(element) {
    element.addEventListener("context-request", this.onContextRequest);
    element.addEventListener("context-provider", this.onContextProvider);
  }
  /**
   * Removes the ContextRoot event listeners from a given element.
   *
   * @param element an element from which to remove event listeners
   */
  detach(element) {
    element.removeEventListener("context-request", this.onContextRequest);
    element.removeEventListener("context-provider", this.onContextProvider);
  }
}


/***/ }),

/***/ "./node_modules/@lit/context/development/lib/controllers/context-consumer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@lit/context/development/lib/controllers/context-consumer.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextConsumer: () => (/* binding */ ContextConsumer)
/* harmony export */ });
/* harmony import */ var _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context-request-event.js */ "./node_modules/@lit/context/development/lib/context-request-event.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

class ContextConsumer {
  constructor(host, contextOrOptions, callback, subscribe) {
    this.subscribe = false;
    this.provided = false;
    this.value = void 0;
    this._callback = (value, unsubscribe) => {
      if (this.unsubscribe) {
        if (this.unsubscribe !== unsubscribe) {
          this.provided = false;
          this.unsubscribe();
        }
        if (!this.subscribe) {
          this.unsubscribe();
        }
      }
      this.value = value;
      this.host.requestUpdate();
      if (!this.provided || this.subscribe) {
        this.provided = true;
        if (this.callback) {
          this.callback(value, unsubscribe);
        }
      }
      this.unsubscribe = unsubscribe;
    };
    this.host = host;
    if (contextOrOptions.context !== void 0) {
      const options = contextOrOptions;
      this.context = options.context;
      this.callback = options.callback;
      this.subscribe = options.subscribe ?? false;
    } else {
      this.context = contextOrOptions;
      this.callback = callback;
      this.subscribe = subscribe ?? false;
    }
    this.host.addController(this);
  }
  hostConnected() {
    this.dispatchRequest();
  }
  hostDisconnected() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = void 0;
    }
  }
  dispatchRequest() {
    this.host.dispatchEvent(new _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__.ContextRequestEvent(this.context, this._callback, this.subscribe));
  }
}


/***/ }),

/***/ "./node_modules/@lit/context/development/lib/controllers/context-provider.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@lit/context/development/lib/controllers/context-provider.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextProvider: () => (/* binding */ ContextProvider),
/* harmony export */   ContextProviderEvent: () => (/* binding */ ContextProviderEvent)
/* harmony export */ });
/* harmony import */ var _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context-request-event.js */ "./node_modules/@lit/context/development/lib/context-request-event.js");
/* harmony import */ var _value_notifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../value-notifier.js */ "./node_modules/@lit/context/development/lib/value-notifier.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


class ContextProviderEvent extends Event {
  /**
   *
   * @param context the context which this provider can provide
   */
  constructor(context) {
    super("context-provider", { bubbles: true, composed: true });
    this.context = context;
  }
}
class ContextProvider extends _value_notifier_js__WEBPACK_IMPORTED_MODULE_1__.ValueNotifier {
  constructor(host, contextOrOptions, initialValue) {
    super(contextOrOptions.context !== void 0 ? contextOrOptions.initialValue : initialValue);
    this.onContextRequest = (ev) => {
      const consumerHost = ev.composedPath()[0];
      if (ev.context !== this.context || consumerHost === this.host) {
        return;
      }
      ev.stopPropagation();
      this.addCallback(ev.callback, consumerHost, ev.subscribe);
    };
    this.onProviderRequest = (ev) => {
      const childProviderHost = ev.composedPath()[0];
      if (ev.context !== this.context || childProviderHost === this.host) {
        return;
      }
      const seen = /* @__PURE__ */ new Set();
      for (const [callback, { consumerHost }] of this.subscriptions) {
        if (seen.has(callback)) {
          continue;
        }
        seen.add(callback);
        consumerHost.dispatchEvent(new _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__.ContextRequestEvent(this.context, callback, true));
      }
      ev.stopPropagation();
    };
    this.host = host;
    if (contextOrOptions.context !== void 0) {
      this.context = contextOrOptions.context;
    } else {
      this.context = contextOrOptions;
    }
    this.attachListeners();
    this.host.addController?.(this);
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest);
    this.host.addEventListener("context-provider", this.onProviderRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new ContextProviderEvent(this.context));
  }
}


/***/ }),

/***/ "./node_modules/@lit/context/development/lib/create-context.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@lit/context/development/lib/create-context.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContext: () => (/* binding */ createContext)
/* harmony export */ });
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function createContext(key) {
  return key;
}


/***/ }),

/***/ "./node_modules/@lit/context/development/lib/decorators/consume.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@lit/context/development/lib/decorators/consume.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   consume: () => (/* binding */ consume)
/* harmony export */ });
/* harmony import */ var _controllers_context_consumer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/context-consumer.js */ "./node_modules/@lit/context/development/lib/controllers/context-consumer.js");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

function consume({ context, subscribe }) {
  return (protoOrTarget, nameOrContext) => {
    if (typeof nameOrContext === "object") {
      nameOrContext.addInitializer(function() {
        new _controllers_context_consumer_js__WEBPACK_IMPORTED_MODULE_0__.ContextConsumer(this, {
          context,
          callback: (value) => {
            this[nameOrContext.name] = value;
          },
          subscribe
        });
      });
    } else {
      protoOrTarget.constructor.addInitializer((element) => {
        new _controllers_context_consumer_js__WEBPACK_IMPORTED_MODULE_0__.ContextConsumer(element, {
          context,
          callback: (value) => {
            element[nameOrContext] = value;
          },
          subscribe
        });
      });
    }
  };
}


/***/ }),

/***/ "./node_modules/@lit/context/development/lib/decorators/provide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@lit/context/development/lib/decorators/provide.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provide: () => (/* binding */ provide)
/* harmony export */ });
/* harmony import */ var _controllers_context_provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/context-provider.js */ "./node_modules/@lit/context/development/lib/controllers/context-provider.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

function provide({ context }) {
  return (protoOrTarget, nameOrContext) => {
    const controllerMap = /* @__PURE__ */ new WeakMap();
    if (typeof nameOrContext === "object") {
      nameOrContext.addInitializer(function() {
        controllerMap.set(this, new _controllers_context_provider_js__WEBPACK_IMPORTED_MODULE_0__.ContextProvider(this, { context }));
      });
      return {
        get() {
          return protoOrTarget.get.call(this);
        },
        set(value) {
          controllerMap.get(this)?.setValue(value);
          return protoOrTarget.set.call(this, value);
        },
        init(value) {
          controllerMap.get(this)?.setValue(value);
          return value;
        }
      };
    } else {
      protoOrTarget.constructor.addInitializer((element) => {
        controllerMap.set(element, new _controllers_context_provider_js__WEBPACK_IMPORTED_MODULE_0__.ContextProvider(element, { context }));
      });
      const descriptor = Object.getOwnPropertyDescriptor(protoOrTarget, nameOrContext);
      let newDescriptor;
      if (descriptor === void 0) {
        const valueMap = /* @__PURE__ */ new WeakMap();
        newDescriptor = {
          get: function() {
            return valueMap.get(this);
          },
          set: function(value) {
            controllerMap.get(this).setValue(value);
            valueMap.set(this, value);
          },
          configurable: true,
          enumerable: true
        };
      } else {
        const oldSetter = descriptor.set;
        newDescriptor = {
          ...descriptor,
          set: function(value) {
            controllerMap.get(this).setValue(value);
            oldSetter?.call(this, value);
          }
        };
      }
      Object.defineProperty(protoOrTarget, nameOrContext, newDescriptor);
      return;
    }
  };
}


/***/ }),

/***/ "./node_modules/@lit/context/development/lib/value-notifier.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@lit/context/development/lib/value-notifier.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueNotifier: () => (/* binding */ ValueNotifier)
/* harmony export */ });
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ValueNotifier {
  get value() {
    return this._value;
  }
  set value(v) {
    this.setValue(v);
  }
  setValue(v, force = false) {
    const update = force || !Object.is(v, this._value);
    this._value = v;
    if (update) {
      this.updateObservers();
    }
  }
  constructor(defaultValue) {
    this.subscriptions = /* @__PURE__ */ new Map();
    this.updateObservers = () => {
      for (const [callback, { disposer }] of this.subscriptions) {
        callback(this._value, disposer);
      }
    };
    if (defaultValue !== void 0) {
      this.value = defaultValue;
    }
  }
  addCallback(callback, consumerHost, subscribe) {
    if (!subscribe) {
      callback(this.value);
      return;
    }
    if (!this.subscriptions.has(callback)) {
      this.subscriptions.set(callback, {
        disposer: () => {
          this.subscriptions.delete(callback);
        },
        consumerHost
      });
    }
    const { disposer } = this.subscriptions.get(callback);
    callback(this.value, disposer);
  }
  clearCallbacks() {
    this.subscriptions.clear();
  }
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* binding */ CSSResult),
/* harmony export */   adoptStyles: () => (/* binding */ adoptStyles),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   getCompatibleStyle: () => (/* binding */ getCompatibleStyle),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* binding */ unsafeCSS)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
const global = globalThis;
const supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === void 0 || global.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = /* @__PURE__ */ new WeakMap();
class CSSResult {
  constructor(cssText, strings, safeToken) {
    this["_$cssResult$"] = true;
    if (safeToken !== constructionToken) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = cssText;
    this._strings = strings;
  }
  // This is a getter so that it's lazy. In practice, this means stylesheets
  // are not created until the first element instance is made.
  get styleSheet() {
    let styleSheet = this._styleSheet;
    const strings = this._strings;
    if (supportsAdoptingStyleSheets && styleSheet === void 0) {
      const cacheable = strings !== void 0 && strings.length === 1;
      if (cacheable) {
        styleSheet = cssTagCache.get(strings);
      }
      if (styleSheet === void 0) {
        (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
        if (cacheable) {
          cssTagCache.set(strings, styleSheet);
        }
      }
    }
    return styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const textFromCSSResult = (value) => {
  if (value["_$cssResult$"] === true) {
    return value.cssText;
  } else if (typeof value === "number") {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`);
  }
};
const unsafeCSS = (value) => new CSSResult(typeof value === "string" ? value : String(value), void 0, constructionToken);
const css = (strings, ...values) => {
  const cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, strings, constructionToken);
};
const adoptStyles = (renderRoot, styles) => {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  } else {
    for (const s of styles) {
      const style = document.createElement("style");
      const nonce = global["litNonce"];
      if (nonce !== void 0) {
        style.setAttribute("nonce", nonce);
      }
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    }
  }
};
const cssResultFromStyleSheet = (sheet) => {
  let cssText = "";
  for (const rule of sheet.cssRules) {
    cssText += rule.cssText;
  }
  return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === void 0 ? (s) => s : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/base.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/base.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   desc: () => (/* binding */ desc)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const desc = (obj, name, descriptor) => {
  descriptor.configurable = true;
  descriptor.enumerable = true;
  if (
    // We check for Reflect.decorate each time, in case the zombiefill
    // is applied via lazy loading some Angular code.
    Reflect.decorate && typeof name !== "object"
  ) {
    Object.defineProperty(obj, name, descriptor);
  }
  return descriptor;
};


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* binding */ customElement)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const customElement = (tagName) => (classOrTarget, context) => {
  if (context !== void 0) {
    context.addInitializer(() => {
      customElements.define(tagName, classOrTarget);
    });
  } else {
    customElements.define(tagName, classOrTarget);
  }
};


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/event-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventOptions: () => (/* binding */ eventOptions)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function eventOptions(options) {
  return (protoOrValue, nameOrContext) => {
    const method = typeof protoOrValue === "function" ? protoOrValue : protoOrValue[nameOrContext];
    Object.assign(method, options);
  };
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   property: () => (/* binding */ property),
/* harmony export */   standardProperty: () => (/* binding */ standardProperty)
/* harmony export */ });
/* harmony import */ var _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reactive-element.js */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
  const issuedWarnings = globalThis.litIssuedWarnings ?? (globalThis.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
const legacyProperty = (options, proto, name) => {
  const hasOwnProperty = proto.hasOwnProperty(name);
  proto.constructor.createProperty(name, hasOwnProperty ? { ...options, wrapped: true } : options);
  return hasOwnProperty ? Object.getOwnPropertyDescriptor(proto, name) : void 0;
};
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__.defaultConverter,
  reflect: false,
  hasChanged: _reactive_element_js__WEBPACK_IMPORTED_MODULE_0__.notEqual
};
const standardProperty = (options = defaultPropertyDeclaration, target, context) => {
  const { kind, metadata } = context;
  if (DEV_MODE && metadata == null) {
    issueWarning("missing-class-metadata", `The class ${target} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);
  }
  let properties = globalThis.litPropertyMetadata.get(metadata);
  if (properties === void 0) {
    globalThis.litPropertyMetadata.set(metadata, properties = /* @__PURE__ */ new Map());
  }
  properties.set(context.name, options);
  if (kind === "accessor") {
    const { name } = context;
    return {
      set(v) {
        const oldValue = target.get.call(this);
        target.set.call(this, v);
        this.requestUpdate(name, oldValue, options);
      },
      init(v) {
        if (v !== void 0) {
          this._$changeProperty(name, void 0, options);
        }
        return v;
      }
    };
  } else if (kind === "setter") {
    const { name } = context;
    return function(value) {
      const oldValue = this[name];
      target.call(this, value);
      this.requestUpdate(name, oldValue, options);
    };
  }
  throw new Error(`Unsupported decorator location: ${kind}`);
};
function property(options) {
  return (protoOrTarget, nameOrContext) => {
    return typeof nameOrContext === "object" ? standardProperty(options, protoOrTarget, nameOrContext) : legacyProperty(options, protoOrTarget, nameOrContext);
  };
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-all.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAll: () => (/* binding */ queryAll)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

let fragment;
function queryAll(selector) {
  return (obj, name) => {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      get() {
        const container = this.renderRoot ?? (fragment ?? (fragment = document.createDocumentFragment()));
        return container.querySelectorAll(selector);
      }
    });
  };
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedElements: () => (/* binding */ queryAssignedElements)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

function queryAssignedElements(options) {
  return (obj, name) => {
    const { slot, selector } = options ?? {};
    const slotSelector = `slot${slot ? `[name=${slot}]` : ":not([name])"}`;
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      get() {
        const slotEl = this.renderRoot?.querySelector(slotSelector);
        const elements = slotEl?.assignedElements(options) ?? [];
        return selector === void 0 ? elements : elements.filter((node) => node.matches(selector));
      }
    });
  };
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedNodes: () => (/* binding */ queryAssignedNodes)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

function queryAssignedNodes(options) {
  return (obj, name) => {
    const { slot } = options ?? {};
    const slotSelector = `slot${slot ? `[name=${slot}]` : ":not([name])"}`;
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      get() {
        const slotEl = this.renderRoot?.querySelector(slotSelector);
        return slotEl?.assignedNodes(options) ?? [];
      }
    });
  };
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-async.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAsync: () => (/* binding */ queryAsync)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

function queryAsync(selector) {
  return (obj, name) => {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      async get() {
        await this.updateComplete;
        return this.renderRoot?.querySelector(selector) ?? null;
      }
    });
  };
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: () => (/* binding */ query)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
  const issuedWarnings = globalThis.litIssuedWarnings ?? (globalThis.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
function query(selector, cache) {
  return (protoOrTarget, nameOrContext, descriptor) => {
    const doQuery = (el) => {
      const result = el.renderRoot?.querySelector(selector) ?? null;
      if (DEV_MODE && result === null && cache && !el.hasUpdated) {
        const name = typeof nameOrContext === "object" ? nameOrContext.name : nameOrContext;
        issueWarning("", `@query'd field ${JSON.stringify(String(name))} with the 'cache' flag set for selector '${selector}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`);
      }
      return result;
    };
    if (cache) {
      const { get, set } = typeof nameOrContext === "object" ? protoOrTarget : descriptor ?? (() => {
        const key = DEV_MODE ? Symbol(`${String(nameOrContext)} (@query() cache)`) : Symbol();
        return {
          get() {
            return this[key];
          },
          set(v) {
            this[key] = v;
          }
        };
      })();
      return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(protoOrTarget, nameOrContext, {
        get() {
          let result = get.call(this);
          if (result === void 0) {
            result = doQuery(this);
            if (result !== null || this.hasUpdated) {
              set.call(this, result);
            }
          }
          return result;
        }
      });
    } else {
      return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(protoOrTarget, nameOrContext, {
        get() {
          return doQuery(this);
        }
      });
    }
  };
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

function state(options) {
  return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({
    ...options,
    // Add both `state` and `attribute` because we found a third party
    // controller that is keying off of PropertyOptions.state to determine
    // whether a field is a private internal property or not.
    state: true,
    attribute: false
  });
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   ReactiveElement: () => (/* binding */ ReactiveElement),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* binding */ defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   notEqual: () => (/* binding */ notEqual),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const { is, defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf } = Object;
const NODE_MODE = false;
const global = globalThis;
if (NODE_MODE) {
  global.customElements ?? (global.customElements = customElements);
}
const DEV_MODE = true;
let issueWarning;
const trustedTypes = global.trustedTypes;
const emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : "";
const polyfillSupport = DEV_MODE ? global.reactiveElementPolyfillSupportDevMode : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
  const issuedWarnings = global.litIssuedWarnings ?? (global.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
  issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
  if (global.ShadyDOM?.inUse && polyfillSupport === void 0) {
    issueWarning("polyfill-support-missing", `Shadow DOM is being polyfilled via \`ShadyDOM\` but the \`polyfill-support\` module has not been loaded.`);
  }
}
const debugLogEvent = DEV_MODE ? (event) => {
  const shouldEmit = global.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        value = value ? emptyStringForBooleanAttribute : null;
        break;
      case Object:
      case Array:
        value = value == null ? value : JSON.stringify(value);
        break;
    }
    return value;
  },
  fromAttribute(value, type) {
    let fromValue = value;
    switch (type) {
      case Boolean:
        fromValue = value !== null;
        break;
      case Number:
        fromValue = value === null ? null : Number(value);
        break;
      case Object:
      case Array:
        try {
          fromValue = JSON.parse(value);
        } catch (e) {
          fromValue = null;
        }
        break;
    }
    return fromValue;
  }
};
const notEqual = (value, old) => !is(value, old);
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata"));
global.litPropertyMetadata ?? (global.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class ReactiveElement extends HTMLElement {
  /**
   * Adds an initializer function to the class that is called during instance
   * construction.
   *
   * This is useful for code that runs against a `ReactiveElement`
   * subclass, such as a decorator, that needs to do work for each
   * instance, such as setting up a `ReactiveController`.
   *
   * ```ts
   * const myDecorator = (target: typeof ReactiveElement, key: string) => {
   *   target.addInitializer((instance: ReactiveElement) => {
   *     // This is run during construction of the element
   *     new MyController(instance);
   *   });
   * }
   * ```
   *
   * Decorating a field will then cause each instance to run an initializer
   * that adds a controller:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   @myDecorator foo;
   * }
   * ```
   *
   * Initializers are stored per-constructor. Adding an initializer to a
   * subclass does not add it to a superclass. Since initializers are run in
   * constructors, initializers will run in order of the class hierarchy,
   * starting with superclasses and progressing to the instance's class.
   *
   * @nocollapse
   */
  static addInitializer(initializer) {
    this.__prepare();
    (this._initializers ?? (this._initializers = [])).push(initializer);
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   * @category attributes
   */
  static get observedAttributes() {
    this.finalize();
    return this.__attributeToPropertyMap && [...this.__attributeToPropertyMap.keys()];
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a {@linkcode PropertyDeclaration} for the property with the
   * given options. The property setter calls the property's `hasChanged`
   * property option or uses a strict identity check to determine whether or not
   * to request an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * ```ts
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static createProperty(name, options = defaultPropertyDeclaration) {
    if (options.state) {
      options.attribute = false;
    }
    this.__prepare();
    this.elementProperties.set(name, options);
    if (!options.noAccessor) {
      const key = DEV_MODE ? (
        // Use Symbol.for in dev mode to make it easier to maintain state
        // when doing HMR.
        Symbol.for(`${String(name)} (@property() cache)`)
      ) : Symbol();
      const descriptor = this.getPropertyDescriptor(name, key, options);
      if (descriptor !== void 0) {
        defineProperty(this.prototype, name, descriptor);
      }
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   * ```ts
   * class MyElement extends LitElement {
   *   static getPropertyDescriptor(name, key, options) {
   *     const defaultDescriptor =
   *         super.getPropertyDescriptor(name, key, options);
   *     const setter = defaultDescriptor.set;
   *     return {
   *       get: defaultDescriptor.get,
   *       set(value) {
   *         setter.call(this, value);
   *         // custom action.
   *       },
   *       configurable: true,
   *       enumerable: true
   *     }
   *   }
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  static getPropertyDescriptor(name, key, options) {
    const { get, set } = getOwnPropertyDescriptor(this.prototype, name) ?? {
      get() {
        return this[key];
      },
      set(v) {
        this[key] = v;
      }
    };
    if (DEV_MODE && get == null) {
      if ("value" in (getOwnPropertyDescriptor(this.prototype, name) ?? {})) {
        throw new Error(`Field ${JSON.stringify(String(name))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);
      }
      issueWarning("reactive-property-without-getter", `Field ${JSON.stringify(String(name))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`);
    }
    return {
      get() {
        return get?.call(this);
      },
      set(value) {
        const oldValue = get?.call(this);
        set.call(this, value);
        this.requestUpdate(name, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a `PropertyDeclaration` via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override
   * {@linkcode createProperty}.
   *
   * @nocollapse
   * @final
   * @category properties
   */
  static getPropertyOptions(name) {
    return this.elementProperties.get(name) ?? defaultPropertyDeclaration;
  }
  /**
   * Initializes static own properties of the class used in bookkeeping
   * for element properties, initializers, etc.
   *
   * Can be called multiple times by code that needs to ensure these
   * properties exist before using them.
   *
   * This method ensures the superclass is finalized so that inherited
   * property metadata can be copied down.
   * @nocollapse
   */
  static __prepare() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("elementProperties", this))) {
      return;
    }
    const superCtor = getPrototypeOf(this);
    superCtor.finalize();
    if (superCtor._initializers !== void 0) {
      this._initializers = [...superCtor._initializers];
    }
    this.elementProperties = new Map(superCtor.elementProperties);
  }
  /**
   * Finishes setting up the class so that it's ready to be registered
   * as a custom element and instantiated.
   *
   * This method is called by the ReactiveElement.observedAttributes getter.
   * If you override the observedAttributes getter, you must either call
   * super.observedAttributes to trigger finalization, or call finalize()
   * yourself.
   *
   * @nocollapse
   */
  static finalize() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("finalized", this))) {
      return;
    }
    this.finalized = true;
    this.__prepare();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const props = this.properties;
      const propKeys = [
        ...getOwnPropertyNames(props),
        ...getOwnPropertySymbols(props)
      ];
      for (const p of propKeys) {
        this.createProperty(p, props[p]);
      }
    }
    const metadata = this[Symbol.metadata];
    if (metadata !== null) {
      const properties = litPropertyMetadata.get(metadata);
      if (properties !== void 0) {
        for (const [p, options] of properties) {
          this.elementProperties.set(p, options);
        }
      }
    }
    this.__attributeToPropertyMap = /* @__PURE__ */ new Map();
    for (const [p, options] of this.elementProperties) {
      const attr = this.__attributeNameForProperty(p, options);
      if (attr !== void 0) {
        this.__attributeToPropertyMap.set(attr, p);
      }
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    if (DEV_MODE) {
      if (this.hasOwnProperty("createProperty")) {
        issueWarning("no-override-create-property", "Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");
      }
      if (this.hasOwnProperty("getPropertyDescriptor")) {
        issueWarning("no-override-get-property-descriptor", "Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators");
      }
    }
  }
  /**
   * Takes the styles the user supplied via the `static styles` property and
   * returns the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * Styles are deduplicated preserving the _last_ instance in the list. This
   * is a performance optimization to avoid duplicated styles that can occur
   * especially when composing via subclassing. The last item is kept to try
   * to preserve the cascade order with the assumption that it's most important
   * that last added styles override previous styles.
   *
   * @nocollapse
   * @category styles
   */
  static finalizeStyles(styles) {
    const elementStyles = [];
    if (Array.isArray(styles)) {
      const set = new Set(styles.flat(Infinity).reverse());
      for (const s of set) {
        elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
      }
    } else if (styles !== void 0) {
      elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
    }
    return elementStyles;
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */
  static __attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? void 0 : typeof attribute === "string" ? attribute : typeof name === "string" ? name.toLowerCase() : void 0;
  }
  constructor() {
    super();
    this.__instanceProperties = void 0;
    this.isUpdatePending = false;
    this.hasUpdated = false;
    this.__reflectingProperty = null;
    this.__initialize();
  }
  /**
   * Internal only override point for customizing work done when elements
   * are constructed.
   */
  __initialize() {
    this.__updatePromise = new Promise((res) => this.enableUpdating = res);
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.__saveInstanceProperties();
    this.requestUpdate();
    this.constructor._initializers?.forEach((i) => i(this));
  }
  /**
   * Registers a `ReactiveController` to participate in the element's reactive
   * update cycle. The element automatically calls into any registered
   * controllers during its lifecycle callbacks.
   *
   * If the element is connected when `addController()` is called, the
   * controller's `hostConnected()` callback will be immediately called.
   * @category controllers
   */
  addController(controller) {
    (this.__controllers ?? (this.__controllers = /* @__PURE__ */ new Set())).add(controller);
    if (this.renderRoot !== void 0 && this.isConnected) {
      controller.hostConnected?.();
    }
  }
  /**
   * Removes a `ReactiveController` from the element.
   * @category controllers
   */
  removeController(controller) {
    this.__controllers?.delete(controller);
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */
  __saveInstanceProperties() {
    const instanceProperties = /* @__PURE__ */ new Map();
    const elementProperties = this.constructor.elementProperties;
    for (const p of elementProperties.keys()) {
      if (this.hasOwnProperty(p)) {
        instanceProperties.set(p, this[p]);
        delete this[p];
      }
    }
    if (instanceProperties.size > 0) {
      this.__instanceProperties = instanceProperties;
    }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   *
   * @return Returns a node into which to render.
   * @category rendering
   */
  createRenderRoot() {
    const renderRoot = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  /**
   * On first connection, creates the element's renderRoot, sets up
   * element styling, and enables updating.
   * @category lifecycle
   */
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot());
    this.enableUpdating(true);
    this.__controllers?.forEach((c) => c.hostConnected?.());
  }
  /**
   * Note, this method should be considered final and not overridden. It is
   * overridden on the element instance with a function that triggers the first
   * update.
   * @category updates
   */
  enableUpdating(_requestedUpdate) {
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   * @category lifecycle
   */
  disconnectedCallback() {
    this.__controllers?.forEach((c) => c.hostDisconnected?.());
  }
  /**
   * Synchronizes property values when attributes change.
   *
   * Specifically, when an attribute is set, the corresponding property is set.
   * You should rarely need to implement this callback. If this method is
   * overridden, `super.attributeChangedCallback(name, _old, value)` must be
   * called.
   *
   * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
   * on MDN for more information about the `attributeChangedCallback`.
   * @category attributes
   */
  attributeChangedCallback(name, _old, value) {
    this._$attributeToProperty(name, value);
  }
  __propertyToAttribute(name, value) {
    const elemProperties = this.constructor.elementProperties;
    const options = elemProperties.get(name);
    const attr = this.constructor.__attributeNameForProperty(name, options);
    if (attr !== void 0 && options.reflect === true) {
      const converter = options.converter?.toAttribute !== void 0 ? options.converter : defaultConverter;
      const attrValue = converter.toAttribute(value, options.type);
      if (DEV_MODE && this.constructor.enabledWarnings.includes("migration") && attrValue === void 0) {
        issueWarning("undefined-attribute-value", `The attribute value for the ${name} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);
      }
      this.__reflectingProperty = name;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      this.__reflectingProperty = null;
    }
  }
  /** @internal */
  _$attributeToProperty(name, value) {
    const ctor = this.constructor;
    const propName = ctor.__attributeToPropertyMap.get(name);
    if (propName !== void 0 && this.__reflectingProperty !== propName) {
      const options = ctor.getPropertyOptions(propName);
      const converter = typeof options.converter === "function" ? { fromAttribute: options.converter } : options.converter?.fromAttribute !== void 0 ? options.converter : defaultConverter;
      this.__reflectingProperty = propName;
      this[propName] = converter.fromAttribute(
        value,
        options.type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      );
      this.__reflectingProperty = null;
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should be called
   * when an element should update based on some state not triggered by setting
   * a reactive property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored.
   *
   * @param name name of requesting property
   * @param oldValue old value of requesting property
   * @param options property options to use instead of the previously
   *     configured options
   * @category updates
   */
  requestUpdate(name, oldValue, options) {
    if (name !== void 0) {
      if (DEV_MODE && name instanceof Event) {
        issueWarning(``, `The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()`);
      }
      options ?? (options = this.constructor.getPropertyOptions(name));
      const hasChanged = options.hasChanged ?? notEqual;
      const newValue = this[name];
      if (hasChanged(newValue, oldValue)) {
        this._$changeProperty(name, oldValue, options);
      } else {
        return;
      }
    }
    if (this.isUpdatePending === false) {
      this.__updatePromise = this.__enqueueUpdate();
    }
  }
  /**
   * @internal
   */
  _$changeProperty(name, oldValue, options) {
    if (!this._$changedProperties.has(name)) {
      this._$changedProperties.set(name, oldValue);
    }
    if (options.reflect === true && this.__reflectingProperty !== name) {
      (this.__reflectingProperties ?? (this.__reflectingProperties = /* @__PURE__ */ new Set())).add(name);
    }
  }
  /**
   * Sets up the element to asynchronously update.
   */
  async __enqueueUpdate() {
    this.isUpdatePending = true;
    try {
      await this.__updatePromise;
    } catch (e) {
      Promise.reject(e);
    }
    const result = this.scheduleUpdate();
    if (result != null) {
      await result;
    }
    return !this.isUpdatePending;
  }
  /**
   * Schedules an element update. You can override this method to change the
   * timing of updates by returning a Promise. The update will await the
   * returned Promise, and you should resolve the Promise to allow the update
   * to proceed. If this method is overridden, `super.scheduleUpdate()`
   * must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```ts
   * override protected async scheduleUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.scheduleUpdate();
   * }
   * ```
   * @category updates
   */
  scheduleUpdate() {
    const result = this.performUpdate();
    if (DEV_MODE && this.constructor.enabledWarnings.includes("async-perform-update") && typeof result?.then === "function") {
      issueWarning("async-perform-update", `Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);
    }
    return result;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * Call `performUpdate()` to immediately process a pending update. This should
   * generally not be needed, but it can be done in rare cases when you need to
   * update synchronously.
   *
   * @category updates
   */
  performUpdate() {
    if (!this.isUpdatePending) {
      return;
    }
    debugLogEvent?.({ kind: "update" });
    if (!this.hasUpdated) {
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot());
      if (DEV_MODE) {
        const ctor = this.constructor;
        const shadowedProperties = [...ctor.elementProperties.keys()].filter((p) => this.hasOwnProperty(p) && p in getPrototypeOf(this));
        if (shadowedProperties.length) {
          throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${shadowedProperties.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`);
        }
      }
      if (this.__instanceProperties) {
        for (const [p, value] of this.__instanceProperties) {
          this[p] = value;
        }
        this.__instanceProperties = void 0;
      }
      const elementProperties = this.constructor.elementProperties;
      if (elementProperties.size > 0) {
        for (const [p, options] of elementProperties) {
          if (options.wrapped === true && !this._$changedProperties.has(p) && this[p] !== void 0) {
            this._$changeProperty(p, this[p], options);
          }
        }
      }
    }
    let shouldUpdate = false;
    const changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.willUpdate(changedProperties);
        this.__controllers?.forEach((c) => c.hostUpdate?.());
        this.update(changedProperties);
      } else {
        this.__markUpdated();
      }
    } catch (e) {
      shouldUpdate = false;
      this.__markUpdated();
      throw e;
    }
    if (shouldUpdate) {
      this._$didUpdate(changedProperties);
    }
  }
  /**
   * Invoked before `update()` to compute values needed during the update.
   *
   * Implement `willUpdate` to compute property values that depend on other
   * properties and are used in the rest of the update process.
   *
   * ```ts
   * willUpdate(changedProperties) {
   *   // only need to check changed properties for an expensive computation.
   *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
   *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
   *   }
   * }
   *
   * render() {
   *   return html`SHA: ${this.sha}`;
   * }
   * ```
   *
   * @category updates
   */
  willUpdate(_changedProperties) {
  }
  // Note, this is an override point for polyfill-support.
  // @internal
  _$didUpdate(changedProperties) {
    this.__controllers?.forEach((c) => c.hostUpdated?.());
    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }
    this.updated(changedProperties);
    if (DEV_MODE && this.isUpdatePending && this.constructor.enabledWarnings.includes("change-in-update")) {
      issueWarning("change-in-update", `Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`);
    }
  }
  __markUpdated() {
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.isUpdatePending = false;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super.getUpdateComplete()`, then any subsequent state.
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  get updateComplete() {
    return this.getUpdateComplete();
  }
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   override async getUpdateComplete() {
   *     const result = await super.getUpdateComplete();
   *     await this._myChild.updateComplete;
   *     return result;
   *   }
   * }
   * ```
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  getUpdateComplete() {
    return this.__updatePromise;
  }
  /**
   * Controls whether or not `update()` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  update(_changedProperties) {
    this.__reflectingProperties && (this.__reflectingProperties = this.__reflectingProperties.forEach((p) => this.__propertyToAttribute(p, this[p])));
    this.__markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  updated(_changedProperties) {
  }
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * ```ts
   * firstUpdated() {
   *   this.renderRoot.getElementById('my-text-area').focus();
   * }
   * ```
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */
  firstUpdated(_changedProperties) {
  }
}
ReactiveElement.elementStyles = [];
ReactiveElement.shadowRootOptions = { mode: "open" };
ReactiveElement[JSCompiler_renameProperty("elementProperties", ReactiveElement)] = /* @__PURE__ */ new Map();
ReactiveElement[JSCompiler_renameProperty("finalized", ReactiveElement)] = /* @__PURE__ */ new Map();
polyfillSupport?.({ ReactiveElement });
if (DEV_MODE) {
  ReactiveElement.enabledWarnings = [
    "change-in-update",
    "async-perform-update"
  ];
  const ensureOwnWarnings = function(ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty("enabledWarnings", ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };
  ReactiveElement.enableWarning = function(warning) {
    ensureOwnWarnings(this);
    if (!this.enabledWarnings.includes(warning)) {
      this.enabledWarnings.push(warning);
    }
  };
  ReactiveElement.disableWarning = function(warning) {
    ensureOwnWarnings(this);
    const i = this.enabledWarnings.indexOf(warning);
    if (i >= 0) {
      this.enabledWarnings.splice(i, 1);
    }
  };
}
(global.reactiveElementVersions ?? (global.reactiveElementVersions = [])).push("2.0.3");
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
  issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}


/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   LitElement: () => (/* binding */ LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   _$LE: () => (/* binding */ _$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   noChange: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */




const JSCompiler_renameProperty = (prop, _obj) => prop;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
  const issuedWarnings = globalThis.litIssuedWarnings ?? (globalThis.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
  constructor() {
    super(...arguments);
    this.renderOptions = { host: this };
    this.__childPart = void 0;
  }
  /**
   * @category rendering
   */
  createRenderRoot() {
    var _a;
    const renderRoot = super.createRenderRoot();
    (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = renderRoot.firstChild);
    return renderRoot;
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param changedProperties Map of changed properties with old values
   * @category updates
   */
  update(changedProperties) {
    const value = this.render();
    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }
    super.update(changedProperties);
    this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
  }
  /**
   * Invoked when the component is added to the document's DOM.
   *
   * In `connectedCallback()` you should setup tasks that should only occur when
   * the element is connected to the document. The most common of these is
   * adding event listeners to nodes external to the element, like a keydown
   * event handler added to the window.
   *
   * ```ts
   * connectedCallback() {
   *   super.connectedCallback();
   *   addEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * Typically, anything done in `connectedCallback()` should be undone when the
   * element is disconnected, in `disconnectedCallback()`.
   *
   * @category lifecycle
   */
  connectedCallback() {
    super.connectedCallback();
    this.__childPart?.setConnected(true);
  }
  /**
   * Invoked when the component is removed from the document's DOM.
   *
   * This callback is the main signal to the element that it may no longer be
   * used. `disconnectedCallback()` should ensure that nothing is holding a
   * reference to the element (such as event listeners added to nodes external
   * to the element), so that it is free to be garbage collected.
   *
   * ```ts
   * disconnectedCallback() {
   *   super.disconnectedCallback();
   *   window.removeEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * An element may be re-connected after being disconnected.
   *
   * @category lifecycle
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__childPart?.setConnected(false);
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `ChildPart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   * @category rendering
   */
  render() {
    return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
  }
}
LitElement["_$litElement$"] = true;
LitElement[JSCompiler_renameProperty("finalized", LitElement)] = true;
globalThis.litElementHydrateSupport?.({ LitElement });
const polyfillSupport = DEV_MODE ? globalThis.litElementPolyfillSupportDevMode : globalThis.litElementPolyfillSupport;
polyfillSupport?.({ LitElement });
const _$LE = {
  _$attributeToProperty: (el, name, value) => {
    el._$attributeToProperty(name, value);
  },
  // eslint-disable-next-line
  _$changedProperties: (el) => el._$changedProperties
};
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.3");
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
  issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}


/***/ }),

/***/ "./node_modules/lit-html/development/is-server.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/is-server.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isServer: () => (/* binding */ isServer)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
const isServer = NODE_MODE;


/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _$LH: () => (/* binding */ _$LH),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   noChange: () => (/* binding */ noChange),
/* harmony export */   nothing: () => (/* binding */ nothing),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
const NODE_MODE = false;
const global = globalThis;
const debugLogEvent = DEV_MODE ? (event) => {
  const shouldEmit = global.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global.dispatchEvent(new CustomEvent("lit-debug", {
    detail: event
  }));
} : void 0;
let debugLogRenderId = 0;
let issueWarning;
if (DEV_MODE) {
  global.litIssuedWarnings ?? (global.litIssuedWarnings = /* @__PURE__ */ new Set());
  issueWarning = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!global.litIssuedWarnings.has(warning)) {
      console.warn(warning);
      global.litIssuedWarnings.add(warning);
    }
  };
  issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ENABLE_SHADYDOM_NOPATCH && global.ShadyDOM?.inUse && global.ShadyDOM?.noPatch === true ? global.ShadyDOM.wrap : (node) => node;
const trustedTypes = global.trustedTypes;
const policy = trustedTypes ? trustedTypes.createPolicy("lit-html", {
  createHTML: (s) => s
}) : void 0;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
const setSanitizer = (newSanitizer) => {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error(`Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.`);
  }
  sanitizerFactoryInternal = newSanitizer;
};
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
  sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
  return sanitizerFactoryInternal(node, name, type);
};
const boundAttributeSuffix = "$lit$";
const marker = `lit$${String(Math.random()).slice(9)}$`;
const markerMatch = "?" + marker;
const nodeMarker = `<${markerMatch}>`;
const d = NODE_MODE && global.document === void 0 ? {
  createTreeWalker() {
    return {};
  }
} : document;
const createMarker = () => d.createComment("");
const isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function";
const isArray = Array.isArray;
const isIterable = (value) => isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
typeof value?.[Symbol.iterator] === "function";
const SPACE_CHAR = `[ 	
\f\r]`;
const ATTR_VALUE_CHAR = `[^ 	
\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
const comment2EndRegex = />/g;
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, "g");
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
const rawTextElement = /^(?:script|style|textarea|title)$/i;
const HTML_RESULT = 1;
const SVG_RESULT = 2;
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
const tag = (type) => (strings, ...values) => {
  if (DEV_MODE && strings.some((s) => s === void 0)) {
    console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences.");
  }
  if (DEV_MODE) {
    if (values.some((val) => val?.["_$litStatic$"])) {
      issueWarning("", `Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);
    }
  }
  return {
    // This property needs to remain unminified.
    ["_$litType$"]: type,
    strings,
    values
  };
};
const html = tag(HTML_RESULT);
const svg = tag(SVG_RESULT);
const noChange = Symbol.for("lit-noChange");
const nothing = Symbol.for("lit-nothing");
const templateCache = /* @__PURE__ */ new WeakMap();
const walker = d.createTreeWalker(
  d,
  129
  /* NodeFilter.SHOW_{ELEMENT|COMMENT} */
);
let sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  if (!Array.isArray(tsa) || !tsa.hasOwnProperty("raw")) {
    let message = "invalid template strings array";
    if (DEV_MODE) {
      message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, "\n");
    }
    throw new Error(message);
  }
  return policy !== void 0 ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
const getTemplateHtml = (strings, type) => {
  const l = strings.length - 1;
  const attrNames = [];
  let html2 = type === SVG_RESULT ? "<svg>" : "";
  let rawTextEndRegex;
  let regex = textEndRegex;
  for (let i = 0; i < l; i++) {
    const s = strings[i];
    let attrNameEndIndex = -1;
    let attrName;
    let lastIndex = 0;
    let match;
    while (lastIndex < s.length) {
      regex.lastIndex = lastIndex;
      match = regex.exec(s);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === "!--") {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== void 0) {
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== void 0) {
          if (rawTextElement.test(match[TAG_NAME])) {
            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, "g");
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== void 0) {
          if (DEV_MODE) {
            throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions");
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === ">") {
          regex = rawTextEndRegex ?? textEndRegex;
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === void 0) {
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === void 0 ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        regex = tagEndRegex;
        rawTextEndRegex = void 0;
      }
    }
    if (DEV_MODE) {
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, "unexpected parse state B");
    }
    const end = regex === tagEndRegex && strings[i + 1].startsWith("/>") ? " " : "";
    html2 += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? i : end);
  }
  const htmlResult = html2 + (strings[l] || "<?>") + (type === SVG_RESULT ? "</svg>" : "");
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};
class Template {
  constructor({ strings, ["_$litType$"]: type }, options) {
    this.parts = [];
    let node;
    let nodeIndex = 0;
    let attrNameIndex = 0;
    const partCount = strings.length - 1;
    const parts = this.parts;
    const [html2, attrNames] = getTemplateHtml(strings, type);
    this.el = Template.createElement(html2, options);
    walker.currentNode = this.el.content;
    if (type === SVG_RESULT) {
      const svgElement = this.el.content.firstChild;
      svgElement.replaceWith(...svgElement.childNodes);
    }
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE) {
          const tag2 = node.localName;
          if (/^(?:textarea|template)$/i.test(tag2) && node.innerHTML.includes(marker)) {
            const m = `Expressions are not supported inside \`${tag2}\` elements. See https://lit.dev/msg/expression-in-${tag2} for more information.`;
            if (tag2 === "template") {
              throw new Error(m);
            } else
              issueWarning("", m);
          }
        }
        if (node.hasAttributes()) {
          for (const name of node.getAttributeNames()) {
            if (name.endsWith(boundAttributeSuffix)) {
              const realName = attrNames[attrNameIndex++];
              const value = node.getAttribute(name);
              const statics = value.split(marker);
              const m = /([.?@])?(.*)/.exec(realName);
              parts.push({
                type: ATTRIBUTE_PART,
                index: nodeIndex,
                name: m[2],
                strings: statics,
                ctor: m[1] === "." ? PropertyPart : m[1] === "?" ? BooleanAttributePart : m[1] === "@" ? EventPart : AttributePart
              });
              node.removeAttribute(name);
            } else if (name.startsWith(marker)) {
              parts.push({
                type: ELEMENT_PART,
                index: nodeIndex
              });
              node.removeAttribute(name);
            }
          }
        }
        if (rawTextElement.test(node.tagName)) {
          const strings2 = node.textContent.split(marker);
          const lastIndex = strings2.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes ? trustedTypes.emptyScript : "";
            for (let i = 0; i < lastIndex; i++) {
              node.append(strings2[i], createMarker());
              walker.nextNode();
              parts.push({ type: CHILD_PART, index: ++nodeIndex });
            }
            node.append(strings2[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        const data = node.data;
        if (data === markerMatch) {
          parts.push({ type: CHILD_PART, index: nodeIndex });
        } else {
          let i = -1;
          while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
            parts.push({ type: COMMENT_PART, index: nodeIndex });
            i += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    debugLogEvent && debugLogEvent({
      kind: "template prep",
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings
    });
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @nocollapse */
  static createElement(html2, _options) {
    const el = d.createElement("template");
    el.innerHTML = html2;
    return el;
  }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
  if (value === noChange) {
    return value;
  }
  let currentDirective = attributeIndex !== void 0 ? parent.__directives?.[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? void 0 : (
    // This property needs to remain unminified.
    value["_$litDirective$"]
  );
  if (currentDirective?.constructor !== nextDirectiveConstructor) {
    currentDirective?.["_$notifyDirectiveConnectionChanged"]?.(false);
    if (nextDirectiveConstructor === void 0) {
      currentDirective = void 0;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== void 0) {
      (parent.__directives ?? (parent.__directives = []))[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== void 0) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}
class TemplateInstance {
  constructor(template, parent) {
    this._$parts = [];
    this._$disconnectableChildren = void 0;
    this._$template = template;
    this._$parent = parent;
  }
  // Called by ChildPart parentNode getter
  get parentNode() {
    return this._$parent.parentNode;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  // This method is separate from the constructor because we need to return a
  // DocumentFragment and we don't want to hold onto it with an instance field.
  _clone(options) {
    const { el: { content }, parts } = this._$template;
    const fragment = (options?.creationScope ?? d).importNode(content, true);
    walker.currentNode = fragment;
    let node = walker.nextNode();
    let nodeIndex = 0;
    let partIndex = 0;
    let templatePart = parts[0];
    while (templatePart !== void 0) {
      if (nodeIndex === templatePart.index) {
        let part;
        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }
        this._$parts.push(part);
        templatePart = parts[++partIndex];
      }
      if (nodeIndex !== templatePart?.index) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }
    walker.currentNode = d;
    return fragment;
  }
  _update(values) {
    let i = 0;
    for (const part of this._$parts) {
      if (part !== void 0) {
        debugLogEvent && debugLogEvent({
          kind: "set part",
          part,
          value: values[i],
          valueIndex: i,
          values,
          templateInstance: this
        });
        if (part.strings !== void 0) {
          part._$setValue(values, part, i);
          i += part.strings.length - 2;
        } else {
          part._$setValue(values[i]);
        }
      }
      i++;
    }
  }
}
class ChildPart {
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent?._$isConnected ?? this.__isConnected;
  }
  constructor(startNode, endNode, parent, options) {
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    this.__isConnected = options?.isConnected ?? true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._textSanitizer = void 0;
    }
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */
  get parentNode() {
    let parentNode = wrap(this._$startNode).parentNode;
    const parent = this._$parent;
    if (parent !== void 0 && parentNode?.nodeType === 11) {
      parentNode = parent.parentNode;
    }
    return parentNode;
  }
  /**
   * The part's leading marker node, if any. See `.parentNode` for more
   * information.
   */
  get startNode() {
    return this._$startNode;
  }
  /**
   * The part's trailing marker node, if any. See `.parentNode` for more
   * information.
   */
  get endNode() {
    return this._$endNode;
  }
  _$setValue(value, directiveParent = this) {
    if (DEV_MODE && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      if (value === nothing || value == null || value === "") {
        if (this._$committedValue !== nothing) {
          debugLogEvent && debugLogEvent({
            kind: "commit nothing to child",
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });
          this._$clear();
        }
        this._$committedValue = nothing;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      }
    } else if (value["_$litType$"] !== void 0) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== void 0) {
      if (DEV_MODE && this.options?.host === value) {
        this._commitText(`[probable mistake: rendered a template's host in itself (commonly caused by writing \${this} in a template]`);
        console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
        return;
      }
      this._commitNode(value);
    } else if (isIterable(value)) {
      this._commitIterable(value);
    } else {
      this._commitText(value);
    }
  }
  _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  }
  _commitNode(value) {
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = this._$startNode.parentNode?.nodeName;
        if (parentNodeName === "STYLE" || parentNodeName === "SCRIPT") {
          let message = "Forbidden";
          if (DEV_MODE) {
            if (parentNodeName === "STYLE") {
              message = `Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css\`...\` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.`;
            } else {
              message = `Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.`;
            }
          }
          throw new Error(message);
        }
      }
      debugLogEvent && debugLogEvent({
        kind: "commit node",
        start: this._$startNode,
        parent: this._$parent,
        value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  }
  _commitText(value) {
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      const node = wrap(this._$startNode).nextSibling;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(node, "data", "property");
        }
        value = this._textSanitizer(value);
      }
      debugLogEvent && debugLogEvent({
        kind: "commit text",
        node,
        value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        const textNode = d.createTextNode("");
        this._commitNode(textNode);
        if (this._textSanitizer === void 0) {
          this._textSanitizer = createSanitizer(textNode, "data", "property");
        }
        value = this._textSanitizer(value);
        debugLogEvent && debugLogEvent({
          kind: "commit text",
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent && debugLogEvent({
          kind: "commit text",
          node: wrap(this._$startNode).nextSibling,
          value,
          options: this.options
        });
      }
    }
    this._$committedValue = value;
  }
  _commitTemplateResult(result) {
    const { values, ["_$litType$"]: type } = result;
    const template = typeof type === "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (this._$committedValue?._$template === template) {
      debugLogEvent && debugLogEvent({
        kind: "template updating",
        template,
        instance: this._$committedValue,
        parts: this._$committedValue._$parts,
        options: this.options,
        values
      });
      this._$committedValue._update(values);
    } else {
      const instance = new TemplateInstance(template, this);
      const fragment = instance._clone(this.options);
      debugLogEvent && debugLogEvent({
        kind: "template instantiated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      instance._update(values);
      debugLogEvent && debugLogEvent({
        kind: "template instantiated and updated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      this._commitNode(fragment);
      this._$committedValue = instance;
    }
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @internal */
  _$getTemplate(result) {
    let template = templateCache.get(result.strings);
    if (template === void 0) {
      templateCache.set(result.strings, template = new Template(result));
    }
    return template;
  }
  _commitIterable(value) {
    if (!isArray(this._$committedValue)) {
      this._$committedValue = [];
      this._$clear();
    }
    const itemParts = this._$committedValue;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      if (partIndex === itemParts.length) {
        itemParts.push(itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        itemPart = itemParts[partIndex];
      }
      itemPart._$setValue(item);
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
      itemParts.length = partIndex;
    }
  }
  /**
   * Removes the nodes contained within this Part from the DOM.
   *
   * @param start Start node to clear from, for clearing a subset of the part's
   *     DOM (used when truncating iterables)
   * @param from  When `start` is specified, the index within the iterable from
   *     which ChildParts are being removed, used for disconnecting directives in
   *     those Parts.
   *
   * @internal
   */
  _$clear(start = wrap(this._$startNode).nextSibling, from) {
    this._$notifyConnectionChanged?.(false, true, from);
    while (start && start !== this._$endNode) {
      const n = wrap(start).nextSibling;
      wrap(start).remove();
      start = n;
    }
  }
  /**
   * Implementation of RootPart's `isConnected`. Note that this metod
   * should only be called on `RootPart`s (the `ChildPart` returned from a
   * top-level `render()` call). It has no effect on non-root ChildParts.
   * @param isConnected Whether to set
   * @internal
   */
  setConnected(isConnected) {
    if (this._$parent === void 0) {
      this.__isConnected = isConnected;
      this._$notifyConnectionChanged?.(isConnected);
    } else if (DEV_MODE) {
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
    }
  }
}
class AttributePart {
  get tagName() {
    return this.element.tagName;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  constructor(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== "" || strings[1] !== "") {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = void 0;
    }
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */
  _$setValue(value, directiveParent = this, valueIndex, noCommit) {
    const strings = this.strings;
    let change = false;
    if (strings === void 0) {
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
      if (change) {
        this._$committedValue = value;
      }
    } else {
      const values = value;
      value = strings[0];
      let i, v;
      for (i = 0; i < strings.length - 1; i++) {
        v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
        if (v === noChange) {
          v = this._$committedValue[i];
        }
        change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
        if (v === nothing) {
          value = nothing;
        } else if (value !== nothing) {
          value += (v ?? "") + strings[i + 1];
        }
        this._$committedValue[i] = v;
      }
    }
    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  /** @internal */
  _commitValue(value) {
    if (value === nothing) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._sanitizer === void 0) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "attribute");
        }
        value = this._sanitizer(value ?? "");
      }
      debugLogEvent && debugLogEvent({
        kind: "commit attribute",
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value ?? "");
    }
  }
}
class PropertyPart extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = PROPERTY_PART;
  }
  /** @internal */
  _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === void 0) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, "property");
      }
      value = this._sanitizer(value);
    }
    debugLogEvent && debugLogEvent({
      kind: "commit property",
      element: this.element,
      name: this.name,
      value,
      options: this.options
    });
    this.element[this.name] = value === nothing ? void 0 : value;
  }
}
class BooleanAttributePart extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  /** @internal */
  _commitValue(value) {
    debugLogEvent && debugLogEvent({
      kind: "commit boolean attribute",
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });
    wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
  }
}
class EventPart extends AttributePart {
  constructor(element, name, strings, parent, options) {
    super(element, name, strings, parent, options);
    this.type = EVENT_PART;
    if (DEV_MODE && this.strings !== void 0) {
      throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`);
    }
  }
  // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex
  /** @internal */
  _$setValue(newListener, directiveParent = this) {
    newListener = resolveDirective(this, newListener, directiveParent, 0) ?? nothing;
    if (newListener === noChange) {
      return;
    }
    const oldListener = this._$committedValue;
    const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent && debugLogEvent({
      kind: "commit event listener",
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener
    });
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }
    if (shouldAddListener) {
      this.element.addEventListener(this.name, this, newListener);
    }
    this._$committedValue = newListener;
  }
  handleEvent(event) {
    if (typeof this._$committedValue === "function") {
      this._$committedValue.call(this.options?.host ?? this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  }
}
class ElementPart {
  constructor(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    this._$disconnectableChildren = void 0;
    this._$parent = parent;
    this.options = options;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(value) {
    debugLogEvent && debugLogEvent({
      kind: "commit to element binding",
      element: this.element,
      value,
      options: this.options
    });
    resolveDirective(this, value);
  }
}
const _$LH = {
  // Used in lit-ssr
  _boundAttributeSuffix: boundAttributeSuffix,
  _marker: marker,
  _markerMatch: markerMatch,
  _HTML_RESULT: HTML_RESULT,
  _getTemplateHtml: getTemplateHtml,
  // Used in tests and private-ssr-support
  _TemplateInstance: TemplateInstance,
  _isIterable: isIterable,
  _resolveDirective: resolveDirective,
  _ChildPart: ChildPart,
  _AttributePart: AttributePart,
  _BooleanAttributePart: BooleanAttributePart,
  _EventPart: EventPart,
  _PropertyPart: PropertyPart,
  _ElementPart: ElementPart
};
const polyfillSupport = DEV_MODE ? global.litHtmlPolyfillSupportDevMode : global.litHtmlPolyfillSupport;
polyfillSupport?.(Template, ChildPart);
(global.litHtmlVersions ?? (global.litHtmlVersions = [])).push("3.1.1");
if (DEV_MODE && global.litHtmlVersions.length > 1) {
  issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}
const render = (value, container, options) => {
  if (DEV_MODE && container == null) {
    throw new TypeError(`The container to render into may not be ${container}`);
  }
  const renderId = DEV_MODE ? debugLogRenderId++ : 0;
  const partOwnerNode = options?.renderBefore ?? container;
  let part = partOwnerNode["_$litPart$"];
  debugLogEvent && debugLogEvent({
    kind: "begin render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  if (part === void 0) {
    const endNode = options?.renderBefore ?? null;
    partOwnerNode["_$litPart$"] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, void 0, options ?? {});
  }
  part._$setValue(value);
  debugLogEvent && debugLogEvent({
    kind: "end render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}


/***/ }),

/***/ "./node_modules/lit/decorators.js":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   eventOptions: () => (/* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions),
/* harmony export */   property: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property),
/* harmony export */   query: () => (/* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__.query),
/* harmony export */   queryAll: () => (/* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__.queryAll),
/* harmony export */   queryAssignedElements: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__.queryAssignedElements),
/* harmony export */   queryAssignedNodes: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedNodes),
/* harmony export */   queryAsync: () => (/* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__.queryAsync),
/* harmony export */   standardProperty: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.standardProperty),
/* harmony export */   state: () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");











/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   LitElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   _$LE: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   isServer: () => (/* reexport safe */ lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__.isServer),
/* harmony export */   noChange: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");
/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "./node_modules/lit-html/development/is-server.js");






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PokemonApp: () => (/* binding */ PokemonApp)
/* harmony export */ });
/* harmony import */ var _lit_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/context */ "./node_modules/@lit/context/development/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _components_pokemon_catalog_pokemon_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pokemon-catalog/pokemon-catalog.component */ "./src/components/pokemon-catalog/pokemon-catalog.component.ts");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/pokemon.service */ "./src/services/pokemon.service.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};






let PokemonApp = class extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  constructor() {
    super(...arguments);
    this.pokemonService = new _services_pokemon_service__WEBPACK_IMPORTED_MODULE_4__.PokemonService();
  }
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_1__.html`<div class="app"><pokemon-catalog></pokemon-catalog></div> `;
  }
};
PokemonApp.styles = _styles_scss__WEBPACK_IMPORTED_MODULE_5__["default"];
__decorateClass([
  (0,_lit_context__WEBPACK_IMPORTED_MODULE_0__.provide)({ context: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_4__.pokemonServiceContext })
], PokemonApp.prototype, "pokemonService", 2);
PokemonApp = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.customElement)("pokemon-app")
], PokemonApp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ0E7QUFDVztBQUNjO0FBQ21CO0FBRWhEO0FBRTVCLElBQU0sYUFBTixjQUF5QiwyQ0FBVSxDQUFDO0FBQUEsRUFBcEM7QUFBQTtBQUlMLDBCQUFpQyxJQUFJLHFFQUFjLENBQUM7QUFBQTtBQUFBLEVBRWpDLFNBQVM7QUFDMUIsV0FBTyxxQ0FBSTtBQUFKLEVBQ1Q7QUFDRjtBQVRhLFdBQ0ssU0FBUyxvREFBTTtBQUcvQjtBQUFBLEVBREMscURBQU8sQ0FBQyxFQUFFLFNBQVMsNEVBQXFCLENBQUMsQ0FBQztBQUFBLEdBSGhDLFdBSVg7QUFKVyxhQUFOO0FBQUEsRUFETixnRUFBYSxDQUFDLGFBQWE7QUFBQSxHQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL3NyYy9jb21wb25lbnRzL3Bva2Vtb24tY2F0YWxvZy9wb2tlbW9uLWNhdGFsb2cuY29tcG9uZW50LnRzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9zcmMvY29tcG9uZW50cy9wb2tlbW9uLWdvL3Bva2Vtb24tZ28uY29tcG9uZW50LnRzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9zcmMvY29tcG9uZW50cy9wb2tlbW9uLWltYWdlL3Bva2Vtb24taW1hZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9zcmMvc2VydmljZXMvcG9rZW1vbi5zZXJ2aWNlLnRzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9zcmMvY29tcG9uZW50cy9wb2tlbW9uLWNhdGFsb2cvcG9rZW1vbi1jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9zcmMvY29tcG9uZW50cy9wb2tlbW9uLWdvL3Bva2Vtb24tZ28uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL3NyYy9jb21wb25lbnRzL3Bva2Vtb24taW1hZ2UvcG9rZW1vbi1pbWFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9jb250ZXh0L2RldmVsb3BtZW50L2luZGV4LmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9jb250ZXh0L2RldmVsb3BtZW50L2xpYi9jb250ZXh0LXJlcXVlc3QtZXZlbnQuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0L2NvbnRleHQvZGV2ZWxvcG1lbnQvbGliL2NvbnRleHQtcm9vdC5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvY29udGV4dC9kZXZlbG9wbWVudC9saWIvY29udHJvbGxlcnMvY29udGV4dC1jb25zdW1lci5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvY29udGV4dC9kZXZlbG9wbWVudC9saWIvY29udHJvbGxlcnMvY29udGV4dC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvY29udGV4dC9kZXZlbG9wbWVudC9saWIvY3JlYXRlLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0L2NvbnRleHQvZGV2ZWxvcG1lbnQvbGliL2RlY29yYXRvcnMvY29uc3VtZS5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvY29udGV4dC9kZXZlbG9wbWVudC9saWIvZGVjb3JhdG9ycy9wcm92aWRlLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9jb250ZXh0L2RldmVsb3BtZW50L2xpYi92YWx1ZS1ub3RpZmllci5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9jc3MtdGFnLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvYmFzZS5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvZXZlbnQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYWxsLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9yZWFjdGl2ZS1lbGVtZW50LmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvZGV2ZWxvcG1lbnQvbGl0LWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9pcy1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL2xpdC9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvbGl0L2luZGV4LmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9rZW1vbkdvQ29tcG9uZW50IH0gZnJvbSBcIkBjb21wb25lbnRzL3Bva2Vtb24tZ28vcG9rZW1vbi1nby5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBva2Vtb25JbWFnZUNvbXBvbmVudCB9IGZyb20gXCJAY29tcG9uZW50cy9wb2tlbW9uLWltYWdlL3Bva2Vtb24taW1hZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBjb25zdW1lIH0gZnJvbSBcIkBsaXQvY29udGV4dFwiO1xuaW1wb3J0IHsgUG9rZW1vbkxpc3QsIFBva2Vtb25TZXJ2aWNlLCBwb2tlbW9uU2VydmljZUNvbnRleHQgfSBmcm9tIFwiQHNlcnZpY2VzL3Bva2Vtb24uc2VydmljZVwiO1xuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gXCJsaXQvZGVjb3JhdG9ycy5qc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wb2tlbW9uLWNhdGFsb2cuY29tcG9uZW50LnNjc3NcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJwb2tlbW9uLWNhdGFsb2dcIilcbmV4cG9ydCBjbGFzcyBQb2tlbW9uQ2F0YWxvZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKVxuICBvblByZXY/OiAoKSA9PiB2b2lkO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIG9uTmV4dD86ICgpID0+IHZvaWQ7XG5cbiAgQHN0YXRlKClcbiAgcG9rZW1vbiE6IFBva2Vtb25MaXN0O1xuXG4gIHN0YXRpYyBvdmVycmlkZSBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBQb2tlbW9uSW1hZ2VDb21wb25lbnQoKTtcbiAgICBuZXcgUG9rZW1vbkdvQ29tcG9uZW50KCk7XG4gIH1cblxuICBAY29uc3VtZSh7IGNvbnRleHQ6IHBva2Vtb25TZXJ2aWNlQ29udGV4dCB9KVxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pXG4gIHByaXZhdGUgcG9rZW1vblNlcnZpY2U/OiBQb2tlbW9uU2VydmljZTtcblxuICBvdmVycmlkZSBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLnBva2Vtb25TZXJ2aWNlLmdldFBva2Vtb24pIHRoaXMubG9hZFBva2Vtb24oKTtcbiAgfVxuXG4gIGlzTmV4dERpc2FibGVkID0gKCkgPT4gIXRoaXMucG9rZW1vbi5uZXh0IHx8ICF0aGlzLnBva2Vtb25TZXJ2aWNlO1xuICBpc1ByZXZEaXNhYmxlZCA9ICgpID0+ICF0aGlzLnBva2Vtb24ucHJldmlvdXMgfHwgIXRoaXMucG9rZW1vblNlcnZpY2U7XG5cbiAgbG9hZFBva2Vtb24gPSBhc3luYyAoKSA9PiAodGhpcy5wb2tlbW9uID0gYXdhaXQgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9uQnlPZmZzZXQoKSk7XG5cbiAgbG9hZE5leHQgPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5vbk5leHQgJiYgdGhpcy5vbk5leHQoKTtcbiAgICB0aGlzLnBva2Vtb24gPSBhd2FpdCB0aGlzLnBva2Vtb25TZXJ2aWNlLmdldFBva2Vtb24odGhpcy5wb2tlbW9uLm5leHQpO1xuICB9O1xuXG4gIGxvYWRQcmV2ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMucG9rZW1vbiA9IGF3YWl0IHRoaXMucG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbih0aGlzLnBva2Vtb24ucHJldmlvdXMpO1xuICAgIHRoaXMub25QcmV2ICYmIHRoaXMub25QcmV2KCk7XG4gIH07XG5cbiAgZ2V0UG9rZW1vbkluZGV4ID0gKCkgPT5cbiAgICBOdW1iZXIoXG4gICAgICB0aGlzLnBva2Vtb24/LnJlc3VsdHNbMF0udXJsXG4gICAgICAgIC5zcGxpdChcIi9cIilcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQpXG4gICAgICAgIC5wb3AoKVxuICAgICk7XG4gIGdldFBva2Vtb25OYW1lID0gKCkgPT4gdGhpcy5wb2tlbW9uPy5yZXN1bHRzWzBdLm5hbWU7XG4gIGdldE9mZnNldEZyb21JbmRleCA9IChpbmRleDogc3RyaW5nKSA9PiAoTnVtYmVyKGluZGV4KSAtIDEpLnRvU3RyaW5nKCk7XG5cbiAgZmV0Y2hQb2tlbW9uQnlPZmZzZXQgPSBhc3luYyAoaW5kZXg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCB0aGlzLnBva2Vtb25TZXJ2aWNlPy5nZXRQb2tlbW9uQnlPZmZzZXQodGhpcy5nZXRPZmZzZXRGcm9tSW5kZXgoaW5kZXgpKTtcbiAgICBpZiAocG9rZW1vbj8ucmVzdWx0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucG9rZW1vbiA9IHBva2Vtb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KGBwb2tlbW9uICR7aW5kZXh9IG5vdCBmb3VuZGApO1xuICAgIH1cbiAgfTtcblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVuZGVyKCkge1xuICAgIHJldHVybiAhdGhpcy5wb2tlbW9uXG4gICAgICA/IFwiXCJcbiAgICAgIDogaHRtbGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0YWxvZ1wiPlxuICAgICAgICAgICAgPHBva2Vtb24taW1hZ2UgcG9rZW1vbkluZGV4PVwiJHt0aGlzLmdldFBva2Vtb25JbmRleCgpfVwiPjwvcG9rZW1vbi1pbWFnZT5cbiAgICAgICAgICAgIDxoMiBkYXRhLWhvb2s9XCJwb2tlbW9uLW5hbWVcIj4ke3RoaXMucG9rZW1vbi5yZXN1bHRzWzBdLm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwIGRhdGEtaG9vaz1cImNvdW50XCI+JHt0aGlzLmdldFBva2Vtb25JbmRleCgpfSBvZiAke3RoaXMucG9rZW1vbi5jb3VudH08L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtaG9vaz1cInByZXZcIiBAY2xpY2s9XCIke3RoaXMubG9hZFByZXZ9XCIgLmRpc2FibGVkPVwiJHt0aGlzLmlzUHJldkRpc2FibGVkKCl9XCI+UHJldjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtaG9vaz1cIm5leHRcIiBAY2xpY2s9XCIke3RoaXMubG9hZE5leHR9XCIgLmRpc2FibGVkPVwiJHt0aGlzLmlzTmV4dERpc2FibGVkKCl9XCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cG9rZW1vbi1nbyAub25TdWJtaXQ9XCIke3RoaXMuZmV0Y2hQb2tlbW9uQnlPZmZzZXR9XCI+PC9wb2tlbW9uLWdvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gIH1cbn1cbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tIFwibGl0L2RlY29yYXRvcnMuanNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcG9rZW1vbi1nby5jb21wb25lbnQuc2Nzc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcInBva2Vtb24tZ29cIilcbmV4cG9ydCBjbGFzcyBQb2tlbW9uR29Db21wb25lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIG92ZXJyaWRlIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIEBzdGF0ZSgpXG4gIGlucHV0VmFsdWUgPSBcIlwiO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIG9uU3VibWl0ITogKGluZGV4OiBzdHJpbmcpID0+IHZvaWQ7XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IElucHV0RXZlbnQpID0+ICh0aGlzLmlucHV0VmFsdWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgIWV2ZW50LmN0cmxLZXkgJiZcbiAgICAgICFbXCJEZWxldGVcIiwgXCJCYWNrc3BhY2VcIiwgXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCIsIFwiRW50ZXJcIiwgXCJDb250cm9sXCJdLmluY2x1ZGVzKGV2ZW50LmtleSkgJiZcbiAgICAgIC9bXjAtOV0vZy50ZXN0KGV2ZW50LmtleSlcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvcm1TdWJtaXQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9uU3VibWl0KHRoaXMuaW5wdXRWYWx1ZSk7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gXCJcIjtcbiAgfTtcblxuICBvdmVycmlkZSByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8Zm9ybSBjbGFzcz1cImdvXCIgQHN1Ym1pdD0ke3RoaXMuaGFuZGxlRm9ybVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGRhdGEtaG9vaz1cInBva2Vtb24taW5kZXhcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAudmFsdWU9JHt0aGlzLmlucHV0VmFsdWV9XG4gICAgICAgICAgQGlucHV0PSR7dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBAa2V5ZG93bj0ke3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBva2Vtb25cIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAuZGlzYWJsZWQ9JHt0aGlzLmlucHV0VmFsdWUgPT09IFwiXCJ9IGRhdGEtaG9vaz1cImdvXCI+R288L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBQcm9wZXJ0eVZhbHVlcywgaHRtbCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gXCJsaXQvZGVjb3JhdG9ycy5qc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wb2tlbW9uLWltYWdlLmNvbXBvbmVudC5zY3NzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwicG9rZW1vbi1pbWFnZVwiKVxuZXhwb3J0IGNsYXNzIFBva2Vtb25JbWFnZUNvbXBvbmVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgcG9rZW1vbkluZGV4ITogbnVtYmVyO1xuXG4gIEBzdGF0ZSgpXG4gIHNob3dGYWxsYmFja0ltYWdlID0gZmFsc2U7XG5cbiAgc3RhdGljIG92ZXJyaWRlIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIG92ZXJyaWRlIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzPHRoaXM+KSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInBva2Vtb25JbmRleFwiKSkge1xuICAgICAgdGhpcy5zaG93RmFsbGJhY2tJbWFnZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uSW1hZ2VFcnJvciA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNob3dGYWxsYmFja0ltYWdlID0gdHJ1ZTtcbiAgfTtcblxuICBnZXRQb2tlbW9uSW1hZ2UgPSAoKSA9PlxuICAgIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vdmVyc2lvbnMvZ2VuZXJhdGlvbi12L2JsYWNrLXdoaXRlL2FuaW1hdGVkLyR7dGhpcy5wb2tlbW9uSW5kZXh9LmdpZmA7XG5cbiAgZ2V0RmFsbGJhY2tJbWFnZSA9ICgpID0+XG4gICAgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8ke3RoaXMucG9rZW1vbkluZGV4fS5wbmdgO1xuXG4gIHByb3RlY3RlZCBvdmVycmlkZSByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2PlxuICAgICAgICAke3RoaXMuc2hvd0ZhbGxiYWNrSW1hZ2VcbiAgICAgICAgICA/IGh0bWxgIDxpbWdcbiAgICAgICAgICAgICAgZGF0YS1ob29rPVwicG9rZW1vbi1mYWxsYmFjay1pbWFnZVwiXG4gICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5nZXRGYWxsYmFja0ltYWdlKCl9XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb2tlbW9uLWZhbGxiYWNrXCJcbiAgICAgICAgICAgICAgYWx0PVwicG9rZW1vblwiXG4gICAgICAgICAgICAvPmBcbiAgICAgICAgICA6IGh0bWxgPGltZ1xuICAgICAgICAgICAgICBkYXRhLWhvb2s9XCJwb2tlbW9uLWltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPVwiJHt0aGlzLmdldFBva2Vtb25JbWFnZSgpfVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwicG9rZW1vblwiXG4gICAgICAgICAgICAgIGFsdD1cInBva2Vtb25cIlxuICAgICAgICAgICAgICBAZXJyb3I9XCIke3RoaXMub25JbWFnZUVycm9yfVwiXG4gICAgICAgICAgICAvPmB9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcIkBsaXQvY29udGV4dFwiO1xuXG5leHBvcnQgY29uc3QgcG9rZW1vblNlcnZpY2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxQb2tlbW9uU2VydmljZT4oXCJfX3Bva2Vtb25fY29udGV4dF9fXCIpO1xuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uTGlzdCB7XG4gIGNvdW50OiBudW1iZXI7XG4gIG5leHQ6IHN0cmluZyB8IG51bGw7XG4gIHByZXZpb3VzOiBzdHJpbmcgfCBudWxsO1xuICByZXN1bHRzOiBQb2tlbW9uW107XG59XG5cbmV4cG9ydCBjbGFzcyBQb2tlbW9uU2VydmljZSB7XG4gIHByaXZhdGUgYmFzZVVybCA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uXCI7XG4gIGdldFBva2Vtb24gPSBhc3luYyAodXJsOiBzdHJpbmcgfCBVUkwpOiBQcm9taXNlPFBva2Vtb25MaXN0PiA9PiBhd2FpdCAoYXdhaXQgZmV0Y2godXJsKSkuanNvbigpO1xuXG4gIGdldFBva2Vtb25CeU9mZnNldCA9IGFzeW5jIChvZmZzZXQ6IHN0cmluZyA9IFwiMFwiKTogUHJvbWlzZTxQb2tlbW9uTGlzdD4gPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyBsaW1pdDogXCIxXCIsIG9mZnNldCB9KTtcbiAgICBjb25zdCBmZXRjaFVybCA9IG5ldyBVUkwodGhpcy5iYXNlVXJsKTtcbiAgICBmZXRjaFVybC5zZWFyY2ggPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gdGhpcy5nZXRQb2tlbW9uKGZldGNoVXJsKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2A6aG9zdHtkaXNwbGF5OmZsZXg7aGVpZ2h0Ojk1dmh9LmNhdGFsb2d7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1zZWxmOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwdnd9YDtcbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2AuZ297cGFkZGluZy10b3A6LjVyZW19aW5wdXRbdHlwZT10ZXh0XXtwYWRkaW5nOi41cmVtfWA7XG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcbmV4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgLnBva2Vtb257aGVpZ2h0OjRyZW19LnBva2Vtb24tZmFsbGJhY2t7aGVpZ2h0OjhyZW19YDtcbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2AuYXBwe2JhY2tncm91bmQtY29sb3I6IzgwYTdmNzttaW4taGVpZ2h0Ojk1dmg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZTpjYWxjKDEwcHggKyAydm1pbik7Y29sb3I6I2ZmZn1gO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5leHBvcnQgeyBDb250ZXh0UmVxdWVzdEV2ZW50IGFzIENvbnRleHRFdmVudCwgfSBmcm9tICcuL2xpYi9jb250ZXh0LXJlcXVlc3QtZXZlbnQuanMnO1xuZXhwb3J0IHsgY3JlYXRlQ29udGV4dCwgfSBmcm9tICcuL2xpYi9jcmVhdGUtY29udGV4dC5qcyc7XG5leHBvcnQgeyBDb250ZXh0Q29uc3VtZXIgfSBmcm9tICcuL2xpYi9jb250cm9sbGVycy9jb250ZXh0LWNvbnN1bWVyLmpzJztcbmV4cG9ydCB7IENvbnRleHRQcm92aWRlciB9IGZyb20gJy4vbGliL2NvbnRyb2xsZXJzL2NvbnRleHQtcHJvdmlkZXIuanMnO1xuZXhwb3J0IHsgQ29udGV4dFJvb3QgfSBmcm9tICcuL2xpYi9jb250ZXh0LXJvb3QuanMnO1xuZXhwb3J0IHsgcHJvdmlkZSB9IGZyb20gJy4vbGliL2RlY29yYXRvcnMvcHJvdmlkZS5qcyc7XG5leHBvcnQgeyBjb25zdW1lIH0gZnJvbSAnLi9saWIvZGVjb3JhdG9ycy9jb25zdW1lLmpzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLyoqXG4gKiBBbiBldmVudCBmaXJlZCBieSBhIGNvbnRleHQgcmVxdWVzdGVyIHRvIHNpZ25hbCBpdCBkZXNpcmVzIGEgc3BlY2lmaWVkIGNvbnRleHQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICpcbiAqIEEgcHJvdmlkZXIgc2hvdWxkIGluc3BlY3QgdGhlIGBjb250ZXh0YCBwcm9wZXJ0eSBvZiB0aGUgZXZlbnQgdG8gZGV0ZXJtaW5lIGlmIGl0IGhhcyBhIHZhbHVlIHRoYXQgY2FuXG4gKiBzYXRpc2Z5IHRoZSByZXF1ZXN0LCBjYWxsaW5nIHRoZSBgY2FsbGJhY2tgIHdpdGggdGhlIHJlcXVlc3RlZCB2YWx1ZSBpZiBzby5cbiAqXG4gKiBJZiB0aGUgcmVxdWVzdGVkIGNvbnRleHQgZXZlbnQgY29udGFpbnMgYSB0cnV0aHkgYHN1YnNjcmliZWAgdmFsdWUsIHRoZW4gYSBwcm92aWRlciBjYW4gY2FsbCB0aGUgY2FsbGJhY2tcbiAqIG11bHRpcGxlIHRpbWVzIGlmIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLCBpZiB0aGlzIGlzIHRoZSBjYXNlIHRoZSBwcm92aWRlciBzaG91bGQgcGFzcyBhbiBgdW5zdWJzY3JpYmVgXG4gKiBtZXRob2QgdG8gdGhlIGNhbGxiYWNrIHdoaWNoIGNvbnN1bWVycyBjYW4gaW52b2tlIHRvIGluZGljYXRlIHRoZXkgbm8gbG9uZ2VyIHdpc2ggdG8gcmVjZWl2ZSB0aGVzZSB1cGRhdGVzLlxuICpcbiAqIElmIG5vIGBzdWJzY3JpYmVgIHZhbHVlIGlzIHByZXNlbnQgaW4gdGhlIGV2ZW50LCB0aGVuIHRoZSBwcm92aWRlciBjYW4gYXNzdW1lIHRoYXQgdGhpcyBpcyBhICdvbmUgdGltZSdcbiAqIHJlcXVlc3QgZm9yIHRoZSBjb250ZXh0IGFuZCBjYW4gdGhlcmVmb3JlIG5vdCB0cmFjayB0aGUgY29uc3VtZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0UmVxdWVzdEV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQga2V5IHRvIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGUgY29udGV4dCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5IGlzIGF2YWlsYWJsZVxuICAgICAqIEBwYXJhbSBzdWJzY3JpYmUgd2hlbiwgdHJ1ZSBpbmRpY2F0ZXMgd2Ugd2FudCB0byBzdWJzY3JpYmUgdG8gZnV0dXJlIHVwZGF0ZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYWxsYmFjaywgc3Vic2NyaWJlKSB7XG4gICAgICAgIHN1cGVyKCdjb250ZXh0LXJlcXVlc3QnLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlID0gc3Vic2NyaWJlID8/IGZhbHNlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQtcmVxdWVzdC1ldmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IENvbnRleHRSZXF1ZXN0RXZlbnQgfSBmcm9tICcuL2NvbnRleHQtcmVxdWVzdC1ldmVudC5qcyc7XG4vKipcbiAqIEEgQ29udGV4dFJvb3QgY2FuIGJlIHVzZWQgdG8gZ2F0aGVyIHVuc2F0aXNmaWVkIGNvbnRleHQgcmVxdWVzdHMgYW5kXG4gKiByZS1kaXNwYXRjaCB0aGVtIHdoZW4gbmV3IHByb3ZpZGVycyB3aGljaCBzYXRpc2Z5IG1hdGNoaW5nIGNvbnRleHQga2V5cyBhcmVcbiAqIGF2YWlsYWJsZS5cbiAqXG4gKiBUaGlzIGFsbG93cyBwcm92aWRlcnMgdG8gYmUgYWRkZWQgdG8gYSBET00gdHJlZSwgb3IgdXBncmFkZWQsIGFmdGVyIHRoZVxuICogY29uc3VtZXJzLlxuICovXG5leHBvcnQgY2xhc3MgQ29udGV4dFJvb3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdDb250ZXh0UmVxdWVzdHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMub25Db250ZXh0UHJvdmlkZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBlbmRpbmdSZXF1ZXN0RGF0YSA9IHRoaXMucGVuZGluZ0NvbnRleHRSZXF1ZXN0cy5nZXQoZXZlbnQuY29udGV4dCk7XG4gICAgICAgICAgICBpZiAocGVuZGluZ1JlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBObyBwZW5kaW5nIHJlcXVlc3RzIGZvciB0aGlzIGNvbnRleHQgYXQgdGhpcyB0aW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2xlYXIgb3VyIGxpc3QuIEFueSBzdGlsbCB1bnNhdGlzZmllZCByZXF1ZXN0cyB3aWxsIHJlLWFkZCB0aGVtc2VsdmVzXG4gICAgICAgICAgICAvLyB3aGVuIHdlIGRpc3BhdGNoIHRoZSBldmVudHMgYmVsb3cuXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdDb250ZXh0UmVxdWVzdHMuZGVsZXRlKGV2ZW50LmNvbnRleHQpO1xuICAgICAgICAgICAgLy8gTG9vcCBvdmVyIGFsbCBwZW5kaW5nIHJlcXVlc3RzIGFuZCByZS1kaXNwYXRjaCB0aGVtIGZyb20gdGhlaXIgc291cmNlXG4gICAgICAgICAgICBjb25zdCB7IHJlcXVlc3RzIH0gPSBwZW5kaW5nUmVxdWVzdERhdGE7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHsgZWxlbWVudFJlZiwgY2FsbGJhY2tSZWYgfSBvZiByZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLmRlcmVmKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBjYWxsYmFja1JlZi5kZXJlZigpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQgfHwgY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCB3YXMgR0MnZWQuIERvIG5vdGhpbmcuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZS1kaXNwYXRjaCBpZiB3ZSBzdGlsbCBoYXZlIHRoZSBlbGVtZW50IGFuZCBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IENvbnRleHRSZXF1ZXN0RXZlbnQoZXZlbnQuY29udGV4dCwgY2FsbGJhY2ssIHRydWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25Db250ZXh0UmVxdWVzdCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gRXZlbnRzIHRoYXQgYXJlIG5vdCBzdWJzY3JpYmluZyBzaG91bGQgbm90IGJlIGJ1ZmZlcmVkXG4gICAgICAgICAgICBpZiAoZXZlbnQuc3Vic2NyaWJlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdG8gdXNlIHRoZSBpbml0aWFsIHRhcmdldCB2aWEgY29tcG9zZWRQYXRoKClcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoYXQncyB0aGUgcmVxdWVzdGluZyBlbGVtZW50IGFuZCB0aGUgZXZlbnQgbWF5IGJlIHJlLXRhcmdldGVkXG4gICAgICAgICAgICAvLyB0byBhbiBvdXRlciBob3N0IGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQuY29tcG9zZWRQYXRoKClbMF07XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGV2ZW50LmNhbGxiYWNrO1xuICAgICAgICAgICAgbGV0IHBlbmRpbmdDb250ZXh0UmVxdWVzdHMgPSB0aGlzLnBlbmRpbmdDb250ZXh0UmVxdWVzdHMuZ2V0KGV2ZW50LmNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKHBlbmRpbmdDb250ZXh0UmVxdWVzdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0NvbnRleHRSZXF1ZXN0cy5zZXQoZXZlbnQuY29udGV4dCwgKHBlbmRpbmdDb250ZXh0UmVxdWVzdHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrczogbmV3IFdlYWtNYXAoKSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdHM6IFtdLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjYWxsYmFja3MgPSBwZW5kaW5nQ29udGV4dFJlcXVlc3RzLmNhbGxiYWNrcy5nZXQoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwZW5kaW5nQ29udGV4dFJlcXVlc3RzLmNhbGxiYWNrcy5zZXQoZWxlbWVudCwgKGNhbGxiYWNrcyA9IG5ldyBXZWFrU2V0KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIC8vIFdlJ3JlIGFscmVhZHkgdHJhY2tpbmcgdGhpcyBlbGVtZW50L2NhbGxiYWNrIHBhaXJcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHBlbmRpbmdDb250ZXh0UmVxdWVzdHMucmVxdWVzdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudFJlZjogbmV3IFdlYWtSZWYoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tSZWY6IG5ldyBXZWFrUmVmKGNhbGxiYWNrKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggdGhlIENvbnRleHRSb290IHRvIGEgZ2l2ZW4gZWxlbWVudCB0byBpbnRlcmNlcHQgYGNvbnRleHQtcmVxdWVzdGAgYW5kXG4gICAgICogYGNvbnRleHQtcHJvdmlkZXJgIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IGFuIGVsZW1lbnQgdG8gYWRkIGV2ZW50IGxpc3RlbmVycyB0b1xuICAgICAqL1xuICAgIGF0dGFjaChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dC1yZXF1ZXN0JywgdGhpcy5vbkNvbnRleHRSZXF1ZXN0KTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0LXByb3ZpZGVyJywgdGhpcy5vbkNvbnRleHRQcm92aWRlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIENvbnRleHRSb290IGV2ZW50IGxpc3RlbmVycyBmcm9tIGEgZ2l2ZW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IGFuIGVsZW1lbnQgZnJvbSB3aGljaCB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICovXG4gICAgZGV0YWNoKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0LXJlcXVlc3QnLCB0aGlzLm9uQ29udGV4dFJlcXVlc3QpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHQtcHJvdmlkZXInLCB0aGlzLm9uQ29udGV4dFByb3ZpZGVyKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LXJvb3QuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBDb250ZXh0UmVxdWVzdEV2ZW50LCB9IGZyb20gJy4uL2NvbnRleHQtcmVxdWVzdC1ldmVudC5qcyc7XG4vKipcbiAqIEEgUmVhY3RpdmVDb250cm9sbGVyIHdoaWNoIGFkZHMgY29udGV4dCBjb25zdW1pbmcgYmVoYXZpb3IgdG8gYSBjdXN0b21cbiAqIGVsZW1lbnQgYnkgZGlzcGF0Y2hpbmcgYGNvbnRleHQtcmVxdWVzdGAgZXZlbnRzLlxuICpcbiAqIFdoZW4gdGhlIGhvc3QgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIGRvY3VtZW50IGl0IHdpbGwgZW1pdCBhXG4gKiBgY29udGV4dC1yZXF1ZXN0YCBldmVudCB3aXRoIGl0cyBjb250ZXh0IGtleS4gV2hlbiB0aGUgY29udGV4dCByZXF1ZXN0XG4gKiBpcyBzYXRpc2ZpZWQgdGhlIGNvbnRyb2xsZXIgd2lsbCBpbnZva2UgdGhlIGNhbGxiYWNrLCBpZiBwcmVzZW50LCBhbmRcbiAqIHRyaWdnZXIgYSBob3N0IHVwZGF0ZSBzbyBpdCBjYW4gcmVzcG9uZCB0byB0aGUgbmV3IHZhbHVlLlxuICpcbiAqIEl0IHdpbGwgYWxzbyBjYWxsIHRoZSBkaXNwb3NlIG1ldGhvZCBnaXZlbiBieSB0aGUgcHJvdmlkZXIgd2hlbiB0aGVcbiAqIGhvc3QgZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0Q29uc3VtZXIge1xuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGNvbnRleHRPck9wdGlvbnMsIGNhbGxiYWNrLCBzdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm92aWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIG11c3QgaGF2ZSBzdGFibGUgaWRlbnRpdHkgdG8gcHJvcGVybHkgZGVkdXBlIGluIENvbnRleHRSb290XG4gICAgICAgIC8vIGlmIHRoaXMgZWxlbWVudCBjb25uZWN0cyBtdWx0aXBsZSB0aW1lcy5cbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSAodmFsdWUsIHVuc3Vic2NyaWJlKSA9PiB7XG4gICAgICAgICAgICAvLyBzb21lIHByb3ZpZGVycyB3aWxsIHBhc3MgYW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24gaW5kaWNhdGluZyB0aGV5IG1heSBwcm92aWRlIGZ1dHVyZSB2YWx1ZXNcbiAgICAgICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHVuc3Vic2NyaWJlIGZ1bmN0aW9uIGNoYW5nZXMgdGhpcyBpbXBsaWVzIHdlIGhhdmUgY2hhbmdlZCBwcm92aWRlclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlICE9PSB1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhbnVwIHRoZSBvbGQgcHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGRvbid0IHN1cHBvcnQgc3Vic2NyaXB0aW9uLCBpbW1lZGlhdGVseSB1bnN1YnNjcmliZVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSB2YWx1ZSBzbyB0aGF0IGl0IGNhbiBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgY29udHJvbGxlclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgLy8gc2NoZWR1bGUgYW4gdXBkYXRlIGluIGNhc2UgdGhpcyB2YWx1ZSBpcyB1c2VkIGluIGEgdGVtcGxhdGVcbiAgICAgICAgICAgIHRoaXMuaG9zdC5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgICAgICAvLyBvbmx5IGludm9rZSBjYWxsYmFjayBpZiB3ZSBhcmUgZWl0aGVyIGV4cGVjdGluZyB1cGRhdGVzIG9yIGhhdmUgbm90IHlldFxuICAgICAgICAgICAgLy8gYmVlbiBwcm92aWRlZCBhIHZhbHVlXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvdmlkZWQgfHwgdGhpcy5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKHZhbHVlLCB1bnN1YnNjcmliZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHVuc3Vic2NyaWJlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICAvLyBUaGlzIGlzIGEgcG90ZW50aWFsbHkgZnJhZ2lsZSBkdWNrLXR5cGUuIEl0IG1lYW5zIGEgY29udGV4dCBvYmplY3QgY2FuJ3RcbiAgICAgICAgLy8gaGF2ZSBhIHByb3BlcnR5IG5hbWUgY29udGV4dCBhbmQgYmUgdXNlZCBpbiBwb3NpdGlvbmFsIGFyZ3VtZW50IGZvcm0uXG4gICAgICAgIGlmIChjb250ZXh0T3JPcHRpb25zLmNvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRleHRPck9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlID0gb3B0aW9ucy5zdWJzY3JpYmUgPz8gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0T3JPcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUgPSBzdWJzY3JpYmUgPz8gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgfVxuICAgIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hSZXF1ZXN0KCk7XG4gICAgfVxuICAgIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3BhdGNoUmVxdWVzdCgpIHtcbiAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQobmV3IENvbnRleHRSZXF1ZXN0RXZlbnQodGhpcy5jb250ZXh0LCB0aGlzLl9jYWxsYmFjaywgdGhpcy5zdWJzY3JpYmUpKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LWNvbnN1bWVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgQ29udGV4dFJlcXVlc3RFdmVudCB9IGZyb20gJy4uL2NvbnRleHQtcmVxdWVzdC1ldmVudC5qcyc7XG5pbXBvcnQgeyBWYWx1ZU5vdGlmaWVyIH0gZnJvbSAnLi4vdmFsdWUtbm90aWZpZXIuanMnO1xuZXhwb3J0IGNsYXNzIENvbnRleHRQcm92aWRlckV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQgd2hpY2ggdGhpcyBwcm92aWRlciBjYW4gcHJvdmlkZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoJ2NvbnRleHQtcHJvdmlkZXInLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbn1cbi8qKlxuICogQSBSZWFjdGl2ZUNvbnRyb2xsZXIgd2hpY2ggYWRkcyBjb250ZXh0IHByb3ZpZGVyIGJlaGF2aW9yIHRvIGFcbiAqIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIFRoaXMgY29udHJvbGxlciBzaW1wbHkgbGlzdGVucyB0byB0aGUgYGNvbnRleHQtcmVxdWVzdGAgZXZlbnQgd2hlblxuICogdGhlIGhvc3QgaXMgY29ubmVjdGVkIHRvIHRoZSBET00gYW5kIHJlZ2lzdGVycyB0aGUgcmVjZWl2ZWQgY2FsbGJhY2tzXG4gKiBhZ2FpbnN0IGl0cyBvYnNlcnZhYmxlIENvbnRleHQgaW1wbGVtZW50YXRpb24uXG4gKlxuICogVGhlIGNvbnRyb2xsZXIgbWF5IGFsc28gYmUgYXR0YWNoZWQgdG8gYW55IEhUTUwgZWxlbWVudCBpbiB3aGljaCBjYXNlIGl0J3NcbiAqIHVwIHRvIHRoZSB1c2VyIHRvIGNhbGwgaG9zdENvbm5lY3RlZCgpIHdoZW4gYXR0YWNoZWQgdG8gdGhlIERPTS4gVGhpcyBpc1xuICogZG9uZSBhdXRvbWF0aWNhbGx5IGZvciBhbnkgY3VzdG9tIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuICogUmVhY3RpdmVDb250cm9sbGVySG9zdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRQcm92aWRlciBleHRlbmRzIFZhbHVlTm90aWZpZXIge1xuICAgIGNvbnN0cnVjdG9yKGhvc3QsIGNvbnRleHRPck9wdGlvbnMsIGluaXRpYWxWYWx1ZSkge1xuICAgICAgICBzdXBlcihjb250ZXh0T3JPcHRpb25zLmNvbnRleHQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBjb250ZXh0T3JPcHRpb25zLmluaXRpYWxWYWx1ZVxuICAgICAgICAgICAgOiBpbml0aWFsVmFsdWUpO1xuICAgICAgICB0aGlzLm9uQ29udGV4dFJlcXVlc3QgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgY2FsbCB0aGUgY2FsbGJhY2sgaWYgdGhlIGNvbnRleHQgbWF0Y2hlcy5cbiAgICAgICAgICAgIC8vIEFsc28sIGluIGNhc2UgYW4gZWxlbWVudCBpcyBhIGNvbnN1bWVyIEFORCBhIHByb3ZpZGVyXG4gICAgICAgICAgICAvLyBvZiB0aGUgc2FtZSBjb250ZXh0LCB3ZSB3YW50IHRvIGF2b2lkIHRoZSBlbGVtZW50IHRvIHNlbGYtcmVnaXN0ZXIuXG4gICAgICAgICAgICAvLyBUaGUgY2hlY2sgb24gY29tcG9zZWRQYXRoIChhcyBvcHBvc2VkIHRvIGV2LnRhcmdldCkgaXMgdG8gY292ZXIgY2FzZXNcbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSBjb25zdW1lciBpcyBpbiB0aGUgc2hhZG93RG9tIG9mIHRoZSBwcm92aWRlciAoaW4gd2hpY2ggY2FzZSxcbiAgICAgICAgICAgIC8vIGV2ZW50LnRhcmdldCA9PT0gdGhpcy5ob3N0IGJlY2F1c2Ugb2YgZXZlbnQgcmV0YXJnZXRpbmcpLlxuICAgICAgICAgICAgY29uc3QgY29uc3VtZXJIb3N0ID0gZXYuY29tcG9zZWRQYXRoKClbMF07XG4gICAgICAgICAgICBpZiAoZXYuY29udGV4dCAhPT0gdGhpcy5jb250ZXh0IHx8IGNvbnN1bWVySG9zdCA9PT0gdGhpcy5ob3N0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmFkZENhbGxiYWNrKGV2LmNhbGxiYWNrLCBjb25zdW1lckhvc3QsIGV2LnN1YnNjcmliZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHdlIGdldCBhIHByb3ZpZGVyIHJlcXVlc3QgZXZlbnQsIHRoYXQgbWVhbnMgYSBjaGlsZCBvZiB0aGlzIGVsZW1lbnRcbiAgICAgICAgICogaGFzIGp1c3Qgd29rZW4gdXAuIElmIGl0J3MgYSBwcm92aWRlciBvZiBvdXIgY29udGV4dCwgdGhlbiB3ZSBtYXkgbmVlZCB0b1xuICAgICAgICAgKiByZS1wYXJlbnQgb3VyIHN1YnNjcmlwdGlvbnMsIGJlY2F1c2UgaXMgYSBtb3JlIHNwZWNpZmljIHByb3ZpZGVyIHRoYW4gdXNcbiAgICAgICAgICogZm9yIGl0cyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vblByb3ZpZGVyUmVxdWVzdCA9IChldikgPT4ge1xuICAgICAgICAgICAgLy8gSWdub3JlIGV2ZW50cyB3aGVuIHRoZSBjb250ZXh0IGRvZXNuJ3QgbWF0Y2guXG4gICAgICAgICAgICAvLyBBbHNvLCBpbiBjYXNlIGFuIGVsZW1lbnQgaXMgYSBjb25zdW1lciBBTkQgYSBwcm92aWRlclxuICAgICAgICAgICAgLy8gb2YgdGhlIHNhbWUgY29udGV4dCBpdCBzaG91bGRuJ3QgcHJvdmlkZSB0byBpdHNlbGYuXG4gICAgICAgICAgICAvLyBXZSB1c2UgY29tcG9zZWRQYXRoIChhcyBvcHBvc2VkIHRvIGV2LnRhcmdldCkgdG8gY292ZXIgY2FzZXNcbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSBjb25zdW1lciBpcyBpbiB0aGUgc2hhZG93RG9tIG9mIHRoZSBwcm92aWRlciAoaW4gd2hpY2ggY2FzZSxcbiAgICAgICAgICAgIC8vIGV2ZW50LnRhcmdldCA9PT0gdGhpcy5ob3N0IGJlY2F1c2Ugb2YgZXZlbnQgcmV0YXJnZXRpbmcpLlxuICAgICAgICAgICAgY29uc3QgY2hpbGRQcm92aWRlckhvc3QgPSBldi5jb21wb3NlZFBhdGgoKVswXTtcbiAgICAgICAgICAgIGlmIChldi5jb250ZXh0ICE9PSB0aGlzLmNvbnRleHQgfHwgY2hpbGRQcm92aWRlckhvc3QgPT09IHRoaXMuaG9zdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlLXBhcmVudCBhbGwgb2Ygb3VyIHN1YnNjcmlwdGlvbnMgaW4gY2FzZSB0aGlzIG5ldyBjaGlsZCBwcm92aWRlclxuICAgICAgICAgICAgLy8gc2hvdWxkIHRha2UgdGhlbSBvdmVyLlxuICAgICAgICAgICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2NhbGxiYWNrLCB7IGNvbnN1bWVySG9zdCB9XSBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGluZmluaXRlIGxvb3BzIGluIHRoZSBjYXNlIHdoZXJlIGEgb25lIGhvc3QgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGlzIHByb3ZpZGluZyB0aGUgc2FtZSBjb250ZXh0IG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gV2hpbGUgbm9ybWFsbHkgaXQncyBhIG5vLW9wIHRvIGF0dGVtcHQgdG8gcmUtcGFyZW50IGEgc3Vic2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBhbHJlYWR5IGhhcyBpdHMgcHJvcGVyIHBhcmVudCwgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlcmUncyBtb3JlXG4gICAgICAgICAgICAgICAgLy8gdGhhbiBvbmUgVmFsdWVQcm92aWRlciBmb3IgdGhlIHNhbWUgY29udGV4dCBvbiB0aGUgc2FtZSBob3N0RWxlbWVudCxcbiAgICAgICAgICAgICAgICAvLyB0aGV5IHdpbGwgZWFjaCBjYWxsIHRoZSBjb25zdW1lciwgYW5kIHNpbmNlIHRoZXkgd2lsbCBlYWNoIGhhdmUgdGhlaXJcbiAgICAgICAgICAgICAgICAvLyBvd24gZGlzcG9zZSBmdW5jdGlvbiwgYSB3ZWxsIGJlaGF2ZWQgY29uc3VtZXIgd2lsbCBub3RpY2UgdGhlIGNoYW5nZVxuICAgICAgICAgICAgICAgIC8vIGluIGRpc3Bvc2UgZnVuY3Rpb24gYW5kIGNhbGwgdGhlaXIgb2xkIG9uZS5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBjYXVzZSB0aGUgc3Vic2NyaXB0aW9ucyB0byB0aHJhc2gsIGJ1dCB3b3JzZSwgd2l0aG91dCB0aGlzXG4gICAgICAgICAgICAgICAgLy8gc2V0IGNoZWNrIGhlcmUsIHdlIGNhbiBlbmQgdXAgaW4gYW4gaW5maW5pdGUgbG9vcCwgYXMgd2UgYWRkIGFuZCByZW1vdmVcbiAgICAgICAgICAgICAgICAvLyB0aGUgc2FtZSBzdWJzY3JpcHRpb25zIG9udG8gdGhlIGVuZCBvZiB0aGUgbWFwIG92ZXIgYW5kIG92ZXIuXG4gICAgICAgICAgICAgICAgaWYgKHNlZW4uaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2Vlbi5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGNvbnN1bWVySG9zdC5kaXNwYXRjaEV2ZW50KG5ldyBDb250ZXh0UmVxdWVzdEV2ZW50KHRoaXMuY29udGV4dCwgY2FsbGJhY2ssIHRydWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICBpZiAoY29udGV4dE9yT3B0aW9ucy5jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRPck9wdGlvbnMuY29udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRPck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdHRhY2hMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXI/Lih0aGlzKTtcbiAgICB9XG4gICAgYXR0YWNoTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dC1yZXF1ZXN0JywgdGhpcy5vbkNvbnRleHRSZXF1ZXN0KTtcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHQtcHJvdmlkZXInLCB0aGlzLm9uUHJvdmlkZXJSZXF1ZXN0KTtcbiAgICB9XG4gICAgaG9zdENvbm5lY3RlZCgpIHtcbiAgICAgICAgLy8gZW1pdCBhbiBldmVudCB0byBzaWduYWwgYSBwcm92aWRlciBpcyBhdmFpbGFibGUgZm9yIHRoaXMgY29udGV4dFxuICAgICAgICB0aGlzLmhvc3QuZGlzcGF0Y2hFdmVudChuZXcgQ29udGV4dFByb3ZpZGVyRXZlbnQodGhpcy5jb250ZXh0KSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC1wcm92aWRlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qKlxuICogQ3JlYXRlcyBhIHR5cGVkIENvbnRleHQuXG4gKlxuICogQ29udGV4dHMgYXJlIGNvbXBhcmVkIHdpdGggd2l0aCBzdHJpY3QgZXF1YWxpdHkuXG4gKlxuICogSWYgeW91IHdhbnQgdHdvIHNlcGFyYXRlIGBjcmVhdGVDb250ZXh0KClgIGNhbGxzIHRvIHJlZmVyZXIgdG8gdGhlIHNhbWVcbiAqIGNvbnRleHQsIHRoZW4gdXNlIGEga2V5IHRoYXQgd2lsbCBieSBlcXVhbCB1bmRlciBzdHJpY3QgZXF1YWxpdHkgbGlrZSBhXG4gKiBzdHJpbmcgZm9yIGBTeW1ib2wuZm9yKClgOlxuICpcbiAqIGBgYHRzXG4gKiAvLyB0cnVlXG4gKiBjcmVhdGVDb250ZXh0KCdteS1jb250ZXh0JykgPT09IGNyZWF0ZUNvbnRleHQoJ215LWNvbnRleHQnKVxuICogLy8gdHJ1ZVxuICogY3JlYXRlQ29udGV4dChTeW1ib2wuZm9yKCdteS1jb250ZXh0JykpID09PSBjcmVhdGVDb250ZXh0KFN5bWJvbC5mb3IoJ215LWNvbnRleHQnKSlcbiAqIGBgYFxuICpcbiAqIElmIHlvdSB3YW50IGEgY29udGV4dCB0byBiZSB1bmlxdWUgc28gdGhhdCBpdCdzIGd1YXJhbnRlZWQgdG8gbm90IGNvbGxpZGVcbiAqIHdpdGggb3RoZXIgY29udGV4dHMsIHVzZSBhIGtleSB0aGF0J3MgdW5pcXVlIHVuZGVyIHN0cmljdCBlcXVhbGl0eSwgbGlrZVxuICogYSBgU3ltYm9sKClgIG9yIG9iamVjdC46XG4gKlxuICogYGBgXG4gKiAvLyBmYWxzZVxuICogY3JlYXRlQ29udGV4dCh7fSkgPT09IGNyZWF0ZUNvbnRleHQoe30pXG4gKiAvLyBmYWxzZVxuICogY3JlYXRlQ29udGV4dChTeW1ib2woJ215LWNvbnRleHQnKSkgPT09IGNyZWF0ZUNvbnRleHQoU3ltYm9sKCdteS1jb250ZXh0JykpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ga2V5IGEgY29udGV4dCBrZXkgdmFsdWVcbiAqIEB0ZW1wbGF0ZSBWYWx1ZVR5cGUgdGhlIHR5cGUgb2YgdmFsdWUgdGhhdCBjYW4gYmUgcHJvdmlkZWQgYnkgdGhpcyBjb250ZXh0LlxuICogQHJldHVybnMgdGhlIGNvbnRleHQga2V5IHZhbHVlIGNhc3QgdG8gYENvbnRleHQ8SywgVmFsdWVUeXBlPmBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGtleTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZS1jb250ZXh0LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgQ29udGV4dENvbnN1bWVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvY29udGV4dC1jb25zdW1lci5qcyc7XG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGFkZHMgYSBDb250ZXh0Q29uc3VtZXIgY29udHJvbGxlciB0byB0aGUgY29tcG9uZW50XG4gKiB3aGljaCB3aWxsIHRyeSBhbmQgcmV0cmlldmUgYSB2YWx1ZSBmb3IgdGhlIHByb3BlcnR5IHZpYSB0aGUgQ29udGV4dCBBUEkuXG4gKlxuICogQHBhcmFtIGNvbnRleHQgQSBDb250ZXh0IGlkZW50aWZpZXIgdmFsdWUgY3JlYXRlZCB2aWEgYGNyZWF0ZUNvbnRleHRgXG4gKiBAcGFyYW0gc3Vic2NyaWJlIEFuIG9wdGlvbmFsIGJvb2xlYW4gd2hpY2ggd2hlbiB0cnVlIGFsbG93cyB0aGUgdmFsdWUgdG8gYmUgdXBkYXRlZFxuICogICBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQge2NvbnN1bWV9IGZyb20gJ0BsaXQvY29udGV4dCc7XG4gKiBpbXBvcnQge2xvZ2dlckNvbnRleHQsIExvZ2dlcn0gZnJvbSAnY29tbXVuaXR5LXByb3RvY29scy9sb2dnZXInO1xuICpcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBjb25zdW1lKHtjb250ZXh0OiBsb2dnZXJDb250ZXh0fSlcbiAqICAgbG9nZ2VyPzogTG9nZ2VyO1xuICpcbiAqICAgZG9UaGluZygpIHtcbiAqICAgICB0aGlzLmxvZ2dlciEubG9nKCd0aGluZyB3YXMgZG9uZScpO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN1bWUoeyBjb250ZXh0LCBzdWJzY3JpYmUsIH0pIHtcbiAgICByZXR1cm4gKChwcm90b09yVGFyZ2V0LCBuYW1lT3JDb250ZXh0KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZU9yQ29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIC8vIFN0YW5kYXJkIGRlY29yYXRvcnMgYnJhbmNoXG4gICAgICAgICAgICBuYW1lT3JDb250ZXh0LmFkZEluaXRpYWxpemVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuZXcgQ29udGV4dENvbnN1bWVyKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbmFtZU9yQ29udGV4dC5uYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEV4cGVyaW1lbnRhbCBkZWNvcmF0b3JzIGJyYW5jaFxuICAgICAgICAgICAgcHJvdG9PclRhcmdldC5jb25zdHJ1Y3Rvci5hZGRJbml0aWFsaXplcigoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ldyBDb250ZXh0Q29uc3VtZXIoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFtuYW1lT3JDb250ZXh0XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3VtZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL2NvbnRleHQtcHJvdmlkZXIuanMnO1xuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBhZGRzIGEgQ29udGV4dFByb3ZpZGVyIGNvbnRyb2xsZXIgdG8gdGhlIGNvbXBvbmVudFxuICogbWFraW5nIGl0IHJlc3BvbmQgdG8gYW55IGBjb250ZXh0LXJlcXVlc3RgIGV2ZW50cyBmcm9tIGl0cyBjaGlsZHJlbiBjb25zdW1lci5cbiAqXG4gKiBAcGFyYW0gY29udGV4dCBBIENvbnRleHQgaWRlbnRpZmllciB2YWx1ZSBjcmVhdGVkIHZpYSBgY3JlYXRlQ29udGV4dGBcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQge3Byb3ZpZGV9IGZyb20gJ0BsaXQvY29udGV4dCc7XG4gKiBpbXBvcnQge0xvZ2dlcn0gZnJvbSAnbXktbG9nZ2luZy1saWJyYXJ5JztcbiAqIGltcG9ydCB7bG9nZ2VyQ29udGV4dH0gZnJvbSAnLi9sb2dnZXItY29udGV4dC5qcyc7XG4gKlxuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHByb3ZpZGUoe2NvbnRleHQ6IGxvZ2dlckNvbnRleHR9KVxuICogICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGUoeyBjb250ZXh0OiBjb250ZXh0LCB9KSB7XG4gICAgcmV0dXJuICgocHJvdG9PclRhcmdldCwgbmFtZU9yQ29udGV4dCkgPT4ge1xuICAgICAgICAvLyBNYXAgb2YgaW5zdGFuY2VzIHRvIGNvbnRyb2xsZXJzXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXJNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWVPckNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBTdGFuZGFyZCBkZWNvcmF0b3JzIGJyYW5jaFxuICAgICAgICAgICAgbmFtZU9yQ29udGV4dC5hZGRJbml0aWFsaXplcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlck1hcC5zZXQodGhpcywgbmV3IENvbnRleHRQcm92aWRlcih0aGlzLCB7IGNvbnRleHQgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvT3JUYXJnZXQuZ2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlck1hcC5nZXQodGhpcyk/LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvT3JUYXJnZXQuc2V0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5pdCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyTWFwLmdldCh0aGlzKT8uc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFeHBlcmltZW50YWwgZGVjb3JhdG9ycyBicmFuY2hcbiAgICAgICAgICAgIHByb3RvT3JUYXJnZXQuY29uc3RydWN0b3IuYWRkSW5pdGlhbGl6ZXIoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyTWFwLnNldChlbGVtZW50LCBuZXcgQ29udGV4dFByb3ZpZGVyKGVsZW1lbnQsIHsgY29udGV4dCB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHByb3h5IGFueSBleGlzdGluZyBzZXR0ZXIgZm9yIHRoaXMgcHJvcGVydHkgYW5kIHVzZSBpdCB0b1xuICAgICAgICAgICAgLy8gbm90aWZ5IHRoZSBjb250cm9sbGVyIG9mIGFuIHVwZGF0ZWQgdmFsdWVcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvT3JUYXJnZXQsIG5hbWVPckNvbnRleHQpO1xuICAgICAgICAgICAgbGV0IG5ld0Rlc2NyaXB0b3I7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICAgICAgICAgIG5ld0Rlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlTWFwLmdldCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJNYXAuZ2V0KHRoaXMpLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTWFwLnNldCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkU2V0dGVyID0gZGVzY3JpcHRvci5zZXQ7XG4gICAgICAgICAgICAgICAgbmV3RGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVzY3JpcHRvcixcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJNYXAuZ2V0KHRoaXMpLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFNldHRlcj8uY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b09yVGFyZ2V0LCBuYW1lT3JDb250ZXh0LCBuZXdEZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvdmlkZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qKlxuICogQSBzaW1wbGUgY2xhc3Mgd2hpY2ggc3RvcmVzIGEgdmFsdWUsIGFuZCB0cmlnZ2VycyByZWdpc3RlcmVkIGNhbGxiYWNrcyB3aGVuXG4gKiB0aGUgdmFsdWUgaXMgY2hhbmdlZCB2aWEgaXRzIHNldHRlci5cbiAqXG4gKiBBbiBpbXBsZW1lbnRvciBtaWdodCB1c2Ugb3RoZXIgb2JzZXJ2YWJsZSBwYXR0ZXJucyBzdWNoIGFzIE1vYlggb3IgUmVkdXggdG9cbiAqIGdldCBiZWhhdmlvciBsaWtlIHRoaXMuIEJ1dCB0aGlzIGlzIGEgcHJldHR5IG1pbmltYWwgYXBwcm9hY2ggdGhhdCB3aWxsXG4gKiBsaWtlbHkgd29yayBmb3IgYSBudW1iZXIgb2YgdXNlIGNhc2VzLlxuICovXG5leHBvcnQgY2xhc3MgVmFsdWVOb3RpZmllciB7XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodik7XG4gICAgfVxuICAgIHNldFZhbHVlKHYsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlID0gZm9yY2UgfHwgIU9iamVjdC5pcyh2LCB0aGlzLl92YWx1ZSk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9ic2VydmVycyA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2NhbGxiYWNrLCB7IGRpc3Bvc2VyIH1dIG9mIHRoaXMuc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMuX3ZhbHVlLCBkaXNwb3Nlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDYWxsYmFjayhjYWxsYmFjaywgY29uc3VtZXJIb3N0LCBzdWJzY3JpYmUpIHtcbiAgICAgICAgaWYgKCFzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIC8vIGp1c3QgY2FsbCB0aGUgY2FsbGJhY2sgb25jZSBhbmQgd2UncmUgZG9uZVxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvbnMuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnNldChjYWxsYmFjaywge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2VyOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5kZWxldGUoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29uc3VtZXJIb3N0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBkaXNwb3NlciB9ID0gdGhpcy5zdWJzY3JpcHRpb25zLmdldChjYWxsYmFjayk7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMudmFsdWUsIGRpc3Bvc2VyKTtcbiAgICB9XG4gICAgY2xlYXJDYWxsYmFja3MoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5jbGVhcigpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbHVlLW5vdGlmaWVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG4vLyBBbGxvd3MgbWluaWZpZXJzIHRvIHJlbmFtZSByZWZlcmVuY2VzIHRvIGdsb2JhbFRoaXNcbmNvbnN0IGdsb2JhbCA9IGdsb2JhbFRoaXM7XG4vKipcbiAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBgYWRvcHRlZFN0eWxlU2hlZXRzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyA9IGdsb2JhbC5TaGFkb3dSb290ICYmXG4gICAgKGdsb2JhbC5TaGFkeUNTUyA9PT0gdW5kZWZpbmVkIHx8IGdsb2JhbC5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpICYmXG4gICAgJ2Fkb3B0ZWRTdHlsZVNoZWV0cycgaW4gRG9jdW1lbnQucHJvdG90eXBlICYmXG4gICAgJ3JlcGxhY2UnIGluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlO1xuY29uc3QgY29uc3RydWN0aW9uVG9rZW4gPSBTeW1ib2woKTtcbmNvbnN0IGNzc1RhZ0NhY2hlID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQSBjb250YWluZXIgZm9yIGEgc3RyaW5nIG9mIENTUyB0ZXh0LCB0aGF0IG1heSBiZSB1c2VkIHRvIGNyZWF0ZSBhIENTU1N0eWxlU2hlZXQuXG4gKlxuICogQ1NTUmVzdWx0IGlzIHRoZSByZXR1cm4gdmFsdWUgb2YgYGNzc2AtdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxzIGFuZFxuICogYHVuc2FmZUNTUygpYC4gSW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgQ1NTUmVzdWx0cyBhcmUgb25seSBjcmVhdGVkIHZpYSB0aGVcbiAqIGBjc3NgIHRhZyBhbmQgYHVuc2FmZUNTUygpYCwgQ1NTUmVzdWx0IGNhbm5vdCBiZSBjb25zdHJ1Y3RlZCBkaXJlY3RseS5cbiAqL1xuZXhwb3J0IGNsYXNzIENTU1Jlc3VsdCB7XG4gICAgY29uc3RydWN0b3IoY3NzVGV4dCwgc3RyaW5ncywgc2FmZVRva2VuKSB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIHRoaXNbJ18kY3NzUmVzdWx0JCddID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNhZmVUb2tlbiAhPT0gY29uc3RydWN0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNzc1RleHQgPSBjc3NUZXh0O1xuICAgICAgICB0aGlzLl9zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG4gICAgLy8gVGhpcyBpcyBhIGdldHRlciBzbyB0aGF0IGl0J3MgbGF6eS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgc3R5bGVzaGVldHNcbiAgICAvLyBhcmUgbm90IGNyZWF0ZWQgdW50aWwgdGhlIGZpcnN0IGVsZW1lbnQgaW5zdGFuY2UgaXMgbWFkZS5cbiAgICBnZXQgc3R5bGVTaGVldCgpIHtcbiAgICAgICAgLy8gSWYgYHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c2AgaXMgdHJ1ZSB0aGVuIHdlIGFzc3VtZSBDU1NTdHlsZVNoZWV0IGlzXG4gICAgICAgIC8vIGNvbnN0cnVjdGFibGUuXG4gICAgICAgIGxldCBzdHlsZVNoZWV0ID0gdGhpcy5fc3R5bGVTaGVldDtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuX3N0cmluZ3M7XG4gICAgICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgJiYgc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZWFibGUgPSBzdHJpbmdzICE9PSB1bmRlZmluZWQgJiYgc3RyaW5ncy5sZW5ndGggPT09IDE7XG4gICAgICAgICAgICBpZiAoY2FjaGVhYmxlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldCA9IGNzc1RhZ0NhY2hlLmdldChzdHJpbmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5fc3R5bGVTaGVldCA9IHN0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpKS5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpO1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZWFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzVGFnQ2FjaGUuc2V0KHN0cmluZ3MsIHN0eWxlU2hlZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVTaGVldDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNzc1RleHQ7XG4gICAgfVxufVxuY29uc3QgdGV4dEZyb21DU1NSZXN1bHQgPSAodmFsdWUpID0+IHtcbiAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgIGlmICh2YWx1ZVsnXyRjc3NSZXN1bHQkJ10gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmNzc1RleHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogYCArXG4gICAgICAgICAgICBgJHt2YWx1ZX0uIFVzZSAndW5zYWZlQ1NTJyB0byBwYXNzIG5vbi1saXRlcmFsIHZhbHVlcywgYnV0IHRha2UgY2FyZSBgICtcbiAgICAgICAgICAgIGB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gKTtcbiAgICB9XG59O1xuLyoqXG4gKiBXcmFwIGEgdmFsdWUgZm9yIGludGVycG9sYXRpb24gaW4gYSB7QGxpbmtjb2RlIGNzc30gdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwuXG4gKlxuICogVGhpcyBpcyB1bnNhZmUgYmVjYXVzZSB1bnRydXN0ZWQgQ1NTIHRleHQgY2FuIGJlIHVzZWQgdG8gcGhvbmUgaG9tZVxuICogb3IgZXhmaWx0cmF0ZSBkYXRhIHRvIGFuIGF0dGFja2VyIGNvbnRyb2xsZWQgc2l0ZS4gVGFrZSBjYXJlIHRvIG9ubHkgdXNlXG4gKiB0aGlzIHdpdGggdHJ1c3RlZCBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNTUyA9ICh2YWx1ZSkgPT4gbmV3IENTU1Jlc3VsdCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpLCB1bmRlZmluZWQsIGNvbnN0cnVjdGlvblRva2VuKTtcbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIExpdEVsZW1lbnQnc1xuICoge0BsaW5rY29kZSBMaXRFbGVtZW50LnN0eWxlc30gcHJvcGVydHkgdG8gc2V0IGVsZW1lbnQgc3R5bGVzLlxuICpcbiAqIEZvciBzZWN1cml0eSByZWFzb25zLCBvbmx5IGxpdGVyYWwgc3RyaW5nIHZhbHVlcyBhbmQgbnVtYmVyIG1heSBiZSB1c2VkIGluXG4gKiBlbWJlZGRlZCBleHByZXNzaW9ucy4gVG8gaW5jb3Jwb3JhdGUgbm9uLWxpdGVyYWwgdmFsdWVzIHtAbGlua2NvZGUgdW5zYWZlQ1NTfVxuICogbWF5IGJlIHVzZWQgaW5zaWRlIGFuIGV4cHJlc3Npb24uXG4gKi9cbmV4cG9ydCBjb25zdCBjc3MgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG4gICAgY29uc3QgY3NzVGV4dCA9IHN0cmluZ3MubGVuZ3RoID09PSAxXG4gICAgICAgID8gc3RyaW5nc1swXVxuICAgICAgICA6IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PiBhY2MgKyB0ZXh0RnJvbUNTU1Jlc3VsdCh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICAgIHJldHVybiBuZXcgQ1NTUmVzdWx0KGNzc1RleHQsIHN0cmluZ3MsIGNvbnN0cnVjdGlvblRva2VuKTtcbn07XG4vKipcbiAqIEFwcGxpZXMgdGhlIGdpdmVuIHN0eWxlcyB0byBhIGBzaGFkb3dSb290YC4gV2hlbiBTaGFkb3cgRE9NIGlzXG4gKiBhdmFpbGFibGUgYnV0IGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIG5vdCwgc3R5bGVzIGFyZSBhcHBlbmRlZCB0byB0aGVcbiAqIGBzaGFkb3dSb290YCB0byBbbWltaWMgc3BlYyBiZWhhdmlvcl0oaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby9jb25zdHJ1Y3Qtc3R5bGVzaGVldHMvI3VzaW5nLWNvbnN0cnVjdGVkLXN0eWxlc2hlZXRzKS5cbiAqIE5vdGUsIHdoZW4gc2hpbW1pbmcgaXMgdXNlZCwgYW55IHN0eWxlcyB0aGF0IGFyZSBzdWJzZXF1ZW50bHkgcGxhY2VkIGludG9cbiAqIHRoZSBzaGFkb3dSb290IHNob3VsZCBiZSBwbGFjZWQgKmJlZm9yZSogYW55IHNoaW1tZWQgYWRvcHRlZCBzdHlsZXMuIFRoaXNcbiAqIHdpbGwgbWF0Y2ggc3BlYyBiZWhhdmlvciB0aGF0IGdpdmVzIGFkb3B0ZWQgc2hlZXRzIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAqIHNoYWRvd1Jvb3QuXG4gKi9cbmV4cG9ydCBjb25zdCBhZG9wdFN0eWxlcyA9IChyZW5kZXJSb290LCBzdHlsZXMpID0+IHtcbiAgICBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICAgIHJlbmRlclJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gc3R5bGVzLm1hcCgocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBzIDogcy5zdHlsZVNoZWV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgcyBvZiBzdHlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBjb25zdCBub25jZSA9IGdsb2JhbFsnbGl0Tm9uY2UnXTtcbiAgICAgICAgICAgIGlmIChub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0O1xuICAgICAgICAgICAgcmVuZGVyUm9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgY3NzUmVzdWx0RnJvbVN0eWxlU2hlZXQgPSAoc2hlZXQpID0+IHtcbiAgICBsZXQgY3NzVGV4dCA9ICcnO1xuICAgIGZvciAoY29uc3QgcnVsZSBvZiBzaGVldC5jc3NSdWxlcykge1xuICAgICAgICBjc3NUZXh0ICs9IHJ1bGUuY3NzVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZUNTUyhjc3NUZXh0KTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q29tcGF0aWJsZVN0eWxlID0gc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzIHx8XG4gICAgKE5PREVfTU9ERSAmJiBnbG9iYWwuQ1NTU3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKVxuICAgID8gKHMpID0+IHNcbiAgICA6IChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IGNzc1Jlc3VsdEZyb21TdHlsZVNoZWV0KHMpIDogcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy10YWcuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKipcbiAqIFdyYXBzIHVwIGEgZmV3IGJlc3QgcHJhY3RpY2VzIHdoZW4gcmV0dXJuaW5nIGEgcHJvcGVydHkgZGVzY3JpcHRvciBmcm9tIGFcbiAqIGRlY29yYXRvci5cbiAqXG4gKiBNYXJrcyB0aGUgZGVmaW5lZCBwcm9wZXJ0eSBhcyBjb25maWd1cmFibGUsIGFuZCBlbnVtZXJhYmxlLCBhbmQgaGFuZGxlc1xuICogdGhlIGNhc2Ugd2hlcmUgd2UgaGF2ZSBhIGJ1c3RlZCBSZWZsZWN0LmRlY29yYXRlIHpvbWJpZWZpbGwgKGUuZy4gaW4gQW5ndWxhclxuICogYXBwcykuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBkZXNjID0gKG9iaiwgbmFtZSwgZGVzY3JpcHRvcikgPT4ge1xuICAgIC8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgd2Uga2VlcCB0aGVtIGNvbmZpZ3VyYWJsZSBhbmQgZW51bWVyYWJsZS5cbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXG4gICAgLy8gV2UgY2hlY2sgZm9yIFJlZmxlY3QuZGVjb3JhdGUgZWFjaCB0aW1lLCBpbiBjYXNlIHRoZSB6b21iaWVmaWxsXG4gICAgLy8gaXMgYXBwbGllZCB2aWEgbGF6eSBsb2FkaW5nIHNvbWUgQW5ndWxhciBjb2RlLlxuICAgIFJlZmxlY3QuZGVjb3JhdGUgJiZcbiAgICAgICAgdHlwZW9mIG5hbWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIElmIHdlJ3JlIGNhbGxlZCBhcyBhIGxlZ2FjeSBkZWNvcmF0b3IsIGFuZCBSZWZsZWN0LmRlY29yYXRlIGlzIHByZXNlbnRcbiAgICAgICAgLy8gdGhlbiB3ZSBoYXZlIG5vIGd1YXJhbnRlZXMgdGhhdCB0aGUgcmV0dXJuZWQgZGVzY3JpcHRvciB3aWxsIGJlXG4gICAgICAgIC8vIGRlZmluZWQgb24gdGhlIGNsYXNzLCBzbyB3ZSBtdXN0IGFwcGx5IGl0IGRpcmVjdGx5IG91cnNlbHZlcy5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogYGBganNcbiAqIEBjdXN0b21FbGVtZW50KCdteS1lbGVtZW50JylcbiAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBAcGFyYW0gdGFnTmFtZSBUaGUgdGFnIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSkgPT4gKGNsYXNzT3JUYXJnZXQsIGNvbnRleHQpID0+IHtcbiAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIoKCkgPT4ge1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXNzT3JUYXJnZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGFzc09yVGFyZ2V0KTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tLWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyB0byBhIG1ldGhvZCB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGluIGFcbiAqIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIGFzIGFjY2VwdGVkIGJ5XG4gKiBgRXZlbnRUYXJnZXQjYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIGBFdmVudFRhcmdldCNyZW1vdmVFdmVudExpc3RlbmVyYC5cbiAqXG4gKiBDdXJyZW50IGJyb3dzZXJzIHN1cHBvcnQgdGhlIGBjYXB0dXJlYCwgYHBhc3NpdmVgLCBhbmQgYG9uY2VgIG9wdGlvbnMuIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyI1BhcmFtZXRlcnNcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgY2xpY2tlZCA9IGZhbHNlO1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBAY2xpY2s9JHt0aGlzLl9vbkNsaWNrfT5cbiAqICAgICAgICAgPGJ1dHRvbj48L2J1dHRvbj5cbiAqICAgICAgIDwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqXG4gKiAgIEBldmVudE9wdGlvbnMoe2NhcHR1cmU6IHRydWV9KVxuICogICBfb25DbGljayhlKSB7XG4gKiAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgcmV0dXJuICgocHJvdG9PclZhbHVlLCBuYW1lT3JDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHR5cGVvZiBwcm90b09yVmFsdWUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcHJvdG9PclZhbHVlXG4gICAgICAgICAgICA6IHByb3RvT3JWYWx1ZVtuYW1lT3JDb250ZXh0XTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZXRob2QsIG9wdGlvbnMpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtb3B0aW9ucy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qXG4gKiBJTVBPUlRBTlQ6IEZvciBjb21wYXRpYmlsaXR5IHdpdGggdHNpY2tsZSBhbmQgdGhlIENsb3N1cmUgSlMgY29tcGlsZXIsIGFsbFxuICogcHJvcGVydHkgZGVjb3JhdG9ycyAoYnV0IG5vdCBjbGFzcyBkZWNvcmF0b3JzKSBpbiB0aGlzIGZpbGUgdGhhdCBoYXZlXG4gKiBhbiBARXhwb3J0RGVjb3JhdGVkSXRlbXMgYW5ub3RhdGlvbiBtdXN0IGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGZ1bmN0aW9uLFxuICogbm90IGFuIGFycm93IGZ1bmN0aW9uLlxuICovXG5pbXBvcnQgeyBkZWZhdWx0Q29udmVydGVyLCBub3RFcXVhbCwgfSBmcm9tICcuLi9yZWFjdGl2ZS1lbGVtZW50LmpzJztcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBFbnN1cmUgd2FybmluZ3MgYXJlIGlzc3VlZCBvbmx5IDF4LCBldmVuIGlmIG11bHRpcGxlIHZlcnNpb25zIG9mIExpdFxuICAgIC8vIGFyZSBsb2FkZWQuXG4gICAgY29uc3QgaXNzdWVkV2FybmluZ3MgPSAoZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA/Pz0gbmV3IFNldCgpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICBpZiAoIWlzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgaXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IGxlZ2FjeVByb3BlcnR5ID0gKG9wdGlvbnMsIHByb3RvLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgaGFzT3duUHJvcGVydHkgPSBwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICBwcm90by5jb25zdHJ1Y3Rvci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBoYXNPd25Qcm9wZXJ0eSA/IHsgLi4ub3B0aW9ucywgd3JhcHBlZDogdHJ1ZSB9IDogb3B0aW9ucyk7XG4gICAgLy8gRm9yIGFjY2Vzc29ycyAod2hpY2ggaGF2ZSBhIGRlc2NyaXB0b3Igb24gdGhlIHByb3RvdHlwZSkgd2UgbmVlZCB0b1xuICAgIC8vIHJldHVybiBhIGRlc2NyaXB0b3IsIG90aGVyd2lzZSBUeXBlU2NyaXB0IG92ZXJ3cml0ZXMgdGhlIGRlc2NyaXB0b3Igd2VcbiAgICAvLyBkZWZpbmUgaW4gY3JlYXRlUHJvcGVydHkoKSB3aXRoIHRoZSBvcmlnaW5hbCBkZXNjcmlwdG9yLiBXZSBkb24ndCBkbyB0aGlzXG4gICAgLy8gZm9yIGZpZWxkcywgd2hpY2ggZG9uJ3QgaGF2ZSBhIGRlc2NyaXB0b3IsIGJlY2F1c2UgdGhpcyBjb3VsZCBvdmVyd3JpdGVcbiAgICAvLyBkZXNjcmlwdG9yIGRlZmluZWQgYnkgb3RoZXIgZGVjb3JhdG9ycy5cbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHlcbiAgICAgICAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBuYW1lKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbn07XG4vLyBUaGlzIGlzIGR1cGxpY2F0ZWQgZnJvbSBhIHNpbWlsYXIgdmFyaWFibGUgaW4gcmVhY3RpdmUtZWxlbWVudC50cywgYnV0XG4vLyBhY3R1YWxseSBtYWtlcyBzZW5zZSB0byBoYXZlIHRoaXMgZGVmYXVsdCBkZWZpbmVkIHdpdGggdGhlIGRlY29yYXRvciwgc29cbi8vIHRoYXQgZGlmZmVyZW50IGRlY29yYXRvcnMgY291bGQgaGF2ZSBkaWZmZXJlbnQgZGVmYXVsdHMuXG5jb25zdCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbiA9IHtcbiAgICBhdHRyaWJ1dGU6IHRydWUsXG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGNvbnZlcnRlcjogZGVmYXVsdENvbnZlcnRlcixcbiAgICByZWZsZWN0OiBmYWxzZSxcbiAgICBoYXNDaGFuZ2VkOiBub3RFcXVhbCxcbn07XG4vKipcbiAqIFdyYXBzIGEgY2xhc3MgYWNjZXNzb3Igb3Igc2V0dGVyIHNvIHRoYXQgYHJlcXVlc3RVcGRhdGUoKWAgaXMgY2FsbGVkIHdpdGggdGhlXG4gKiBwcm9wZXJ0eSBuYW1lIGFuZCBvbGQgdmFsdWUgd2hlbiB0aGUgYWNjZXNzb3IgaXMgc2V0LlxuICovXG5leHBvcnQgY29uc3Qgc3RhbmRhcmRQcm9wZXJ0eSA9IChvcHRpb25zID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24sIHRhcmdldCwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsga2luZCwgbWV0YWRhdGEgfSA9IGNvbnRleHQ7XG4gICAgaWYgKERFVl9NT0RFICYmIG1ldGFkYXRhID09IG51bGwpIHtcbiAgICAgICAgaXNzdWVXYXJuaW5nKCdtaXNzaW5nLWNsYXNzLW1ldGFkYXRhJywgYFRoZSBjbGFzcyAke3RhcmdldH0gaXMgbWlzc2luZyBkZWNvcmF0b3IgbWV0YWRhdGEuIFRoaXMgYCArXG4gICAgICAgICAgICBgY291bGQgbWVhbiB0aGF0IHlvdSdyZSB1c2luZyBhIGNvbXBpbGVyIHRoYXQgc3VwcG9ydHMgZGVjb3JhdG9ycyBgICtcbiAgICAgICAgICAgIGBidXQgZG9lc24ndCBzdXBwb3J0IGRlY29yYXRvciBtZXRhZGF0YSwgc3VjaCBhcyBUeXBlU2NyaXB0IDUuMS4gYCArXG4gICAgICAgICAgICBgUGxlYXNlIHVwZGF0ZSB5b3VyIGNvbXBpbGVyLmApO1xuICAgIH1cbiAgICAvLyBTdG9yZSB0aGUgcHJvcGVydHkgb3B0aW9uc1xuICAgIGxldCBwcm9wZXJ0aWVzID0gZ2xvYmFsVGhpcy5saXRQcm9wZXJ0eU1ldGFkYXRhLmdldChtZXRhZGF0YSk7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbG9iYWxUaGlzLmxpdFByb3BlcnR5TWV0YWRhdGEuc2V0KG1ldGFkYXRhLCAocHJvcGVydGllcyA9IG5ldyBNYXAoKSkpO1xuICAgIH1cbiAgICBwcm9wZXJ0aWVzLnNldChjb250ZXh0Lm5hbWUsIG9wdGlvbnMpO1xuICAgIGlmIChraW5kID09PSAnYWNjZXNzb3InKSB7XG4gICAgICAgIC8vIFN0YW5kYXJkIGRlY29yYXRvcnMgY2Fubm90IGR5bmFtaWNhbGx5IG1vZGlmeSB0aGUgY2xhc3MsIHNvIHdlIGNhbid0XG4gICAgICAgIC8vIHJlcGxhY2UgYSBmaWVsZCB3aXRoIGFjY2Vzc29ycy4gVGhlIHVzZXIgbXVzdCB1c2UgdGhlIG5ldyBgYWNjZXNzb3JgXG4gICAgICAgIC8vIGtleXdvcmQgaW5zdGVhZC5cbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBjb250ZXh0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2V0KHYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRhcmdldC5nZXQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0LmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0KHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjaGFuZ2VQcm9wZXJ0eShuYW1lLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGtpbmQgPT09ICdzZXR0ZXInKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gY29udGV4dDtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgdGFyZ2V0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBkZWNvcmF0b3IgbG9jYXRpb246ICR7a2luZH1gKTtcbn07XG4vKipcbiAqIEEgY2xhc3MgZmllbGQgb3IgYWNjZXNzb3IgZGVjb3JhdG9yIHdoaWNoIGNyZWF0ZXMgYSByZWFjdGl2ZSBwcm9wZXJ0eSB0aGF0XG4gKiByZWZsZWN0cyBhIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHZhbHVlLiBXaGVuIGEgZGVjb3JhdGVkIHByb3BlcnR5IGlzIHNldFxuICogdGhlIGVsZW1lbnQgd2lsbCB1cGRhdGUgYW5kIHJlbmRlci4gQSB7QGxpbmtjb2RlIFByb3BlcnR5RGVjbGFyYXRpb259IG1heVxuICogb3B0aW9uYWxseSBiZSBzdXBwbGllZCB0byBjb25maWd1cmUgcHJvcGVydHkgZmVhdHVyZXMuXG4gKlxuICogVGhpcyBkZWNvcmF0b3Igc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgcHVibGljIGZpZWxkcy4gQXMgcHVibGljIGZpZWxkcyxcbiAqIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgcHJpbWFyaWx5IHNldHRhYmxlIGJ5IGVsZW1lbnQgdXNlcnMsXG4gKiBlaXRoZXIgdmlhIGF0dHJpYnV0ZSBvciB0aGUgcHJvcGVydHkgaXRzZWxmLlxuICpcbiAqIEdlbmVyYWxseSwgcHJvcGVydGllcyB0aGF0IGFyZSBjaGFuZ2VkIGJ5IHRoZSBlbGVtZW50IHNob3VsZCBiZSBwcml2YXRlIG9yXG4gKiBwcm90ZWN0ZWQgZmllbGRzIGFuZCBzaG91bGQgdXNlIHRoZSB7QGxpbmtjb2RlIHN0YXRlfSBkZWNvcmF0b3IuXG4gKlxuICogSG93ZXZlciwgc29tZXRpbWVzIGVsZW1lbnQgY29kZSBkb2VzIG5lZWQgdG8gc2V0IGEgcHVibGljIHByb3BlcnR5LiBUaGlzXG4gKiBzaG91bGQgdHlwaWNhbGx5IG9ubHkgYmUgZG9uZSBpbiByZXNwb25zZSB0byB1c2VyIGludGVyYWN0aW9uLCBhbmQgYW4gZXZlbnRcbiAqIHNob3VsZCBiZSBmaXJlZCBpbmZvcm1pbmcgdGhlIHVzZXI7IGZvciBleGFtcGxlLCBhIGNoZWNrYm94IHNldHMgaXRzXG4gKiBgY2hlY2tlZGAgcHJvcGVydHkgd2hlbiBjbGlja2VkIGFuZCBmaXJlcyBhIGBjaGFuZ2VkYCBldmVudC4gTXV0YXRpbmcgcHVibGljXG4gKiBwcm9wZXJ0aWVzIHNob3VsZCB0eXBpY2FsbHkgbm90IGJlIGRvbmUgZm9yIG5vbi1wcmltaXRpdmUgKG9iamVjdCBvciBhcnJheSlcbiAqIHByb3BlcnRpZXMuIEluIG90aGVyIGNhc2VzIHdoZW4gYW4gZWxlbWVudCBuZWVkcyB0byBtYW5hZ2Ugc3RhdGUsIGEgcHJpdmF0ZVxuICogcHJvcGVydHkgZGVjb3JhdGVkIHZpYSB0aGUge0BsaW5rY29kZSBzdGF0ZX0gZGVjb3JhdG9yIHNob3VsZCBiZSB1c2VkLiBXaGVuXG4gKiBuZWVkZWQsIHN0YXRlIHByb3BlcnRpZXMgY2FuIGJlIGluaXRpYWxpemVkIHZpYSBwdWJsaWMgcHJvcGVydGllcyB0b1xuICogZmFjaWxpdGF0ZSBjb21wbGV4IGludGVyYWN0aW9ucy5cbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICogICBjbGlja2VkID0gZmFsc2U7XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHkob3B0aW9ucykge1xuICAgIHJldHVybiAocHJvdG9PclRhcmdldCwgbmFtZU9yQ29udGV4dFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgKSA9PiB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG5hbWVPckNvbnRleHQgPT09ICdvYmplY3QnXG4gICAgICAgICAgICA/IHN0YW5kYXJkUHJvcGVydHkob3B0aW9ucywgcHJvdG9PclRhcmdldCwgbmFtZU9yQ29udGV4dClcbiAgICAgICAgICAgIDogbGVnYWN5UHJvcGVydHkob3B0aW9ucywgcHJvdG9PclRhcmdldCwgbmFtZU9yQ29udGV4dCkpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9wZXJ0eS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlc2MgfSBmcm9tICcuL2Jhc2UuanMnO1xuLy8gU2hhcmVkIGZyYWdtZW50IHVzZWQgdG8gZ2VuZXJhdGUgZW1wdHkgTm9kZUxpc3RzIHdoZW4gYSByZW5kZXIgcm9vdCBpc1xuLy8gdW5kZWZpbmVkXG5sZXQgZnJhZ21lbnQ7XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyXG4gKiB0aGF0IGV4ZWN1dGVzIGEgcXVlcnlTZWxlY3RvckFsbCBvbiB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICpcbiAqIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yQWxsXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFsbCgnZGl2JylcbiAqICAgZGl2czogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD47XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IGlkPVwiZmlyc3RcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgaWQ9XCJzZWNvbmRcIj48L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QWxsKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuICgob2JqLCBuYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBkZXNjKG9iaiwgbmFtZSwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucmVuZGVyUm9vdCA/PyAoZnJhZ21lbnQgPz89IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVzYyB9IGZyb20gJy4vYmFzZS5qcyc7XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIHJldHVybnMgdGhlIGBhc3NpZ25lZEVsZW1lbnRzYCBvZiB0aGUgZ2l2ZW4gYHNsb3RgLiBQcm92aWRlcyBhIGRlY2xhcmF0aXZlXG4gKiB3YXkgdG8gdXNlXG4gKiBbYEhUTUxTbG90RWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxTbG90RWxlbWVudC9hc3NpZ25lZEVsZW1lbnRzKS5cbiAqXG4gKiBDYW4gYmUgcGFzc2VkIGFuIG9wdGlvbmFsIHtAbGlua2NvZGUgUXVlcnlBc3NpZ25lZEVsZW1lbnRzT3B0aW9uc30gb2JqZWN0LlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QXNzaWduZWRFbGVtZW50cyh7IHNsb3Q6ICdsaXN0JyB9KVxuICogICBsaXN0SXRlbXMhOiBBcnJheTxIVE1MRWxlbWVudD47XG4gKiAgIEBxdWVyeUFzc2lnbmVkRWxlbWVudHMoKVxuICogICB1bm5hbWVkU2xvdEVscyE6IEFycmF5PEhUTUxFbGVtZW50PjtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxzbG90IG5hbWU9XCJsaXN0XCI+PC9zbG90PlxuICogICAgICAgPHNsb3Q+PC9zbG90PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIE5vdGUsIHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHkgc2hvdWxkIGJlIGFubm90YXRlZCBhcyBgQXJyYXk8SFRNTEVsZW1lbnQ+YC5cbiAqXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzc2lnbmVkRWxlbWVudHMob3B0aW9ucykge1xuICAgIHJldHVybiAoKG9iaiwgbmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB7IHNsb3QsIHNlbGVjdG9yIH0gPSBvcHRpb25zID8/IHt9O1xuICAgICAgICBjb25zdCBzbG90U2VsZWN0b3IgPSBgc2xvdCR7c2xvdCA/IGBbbmFtZT0ke3Nsb3R9XWAgOiAnOm5vdChbbmFtZV0pJ31gO1xuICAgICAgICByZXR1cm4gZGVzYyhvYmosIG5hbWUsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90RWwgPSB0aGlzLnJlbmRlclJvb3Q/LnF1ZXJ5U2VsZWN0b3Ioc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHNsb3RFbD8uYXNzaWduZWRFbGVtZW50cyhvcHRpb25zKSA/PyBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNlbGVjdG9yID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICA6IGVsZW1lbnRzLmZpbHRlcigobm9kZSkgPT4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlc2MgfSBmcm9tICcuL2Jhc2UuanMnO1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiByZXR1cm5zIHRoZSBgYXNzaWduZWROb2Rlc2Agb2YgdGhlIGdpdmVuIGBzbG90YC5cbiAqXG4gKiBDYW4gYmUgcGFzc2VkIGFuIG9wdGlvbmFsIHtAbGlua2NvZGUgUXVlcnlBc3NpZ25lZE5vZGVzT3B0aW9uc30gb2JqZWN0LlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QXNzaWduZWROb2Rlcyh7c2xvdDogJ2xpc3QnLCBmbGF0dGVuOiB0cnVlfSlcbiAqICAgbGlzdEl0ZW1zITogQXJyYXk8Tm9kZT47XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8c2xvdCBuYW1lPVwibGlzdFwiPjwvc2xvdD5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBOb3RlIHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHkgc2hvdWxkIGJlIGFubm90YXRlZCBhcyBgQXJyYXk8Tm9kZT5gLiBVc2UgdGhlXG4gKiBxdWVyeUFzc2lnbmVkRWxlbWVudHMgZGVjb3JhdG9yIHRvIGxpc3Qgb25seSBlbGVtZW50cywgYW5kIG9wdGlvbmFsbHkgZmlsdGVyXG4gKiB0aGUgZWxlbWVudCBsaXN0IHVzaW5nIGEgQ1NTIHNlbGVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXNzaWduZWROb2RlcyhvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICByZXR1cm4gKChvYmosIG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgeyBzbG90IH0gPSBvcHRpb25zID8/IHt9O1xuICAgICAgICBjb25zdCBzbG90U2VsZWN0b3IgPSBgc2xvdCR7c2xvdCA/IGBbbmFtZT0ke3Nsb3R9XWAgOiAnOm5vdChbbmFtZV0pJ31gO1xuICAgICAgICByZXR1cm4gZGVzYyhvYmosIG5hbWUsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90RWwgPSB0aGlzLnJlbmRlclJvb3Q/LnF1ZXJ5U2VsZWN0b3Ioc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNsb3RFbD8uYXNzaWduZWROb2RlcyhvcHRpb25zKSA/PyBbXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVzYyB9IGZyb20gJy4vYmFzZS5qcyc7XG4vLyBOb3RlLCBpbiB0aGUgZnV0dXJlLCB3ZSBtYXkgZXh0ZW5kIHRoaXMgZGVjb3JhdG9yIHRvIHN1cHBvcnQgdGhlIHVzZSBjYXNlXG4vLyB3aGVyZSB0aGUgcXVlcmllZCBlbGVtZW50IG1heSBuZWVkIHRvIGRvIHdvcmsgdG8gYmVjb21lIHJlYWR5IHRvIGludGVyYWN0XG4vLyB3aXRoIChlLmcuIGxvYWQgc29tZSBpbXBsZW1lbnRhdGlvbiBjb2RlKS4gSWYgc28sIHdlIG1pZ2h0IGVsZWN0IHRvXG4vLyBhZGQgYSBzZWNvbmQgYXJndW1lbnQgZGVmaW5pbmcgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBydW4gdG8gbWFrZSB0aGVcbi8vIHF1ZXJpZWQgZWxlbWVudCBsb2FkZWQvdXBkYXRlZC9yZWFkeS5cbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXIgdGhhdFxuICogcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzdWx0IG9mIGEgcXVlcnlTZWxlY3RvciBvbiB0aGVcbiAqIGVsZW1lbnQncyByZW5kZXJSb290IGRvbmUgYWZ0ZXIgdGhlIGVsZW1lbnQncyBgdXBkYXRlQ29tcGxldGVgIHByb21pc2VcbiAqIHJlc29sdmVzLiBXaGVuIHRoZSBxdWVyaWVkIHByb3BlcnR5IG1heSBjaGFuZ2Ugd2l0aCBlbGVtZW50IHN0YXRlLCB0aGlzXG4gKiBkZWNvcmF0b3IgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiByZXF1aXJpbmcgdXNlcnMgdG8gYXdhaXQgdGhlXG4gKiBgdXBkYXRlQ29tcGxldGVgIGJlZm9yZSBhY2Nlc3NpbmcgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeUFzeW5jKCcjZmlyc3QnKVxuICogICBmaXJzdDogUHJvbWlzZTxIVE1MRGl2RWxlbWVudD47XG4gKlxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICA8ZGl2IGlkPVwiZmlyc3RcIj48L2Rpdj5cbiAqICAgICAgIDxkaXYgaWQ9XCJzZWNvbmRcIj48L2Rpdj5cbiAqICAgICBgO1xuICogICB9XG4gKiB9XG4gKlxuICogLy8gZXh0ZXJuYWwgdXNhZ2VcbiAqIGFzeW5jIGRvU29tZXRoaW5nV2l0aEZpcnN0KCkge1xuICogIChhd2FpdCBhTXlFbGVtZW50LmZpcnN0KS5kb1NvbWV0aGluZygpO1xuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzeW5jKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuICgob2JqLCBuYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBkZXNjKG9iaiwgbmFtZSwge1xuICAgICAgICAgICAgYXN5bmMgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdD8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPz8gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXN5bmMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZXNjIH0gZnJvbSAnLi9iYXNlLmpzJztcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBFbnN1cmUgd2FybmluZ3MgYXJlIGlzc3VlZCBvbmx5IDF4LCBldmVuIGlmIG11bHRpcGxlIHZlcnNpb25zIG9mIExpdFxuICAgIC8vIGFyZSBsb2FkZWQuXG4gICAgY29uc3QgaXNzdWVkV2FybmluZ3MgPSAoZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA/Pz0gbmV3IFNldCgpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGNvZGVcbiAgICAgICAgICAgID8gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIGlmICghaXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBpc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqIEBwYXJhbSBjYWNoZSBBbiBvcHRpb25hbCBib29sZWFuIHdoaWNoIHdoZW4gdHJ1ZSBwZXJmb3JtcyB0aGUgRE9NIHF1ZXJ5IG9ubHlcbiAqICAgICBvbmNlIGFuZCBjYWNoZXMgdGhlIHJlc3VsdC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeSgnI2ZpcnN0JylcbiAqICAgZmlyc3Q6IEhUTUxEaXZFbGVtZW50O1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBpZD1cImZpcnN0XCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGlkPVwic2Vjb25kXCI+PC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeShzZWxlY3RvciwgY2FjaGUpIHtcbiAgICByZXR1cm4gKChwcm90b09yVGFyZ2V0LCBuYW1lT3JDb250ZXh0LCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvUXVlcnkgPSAoZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IChlbC5yZW5kZXJSb290Py5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/PyBudWxsKTtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJiByZXN1bHQgPT09IG51bGwgJiYgY2FjaGUgJiYgIWVsLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdHlwZW9mIG5hbWVPckNvbnRleHQgPT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZU9yQ29udGV4dC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIDogbmFtZU9yQ29udGV4dDtcbiAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJycsIGBAcXVlcnknZCBmaWVsZCAke0pTT04uc3RyaW5naWZ5KFN0cmluZyhuYW1lKSl9IHdpdGggdGhlICdjYWNoZScgYCArXG4gICAgICAgICAgICAgICAgICAgIGBmbGFnIHNldCBmb3Igc2VsZWN0b3IgJyR7c2VsZWN0b3J9JyBoYXMgYmVlbiBhY2Nlc3NlZCBiZWZvcmUgYCArXG4gICAgICAgICAgICAgICAgICAgIGB0aGUgZmlyc3QgdXBkYXRlIGFuZCByZXR1cm5lZCBudWxsLiBUaGlzIGlzIGV4cGVjdGVkIGlmIHRoZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYHJlbmRlclJvb3QgdHJlZSBoYXMgbm90IGJlZW4gcHJvdmlkZWQgYmVmb3JlaGFuZCAoZS5nLiB2aWEgYCArXG4gICAgICAgICAgICAgICAgICAgIGBEZWNsYXJhdGl2ZSBTaGFkb3cgRE9NKS4gVGhlcmVmb3JlIHRoZSB2YWx1ZSBoYXNuJ3QgYmVlbiBjYWNoZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUT0RPOiBpZiB3ZSB3YW50IHRvIGFsbG93IHVzZXJzIHRvIGFzc2VydCB0aGF0IHRoZSBxdWVyeSB3aWxsIG5ldmVyXG4gICAgICAgICAgICAvLyByZXR1cm4gbnVsbCwgd2UgbmVlZCBhIG5ldyBvcHRpb24gYW5kIHRvIHRocm93IGhlcmUgaWYgdGhlIHJlc3VsdFxuICAgICAgICAgICAgLy8gaXMgbnVsbC5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICAgICAgLy8gQWNjZXNzb3JzIHRvIHdyYXAgZnJvbSBlaXRoZXI6XG4gICAgICAgICAgICAvLyAgIDEuIFRoZSBkZWNvcmF0b3IgdGFyZ2V0LCBpbiB0aGUgY2FzZSBvZiBzdGFuZGFyZCBkZWNvcmF0b3JzXG4gICAgICAgICAgICAvLyAgIDIuIFRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yLCBpbiB0aGUgY2FzZSBvZiBleHBlcmltZW50YWwgZGVjb3JhdG9yc1xuICAgICAgICAgICAgLy8gICAgICBvbiBhdXRvLWFjY2Vzc29ycy5cbiAgICAgICAgICAgIC8vICAgMy4gRnVuY3Rpb25zIHRoYXQgYWNjZXNzIG91ciBvd24gY2FjaGUta2V5IHByb3BlcnR5IG9uIHRoZSBpbnN0YW5jZSxcbiAgICAgICAgICAgIC8vICAgICAgaW4gdGhlIGNhc2Ugb2YgZXhwZXJpbWVudGFsIGRlY29yYXRvcnMgb24gZmllbGRzLlxuICAgICAgICAgICAgY29uc3QgeyBnZXQsIHNldCB9ID0gdHlwZW9mIG5hbWVPckNvbnRleHQgPT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgPyBwcm90b09yVGFyZ2V0XG4gICAgICAgICAgICAgICAgOiBkZXNjcmlwdG9yID8/XG4gICAgICAgICAgICAgICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBERVZfTU9ERVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gU3ltYm9sKGAke1N0cmluZyhuYW1lT3JDb250ZXh0KX0gKEBxdWVyeSgpIGNhY2hlKWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBTeW1ib2woKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0KHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIHJldHVybiBkZXNjKHByb3RvT3JUYXJnZXQsIG5hbWVPckNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBnZXQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkb1F1ZXJ5KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCB8fCB0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQuY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhpcyBvYmplY3Qgd29ya3MgYXMgdGhlIHJldHVybiB0eXBlIGZvciBib3RoIHN0YW5kYXJkIGFuZFxuICAgICAgICAgICAgLy8gZXhwZXJpbWVudGFsIGRlY29yYXRvcnMuXG4gICAgICAgICAgICByZXR1cm4gZGVzYyhwcm90b09yVGFyZ2V0LCBuYW1lT3JDb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9RdWVyeSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnLi9wcm9wZXJ0eS5qcyc7XG4vKipcbiAqIERlY2xhcmVzIGEgcHJpdmF0ZSBvciBwcm90ZWN0ZWQgcmVhY3RpdmUgcHJvcGVydHkgdGhhdCBzdGlsbCB0cmlnZ2Vyc1xuICogdXBkYXRlcyB0byB0aGUgZWxlbWVudCB3aGVuIGl0IGNoYW5nZXMuIEl0IGRvZXMgbm90IHJlZmxlY3QgZnJvbSB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlLlxuICpcbiAqIFByb3BlcnRpZXMgZGVjbGFyZWQgdGhpcyB3YXkgbXVzdCBub3QgYmUgdXNlZCBmcm9tIEhUTUwgb3IgSFRNTCB0ZW1wbGF0aW5nXG4gKiBzeXN0ZW1zLCB0aGV5J3JlIHNvbGVseSBmb3IgcHJvcGVydGllcyBpbnRlcm5hbCB0byB0aGUgZWxlbWVudC4gVGhlc2VcbiAqIHByb3BlcnRpZXMgbWF5IGJlIHJlbmFtZWQgYnkgb3B0aW1pemF0aW9uIHRvb2xzIGxpa2UgY2xvc3VyZSBjb21waWxlci5cbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcHJvcGVydHkoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAvLyBBZGQgYm90aCBgc3RhdGVgIGFuZCBgYXR0cmlidXRlYCBiZWNhdXNlIHdlIGZvdW5kIGEgdGhpcmQgcGFydHlcbiAgICAgICAgLy8gY29udHJvbGxlciB0aGF0IGlzIGtleWluZyBvZmYgb2YgUHJvcGVydHlPcHRpb25zLnN0YXRlIHRvIGRldGVybWluZVxuICAgICAgICAvLyB3aGV0aGVyIGEgZmllbGQgaXMgYSBwcml2YXRlIGludGVybmFsIHByb3BlcnR5IG9yIG5vdC5cbiAgICAgICAgc3RhdGU6IHRydWUsXG4gICAgICAgIGF0dHJpYnV0ZTogZmFsc2UsXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qKlxuICogVXNlIHRoaXMgbW9kdWxlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSB5b3VyIG93biBiYXNlIGNsYXNzIGV4dGVuZGluZ1xuICoge0BsaW5rIFJlYWN0aXZlRWxlbWVudH0uXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuaW1wb3J0IHsgZ2V0Q29tcGF0aWJsZVN0eWxlLCBhZG9wdFN0eWxlcywgfSBmcm9tICcuL2Nzcy10YWcuanMnO1xuLy8gSW4gdGhlIE5vZGUgYnVpbGQsIHRoaXMgaW1wb3J0IHdpbGwgYmUgaW5qZWN0ZWQgYnkgUm9sbHVwOlxuLy8gaW1wb3J0IHtIVE1MRWxlbWVudCwgY3VzdG9tRWxlbWVudHN9IGZyb20gJ0BsaXQtbGFicy9zc3ItZG9tLXNoaW0nO1xuZXhwb3J0ICogZnJvbSAnLi9jc3MtdGFnLmpzJztcbi8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBBZGQgYGhhc093bmAgaGVyZSB3aGVuIHdlIHNoaXAgRVMyMDIyXG5jb25zdCB7IGlzLCBkZWZpbmVQcm9wZXJ0eSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLCBnZXRPd25Qcm9wZXJ0eU5hbWVzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMsIGdldFByb3RvdHlwZU9mLCB9ID0gT2JqZWN0O1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG4vLyBMZXRzIGEgbWluaWZpZXIgcmVwbGFjZSBnbG9iYWxUaGlzIHJlZmVyZW5jZXMgd2l0aCBhIG1pbmlmaWVkIG5hbWVcbmNvbnN0IGdsb2JhbCA9IGdsb2JhbFRoaXM7XG5pZiAoTk9ERV9NT0RFKSB7XG4gICAgZ2xvYmFsLmN1c3RvbUVsZW1lbnRzID8/PSBjdXN0b21FbGVtZW50cztcbn1cbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSBnbG9iYWxcbiAgICAudHJ1c3RlZFR5cGVzO1xuLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGh0dHBzOi8vY3JidWcuY29tLzk5MzI2OFxuLy8gQ3VycmVudGx5LCBhbnkgYXR0cmlidXRlIHN0YXJ0aW5nIHdpdGggXCJvblwiIGlzIGNvbnNpZGVyZWQgdG8gYmUgYVxuLy8gVHJ1c3RlZFNjcmlwdCBzb3VyY2UuIFN1Y2ggYm9vbGVhbiBhdHRyaWJ1dGVzIG11c3QgYmUgc2V0IHRvIHRoZSBlcXVpdmFsZW50XG4vLyB0cnVzdGVkIGVtcHR5U2NyaXB0IHZhbHVlLlxuY29uc3QgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICA6ICcnO1xuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiBnbG9iYWwucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0O1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRW5zdXJlIHdhcm5pbmdzIGFyZSBpc3N1ZWQgb25seSAxeCwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXRcbiAgICAvLyBhcmUgbG9hZGVkLlxuICAgIGNvbnN0IGlzc3VlZFdhcm5pbmdzID0gKGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncyA/Pz1cbiAgICAgICAgbmV3IFNldCgpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICBpZiAoIWlzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgaXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpc3N1ZVdhcm5pbmcoJ2Rldi1tb2RlJywgYExpdCBpcyBpbiBkZXYgbW9kZS4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIWApO1xuICAgIC8vIElzc3VlIHBvbHlmaWxsIHN1cHBvcnQgd2FybmluZy5cbiAgICBpZiAoZ2xvYmFsLlNoYWR5RE9NPy5pblVzZSAmJiBwb2x5ZmlsbFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpc3N1ZVdhcm5pbmcoJ3BvbHlmaWxsLXN1cHBvcnQtbWlzc2luZycsIGBTaGFkb3cgRE9NIGlzIGJlaW5nIHBvbHlmaWxsZWQgdmlhIFxcYFNoYWR5RE9NXFxgIGJ1dCBgICtcbiAgICAgICAgICAgIGB0aGUgXFxgcG9seWZpbGwtc3VwcG9ydFxcYCBtb2R1bGUgaGFzIG5vdCBiZWVuIGxvYWRlZC5gKTtcbiAgICB9XG59XG4vKipcbiAqIFVzZWZ1bCBmb3IgdmlzdWFsaXppbmcgYW5kIGxvZ2dpbmcgaW5zaWdodHMgaW50byB3aGF0IHRoZSBMaXQgdGVtcGxhdGUgc3lzdGVtIGlzIGRvaW5nLlxuICpcbiAqIENvbXBpbGVkIG91dCBvZiBwcm9kIG1vZGUgYnVpbGRzLlxuICovXG5jb25zdCBkZWJ1Z0xvZ0V2ZW50ID0gREVWX01PREVcbiAgICA/IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzaG91bGRFbWl0ID0gZ2xvYmFsXG4gICAgICAgICAgICAuZW1pdExpdERlYnVnTG9nRXZlbnRzO1xuICAgICAgICBpZiAoIXNob3VsZEVtaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdC1kZWJ1ZycsIHtcbiAgICAgICAgICAgIGRldGFpbDogZXZlbnQsXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgOiB1bmRlZmluZWQ7XG4vKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG4vKkBfX0lOTElORV9fKi9cbmNvbnN0IEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSAocHJvcCwgX29iaikgPT4gcHJvcDtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29udmVydGVyID0ge1xuICAgIHRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUgOiBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBsZXQgZnJvbVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBEbyAqbm90KiBnZW5lcmF0ZSBleGNlcHRpb24gd2hlbiBpbnZhbGlkIEpTT04gaXMgc2V0IGFzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3Qgbm9ybWFsbHkgY29tcGxhaW4gb24gYmVpbmcgbWlzLWNvbmZpZ3VyZWQuXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogRG8gZ2VuZXJhdGUgZXhjZXB0aW9uIGluICpkZXYgbW9kZSouXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzZXJ0IHRvIGFkaGVyZSB0byBCYXplbCdzIFwibXVzdCB0eXBlIGFzc2VydCBKU09OIHBhcnNlXCIgcnVsZS5cbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tVmFsdWU7XG4gICAgfSxcbn07XG4vKipcbiAqIENoYW5nZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpZmZlcmVudCBmcm9tIGBvbGRWYWx1ZWAuXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGZvciBhIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgbm90RXF1YWwgPSAodmFsdWUsIG9sZCkgPT4gIWlzKHZhbHVlLCBvbGQpO1xuY29uc3QgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24gPSB7XG4gICAgYXR0cmlidXRlOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBjb252ZXJ0ZXI6IGRlZmF1bHRDb252ZXJ0ZXIsXG4gICAgcmVmbGVjdDogZmFsc2UsXG4gICAgaGFzQ2hhbmdlZDogbm90RXF1YWwsXG59O1xuLy8gRW5zdXJlIG1ldGFkYXRhIGlzIGVuYWJsZWQuIFR5cGVTY3JpcHQgZG9lcyBub3QgcG9seWZpbGxcbi8vIFN5bWJvbC5tZXRhZGF0YSwgc28gd2UgbXVzdCBlbnN1cmUgdGhhdCBpdCBleGlzdHMuXG5TeW1ib2wubWV0YWRhdGEgPz89IFN5bWJvbCgnbWV0YWRhdGEnKTtcbi8vIE1hcCBmcm9tIGEgY2xhc3MncyBtZXRhZGF0YSBvYmplY3QgdG8gcHJvcGVydHkgb3B0aW9uc1xuLy8gTm90ZSB0aGF0IHdlIG11c3QgdXNlIG51bGxpc2gtY29hbGVzY2luZyBhc3NpZ25tZW50IHNvIHRoYXQgd2Ugb25seSB1c2Ugb25lXG4vLyBtYXAgZXZlbiBpZiB3ZSBsb2FkIG11bHRpcGxlIHZlcnNpb24gb2YgdGhpcyBtb2R1bGUuXG5nbG9iYWwubGl0UHJvcGVydHlNZXRhZGF0YSA/Pz0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHdoaWNoIG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLiBXaGVuXG4gKiBwcm9wZXJ0aWVzIGNoYW5nZSwgdGhlIGB1cGRhdGVgIG1ldGhvZCBpcyBhc3luY2hyb25vdXNseSBjYWxsZWQuIFRoaXMgbWV0aG9kXG4gKiBzaG91bGQgYmUgc3VwcGxpZWQgYnkgc3ViY2xhc3NlcyB0byByZW5kZXIgdXBkYXRlcyBhcyBkZXNpcmVkLlxuICogQG5vSW5oZXJpdERvY1xuICovXG5leHBvcnQgY2xhc3MgUmVhY3RpdmVFbGVtZW50XG4vLyBJbiB0aGUgTm9kZSBidWlsZCwgdGhpcyBgZXh0ZW5kc2AgY2xhdXNlIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aFxuLy8gYChnbG9iYWxUaGlzLkhUTUxFbGVtZW50ID8/IEhUTUxFbGVtZW50KWAuXG4vL1xuLy8gVGhpcyB3YXksIHdlIHdpbGwgZmlyc3QgcHJlZmVyIGFueSBnbG9iYWwgYEhUTUxFbGVtZW50YCBwb2x5ZmlsbCB0aGF0IHRoZVxuLy8gdXNlciBoYXMgYXNzaWduZWQsIGFuZCB0aGVuIGZhbGwgYmFjayB0byB0aGUgYEhUTUxFbGVtZW50YCBzaGltIHdoaWNoIGhhc1xuLy8gYmVlbiBpbXBvcnRlZCAoc2VlIG5vdGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUgYWJvdXQgaG93IHRoaXMgaW1wb3J0IGlzXG4vLyBnZW5lcmF0ZWQgYnkgUm9sbHVwKS4gTm90ZSB0aGF0IHRoZSBgSFRNTEVsZW1lbnRgIHZhcmlhYmxlIGhhcyBiZWVuXG4vLyBzaGFkb3dlZCBieSB0aGlzIGltcG9ydCwgc28gaXQgbm8gbG9uZ2VyIHJlZmVycyB0byB0aGUgZ2xvYmFsLlxuIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaW5pdGlhbGl6ZXIgZnVuY3Rpb24gdG8gdGhlIGNsYXNzIHRoYXQgaXMgY2FsbGVkIGR1cmluZyBpbnN0YW5jZVxuICAgICAqIGNvbnN0cnVjdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb2RlIHRoYXQgcnVucyBhZ2FpbnN0IGEgYFJlYWN0aXZlRWxlbWVudGBcbiAgICAgKiBzdWJjbGFzcywgc3VjaCBhcyBhIGRlY29yYXRvciwgdGhhdCBuZWVkcyB0byBkbyB3b3JrIGZvciBlYWNoXG4gICAgICogaW5zdGFuY2UsIHN1Y2ggYXMgc2V0dGluZyB1cCBhIGBSZWFjdGl2ZUNvbnRyb2xsZXJgLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBteURlY29yYXRvciA9ICh0YXJnZXQ6IHR5cGVvZiBSZWFjdGl2ZUVsZW1lbnQsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICogICB0YXJnZXQuYWRkSW5pdGlhbGl6ZXIoKGluc3RhbmNlOiBSZWFjdGl2ZUVsZW1lbnQpID0+IHtcbiAgICAgKiAgICAgLy8gVGhpcyBpcyBydW4gZHVyaW5nIGNvbnN0cnVjdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgICAqICAgICBuZXcgTXlDb250cm9sbGVyKGluc3RhbmNlKTtcbiAgICAgKiAgIH0pO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIERlY29yYXRpbmcgYSBmaWVsZCB3aWxsIHRoZW4gY2F1c2UgZWFjaCBpbnN0YW5jZSB0byBydW4gYW4gaW5pdGlhbGl6ZXJcbiAgICAgKiB0aGF0IGFkZHMgYSBjb250cm9sbGVyOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgIEBteURlY29yYXRvciBmb287XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogSW5pdGlhbGl6ZXJzIGFyZSBzdG9yZWQgcGVyLWNvbnN0cnVjdG9yLiBBZGRpbmcgYW4gaW5pdGlhbGl6ZXIgdG8gYVxuICAgICAqIHN1YmNsYXNzIGRvZXMgbm90IGFkZCBpdCB0byBhIHN1cGVyY2xhc3MuIFNpbmNlIGluaXRpYWxpemVycyBhcmUgcnVuIGluXG4gICAgICogY29uc3RydWN0b3JzLCBpbml0aWFsaXplcnMgd2lsbCBydW4gaW4gb3JkZXIgb2YgdGhlIGNsYXNzIGhpZXJhcmNoeSxcbiAgICAgKiBzdGFydGluZyB3aXRoIHN1cGVyY2xhc3NlcyBhbmQgcHJvZ3Jlc3NpbmcgdG8gdGhlIGluc3RhbmNlJ3MgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRJbml0aWFsaXplcihpbml0aWFsaXplcikge1xuICAgICAgICB0aGlzLl9fcHJlcGFyZSgpO1xuICAgICAgICAodGhpcy5faW5pdGlhbGl6ZXJzID8/PSBbXSkucHVzaChpbml0aWFsaXplcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgLy8gRW5zdXJlIHdlJ3ZlIGNyZWF0ZWQgYWxsIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICAvLyB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCBpcyBvbmx5IHVuZGVmaW5lZCBhZnRlciBmaW5hbGl6ZSgpIGluXG4gICAgICAgIC8vIFJlYWN0aXZlRWxlbWVudCBpdHNlbGYuIFJlYWN0aXZlRWxlbWVudC5vYnNlcnZlZEF0dHJpYnV0ZXMgaXMgb25seVxuICAgICAgICAvLyBhY2Nlc3NlZCB3aXRoIFJlYWN0aXZlRWxlbWVudCBhcyB0aGUgcmVjZWl2ZXIgd2hlbiBhIHN1YmNsYXNzIG9yIG1peGluXG4gICAgICAgIC8vIGNhbGxzIHN1cGVyLm9ic2VydmVkQXR0cmlidXRlc1xuICAgICAgICByZXR1cm4gKHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwICYmIFsuLi50aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5rZXlzKCldKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHByb3BlcnR5IGFjY2Vzc29yIG9uIHRoZSBlbGVtZW50IHByb3RvdHlwZSBpZiBvbmUgZG9lcyBub3QgZXhpc3RcbiAgICAgKiBhbmQgc3RvcmVzIGEge0BsaW5rY29kZSBQcm9wZXJ0eURlY2xhcmF0aW9ufSBmb3IgdGhlIHByb3BlcnR5IHdpdGggdGhlXG4gICAgICogZ2l2ZW4gb3B0aW9ucy4gVGhlIHByb3BlcnR5IHNldHRlciBjYWxscyB0aGUgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGBcbiAgICAgKiBwcm9wZXJ0eSBvcHRpb24gb3IgdXNlcyBhIHN0cmljdCBpZGVudGl0eSBjaGVjayB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3RcbiAgICAgKiB0byByZXF1ZXN0IGFuIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIG1heSBiZSBvdmVycmlkZGVuIHRvIGN1c3RvbWl6ZSBwcm9wZXJ0aWVzOyBob3dldmVyLFxuICAgICAqIHdoZW4gZG9pbmcgc28sIGl0J3MgaW1wb3J0YW50IHRvIGNhbGwgYHN1cGVyLmNyZWF0ZVByb3BlcnR5YCB0byBlbnN1cmVcbiAgICAgKiB0aGUgcHJvcGVydHkgaXMgc2V0dXAgY29ycmVjdGx5LiBUaGlzIG1ldGhvZCBjYWxsc1xuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgIGludGVybmFsbHkgdG8gZ2V0IGEgZGVzY3JpcHRvciB0byBpbnN0YWxsLlxuICAgICAqIFRvIGN1c3RvbWl6ZSB3aGF0IHByb3BlcnRpZXMgZG8gd2hlbiB0aGV5IGFyZSBnZXQgb3Igc2V0LCBvdmVycmlkZVxuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgLiBUbyBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgcHJvcGVydHksXG4gICAgICogaW1wbGVtZW50IGBjcmVhdGVQcm9wZXJ0eWAgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAqICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywge215T3B0aW9uOiB0cnVlfSk7XG4gICAgICogICBzdXBlci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3RhdGUgcHJvcGVydHksIGZvcmNlIHRoZSBhdHRyaWJ1dGUgdG8gZmFsc2UuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgICAgICAgICBvcHRpb25zLmF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19wcmVwYXJlKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoIW9wdGlvbnMubm9BY2Nlc3Nvcikge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gREVWX01PREVcbiAgICAgICAgICAgICAgICA/IC8vIFVzZSBTeW1ib2wuZm9yIGluIGRldiBtb2RlIHRvIG1ha2UgaXQgZWFzaWVyIHRvIG1haW50YWluIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gZG9pbmcgSE1SLlxuICAgICAgICAgICAgICAgICAgICBTeW1ib2wuZm9yKGAke1N0cmluZyhuYW1lKX0gKEBwcm9wZXJ0eSgpIGNhY2hlKWApXG4gICAgICAgICAgICAgICAgOiBTeW1ib2woKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLmdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBiZSBkZWZpbmVkIG9uIHRoZSBnaXZlbiBuYW1lZCBwcm9wZXJ0eS5cbiAgICAgKiBJZiBubyBkZXNjcmlwdG9yIGlzIHJldHVybmVkLCB0aGUgcHJvcGVydHkgd2lsbCBub3QgYmVjb21lIGFuIGFjY2Vzc29yLlxuICAgICAqIEZvciBleGFtcGxlLFxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICogICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdG9yID1cbiAgICAgKiAgICAgICAgIHN1cGVyLmdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpO1xuICAgICAqICAgICBjb25zdCBzZXR0ZXIgPSBkZWZhdWx0RGVzY3JpcHRvci5zZXQ7XG4gICAgICogICAgIHJldHVybiB7XG4gICAgICogICAgICAgZ2V0OiBkZWZhdWx0RGVzY3JpcHRvci5nZXQsXG4gICAgICogICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICogICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICogICAgICAgICAvLyBjdXN0b20gYWN0aW9uLlxuICAgICAqICAgICAgIH0sXG4gICAgICogICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAqICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IGdldCwgc2V0IH0gPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5wcm90b3R5cGUsIG5hbWUpID8/IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2KSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmIChERVZfTU9ERSAmJiBnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCd2YWx1ZScgaW4gKGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLnByb3RvdHlwZSwgbmFtZSkgPz8ge30pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGaWVsZCAke0pTT04uc3RyaW5naWZ5KFN0cmluZyhuYW1lKSl9IG9uIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLm5hbWV9IHdhcyBkZWNsYXJlZCBhcyBhIHJlYWN0aXZlIHByb3BlcnR5IGAgK1xuICAgICAgICAgICAgICAgICAgICBgYnV0IGl0J3MgYWN0dWFsbHkgZGVjbGFyZWQgYXMgYSB2YWx1ZSBvbiB0aGUgcHJvdG90eXBlLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYFVzdWFsbHkgdGhpcyBpcyBkdWUgdG8gdXNpbmcgQHByb3BlcnR5IG9yIEBzdGF0ZSBvbiBhIG1ldGhvZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzc3VlV2FybmluZygncmVhY3RpdmUtcHJvcGVydHktd2l0aG91dC1nZXR0ZXInLCBgRmllbGQgJHtKU09OLnN0cmluZ2lmeShTdHJpbmcobmFtZSkpfSBvbiBgICtcbiAgICAgICAgICAgICAgICBgJHt0aGlzLm5hbWV9IHdhcyBkZWNsYXJlZCBhcyBhIHJlYWN0aXZlIHByb3BlcnR5IGAgK1xuICAgICAgICAgICAgICAgIGBidXQgaXQgZG9lcyBub3QgaGF2ZSBhIGdldHRlci4gVGhpcyB3aWxsIGJlIGFuIGVycm9yIGluIGEgYCArXG4gICAgICAgICAgICAgICAgYGZ1dHVyZSB2ZXJzaW9uIG9mIExpdC5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBnZXQ/LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgc2V0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIFRoZXNlIG9wdGlvbnMgYXJlIGRlZmluZWQgd2l0aCBhIGBQcm9wZXJ0eURlY2xhcmF0aW9uYCB2aWEgdGhlIGBwcm9wZXJ0aWVzYFxuICAgICAqIG9iamVjdCBvciB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIGFuZCBhcmUgcmVnaXN0ZXJlZCBpblxuICAgICAqIGBjcmVhdGVQcm9wZXJ0eSguLi4pYC5cbiAgICAgKlxuICAgICAqIE5vdGUsIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBjb25zaWRlcmVkIFwiZmluYWxcIiBhbmQgbm90IG92ZXJyaWRkZW4uIFRvXG4gICAgICogY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIGdpdmVuIHByb3BlcnR5LCBvdmVycmlkZVxuICAgICAqIHtAbGlua2NvZGUgY3JlYXRlUHJvcGVydHl9LlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAZmluYWxcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQobmFtZSkgPz8gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHN0YXRpYyBvd24gcHJvcGVydGllcyBvZiB0aGUgY2xhc3MgdXNlZCBpbiBib29ra2VlcGluZ1xuICAgICAqIGZvciBlbGVtZW50IHByb3BlcnRpZXMsIGluaXRpYWxpemVycywgZXRjLlxuICAgICAqXG4gICAgICogQ2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBieSBjb2RlIHRoYXQgbmVlZHMgdG8gZW5zdXJlIHRoZXNlXG4gICAgICogcHJvcGVydGllcyBleGlzdCBiZWZvcmUgdXNpbmcgdGhlbS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIHN1cGVyY2xhc3MgaXMgZmluYWxpemVkIHNvIHRoYXQgaW5oZXJpdGVkXG4gICAgICogcHJvcGVydHkgbWV0YWRhdGEgY2FuIGJlIGNvcGllZCBkb3duLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIF9fcHJlcGFyZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnZWxlbWVudFByb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgICAgICAgIC8vIEFscmVhZHkgcHJlcGFyZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5hbGl6ZSBhbnkgc3VwZXJjbGFzc2VzXG4gICAgICAgIGNvbnN0IHN1cGVyQ3RvciA9IGdldFByb3RvdHlwZU9mKHRoaXMpO1xuICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICAgLy8gQ3JlYXRlIG93biBzZXQgb2YgaW5pdGlhbGl6ZXJzIGZvciB0aGlzIGNsYXNzIGlmIGFueSBleGlzdCBvbiB0aGVcbiAgICAgICAgLy8gc3VwZXJjbGFzcyBhbmQgY29weSB0aGVtIGRvd24uIE5vdGUsIGZvciBhIHNtYWxsIHBlcmYgYm9vc3QsIGF2b2lkXG4gICAgICAgIC8vIGNyZWF0aW5nIGluaXRpYWxpemVycyB1bmxlc3MgbmVlZGVkLlxuICAgICAgICBpZiAoc3VwZXJDdG9yLl9pbml0aWFsaXplcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZXJzID0gWy4uLnN1cGVyQ3Rvci5faW5pdGlhbGl6ZXJzXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXplIGVsZW1lbnRQcm9wZXJ0aWVzIGZyb20gdGhlIHN1cGVyY2xhc3NcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoc3VwZXJDdG9yLmVsZW1lbnRQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluaXNoZXMgc2V0dGluZyB1cCB0aGUgY2xhc3Mgc28gdGhhdCBpdCdzIHJlYWR5IHRvIGJlIHJlZ2lzdGVyZWRcbiAgICAgKiBhcyBhIGN1c3RvbSBlbGVtZW50IGFuZCBpbnN0YW50aWF0ZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIFJlYWN0aXZlRWxlbWVudC5vYnNlcnZlZEF0dHJpYnV0ZXMgZ2V0dGVyLlxuICAgICAqIElmIHlvdSBvdmVycmlkZSB0aGUgb2JzZXJ2ZWRBdHRyaWJ1dGVzIGdldHRlciwgeW91IG11c3QgZWl0aGVyIGNhbGxcbiAgICAgKiBzdXBlci5vYnNlcnZlZEF0dHJpYnV0ZXMgdG8gdHJpZ2dlciBmaW5hbGl6YXRpb24sIG9yIGNhbGwgZmluYWxpemUoKVxuICAgICAqIHlvdXJzZWxmLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2ZpbmFsaXplZCcsIHRoaXMpKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fX3ByZXBhcmUoKTtcbiAgICAgICAgLy8gQ3JlYXRlIHByb3BlcnRpZXMgZnJvbSB0aGUgc3RhdGljIHByb3BlcnRpZXMgYmxvY2s6XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgY29uc3QgcHJvcEtleXMgPSBbXG4gICAgICAgICAgICAgICAgLi4uZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcyksXG4gICAgICAgICAgICAgICAgLi4uZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BzKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvcEtleXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5KHAsIHByb3BzW3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgcHJvcGVydGllcyBmcm9tIHN0YW5kYXJkIGRlY29yYXRvciBtZXRhZGF0YTpcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzW1N5bWJvbC5tZXRhZGF0YV07XG4gICAgICAgIGlmIChtZXRhZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IGxpdFByb3BlcnR5TWV0YWRhdGEuZ2V0KG1ldGFkYXRhKTtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtwLCBvcHRpb25zXSBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KHAsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDcmVhdGUgdGhlIGF0dHJpYnV0ZS10by1wcm9wZXJ0eSBtYXBcbiAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgW3AsIG9wdGlvbnNdIG9mIHRoaXMuZWxlbWVudFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHAsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLnNldChhdHRyLCBwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRTdHlsZXMgPSB0aGlzLmZpbmFsaXplU3R5bGVzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnY3JlYXRlUHJvcGVydHknKSkge1xuICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZygnbm8tb3ZlcnJpZGUtY3JlYXRlLXByb3BlcnR5JywgJ092ZXJyaWRpbmcgUmVhY3RpdmVFbGVtZW50LmNyZWF0ZVByb3BlcnR5KCkgaXMgZGVwcmVjYXRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdUaGUgb3ZlcnJpZGUgd2lsbCBub3QgYmUgY2FsbGVkIHdpdGggc3RhbmRhcmQgZGVjb3JhdG9ycycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ2dldFByb3BlcnR5RGVzY3JpcHRvcicpKSB7XG4gICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCduby1vdmVycmlkZS1nZXQtcHJvcGVydHktZGVzY3JpcHRvcicsICdPdmVycmlkaW5nIFJlYWN0aXZlRWxlbWVudC5nZXRQcm9wZXJ0eURlc2NyaXB0b3IoKSBpcyBkZXByZWNhdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1RoZSBvdmVycmlkZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aCBzdGFuZGFyZCBkZWNvcmF0b3JzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIHN0eWxlcyB0aGUgdXNlciBzdXBwbGllZCB2aWEgdGhlIGBzdGF0aWMgc3R5bGVzYCBwcm9wZXJ0eSBhbmRcbiAgICAgKiByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHlsZXMgdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW50ZWdyYXRlIGludG8gYSBzdHlsZSBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKlxuICAgICAqIFN0eWxlcyBhcmUgZGVkdXBsaWNhdGVkIHByZXNlcnZpbmcgdGhlIF9sYXN0XyBpbnN0YW5jZSBpbiB0aGUgbGlzdC4gVGhpc1xuICAgICAqIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRvIGF2b2lkIGR1cGxpY2F0ZWQgc3R5bGVzIHRoYXQgY2FuIG9jY3VyXG4gICAgICogZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0byB0cnlcbiAgICAgKiB0byBwcmVzZXJ2ZSB0aGUgY2FzY2FkZSBvcmRlciB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQncyBtb3N0IGltcG9ydGFudFxuICAgICAqIHRoYXQgbGFzdCBhZGRlZCBzdHlsZXMgb3ZlcnJpZGUgcHJldmlvdXMgc3R5bGVzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgc3R5bGVzXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICAgICAgICAgIC8vIERlZHVwZSB0aGUgZmxhdHRlbmVkIGFycmF5IGluIHJldmVyc2Ugb3JkZXIgdG8gcHJlc2VydmUgdGhlIGxhc3QgaXRlbXMuXG4gICAgICAgICAgICAvLyBDYXN0aW5nIHRvIEFycmF5PHVua25vd24+IHdvcmtzIGFyb3VuZCBUUyBlcnJvciB0aGF0XG4gICAgICAgICAgICAvLyBhcHBlYXJzIHRvIGNvbWUgZnJvbSB0cnlpbmcgdG8gZmxhdHRlbiBhIHR5cGUgQ1NTUmVzdWx0QXJyYXkuXG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHN0eWxlcy5mbGF0KEluZmluaXR5KS5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgLy8gVGhlbiBwcmVzZXJ2ZSBvcmlnaW5hbCBvcmRlciBieSBhZGRpbmcgdGhlIHNldCBpdGVtcyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNldCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMudW5zaGlmdChnZXRDb21wYXRpYmxlU3R5bGUocykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50U3R5bGVzLnB1c2goZ2V0Q29tcGF0aWJsZVN0eWxlKHN0eWxlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50U3R5bGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIGBuYW1lYC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogdHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaWYgdGhlcmUgaXMgYSBwZW5kaW5nIHVwZGF0ZSBhcyBhIHJlc3VsdCBvZiBjYWxsaW5nIGByZXF1ZXN0VXBkYXRlKClgLlxuICAgICAgICAgKiBTaG91bGQgb25seSBiZSByZWFkLlxuICAgICAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHNldCB0byBgdHJ1ZWAgYWZ0ZXIgdGhlIGZpcnN0IHVwZGF0ZS4gVGhlIGVsZW1lbnQgY29kZSBjYW5ub3QgYXNzdW1lXG4gICAgICAgICAqIHRoYXQgYHJlbmRlclJvb3RgIGV4aXN0cyBiZWZvcmUgdGhlIGVsZW1lbnQgYGhhc1VwZGF0ZWRgLlxuICAgICAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYXNVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIGN1cnJlbnRseSByZWZsZWN0aW5nIHByb3BlcnR5XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgb25seSBvdmVycmlkZSBwb2ludCBmb3IgY3VzdG9taXppbmcgd29yayBkb25lIHdoZW4gZWxlbWVudHNcbiAgICAgKiBhcmUgY29uc3RydWN0ZWQuXG4gICAgICovXG4gICAgX19pbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMpID0+ICh0aGlzLmVuYWJsZVVwZGF0aW5nID0gcmVzKSk7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gVGhpcyBlbnF1ZXVlcyBhIG1pY3JvdGFzayB0aGF0IHVzdCBydW4gYmVmb3JlIHRoZSBmaXJzdCB1cGRhdGUsIHNvIGl0XG4gICAgICAgIC8vIG11c3QgYmUgY2FsbGVkIGJlZm9yZSByZXF1ZXN0VXBkYXRlKClcbiAgICAgICAgdGhpcy5fX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKTtcbiAgICAgICAgLy8gZW5zdXJlcyBmaXJzdCB1cGRhdGUgd2lsbCBiZSBjYXVnaHQgYnkgYW4gZWFybHkgYWNjZXNzIG9mXG4gICAgICAgIC8vIGB1cGRhdGVDb21wbGV0ZWBcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IuX2luaXRpYWxpemVycz8uZm9yRWFjaCgoaSkgPT4gaSh0aGlzKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIGBSZWFjdGl2ZUNvbnRyb2xsZXJgIHRvIHBhcnRpY2lwYXRlIGluIHRoZSBlbGVtZW50J3MgcmVhY3RpdmVcbiAgICAgKiB1cGRhdGUgY3ljbGUuIFRoZSBlbGVtZW50IGF1dG9tYXRpY2FsbHkgY2FsbHMgaW50byBhbnkgcmVnaXN0ZXJlZFxuICAgICAqIGNvbnRyb2xsZXJzIGR1cmluZyBpdHMgbGlmZWN5Y2xlIGNhbGxiYWNrcy5cbiAgICAgKlxuICAgICAqIElmIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB3aGVuIGBhZGRDb250cm9sbGVyKClgIGlzIGNhbGxlZCwgdGhlXG4gICAgICogY29udHJvbGxlcidzIGBob3N0Q29ubmVjdGVkKClgIGNhbGxiYWNrIHdpbGwgYmUgaW1tZWRpYXRlbHkgY2FsbGVkLlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIGFkZENvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICAodGhpcy5fX2NvbnRyb2xsZXJzID8/PSBuZXcgU2V0KCkpLmFkZChjb250cm9sbGVyKTtcbiAgICAgICAgLy8gSWYgYSBjb250cm9sbGVyIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIGNvbm5lY3RlZCxcbiAgICAgICAgLy8gY2FsbCBob3N0Q29ubmVjdGVkLiBOb3RlLCByZS11c2luZyBleGlzdGVuY2Ugb2YgYHJlbmRlclJvb3RgIGhlcmVcbiAgICAgICAgLy8gKHdoaWNoIGlzIHNldCBpbiBjb25uZWN0ZWRDYWxsYmFjaykgdG8gYXZvaWQgdGhlIG5lZWQgdG8gdHJhY2sgYVxuICAgICAgICAvLyBmaXJzdCBjb25uZWN0ZWQgc3RhdGUuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlclJvb3QgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmhvc3RDb25uZWN0ZWQ/LigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBgUmVhY3RpdmVDb250cm9sbGVyYCBmcm9tIHRoZSBlbGVtZW50LlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIHJlbW92ZUNvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB0aGlzLl9fY29udHJvbGxlcnM/LmRlbGV0ZShjb250cm9sbGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRml4ZXMgYW55IHByb3BlcnRpZXMgc2V0IG9uIHRoZSBpbnN0YW5jZSBiZWZvcmUgdXBncmFkZSB0aW1lLlxuICAgICAqIE90aGVyd2lzZSB0aGVzZSB3b3VsZCBzaGFkb3cgdGhlIGFjY2Vzc29yIGFuZCBicmVhayB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAgICogY29uc3RydWN0b3IgcnVucy4gTm90ZSwgb24gdmVyeSBvbGQgdmVyc2lvbnMgb2YgU2FmYXJpICg8PTkpIG9yIENocm9tZVxuICAgICAqICg8PTQxKSwgcHJvcGVydGllcyBjcmVhdGVkIGZvciBuYXRpdmUgcGxhdGZvcm0gcHJvcGVydGllcyBsaWtlIChgaWRgIG9yXG4gICAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgICAqIHRoZXNlIGJyb3dzZXJzIG5hdGl2ZSBwcm9wZXJ0aWVzIGFwcGVhciBvbiBpbnN0YW5jZXMgYW5kIHRoZXJlZm9yZSB0aGVpclxuICAgICAqIGRlZmF1bHQgdmFsdWUgd2lsbCBvdmVyd3JpdGUgYW55IGVsZW1lbnQgZGVmYXVsdCAoZS5nLiBpZiB0aGUgZWxlbWVudCBzZXRzXG4gICAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAgICogdGhlIG5hdGl2ZSBwbGF0Zm9ybSBkZWZhdWx0KS5cbiAgICAgKi9cbiAgICBfX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uc3QgZWxlbWVudFByb3BlcnRpZXMgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICAuZWxlbWVudFByb3BlcnRpZXM7XG4gICAgICAgIGZvciAoY29uc3QgcCBvZiBlbGVtZW50UHJvcGVydGllcy5rZXlzKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB0aGlzW3BdKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFuY2VQcm9wZXJ0aWVzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzID0gaW5zdGFuY2VQcm9wZXJ0aWVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAgICogY3JlYXRlcyBhbmQgcmV0dXJucyBhbiBvcGVuIHNoYWRvd1Jvb3QuIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlXG4gICAgICogZWxlbWVudCdzIERPTSBpcyByZW5kZXJlZC4gRm9yIGV4YW1wbGUsIHRvIHJlbmRlciBpbnRvIHRoZSBlbGVtZW50J3NcbiAgICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgICAqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IHRoaXMuc2hhZG93Um9vdCA/P1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7XG4gICAgICAgIGFkb3B0U3R5bGVzKHJlbmRlclJvb3QsIHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFN0eWxlcyk7XG4gICAgICAgIHJldHVybiByZW5kZXJSb290O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPbiBmaXJzdCBjb25uZWN0aW9uLCBjcmVhdGVzIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdCwgc2V0cyB1cFxuICAgICAqIGVsZW1lbnQgc3R5bGluZywgYW5kIGVuYWJsZXMgdXBkYXRpbmcuXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAvLyBDcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgY29udHJvbGxlcnMgYGhvc3RDb25uZWN0ZWRgXG4gICAgICAgIHRoaXMucmVuZGVyUm9vdCA/Pz1cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgICAgICB0aGlzLmVuYWJsZVVwZGF0aW5nKHRydWUpO1xuICAgICAgICB0aGlzLl9fY29udHJvbGxlcnM/LmZvckVhY2goKGMpID0+IGMuaG9zdENvbm5lY3RlZD8uKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5hbCBhbmQgbm90IG92ZXJyaWRkZW4uIEl0IGlzXG4gICAgICogb3ZlcnJpZGRlbiBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZSB3aXRoIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyB0aGUgZmlyc3RcbiAgICAgKiB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBlbmFibGVVcGRhdGluZyhfcmVxdWVzdGVkVXBkYXRlKSB7IH1cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAgICogcmVzZXJ2aW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtYWtpbmcgbm9uLWJyZWFraW5nIGZlYXR1cmUgYWRkaXRpb25zXG4gICAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuX19jb250cm9sbGVycz8uZm9yRWFjaCgoYykgPT4gYy5ob3N0RGlzY29ubmVjdGVkPy4oKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN5bmNocm9uaXplcyBwcm9wZXJ0eSB2YWx1ZXMgd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZS5cbiAgICAgKlxuICAgICAqIFNwZWNpZmljYWxseSwgd2hlbiBhbiBhdHRyaWJ1dGUgaXMgc2V0LCB0aGUgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSBpcyBzZXQuXG4gICAgICogWW91IHNob3VsZCByYXJlbHkgbmVlZCB0byBpbXBsZW1lbnQgdGhpcyBjYWxsYmFjay4gSWYgdGhpcyBtZXRob2QgaXNcbiAgICAgKiBvdmVycmlkZGVuLCBgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIF9vbGQsIHZhbHVlKWAgbXVzdCBiZVxuICAgICAqIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIFNlZSBbdXNpbmcgdGhlIGxpZmVjeWNsZSBjYWxsYmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1dlYl9Db21wb25lbnRzL1VzaW5nX2N1c3RvbV9lbGVtZW50cyN1c2luZ190aGVfbGlmZWN5Y2xlX2NhbGxiYWNrcylcbiAgICAgKiBvbiBNRE4gZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLlxuICAgICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIF9vbGQsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgX19wcm9wZXJ0eVRvQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1Qcm9wZXJ0aWVzID0gdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcztcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVsZW1Qcm9wZXJ0aWVzLmdldChuYW1lKTtcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuY29uc3RydWN0b3IuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBvcHRpb25zLmNvbnZlcnRlcj8udG9BdHRyaWJ1dGUgIT09XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLmNvbnZlcnRlclxuICAgICAgICAgICAgICAgIDogZGVmYXVsdENvbnZlcnRlcjtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGNvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluY2x1ZGVzKCdtaWdyYXRpb24nKSAmJlxuICAgICAgICAgICAgICAgIGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCd1bmRlZmluZWQtYXR0cmlidXRlLXZhbHVlJywgYFRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIHRoZSAke25hbWV9IHByb3BlcnR5IGlzIGAgK1xuICAgICAgICAgICAgICAgICAgICBgdW5kZWZpbmVkIG9uIGVsZW1lbnQgJHt0aGlzLmxvY2FsTmFtZX0uIFRoZSBhdHRyaWJ1dGUgd2lsbCBiZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYHJlbW92ZWQsIGJ1dCBpbiB0aGUgcHJldmlvdXMgdmVyc2lvbiBvZiBcXGBSZWFjdGl2ZUVsZW1lbnRcXGAsIGAgK1xuICAgICAgICAgICAgICAgICAgICBgdGhlIGF0dHJpYnV0ZSB3b3VsZCBub3QgaGF2ZSBjaGFuZ2VkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVHJhY2sgaWYgdGhlIHByb3BlcnR5IGlzIGJlaW5nIHJlZmxlY3RlZCB0byBhdm9pZFxuICAgICAgICAgICAgLy8gc2V0dGluZyB0aGUgcHJvcGVydHkgYWdhaW4gdmlhIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLiBOb3RlOlxuICAgICAgICAgICAgLy8gMS4gdGhpcyB0YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhhdCB0aGUgY2FsbGJhY2sgaXMgc3luY2hyb25vdXMuXG4gICAgICAgICAgICAvLyAyLiB3aWxsIGJlaGF2ZSBpbmNvcnJlY3RseSBpZiBtdWx0aXBsZSBhdHRyaWJ1dGVzIGFyZSBpbiB0aGUgcmVhY3Rpb25cbiAgICAgICAgICAgIC8vIHN0YWNrIGF0IHRpbWUgb2YgY2FsbGluZy4gSG93ZXZlciwgc2luY2Ugd2UgcHJvY2VzcyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAvLyBpbiBgdXBkYXRlYCB0aGlzIHNob3VsZCBub3QgYmUgcG9zc2libGUgKG9yIGFuIGV4dHJlbWUgY29ybmVyIGNhc2VcbiAgICAgICAgICAgIC8vIHRoYXQgd2UnZCBsaWtlIHRvIGRpc2NvdmVyKS5cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG5hbWU7XG4gICAgICAgICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyBOb3RlLCBoaW50IHRoaXMgYXMgYW4gYEF0dHJpYnV0ZU1hcGAgc28gY2xvc3VyZSBjbGVhcmx5IHVuZGVyc3RhbmRzXG4gICAgICAgIC8vIHRoZSB0eXBlOyBpdCBoYXMgaXNzdWVzIHdpdGggdHJhY2tpbmcgdHlwZXMgdGhyb3VnaCBzdGF0aWNzXG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gY3Rvci5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuZ2V0KG5hbWUpO1xuICAgICAgICAvLyBVc2UgdHJhY2tpbmcgaW5mbyB0byBhdm9pZCByZWZsZWN0aW5nIGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gYXR0cmlidXRlXG4gICAgICAgIC8vIGlmIGl0IHdhcyBqdXN0IHNldCBiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgY2hhbmdlZC5cbiAgICAgICAgaWYgKHByb3BOYW1lICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhwcm9wTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5jb252ZXJ0ZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IHsgZnJvbUF0dHJpYnV0ZTogb3B0aW9ucy5jb252ZXJ0ZXIgfVxuICAgICAgICAgICAgICAgIDogb3B0aW9ucy5jb252ZXJ0ZXI/LmZyb21BdHRyaWJ1dGUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IG9wdGlvbnMuY29udmVydGVyXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdENvbnZlcnRlcjtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IHByb3BOYW1lO1xuICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBjb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuICAgICAqIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZCBieSBzZXR0aW5nXG4gICAgICogYSByZWFjdGl2ZSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICAgKiBvcHRpb25zIGFyZSBob25vcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9sZFZhbHVlIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnMgcHJvcGVydHkgb3B0aW9ucyB0byB1c2UgaW5zdGVhZCBvZiB0aGUgcHJldmlvdXNseVxuICAgICAqICAgICBjb25maWd1cmVkIG9wdGlvbnNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHByb3BlcnR5IGtleSwgcGVyZm9ybSBwcm9wZXJ0eSB1cGRhdGUgc3RlcHMuXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJiBuYW1lIGluc3RhbmNlb2YgRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcoYGAsIGBUaGUgcmVxdWVzdFVwZGF0ZSgpIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYW4gRXZlbnQgYXMgdGhlIHByb3BlcnR5IG5hbWUuIFRoaXMgaXMgcHJvYmFibHkgYSBtaXN0YWtlIGNhdXNlZCBieSBiaW5kaW5nIHRoaXMucmVxdWVzdFVwZGF0ZSBhcyBhbiBldmVudCBsaXN0ZW5lci4gSW5zdGVhZCBiaW5kIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNhbGwgaXQgd2l0aCBubyBhcmd1bWVudHM6ICgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgpYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zID8/PSB0aGlzLmNvbnN0cnVjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5nZWQgPSBvcHRpb25zLmhhc0NoYW5nZWQgPz8gbm90RXF1YWw7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICAgICAgICBpZiAoaGFzQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fJGNoYW5nZVByb3BlcnR5KG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNVcGRhdGVQZW5kaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSB0aGlzLl9fZW5xdWV1ZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF8kY2hhbmdlUHJvcGVydHkobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IENyZWF0ZSBhIGJlbmNobWFyayBvZiBNYXAuaGFzKCkgKyBNYXAuc2V0KFxuICAgICAgICAvLyB2cyBqdXN0IE1hcC5zZXQoKVxuICAgICAgICBpZiAoIXRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5zZXQobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCB0byByZWZsZWN0aW5nIHByb3BlcnRpZXMgc2V0LlxuICAgICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IGV2ZXJ5IGNoYW5nZSBoYXMgYSBjaGFuY2UgdG8gYWRkIHRoZVxuICAgICAgICAvLyBwcm9wZXJ0eSB0byBgX19yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSAmJiB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ICE9PSBuYW1lKSB7XG4gICAgICAgICAgICAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID8/PSBuZXcgU2V0KCkpLmFkZChuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBlbGVtZW50IHRvIGFzeW5jaHJvbm91c2x5IHVwZGF0ZS5cbiAgICAgKi9cbiAgICBhc3luYyBfX2VucXVldWVVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBhbnkgcHJldmlvdXMgdXBkYXRlIGhhcyByZXNvbHZlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgICAgICAgICAvLyBUaGlzIGBhd2FpdGAgYWxzbyBlbnN1cmVzIHRoYXQgcHJvcGVydHkgY2hhbmdlcyBhcmUgYmF0Y2hlZC5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBSZWZpcmUgYW55IHByZXZpb3VzIGVycm9ycyBhc3luYyBzbyB0aGV5IGRvIG5vdCBkaXNydXB0IHRoZSB1cGRhdGVcbiAgICAgICAgICAgIC8vIGN5Y2xlLiBFcnJvcnMgYXJlIHJlZmlyZWQgc28gZGV2ZWxvcGVycyBoYXZlIGEgY2hhbmNlIHRvIG9ic2VydmVcbiAgICAgICAgICAgIC8vIHRoZW0sIGFuZCB0aGlzIGNhbiBiZSBkb25lIGJ5IGltcGxlbWVudGluZ1xuICAgICAgICAgICAgLy8gYHdpbmRvdy5vbnVuaGFuZGxlZHJlamVjdGlvbmAuXG4gICAgICAgICAgICBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIC8vIElmIGBzY2hlZHVsZVVwZGF0ZWAgcmV0dXJucyBhIFByb21pc2UsIHdlIGF3YWl0IGl0LiBUaGlzIGlzIGRvbmUgdG9cbiAgICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzVXBkYXRlUGVuZGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGFuIGVsZW1lbnQgdXBkYXRlLiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGVcbiAgICAgKiB0aW1pbmcgb2YgdXBkYXRlcyBieSByZXR1cm5pbmcgYSBQcm9taXNlLiBUaGUgdXBkYXRlIHdpbGwgYXdhaXQgdGhlXG4gICAgICogcmV0dXJuZWQgUHJvbWlzZSwgYW5kIHlvdSBzaG91bGQgcmVzb2x2ZSB0aGUgUHJvbWlzZSB0byBhbGxvdyB0aGUgdXBkYXRlXG4gICAgICogdG8gcHJvY2VlZC4gSWYgdGhpcyBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnNjaGVkdWxlVXBkYXRlKClgXG4gICAgICogbXVzdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIG92ZXJyaWRlIHByb3RlY3RlZCBhc3luYyBzY2hlZHVsZVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAgICogICBzdXBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmXG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVuYWJsZWRXYXJuaW5ncy5pbmNsdWRlcygnYXN5bmMtcGVyZm9ybS11cGRhdGUnKSAmJlxuICAgICAgICAgICAgdHlwZW9mIHJlc3VsdD8udGhlbiA9PT1cbiAgICAgICAgICAgICAgICAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ2FzeW5jLXBlcmZvcm0tdXBkYXRlJywgYEVsZW1lbnQgJHt0aGlzLmxvY2FsTmFtZX0gcmV0dXJuZWQgYSBQcm9taXNlIGZyb20gcGVyZm9ybVVwZGF0ZSgpLiBgICtcbiAgICAgICAgICAgICAgICBgVGhpcyBiZWhhdmlvciBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgYCArXG4gICAgICAgICAgICAgICAgYHZlcnNpb24gb2YgUmVhY3RpdmVFbGVtZW50LmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIGVsZW1lbnQgdXBkYXRlLiBOb3RlLCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGVcbiAgICAgKiB1cGRhdGUsIGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgd2lsbCBub3QgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogQ2FsbCBgcGVyZm9ybVVwZGF0ZSgpYCB0byBpbW1lZGlhdGVseSBwcm9jZXNzIGEgcGVuZGluZyB1cGRhdGUuIFRoaXMgc2hvdWxkXG4gICAgICogZ2VuZXJhbGx5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpdCBjYW4gYmUgZG9uZSBpbiByYXJlIGNhc2VzIHdoZW4geW91IG5lZWQgdG9cbiAgICAgKiB1cGRhdGUgc3luY2hyb25vdXNseS5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgLy8gQWJvcnQgYW55IHVwZGF0ZSBpZiBvbmUgaXMgbm90IHBlbmRpbmcgd2hlbiB0aGlzIGlzIGNhbGxlZC5cbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIGBwZXJmb3JtVXBkYXRlYCBpcyBjYWxsZWQgZWFybHkgdG8gXCJmbHVzaFwiXG4gICAgICAgIC8vIHRoZSB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50Py4oeyBraW5kOiAndXBkYXRlJyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuIFRoaXMgb2NjdXJzIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAgICAgICAgICAgIC8vIGJ1dCBpcyBkb25lIGhlcmUgdG8gc3VwcG9ydCBvdXQgb2YgdHJlZSBjYWxscyB0byBgZW5hYmxlVXBkYXRpbmdgL2BwZXJmb3JtVXBkYXRlYC5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdCA/Pz1cbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgIC8vIFByb2R1Y2Ugd2FybmluZyBpZiBhbnkgcmVhY3RpdmUgcHJvcGVydGllcyBvbiB0aGUgcHJvdG90eXBlIGFyZVxuICAgICAgICAgICAgICAgIC8vIHNoYWRvd2VkIGJ5IGNsYXNzIGZpZWxkcy4gSW5zdGFuY2UgZmllbGRzIHNldCBiZWZvcmUgdXBncmFkZSBhcmVcbiAgICAgICAgICAgICAgICAvLyBkZWxldGVkIGJ5IHRoaXMgcG9pbnQsIHNvIGFueSBvd24gcHJvcGVydHkgaXMgY2F1c2VkIGJ5IGNsYXNzIGZpZWxkXG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24gaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd2VkUHJvcGVydGllcyA9IFsuLi5jdG9yLmVsZW1lbnRQcm9wZXJ0aWVzLmtleXMoKV0uZmlsdGVyKChwKSA9PiB0aGlzLmhhc093blByb3BlcnR5KHApICYmIHAgaW4gZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dlZFByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIG9uIGVsZW1lbnQgJHt0aGlzLmxvY2FsTmFtZX0gd2lsbCBub3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgdHJpZ2dlciB1cGRhdGVzIGFzIGV4cGVjdGVkIGJlY2F1c2UgdGhleSBhcmUgc2V0IHVzaW5nIGNsYXNzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGZpZWxkczogJHtzaGFkb3dlZFByb3BlcnRpZXMuam9pbignLCAnKX0uIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYE5hdGl2ZSBjbGFzcyBmaWVsZHMgYW5kIHNvbWUgY29tcGlsZWQgb3V0cHV0IHdpbGwgb3ZlcndyaXRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGFjY2Vzc29ycyB1c2VkIGZvciBkZXRlY3RpbmcgY2hhbmdlcy4gU2VlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vbGl0LmRldi9tc2cvY2xhc3MtZmllbGQtc2hhZG93aW5nIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGZvciBtb3JlIGluZm9ybWF0aW9uLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1peGluIGluc3RhbmNlIHByb3BlcnRpZXMgb25jZSwgaWYgdGhleSBleGlzdC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IHNob3VsZCB3ZSB1c2UgdGhlIHN0b3JlZCB2YWx1ZT8gQ291bGQgYSBuZXcgdmFsdWVcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGJlZW4gc2V0IHNpbmNlIHdlIHN0b3JlZCB0aGUgb3duIHByb3BlcnR5IHZhbHVlP1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW3AsIHZhbHVlXSBvZiB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgaW5pdGlhbCB2YWx1ZSByZWZsZWN0aW9uIGFuZCBwb3B1bGF0ZSB0aGUgaW5pdGlhbFxuICAgICAgICAgICAgLy8gY2hhbmdlZFByb3BlcnRpZXMgbWFwLCBidXQgb25seSBmb3IgdGhlIGNhc2Ugb2YgZXhwZXJpbWVudGFsXG4gICAgICAgICAgICAvLyBkZWNvcmF0b3JzIG9uIGFjY2Vzc29ycywgd2hpY2ggd2lsbCBub3QgaGF2ZSBhbHJlYWR5IHBvcHVsYXRlZCB0aGVcbiAgICAgICAgICAgIC8vIGNoYW5nZWRQcm9wZXJ0aWVzIG1hcC4gV2UgY2FuJ3Qga25vdyBpZiB0aGVzZSBhY2Nlc3NvcnMgaGFkXG4gICAgICAgICAgICAvLyBpbml0aWFsaXplcnMsIHNvIHdlIGp1c3Qgc2V0IHRoZW0gYW55d2F5IC0gYSBkaWZmZXJlbmNlIGZyb21cbiAgICAgICAgICAgIC8vIGV4cGVyaW1lbnRhbCBkZWNvcmF0b3JzIG9uIGZpZWxkcyBhbmQgc3RhbmRhcmQgZGVjb3JhdG9ycyBvblxuICAgICAgICAgICAgLy8gYXV0by1hY2Nlc3NvcnMuXG4gICAgICAgICAgICAvLyBGb3IgY29udGV4dCB3aHkgZXhwZXJpbWVudGFsRGVjb3JhdG9ycyB3aXRoIGF1dG8gYWNjZXNzb3JzIGFyZSBoYW5kbGVkXG4gICAgICAgICAgICAvLyBzcGVjaWZpY2FsbHkgYWxzbyBzZWU6XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9wdWxsLzQxODMjaXNzdWVjb21tZW50LTE3MTE5NTk2MzVcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRQcm9wZXJ0aWVzID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIC5lbGVtZW50UHJvcGVydGllcztcbiAgICAgICAgICAgIGlmIChlbGVtZW50UHJvcGVydGllcy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW3AsIG9wdGlvbnNdIG9mIGVsZW1lbnRQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLndyYXBwZWQgPT09IHRydWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuaGFzKHApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjaGFuZ2VQcm9wZXJ0eShwLCB0aGlzW3BdLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2NvbnRyb2xsZXJzPy5mb3JFYWNoKChjKSA9PiBjLmhvc3RVcGRhdGU/LigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIGZyb20gcnVubmluZyB3aGVuIHRoZXJlJ3MgYW5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBleGNlcHRpb24uXG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBlbGVtZW50IGNhbiBhY2NlcHQgYWRkaXRpb25hbCB1cGRhdGVzIGFmdGVyIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdXBkYXRlIGlzIG5vIGxvbmdlciBjb25zaWRlcmVkIHBlbmRpbmcgYW5kIGZ1cnRoZXIgdXBkYXRlcyBhcmUgbm93IGFsbG93ZWQuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgYmVmb3JlIGB1cGRhdGUoKWAgdG8gY29tcHV0ZSB2YWx1ZXMgbmVlZGVkIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogSW1wbGVtZW50IGB3aWxsVXBkYXRlYCB0byBjb21wdXRlIHByb3BlcnR5IHZhbHVlcyB0aGF0IGRlcGVuZCBvbiBvdGhlclxuICAgICAqIHByb3BlcnRpZXMgYW5kIGFyZSB1c2VkIGluIHRoZSByZXN0IG9mIHRoZSB1cGRhdGUgcHJvY2Vzcy5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAqICAgLy8gb25seSBuZWVkIHRvIGNoZWNrIGNoYW5nZWQgcHJvcGVydGllcyBmb3IgYW4gZXhwZW5zaXZlIGNvbXB1dGF0aW9uLlxuICAgICAqICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZmlyc3ROYW1lJykgfHwgY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdsYXN0TmFtZScpKSB7XG4gICAgICogICAgIHRoaXMuc2hhID0gY29tcHV0ZVNIQShgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWApO1xuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKlxuICAgICAqIHJlbmRlcigpIHtcbiAgICAgKiAgIHJldHVybiBodG1sYFNIQTogJHt0aGlzLnNoYX1gO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBvbHlmaWxsLXN1cHBvcnQuXG4gICAgLy8gQGludGVybmFsXG4gICAgXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgdGhpcy5fX2NvbnRyb2xsZXJzPy5mb3JFYWNoKChjKSA9PiBjLmhvc3RVcGRhdGVkPy4oKSk7XG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluY2x1ZGVzKCdjaGFuZ2UtaW4tdXBkYXRlJykpIHtcbiAgICAgICAgICAgIGlzc3VlV2FybmluZygnY2hhbmdlLWluLXVwZGF0ZScsIGBFbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHNjaGVkdWxlZCBhbiB1cGRhdGUgYCArXG4gICAgICAgICAgICAgICAgYChnZW5lcmFsbHkgYmVjYXVzZSBhIHByb3BlcnR5IHdhcyBzZXQpIGAgK1xuICAgICAgICAgICAgICAgIGBhZnRlciBhbiB1cGRhdGUgY29tcGxldGVkLCBjYXVzaW5nIGEgbmV3IHVwZGF0ZSB0byBiZSBzY2hlZHVsZWQuIGAgK1xuICAgICAgICAgICAgICAgIGBUaGlzIGlzIGluZWZmaWNpZW50IGFuZCBzaG91bGQgYmUgYXZvaWRlZCB1bmxlc3MgdGhlIG5leHQgdXBkYXRlIGAgK1xuICAgICAgICAgICAgICAgIGBjYW4gb25seSBiZSBzY2hlZHVsZWQgYXMgYSBzaWRlIGVmZmVjdCBvZiB0aGUgcHJldmlvdXMgdXBkYXRlLmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9fbWFya1VwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBlbGVtZW50IGhhcyBjb21wbGV0ZWQgdXBkYXRpbmcuXG4gICAgICogVGhlIFByb21pc2UgdmFsdWUgaXMgYSBib29sZWFuIHRoYXQgaXMgYHRydWVgIGlmIHRoZSBlbGVtZW50IGNvbXBsZXRlZCB0aGVcbiAgICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgICAqIGEgcHJvcGVydHkgd2FzIHNldCBpbnNpZGUgYHVwZGF0ZWQoKWAuIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBhblxuICAgICAqIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogVG8gYXdhaXQgYWRkaXRpb25hbCBhc3luY2hyb25vdXMgd29yaywgb3ZlcnJpZGUgdGhlIGBnZXRVcGRhdGVDb21wbGV0ZWBcbiAgICAgKiBtZXRob2QuIEZvciBleGFtcGxlLCBpdCBpcyBzb21ldGltZXMgdXNlZnVsIHRvIGF3YWl0IGEgcmVuZGVyZWQgZWxlbWVudFxuICAgICAqIGJlZm9yZSBmdWxmaWxsaW5nIHRoaXMgUHJvbWlzZS4gVG8gZG8gdGhpcywgZmlyc3QgYXdhaXRcbiAgICAgKiBgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKWAsIHRoZW4gYW55IHN1YnNlcXVlbnQgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSB1cGRhdGUgY29tcGxldGVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgcG9pbnQgZm9yIHRoZSBgdXBkYXRlQ29tcGxldGVgIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBJdCBpcyBub3Qgc2FmZSB0byBvdmVycmlkZSB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBnZXR0ZXIgZGlyZWN0bHkgZHVlIHRvIGFcbiAgICAgKiBsaW1pdGF0aW9uIGluIFR5cGVTY3JpcHQgd2hpY2ggbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGNhbGwgYVxuICAgICAqIHN1cGVyY2xhc3MgZ2V0dGVyIChlLmcuIGBzdXBlci51cGRhdGVDb21wbGV0ZS50aGVuKC4uLilgKSB3aGVuIHRoZSB0YXJnZXRcbiAgICAgKiBsYW5ndWFnZSBpcyBFUzUgKGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzM4KS5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGRlbiBpbnN0ZWFkLiBGb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICBvdmVycmlkZSBhc3luYyBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgKiAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICAgKiAgICAgYXdhaXQgdGhpcy5fbXlDaGlsZC51cGRhdGVDb21wbGV0ZTtcbiAgICAgKiAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSB1cGRhdGUgY29tcGxldGVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGB1cGRhdGUoKWAgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IHJlcXVlc3RzXG4gICAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgICAqIGN1c3RvbWl6ZWQgdG8gY29udHJvbCB3aGVuIHRvIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNob3VsZFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzLlxuICAgICAqIEl0IGNhbiBiZSBvdmVycmlkZGVuIHRvIHJlbmRlciBhbmQga2VlcCB1cGRhdGVkIGVsZW1lbnQgRE9NLlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogYW5vdGhlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vIFRoZSBmb3JFYWNoKCkgZXhwcmVzc2lvbiB3aWxsIG9ubHkgcnVuIHdoZW4gd2hlbiBfX3JlZmxlY3RpbmdQcm9wZXJ0aWVzIGlzXG4gICAgICAgIC8vIGRlZmluZWQsIGFuZCBpdCByZXR1cm5zIHVuZGVmaW5lZCwgc2V0dGluZyBfX3JlZmxlY3RpbmdQcm9wZXJ0aWVzIHRvXG4gICAgICAgIC8vIHVuZGVmaW5lZFxuICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgJiY9IHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcy5mb3JFYWNoKChwKSA9PiB0aGlzLl9fcHJvcGVydHlUb0F0dHJpYnV0ZShwLCB0aGlzW3BdKSk7XG4gICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgICAqIHdvcmsgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICogICB0aGlzLnJlbmRlclJvb3QuZ2V0RWxlbWVudEJ5SWQoJ215LXRleHQtYXJlYScpLmZvY3VzKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG59XG4vKipcbiAqIE1lbW9pemVkIGxpc3Qgb2YgYWxsIGVsZW1lbnQgc3R5bGVzLlxuICogQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGUgY2xhc3MuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHN0eWxlc1xuICovXG5SZWFjdGl2ZUVsZW1lbnQuZWxlbWVudFN0eWxlcyA9IFtdO1xuLyoqXG4gKiBPcHRpb25zIHVzZWQgd2hlbiBjYWxsaW5nIGBhdHRhY2hTaGFkb3dgLiBTZXQgdGhpcyBwcm9wZXJ0eSB0byBjdXN0b21pemVcbiAqIHRoZSBvcHRpb25zIGZvciB0aGUgc2hhZG93Um9vdDsgZm9yIGV4YW1wbGUsIHRvIGNyZWF0ZSBhIGNsb3NlZFxuICogc2hhZG93Um9vdDogYHttb2RlOiAnY2xvc2VkJ31gLlxuICpcbiAqIE5vdGUsIHRoZXNlIG9wdGlvbnMgYXJlIHVzZWQgaW4gYGNyZWF0ZVJlbmRlclJvb3RgLiBJZiB0aGlzIG1ldGhvZFxuICogaXMgY3VzdG9taXplZCwgb3B0aW9ucyBzaG91bGQgYmUgcmVzcGVjdGVkIGlmIHBvc3NpYmxlLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAqL1xuUmVhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3RPcHRpb25zID0geyBtb2RlOiAnb3BlbicgfTtcbi8vIEFzc2lnbmVkIGhlcmUgdG8gd29yayBhcm91bmQgYSBqc2NvbXBpbGVyIGJ1ZyB3aXRoIHN0YXRpYyBmaWVsZHNcbi8vIHdoZW4gY29tcGlsaW5nIHRvIEVTNS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9pc3N1ZXMvMzE3N1xuUmVhY3RpdmVFbGVtZW50W0pTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VsZW1lbnRQcm9wZXJ0aWVzJywgUmVhY3RpdmVFbGVtZW50KV0gPSBuZXcgTWFwKCk7XG5SZWFjdGl2ZUVsZW1lbnRbSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnZmluYWxpemVkJywgUmVhY3RpdmVFbGVtZW50KV0gPSBuZXcgTWFwKCk7XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5wb2x5ZmlsbFN1cHBvcnQ/Lih7IFJlYWN0aXZlRWxlbWVudCB9KTtcbi8vIERldiBtb2RlIHdhcm5pbmdzLi4uXG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBEZWZhdWx0IHdhcm5pbmcgc2V0LlxuICAgIFJlYWN0aXZlRWxlbWVudC5lbmFibGVkV2FybmluZ3MgPSBbXG4gICAgICAgICdjaGFuZ2UtaW4tdXBkYXRlJyxcbiAgICAgICAgJ2FzeW5jLXBlcmZvcm0tdXBkYXRlJyxcbiAgICBdO1xuICAgIGNvbnN0IGVuc3VyZU93bldhcm5pbmdzID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgICAgaWYgKCFjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VuYWJsZWRXYXJuaW5ncycsIGN0b3IpKSkge1xuICAgICAgICAgICAgY3Rvci5lbmFibGVkV2FybmluZ3MgPSBjdG9yLmVuYWJsZWRXYXJuaW5ncy5zbGljZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZFdhcm5pbmdzLmluY2x1ZGVzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRXYXJuaW5ncy5wdXNoKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZGlzYWJsZVdhcm5pbmcgPSBmdW5jdGlvbiAod2FybmluZykge1xuICAgICAgICBlbnN1cmVPd25XYXJuaW5ncyh0aGlzKTtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2Yod2FybmluZyk7XG4gICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIFJlYWN0aXZlRWxlbWVudCB1c2FnZS5cbihnbG9iYWwucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMgPz89IFtdKS5wdXNoKCcyLjAuMycpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBMb2FkaW5nIG11bHRpcGxlIHZlcnNpb25zIGAgK1xuICAgICAgICBgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qKlxuICogVGhlIG1haW4gTGl0RWxlbWVudCBtb2R1bGUsIHdoaWNoIGRlZmluZXMgdGhlIHtAbGlua2NvZGUgTGl0RWxlbWVudH0gYmFzZVxuICogY2xhc3MgYW5kIHJlbGF0ZWQgQVBJcy5cbiAqXG4gKiAgTGl0RWxlbWVudCBjb21wb25lbnRzIGNhbiBkZWZpbmUgYSB0ZW1wbGF0ZSBhbmQgYSBzZXQgb2Ygb2JzZXJ2ZWRcbiAqIHByb3BlcnRpZXMuIENoYW5naW5nIGFuIG9ic2VydmVkIHByb3BlcnR5IHRyaWdnZXJzIGEgcmUtcmVuZGVyIG9mIHRoZVxuICogZWxlbWVudC5cbiAqXG4gKiAgSW1wb3J0IHtAbGlua2NvZGUgTGl0RWxlbWVudH0gYW5kIHtAbGlua2NvZGUgaHRtbH0gZnJvbSB0aGlzIG1vZHVsZSB0b1xuICogY3JlYXRlIGEgY29tcG9uZW50OlxuICpcbiAqICBgYGBqc1xuICogaW1wb3J0IHtMaXRFbGVtZW50LCBodG1sfSBmcm9tICdsaXQtZWxlbWVudCc7XG4gKlxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKlxuICogICAvLyBEZWNsYXJlIG9ic2VydmVkIHByb3BlcnRpZXNcbiAqICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICogICAgIHJldHVybiB7XG4gKiAgICAgICBhZGplY3RpdmU6IHt9XG4gKiAgICAgfVxuICogICB9XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICB0aGlzLmFkamVjdGl2ZSA9ICdhd2Vzb21lJztcbiAqICAgfVxuICpcbiAqICAgLy8gRGVmaW5lIHRoZSBlbGVtZW50J3MgdGVtcGxhdGVcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYDxwPnlvdXIgJHthZGplY3RpdmV9IHRlbXBsYXRlIGhlcmU8L3A+YDtcbiAqICAgfVxuICogfVxuICpcbiAqIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gKiBgYGBcbiAqXG4gKiBgTGl0RWxlbWVudGAgZXh0ZW5kcyB7QGxpbmtjb2RlIFJlYWN0aXZlRWxlbWVudH0gYW5kIGFkZHMgbGl0LWh0bWxcbiAqIHRlbXBsYXRpbmcuIFRoZSBgUmVhY3RpdmVFbGVtZW50YCBjbGFzcyBpcyBwcm92aWRlZCBmb3IgdXNlcnMgdGhhdCB3YW50IHRvXG4gKiBidWlsZCB0aGVpciBvd24gY3VzdG9tIGVsZW1lbnQgYmFzZSBjbGFzc2VzIHRoYXQgZG9uJ3QgdXNlIGxpdC1odG1sLlxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBub0NoYW5nZSB9IGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbCc7XG4vKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG4vKkBfX0lOTElORV9fKi9cbmNvbnN0IEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSAocHJvcCwgX29iaikgPT4gcHJvcDtcbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5pZiAoREVWX01PREUpIHtcbiAgICAvLyBFbnN1cmUgd2FybmluZ3MgYXJlIGlzc3VlZCBvbmx5IDF4LCBldmVuIGlmIG11bHRpcGxlIHZlcnNpb25zIG9mIExpdFxuICAgIC8vIGFyZSBsb2FkZWQuXG4gICAgY29uc3QgaXNzdWVkV2FybmluZ3MgPSAoZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA/Pz0gbmV3IFNldCgpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICBpZiAoIWlzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgaXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHRoYXQgbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMsIGFuZFxuICogcmVuZGVycyBhIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIFRvIGRlZmluZSBhIGNvbXBvbmVudCwgc3ViY2xhc3MgYExpdEVsZW1lbnRgIGFuZCBpbXBsZW1lbnQgYVxuICogYHJlbmRlcmAgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIGNvbXBvbmVudCdzIHRlbXBsYXRlLiBEZWZpbmUgcHJvcGVydGllc1xuICogdXNpbmcgdGhlIHtAbGlua2NvZGUgTGl0RWxlbWVudC5wcm9wZXJ0aWVzIHByb3BlcnRpZXN9IHByb3BlcnR5IG9yIHRoZVxuICoge0BsaW5rY29kZSBwcm9wZXJ0eX0gZGVjb3JhdG9yLlxuICovXG5leHBvcnQgY2xhc3MgTGl0RWxlbWVudCBleHRlbmRzIFJlYWN0aXZlRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbmRlck9wdGlvbnMgPSB7IGhvc3Q6IHRoaXMgfTtcbiAgICAgICAgdGhpcy5fX2NoaWxkUGFydCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSBzdXBlci5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIC8vIFdoZW4gYWRvcHRlZFN0eWxlU2hlZXRzIGFyZSBzaGltbWVkLCB0aGV5IGFyZSBpbnNlcnRlZCBpbnRvIHRoZVxuICAgICAgICAvLyBzaGFkb3dSb290IGJ5IGNyZWF0ZVJlbmRlclJvb3QuIEFkanVzdCB0aGUgcmVuZGVyQmVmb3JlIG5vZGUgc28gdGhhdFxuICAgICAgICAvLyBhbnkgc3R5bGVzIGluIExpdCBjb250ZW50IHJlbmRlciBiZWZvcmUgYWRvcHRlZFN0eWxlU2hlZXRzLiBUaGlzIGlzXG4gICAgICAgIC8vIGltcG9ydGFudCBzbyB0aGF0IGFkb3B0ZWRTdHlsZVNoZWV0cyBoYXZlIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAgICAgICAgLy8gdGhlIHNoYWRvd1Jvb3QuXG4gICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucy5yZW5kZXJCZWZvcmUgPz89IHJlbmRlclJvb3QuZmlyc3RDaGlsZDtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAgICogYW5kIGNhbGxzIGByZW5kZXJgIHRvIHJlbmRlciBET00gdmlhIGxpdC1odG1sLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlXG4gICAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBwYXJhbSBjaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vIFNldHRpbmcgcHJvcGVydGllcyBpbiBgcmVuZGVyYCBzaG91bGQgbm90IHRyaWdnZXIgYW4gdXBkYXRlLiBTaW5jZVxuICAgICAgICAvLyB1cGRhdGVzIGFyZSBhbGxvd2VkIGFmdGVyIHN1cGVyLnVwZGF0ZSwgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgcmVuZGVyYFxuICAgICAgICAvLyBiZWZvcmUgdGhhdC5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJPcHRpb25zLmlzQ29ubmVjdGVkID0gdGhpcy5pc0Nvbm5lY3RlZDtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gcmVuZGVyKHZhbHVlLCB0aGlzLnJlbmRlclJvb3QsIHRoaXMucmVuZGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSBkb2N1bWVudCdzIERPTS5cbiAgICAgKlxuICAgICAqIEluIGBjb25uZWN0ZWRDYWxsYmFjaygpYCB5b3Ugc2hvdWxkIHNldHVwIHRhc2tzIHRoYXQgc2hvdWxkIG9ubHkgb2NjdXIgd2hlblxuICAgICAqIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuIFRoZSBtb3N0IGNvbW1vbiBvZiB0aGVzZSBpc1xuICAgICAqIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gbm9kZXMgZXh0ZXJuYWwgdG8gdGhlIGVsZW1lbnQsIGxpa2UgYSBrZXlkb3duXG4gICAgICogZXZlbnQgaGFuZGxlciBhZGRlZCB0byB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgKiAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICogICBhZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogVHlwaWNhbGx5LCBhbnl0aGluZyBkb25lIGluIGBjb25uZWN0ZWRDYWxsYmFjaygpYCBzaG91bGQgYmUgdW5kb25lIHdoZW4gdGhlXG4gICAgICogZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQsIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFjaygpYC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5fX2NoaWxkUGFydD8uc2V0Q29ubmVjdGVkKHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgICAqXG4gICAgICogVGhpcyBjYWxsYmFjayBpcyB0aGUgbWFpbiBzaWduYWwgdG8gdGhlIGVsZW1lbnQgdGhhdCBpdCBtYXkgbm8gbG9uZ2VyIGJlXG4gICAgICogdXNlZC4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIHNob3VsZCBlbnN1cmUgdGhhdCBub3RoaW5nIGlzIGhvbGRpbmcgYVxuICAgICAqIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCAoc3VjaCBhcyBldmVudCBsaXN0ZW5lcnMgYWRkZWQgdG8gbm9kZXMgZXh0ZXJuYWxcbiAgICAgKiB0byB0aGUgZWxlbWVudCksIHNvIHRoYXQgaXQgaXMgZnJlZSB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICogICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAqICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBBbiBlbGVtZW50IG1heSBiZSByZS1jb25uZWN0ZWQgYWZ0ZXIgYmVpbmcgZGlzY29ubmVjdGVkLlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0Py5zZXRDb25uZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtYXkgcmV0dXJuXG4gICAgICogYW55IHZhbHVlIHJlbmRlcmFibGUgYnkgbGl0LWh0bWwncyBgQ2hpbGRQYXJ0YCAtIHR5cGljYWxseSBhXG4gICAgICogYFRlbXBsYXRlUmVzdWx0YC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICAgKiB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG5MaXRFbGVtZW50WydfJGxpdEVsZW1lbnQkJ10gPSB0cnVlO1xuLyoqXG4gKiBFbnN1cmUgdGhpcyBjbGFzcyBpcyBtYXJrZWQgYXMgYGZpbmFsaXplZGAgYXMgYW4gb3B0aW1pemF0aW9uIGVuc3VyaW5nXG4gKiBpdCB3aWxsIG5vdCBuZWVkbGVzc2x5IHRyeSB0byBgZmluYWxpemVgLlxuICpcbiAqIE5vdGUgdGhpcyBwcm9wZXJ0eSBuYW1lIGlzIGEgc3RyaW5nIHRvIHByZXZlbnQgYnJlYWtpbmcgQ2xvc3VyZSBKUyBDb21waWxlclxuICogb3B0aW1pemF0aW9ucy4gU2VlIEBsaXQvcmVhY3RpdmUtZWxlbWVudCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuTGl0RWxlbWVudFtKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdmaW5hbGl6ZWQnLCBMaXRFbGVtZW50KV0gPSB0cnVlO1xuLy8gSW5zdGFsbCBoeWRyYXRpb24gaWYgYXZhaWxhYmxlXG5nbG9iYWxUaGlzLmxpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydD8uKHsgTGl0RWxlbWVudCB9KTtcbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gICAgPyBnbG9iYWxUaGlzLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiBnbG9iYWxUaGlzLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQ7XG5wb2x5ZmlsbFN1cHBvcnQ/Lih7IExpdEVsZW1lbnQgfSk7XG4vKipcbiAqIEVORCBVU0VSUyBTSE9VTEQgTk9UIFJFTFkgT04gVEhJUyBPQkpFQ1QuXG4gKlxuICogUHJpdmF0ZSBleHBvcnRzIGZvciB1c2UgYnkgb3RoZXIgTGl0IHBhY2thZ2VzLCBub3QgaW50ZW5kZWQgZm9yIHVzZSBieVxuICogZXh0ZXJuYWwgdXNlcnMuXG4gKlxuICogV2UgY3VycmVudGx5IGRvIG5vdCBtYWtlIGEgbWFuZ2xlZCByb2xsdXAgYnVpbGQgb2YgdGhlIGxpdC1zc3IgY29kZS4gSW4gb3JkZXJcbiAqIHRvIGtlZXAgYSBudW1iZXIgb2YgKG90aGVyd2lzZSBwcml2YXRlKSB0b3AtbGV2ZWwgZXhwb3J0cyAgbWFuZ2xlZCBpbiB0aGVcbiAqIGNsaWVudCBzaWRlIGNvZGUsIHdlIGV4cG9ydCBhIF8kTEUgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtaHRtbCwgc2luY2UgdGhpcyBtb2R1bGUgcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF8kTEUgPSB7XG4gICAgXyRhdHRyaWJ1dGVUb1Byb3BlcnR5OiAoZWwsIG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBlbC5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgXyRjaGFuZ2VkUHJvcGVydGllczogKGVsKSA9PiBlbC5fJGNoYW5nZWRQcm9wZXJ0aWVzLFxufTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgTGl0RWxlbWVudCB1c2FnZS5cbihnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucyA/Pz0gW10pLnB1c2goJzQuMC4zJyk7XG5pZiAoREVWX01PREUgJiYgZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBgICtcbiAgICAgICAgYGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKlxuICogVGhpcyBmaWxlIGV4cG9ydHMgYSBib29sZWFuIGNvbnN0IHdob3NlIHZhbHVlIHdpbGwgZGVwZW5kIG9uIHdoYXQgZW52aXJvbm1lbnRcbiAqIHRoZSBtb2R1bGUgaXMgYmVpbmcgaW1wb3J0ZWQgZnJvbS5cbiAqL1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG4vKipcbiAqIEEgYm9vbGVhbiB0aGF0IHdpbGwgYmUgYHRydWVgIGluIHNlcnZlciBlbnZpcm9ubWVudHMgbGlrZSBOb2RlLCBhbmQgYGZhbHNlYFxuICogaW4gYnJvd3NlciBlbnZpcm9ubWVudHMuIE5vdGUgdGhhdCB5b3VyIHNlcnZlciBlbnZpcm9ubWVudCBvciB0b29sY2hhaW4gbXVzdFxuICogc3VwcG9ydCB0aGUgYFwibm9kZVwiYCBleHBvcnQgY29uZGl0aW9uIGZvciB0aGlzIHRvIGJlIGB0cnVlYC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHdoZW4gYXV0aG9yaW5nIGNvbXBvbmVudHMgdG8gY2hhbmdlIGJlaGF2aW9yIGJhc2VkIG9uXG4gKiB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGlzIGV4ZWN1dGluZyBpbiBhbiBTU1IgY29udGV4dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzU2VydmVyID0gTk9ERV9NT0RFO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtc2VydmVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xuY29uc3QgRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIID0gdHJ1ZTtcbmNvbnN0IE5PREVfTU9ERSA9IGZhbHNlO1xuLy8gQWxsb3dzIG1pbmlmaWVycyB0byByZW5hbWUgcmVmZXJlbmNlcyB0byBnbG9iYWxUaGlzXG5jb25zdCBnbG9iYWwgPSBnbG9iYWxUaGlzO1xuLyoqXG4gKiBVc2VmdWwgZm9yIHZpc3VhbGl6aW5nIGFuZCBsb2dnaW5nIGluc2lnaHRzIGludG8gd2hhdCB0aGUgTGl0IHRlbXBsYXRlIHN5c3RlbSBpcyBkb2luZy5cbiAqXG4gKiBDb21waWxlZCBvdXQgb2YgcHJvZCBtb2RlIGJ1aWxkcy5cbiAqL1xuY29uc3QgZGVidWdMb2dFdmVudCA9IERFVl9NT0RFXG4gICAgPyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW1pdCA9IGdsb2JhbFxuICAgICAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXQtZGVidWcnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDogdW5kZWZpbmVkO1xuLy8gVXNlZCBmb3IgY29ubmVjdGluZyBiZWdpblJlbmRlciBhbmQgZW5kUmVuZGVyIGV2ZW50cyB3aGVuIHRoZXJlIGFyZSBuZXN0ZWRcbi8vIHJlbmRlcnMgd2hlbiBlcnJvcnMgYXJlIHRocm93biBwcmV2ZW50aW5nIGFuIGVuZFJlbmRlciBldmVudCBmcm9tIGJlaW5nXG4vLyBjYWxsZWQuXG5sZXQgZGVidWdMb2dSZW5kZXJJZCA9IDA7XG5sZXQgaXNzdWVXYXJuaW5nO1xuaWYgKERFVl9NT0RFKSB7XG4gICAgZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzID8/PSBuZXcgU2V0KCk7XG4gICAgLy8gSXNzdWUgYSB3YXJuaW5nLCBpZiB3ZSBoYXZlbid0IGFscmVhZHkuXG4gICAgaXNzdWVXYXJuaW5nID0gKGNvZGUsIHdhcm5pbmcpID0+IHtcbiAgICAgICAgd2FybmluZyArPSBjb2RlXG4gICAgICAgICAgICA/IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICBpZiAoIWdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncy5oYXMod2FybmluZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICAgICAgICAgIGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlzc3VlV2FybmluZygnZGV2LW1vZGUnLCBgTGl0IGlzIGluIGRldiBtb2RlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24hYCk7XG59XG5jb25zdCB3cmFwID0gRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggJiZcbiAgICBnbG9iYWwuU2hhZHlET00/LmluVXNlICYmXG4gICAgZ2xvYmFsLlNoYWR5RE9NPy5ub1BhdGNoID09PSB0cnVlXG4gICAgPyBnbG9iYWwuU2hhZHlET00ud3JhcFxuICAgIDogKG5vZGUpID0+IG5vZGU7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSBnbG9iYWwudHJ1c3RlZFR5cGVzO1xuLyoqXG4gKiBPdXIgVHJ1c3RlZFR5cGVQb2xpY3kgZm9yIEhUTUwgd2hpY2ggaXMgZGVjbGFyZWQgdXNpbmcgdGhlIGh0bWwgdGVtcGxhdGVcbiAqIHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBUaGF0IEhUTUwgaXMgYSBkZXZlbG9wZXItYXV0aG9yZWQgY29uc3RhbnQsIGFuZCBpcyBwYXJzZWQgd2l0aCBpbm5lckhUTUxcbiAqIGJlZm9yZSBhbnkgdW50cnVzdGVkIGV4cHJlc3Npb25zIGhhdmUgYmVlbiBtaXhlZCBpbi4gVGhlcmVmb3IgaXQgaXNcbiAqIGNvbnNpZGVyZWQgc2FmZSBieSBjb25zdHJ1Y3Rpb24uXG4gKi9cbmNvbnN0IHBvbGljeSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnbGl0LWh0bWwnLCB7XG4gICAgICAgIGNyZWF0ZUhUTUw6IChzKSA9PiBzLFxuICAgIH0pXG4gICAgOiB1bmRlZmluZWQ7XG5jb25zdCBpZGVudGl0eUZ1bmN0aW9uID0gKHZhbHVlKSA9PiB2YWx1ZTtcbmNvbnN0IG5vb3BTYW5pdGl6ZXIgPSAoX25vZGUsIF9uYW1lLCBfdHlwZSkgPT4gaWRlbnRpdHlGdW5jdGlvbjtcbi8qKiBTZXRzIHRoZSBnbG9iYWwgc2FuaXRpemVyIGZhY3RvcnkuICovXG5jb25zdCBzZXRTYW5pdGl6ZXIgPSAobmV3U2FuaXRpemVyKSA9PiB7XG4gICAgaWYgKCFFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2FuaXRpemVyRmFjdG9yeUludGVybmFsICE9PSBub29wU2FuaXRpemVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIG92ZXJ3cml0ZSBleGlzdGluZyBsaXQtaHRtbCBzZWN1cml0eSBwb2xpY3kuYCArXG4gICAgICAgICAgICBgIHNldFNhbml0aXplRE9NVmFsdWVGYWN0b3J5IHNob3VsZCBiZSBjYWxsZWQgYXQgbW9zdCBvbmNlLmApO1xuICAgIH1cbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBuZXdTYW5pdGl6ZXI7XG59O1xuLyoqXG4gKiBPbmx5IHVzZWQgaW4gaW50ZXJuYWwgdGVzdHMsIG5vdCBhIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkuXG4gKi9cbmNvbnN0IF90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZSA9ICgpID0+IHtcbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xufTtcbmNvbnN0IGNyZWF0ZVNhbml0aXplciA9IChub2RlLCBuYW1lLCB0eXBlKSA9PiB7XG4gICAgcmV0dXJuIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbChub2RlLCBuYW1lLCB0eXBlKTtcbn07XG4vLyBBZGRlZCB0byBhbiBhdHRyaWJ1dGUgbmFtZSB0byBtYXJrIHRoZSBhdHRyaWJ1dGUgYXMgYm91bmQgc28gd2UgY2FuIGZpbmRcbi8vIGl0IGVhc2lseS5cbmNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcbi8vIFRoaXMgbWFya2VyIGlzIHVzZWQgaW4gbWFueSBzeW50YWN0aWMgcG9zaXRpb25zIGluIEhUTUwsIHNvIGl0IG11c3QgYmVcbi8vIGEgdmFsaWQgZWxlbWVudCBuYW1lIGFuZCBhdHRyaWJ1dGUgbmFtZS4gV2UgZG9uJ3Qgc3VwcG9ydCBkeW5hbWljIG5hbWVzICh5ZXQpXG4vLyBidXQgdGhpcyBhdCBsZWFzdCBlbnN1cmVzIHRoYXQgdGhlIHBhcnNlIHRyZWUgaXMgY2xvc2VyIHRvIHRoZSB0ZW1wbGF0ZVxuLy8gaW50ZW50aW9uLlxuY29uc3QgbWFya2VyID0gYGxpdCQke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSg5KX0kYDtcbi8vIFN0cmluZyB1c2VkIHRvIHRlbGwgaWYgYSBjb21tZW50IGlzIGEgbWFya2VyIGNvbW1lbnRcbmNvbnN0IG1hcmtlck1hdGNoID0gJz8nICsgbWFya2VyO1xuLy8gVGV4dCB1c2VkIHRvIGluc2VydCBhIGNvbW1lbnQgbWFya2VyIG5vZGUuIFdlIHVzZSBwcm9jZXNzaW5nIGluc3RydWN0aW9uXG4vLyBzeW50YXggYmVjYXVzZSBpdCdzIHNsaWdodGx5IHNtYWxsZXIsIGJ1dCBwYXJzZXMgYXMgYSBjb21tZW50IG5vZGUuXG5jb25zdCBub2RlTWFya2VyID0gYDwke21hcmtlck1hdGNofT5gO1xuY29uc3QgZCA9IE5PREVfTU9ERSAmJiBnbG9iYWwuZG9jdW1lbnQgPT09IHVuZGVmaW5lZFxuICAgID8ge1xuICAgICAgICBjcmVhdGVUcmVlV2Fsa2VyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgIH1cbiAgICA6IGRvY3VtZW50O1xuLy8gQ3JlYXRlcyBhIGR5bmFtaWMgbWFya2VyLiBXZSBuZXZlciBoYXZlIHRvIHNlYXJjaCBmb3IgdGhlc2UgaW4gdGhlIERPTS5cbmNvbnN0IGNyZWF0ZU1hcmtlciA9ICgpID0+IGQuY3JlYXRlQ29tbWVudCgnJyk7XG5jb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT0gJ2Z1bmN0aW9uJyk7XG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWUpID0+IGlzQXJyYXkodmFsdWUpIHx8XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB0eXBlb2YgdmFsdWU/LltTeW1ib2wuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nO1xuY29uc3QgU1BBQ0VfQ0hBUiA9IGBbIFxcdFxcblxcZlxccl1gO1xuY29uc3QgQVRUUl9WQUxVRV9DSEFSID0gYFteIFxcdFxcblxcZlxcclwiJ1xcYDw+PV1gO1xuY29uc3QgTkFNRV9DSEFSID0gYFteXFxcXHNcIic+PS9dYDtcbi8vIFRoZXNlIHJlZ2V4ZXMgcmVwcmVzZW50IHRoZSBmaXZlIHBhcnNpbmcgc3RhdGVzIHRoYXQgd2UgY2FyZSBhYm91dCBpbiB0aGVcbi8vIFRlbXBsYXRlJ3MgSFRNTCBzY2FubmVyLiBUaGV5IG1hdGNoIHRoZSAqZW5kKiBvZiB0aGUgc3RhdGUgdGhleSdyZSBuYW1lZFxuLy8gYWZ0ZXIuXG4vLyBEZXBlbmRpbmcgb24gdGhlIG1hdGNoLCB3ZSB0cmFuc2l0aW9uIHRvIGEgbmV3IHN0YXRlLiBJZiB0aGVyZSdzIG5vIG1hdGNoLFxuLy8gd2Ugc3RheSBpbiB0aGUgc2FtZSBzdGF0ZS5cbi8vIE5vdGUgdGhhdCB0aGUgcmVnZXhlcyBhcmUgc3RhdGVmdWwuIFdlIHV0aWxpemUgbGFzdEluZGV4IGFuZCBzeW5jIGl0XG4vLyBhY3Jvc3MgdGhlIG11bHRpcGxlIHJlZ2V4ZXMgdXNlZC4gSW4gYWRkaXRpb24gdG8gdGhlIGZpdmUgcmVnZXhlcyBiZWxvd1xuLy8gd2UgYWxzbyBkeW5hbWljYWxseSBjcmVhdGUgYSByZWdleCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbmQgdGFncyBmb3IgcmF3XG4vLyB0ZXh0IGVsZW1lbnRzLlxuLyoqXG4gKiBFbmQgb2YgdGV4dCBpczogYDxgIGZvbGxvd2VkIGJ5OlxuICogICAoY29tbWVudCBzdGFydCkgb3IgKHRhZykgb3IgKGR5bmFtaWMgdGFnIGJpbmRpbmcpXG4gKi9cbmNvbnN0IHRleHRFbmRSZWdleCA9IC88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZztcbmNvbnN0IENPTU1FTlRfU1RBUlQgPSAxO1xuY29uc3QgVEFHX05BTUUgPSAyO1xuY29uc3QgRFlOQU1JQ19UQUdfTkFNRSA9IDM7XG5jb25zdCBjb21tZW50RW5kUmVnZXggPSAvLS0+L2c7XG4vKipcbiAqIENvbW1lbnRzIG5vdCBzdGFydGVkIHdpdGggPCEtLSwgbGlrZSA8L3ssIGNhbiBiZSBlbmRlZCBieSBhIHNpbmdsZSBgPmBcbiAqL1xuY29uc3QgY29tbWVudDJFbmRSZWdleCA9IC8+L2c7XG4vKipcbiAqIFRoZSB0YWdFbmQgcmVnZXggbWF0Y2hlcyB0aGUgZW5kIG9mIHRoZSBcImluc2lkZSBhbiBvcGVuaW5nXCIgdGFnIHN5bnRheFxuICogcG9zaXRpb24uIEl0IGVpdGhlciBtYXRjaGVzIGEgYD5gLCBhbiBhdHRyaWJ1dGUtbGlrZSBzZXF1ZW5jZSwgb3IgdGhlIGVuZFxuICogb2YgdGhlIHN0cmluZyBhZnRlciBhIHNwYWNlIChhdHRyaWJ1dGUtbmFtZSBwb3NpdGlvbiBlbmRpbmcpLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudHMtYXR0cmlidXRlc1xuICpcbiAqIFwiIFxcdFxcblxcZlxcclwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLCAoXCIpLCAoJyksIFwiPlwiLFxuICogICAgXCI9XCIsIG9yIFwiL1wiLiBOb3RlOiB0aGlzIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBIVE1MIHNwZWMgd2hpY2ggYWxzbyBleGNsdWRlcyBjb250cm9sIGNoYXJhY3RlcnMuXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5jb25zdCB0YWdFbmRSZWdleCA9IG5ldyBSZWdFeHAoYD58JHtTUEFDRV9DSEFSfSg/Oigke05BTUVfQ0hBUn0rKSgke1NQQUNFX0NIQVJ9Kj0ke1NQQUNFX0NIQVJ9Kig/OiR7QVRUUl9WQUxVRV9DSEFSfXwoXCJ8Jyl8KSl8JClgLCAnZycpO1xuY29uc3QgRU5USVJFX01BVENIID0gMDtcbmNvbnN0IEFUVFJJQlVURV9OQU1FID0gMTtcbmNvbnN0IFNQQUNFU19BTkRfRVFVQUxTID0gMjtcbmNvbnN0IFFVT1RFX0NIQVIgPSAzO1xuY29uc3Qgc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggPSAvJy9nO1xuY29uc3QgZG91YmxlUXVvdGVBdHRyRW5kUmVnZXggPSAvXCIvZztcbi8qKlxuICogTWF0Y2hlcyB0aGUgcmF3IHRleHQgZWxlbWVudHMuXG4gKlxuICogQ29tbWVudHMgYXJlIG5vdCBwYXJzZWQgd2l0aGluIHJhdyB0ZXh0IGVsZW1lbnRzLCBzbyB3ZSBuZWVkIHRvIHNlYXJjaCB0aGVpclxuICogdGV4dCBjb250ZW50IGZvciBtYXJrZXIgc3RyaW5ncy5cbiAqL1xuY29uc3QgcmF3VGV4dEVsZW1lbnQgPSAvXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYXx0aXRsZSkkL2k7XG4vKiogVGVtcGxhdGVSZXN1bHQgdHlwZXMgKi9cbmNvbnN0IEhUTUxfUkVTVUxUID0gMTtcbmNvbnN0IFNWR19SRVNVTFQgPSAyO1xuLy8gVGVtcGxhdGVQYXJ0IHR5cGVzXG4vLyBJTVBPUlRBTlQ6IHRoZXNlIG11c3QgbWF0Y2ggdGhlIHZhbHVlcyBpbiBQYXJ0VHlwZVxuY29uc3QgQVRUUklCVVRFX1BBUlQgPSAxO1xuY29uc3QgQ0hJTERfUEFSVCA9IDI7XG5jb25zdCBQUk9QRVJUWV9QQVJUID0gMztcbmNvbnN0IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQgPSA0O1xuY29uc3QgRVZFTlRfUEFSVCA9IDU7XG5jb25zdCBFTEVNRU5UX1BBUlQgPSA2O1xuY29uc3QgQ09NTUVOVF9QQVJUID0gNztcbi8qKlxuICogR2VuZXJhdGVzIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgVGVtcGxhdGVSZXN1bHQgd2l0aFxuICogdGhlIGdpdmVuIHJlc3VsdCB0eXBlLlxuICovXG5jb25zdCB0YWcgPSAodHlwZSkgPT4gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIC8vIFdhcm4gYWdhaW5zdCB0ZW1wbGF0ZXMgb2N0YWwgZXNjYXBlIHNlcXVlbmNlc1xuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSByYXRoZXIgdGhhbiBpbiByZW5kZXIgc28gdGhhdCB0aGUgd2FybmluZyBpcyBjbG9zZXIgdG8gdGhlXG4gICAgLy8gdGVtcGxhdGUgZGVmaW5pdGlvbi5cbiAgICBpZiAoREVWX01PREUgJiYgc3RyaW5ncy5zb21lKChzKSA9PiBzID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU29tZSB0ZW1wbGF0ZSBzdHJpbmdzIGFyZSB1bmRlZmluZWQuXFxuJyArXG4gICAgICAgICAgICAnVGhpcyBpcyBwcm9iYWJseSBjYXVzZWQgYnkgaWxsZWdhbCBvY3RhbCBlc2NhcGUgc2VxdWVuY2VzLicpO1xuICAgIH1cbiAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgLy8gSW1wb3J0IHN0YXRpYy1odG1sLmpzIHJlc3VsdHMgaW4gYSBjaXJjdWxhciBkZXBlbmRlbmN5IHdoaWNoIGczIGRvZXNuJ3RcbiAgICAgICAgLy8gaGFuZGxlLiBJbnN0ZWFkIHdlIGtub3cgdGhhdCBzdGF0aWMgdmFsdWVzIG11c3QgaGF2ZSB0aGUgZmllbGRcbiAgICAgICAgLy8gYF8kbGl0U3RhdGljJGAuXG4gICAgICAgIGlmICh2YWx1ZXMuc29tZSgodmFsKSA9PiB2YWw/LlsnXyRsaXRTdGF0aWMkJ10pKSB7XG4gICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJycsIGBTdGF0aWMgdmFsdWVzICdsaXRlcmFsJyBvciAndW5zYWZlU3RhdGljJyBjYW5ub3QgYmUgdXNlZCBhcyB2YWx1ZXMgdG8gbm9uLXN0YXRpYyB0ZW1wbGF0ZXMuXFxuYCArXG4gICAgICAgICAgICAgICAgYFBsZWFzZSB1c2UgdGhlIHN0YXRpYyAnaHRtbCcgdGFnIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9saXQuZGV2L2RvY3MvdGVtcGxhdGVzL2V4cHJlc3Npb25zLyNzdGF0aWMtZXhwcmVzc2lvbnNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICBbJ18kbGl0VHlwZSQnXTogdHlwZSxcbiAgICAgICAgc3RyaW5ncyxcbiAgICAgICAgdmFsdWVzLFxuICAgIH07XG59O1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgaGVhZGVyID0gKHRpdGxlOiBzdHJpbmcpID0+IGh0bWxgPGgxPiR7dGl0bGV9PC9oMT5gO1xuICogYGBgXG4gKlxuICogVGhlIGBodG1sYCB0YWcgcmV0dXJucyBhIGRlc2NyaXB0aW9uIG9mIHRoZSBET00gdG8gcmVuZGVyIGFzIGEgdmFsdWUuIEl0IGlzXG4gKiBsYXp5LCBtZWFuaW5nIG5vIHdvcmsgaXMgZG9uZSB1bnRpbCB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQuIFdoZW4gcmVuZGVyaW5nLFxuICogaWYgYSB0ZW1wbGF0ZSBjb21lcyBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gYXMgYSBwcmV2aW91c2x5IHJlbmRlcmVkIHJlc3VsdCxcbiAqIGl0J3MgZWZmaWNpZW50bHkgdXBkYXRlZCBpbnN0ZWFkIG9mIHJlcGxhY2VkLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IHRhZyhIVE1MX1JFU1VMVCk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyBmcmFnbWVudCB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHJlY3QgPSBzdmdgPHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+PC9yZWN0PmA7XG4gKlxuICogY29uc3QgbXlJbWFnZSA9IGh0bWxgXG4gKiAgIDxzdmcgdmlld0JveD1cIjAgMCAxMCAxMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAqICAgICAke3JlY3R9XG4gKiAgIDwvc3ZnPmA7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYHN2Z2AgKnRhZyBmdW5jdGlvbiogc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgU1ZHIGZyYWdtZW50cywgb3IgZWxlbWVudHNcbiAqIHRoYXQgd291bGQgYmUgY29udGFpbmVkICoqaW5zaWRlKiogYW4gYDxzdmc+YCBIVE1MIGVsZW1lbnQuIEEgY29tbW9uIGVycm9yIGlzXG4gKiBwbGFjaW5nIGFuIGA8c3ZnPmAgKmVsZW1lbnQqIGluIGEgdGVtcGxhdGUgdGFnZ2VkIHdpdGggdGhlIGBzdmdgIHRhZ1xuICogZnVuY3Rpb24uIFRoZSBgPHN2Zz5gIGVsZW1lbnQgaXMgYW4gSFRNTCBlbGVtZW50IGFuZCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYVxuICogdGVtcGxhdGUgdGFnZ2VkIHdpdGggdGhlIHtAbGlua2NvZGUgaHRtbH0gdGFnIGZ1bmN0aW9uLlxuICpcbiAqIEluIExpdEVsZW1lbnQgdXNhZ2UsIGl0J3MgaW52YWxpZCB0byByZXR1cm4gYW4gU1ZHIGZyYWdtZW50IGZyb20gdGhlXG4gKiBgcmVuZGVyKClgIG1ldGhvZCwgYXMgdGhlIFNWRyBmcmFnbWVudCB3aWxsIGJlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGVsZW1lbnQnc1xuICogc2hhZG93IHJvb3QgYW5kIHRodXMgY2Fubm90IGJlIHVzZWQgd2l0aGluIGFuIGA8c3ZnPmAgSFRNTCBlbGVtZW50LlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gdGFnKFNWR19SRVNVTFQpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0gU3ltYm9sLmZvcignbGl0LW5vQ2hhbmdlJyk7XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgQ2hpbGRQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBidXR0b24gPSBodG1sYCR7XG4gKiAgdXNlci5pc0FkbWluXG4gKiAgICA/IGh0bWxgPGJ1dHRvbj5ERUxFVEU8L2J1dHRvbj5gXG4gKiAgICA6IG5vdGhpbmdcbiAqIH1gO1xuICogYGBgXG4gKlxuICogUHJlZmVyIHVzaW5nIGBub3RoaW5nYCBvdmVyIG90aGVyIGZhbHN5IHZhbHVlcyBhcyBpdCBwcm92aWRlcyBhIGNvbnNpc3RlbnRcbiAqIGJlaGF2aW9yIGJldHdlZW4gdmFyaW91cyBleHByZXNzaW9uIGJpbmRpbmcgY29udGV4dHMuXG4gKlxuICogSW4gY2hpbGQgZXhwcmVzc2lvbnMsIGB1bmRlZmluZWRgLCBgbnVsbGAsIGAnJ2AsIGFuZCBgbm90aGluZ2AgYWxsIGJlaGF2ZSB0aGVcbiAqIHNhbWUgYW5kIHJlbmRlciBubyBub2Rlcy4gSW4gYXR0cmlidXRlIGV4cHJlc3Npb25zLCBgbm90aGluZ2AgX3JlbW92ZXNfIHRoZVxuICogYXR0cmlidXRlLCB3aGlsZSBgdW5kZWZpbmVkYCBhbmQgYG51bGxgIHdpbGwgcmVuZGVyIGFuIGVtcHR5IHN0cmluZy4gSW5cbiAqIHByb3BlcnR5IGV4cHJlc3Npb25zIGBub3RoaW5nYCBiZWNvbWVzIGB1bmRlZmluZWRgLlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IFN5bWJvbC5mb3IoJ2xpdC1ub3RoaW5nJyk7XG4vKipcbiAqIFRoZSBjYWNoZSBvZiBwcmVwYXJlZCB0ZW1wbGF0ZXMsIGtleWVkIGJ5IHRoZSB0YWdnZWQgVGVtcGxhdGVTdHJpbmdzQXJyYXlcbiAqIGFuZCBfbm90XyBhY2NvdW50aW5nIGZvciB0aGUgc3BlY2lmaWMgdGVtcGxhdGUgdGFnIHVzZWQuIFRoaXMgbWVhbnMgdGhhdFxuICogdGVtcGxhdGUgdGFncyBjYW5ub3QgYmUgZHluYW1pYyAtIHRoZSBtdXN0IHN0YXRpY2FsbHkgYmUgb25lIG9mIGh0bWwsIHN2ZyxcbiAqIG9yIGF0dHIuIFRoaXMgcmVzdHJpY3Rpb24gc2ltcGxpZmllcyB0aGUgY2FjaGUgbG9va3VwLCB3aGljaCBpcyBvbiB0aGUgaG90XG4gKiBwYXRoIGZvciByZW5kZXJpbmcuXG4gKi9cbmNvbnN0IHRlbXBsYXRlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgd2Fsa2VyID0gZC5jcmVhdGVUcmVlV2Fsa2VyKGQsIDEyOSAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVH0gKi8pO1xubGV0IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5vb3BTYW5pdGl6ZXI7XG5mdW5jdGlvbiB0cnVzdEZyb21UZW1wbGF0ZVN0cmluZyh0c2EsIHN0cmluZ0Zyb21UU0EpIHtcbiAgICAvLyBBIHNlY3VyaXR5IGNoZWNrIHRvIHByZXZlbnQgc3Bvb2Zpbmcgb2YgTGl0IHRlbXBsYXRlIHJlc3VsdHMuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSwgd2UgbWF5IGJlIGFibGUgdG8gcmVwbGFjZSB0aGlzIHdpdGggQXJyYXkuaXNUZW1wbGF0ZU9iamVjdCxcbiAgICAvLyB0aG91Z2ggd2UgbWlnaHQgbmVlZCB0byBtYWtlIHRoYXQgY2hlY2sgaW5zaWRlIG9mIHRoZSBodG1sIGFuZCBzdmdcbiAgICAvLyBmdW5jdGlvbnMsIGJlY2F1c2UgcHJlY29tcGlsZWQgdGVtcGxhdGVzIGRvbid0IGNvbWUgaW4gYXNcbiAgICAvLyBUZW1wbGF0ZVN0cmluZ0FycmF5IG9iamVjdHMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRzYSkgfHwgIXRzYS5oYXNPd25Qcm9wZXJ0eSgncmF3JykpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5JztcbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gYFxuICAgICAgICAgIEludGVybmFsIEVycm9yOiBleHBlY3RlZCB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGJlIGFuIGFycmF5XG4gICAgICAgICAgd2l0aCBhICdyYXcnIGZpZWxkLiBGYWtpbmcgYSB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5IGJ5XG4gICAgICAgICAgY2FsbGluZyBodG1sIG9yIHN2ZyBsaWtlIGFuIG9yZGluYXJ5IGZ1bmN0aW9uIGlzIGVmZmVjdGl2ZWx5XG4gICAgICAgICAgdGhlIHNhbWUgYXMgY2FsbGluZyB1bnNhZmVIdG1sIGFuZCBjYW4gbGVhZCB0byBtYWpvciBzZWN1cml0eVxuICAgICAgICAgIGlzc3VlcywgZS5nLiBvcGVuaW5nIHlvdXIgY29kZSB1cCB0byBYU1MgYXR0YWNrcy5cbiAgICAgICAgICBJZiB5b3UncmUgdXNpbmcgdGhlIGh0bWwgb3Igc3ZnIHRhZ2dlZCB0ZW1wbGF0ZSBmdW5jdGlvbnMgbm9ybWFsbHlcbiAgICAgICAgICBhbmQgc3RpbGwgc2VlaW5nIHRoaXMgZXJyb3IsIHBsZWFzZSBmaWxlIGEgYnVnIGF0XG4gICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzL25ldz90ZW1wbGF0ZT1idWdfcmVwb3J0Lm1kXG4gICAgICAgICAgYW5kIGluY2x1ZGUgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBidWlsZCB0b29saW5nLCBpZiBhbnkuXG4gICAgICAgIGBcbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcbiAqL2csICdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBwb2xpY3kgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHBvbGljeS5jcmVhdGVIVE1MKHN0cmluZ0Zyb21UU0EpXG4gICAgICAgIDogc3RyaW5nRnJvbVRTQTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBIVE1MIHN0cmluZyBmb3IgdGhlIGdpdmVuIFRlbXBsYXRlU3RyaW5nc0FycmF5IGFuZCByZXN1bHQgdHlwZVxuICogKEhUTUwgb3IgU1ZHKSwgYWxvbmcgd2l0aCB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluXG4gKiB0ZW1wbGF0ZSBvcmRlci4gVGhlIEhUTUwgY29udGFpbnMgY29tbWVudCBtYXJrZXJzIGRlbm90aW5nIHRoZSBgQ2hpbGRQYXJ0YHNcbiAqIGFuZCBzdWZmaXhlcyBvbiBib3VuZCBhdHRyaWJ1dGVzIGRlbm90aW5nIHRoZSBgQXR0cmlidXRlUGFydHNgLlxuICpcbiAqIEBwYXJhbSBzdHJpbmdzIHRlbXBsYXRlIHN0cmluZ3MgYXJyYXlcbiAqIEBwYXJhbSB0eXBlIEhUTUwgb3IgU1ZHXG4gKiBAcmV0dXJuIEFycmF5IGNvbnRhaW5pbmcgYFtodG1sLCBhdHRyTmFtZXNdYCAoYXJyYXkgcmV0dXJuZWQgZm9yIHRlcnNlbmVzcyxcbiAqICAgICB0byBhdm9pZCBvYmplY3QgZmllbGRzIHNpbmNlIHRoaXMgY29kZSBpcyBzaGFyZWQgd2l0aCBub24tbWluaWZpZWQgU1NSXG4gKiAgICAgY29kZSlcbiAqL1xuY29uc3QgZ2V0VGVtcGxhdGVIdG1sID0gKHN0cmluZ3MsIHR5cGUpID0+IHtcbiAgICAvLyBJbnNlcnQgbWFrZXJzIGludG8gdGhlIHRlbXBsYXRlIEhUTUwgdG8gcmVwcmVzZW50IHRoZSBwb3NpdGlvbiBvZlxuICAgIC8vIGJpbmRpbmdzLiBUaGUgZm9sbG93aW5nIGNvZGUgc2NhbnMgdGhlIHRlbXBsYXRlIHN0cmluZ3MgdG8gZGV0ZXJtaW5lIHRoZVxuICAgIC8vIHN5bnRhY3RpYyBwb3NpdGlvbiBvZiB0aGUgYmluZGluZ3MuIFRoZXkgY2FuIGJlIGluIHRleHQgcG9zaXRpb24sIHdoZXJlXG4gICAgLy8gd2UgaW5zZXJ0IGFuIEhUTUwgY29tbWVudCwgYXR0cmlidXRlIHZhbHVlIHBvc2l0aW9uLCB3aGVyZSB3ZSBpbnNlcnQgYVxuICAgIC8vIHNlbnRpbmVsIHN0cmluZyBhbmQgcmUtd3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLCBvciBpbnNpZGUgYSB0YWcgd2hlcmVcbiAgICAvLyB3ZSBpbnNlcnQgdGhlIHNlbnRpbmVsIHN0cmluZy5cbiAgICBjb25zdCBsID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIC8vIFN0b3JlcyB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluIHRoZSBvcmRlciBvZiB0aGVpclxuICAgIC8vIHBhcnRzLiBFbGVtZW50UGFydHMgYXJlIGFsc28gcmVmbGVjdGVkIGluIHRoaXMgYXJyYXkgYXMgdW5kZWZpbmVkXG4gICAgLy8gcmF0aGVyIHRoYW4gYSBzdHJpbmcsIHRvIGRpc2FtYmlndWF0ZSBmcm9tIGF0dHJpYnV0ZSBiaW5kaW5ncy5cbiAgICBjb25zdCBhdHRyTmFtZXMgPSBbXTtcbiAgICBsZXQgaHRtbCA9IHR5cGUgPT09IFNWR19SRVNVTFQgPyAnPHN2Zz4nIDogJyc7XG4gICAgLy8gV2hlbiB3ZSdyZSBpbnNpZGUgYSByYXcgdGV4dCB0YWcgKG5vdCBpdCdzIHRleHQgY29udGVudCksIHRoZSByZWdleFxuICAgIC8vIHdpbGwgc3RpbGwgYmUgdGFnUmVnZXggc28gd2UgY2FuIGZpbmQgYXR0cmlidXRlcywgYnV0IHdpbGwgc3dpdGNoIHRvXG4gICAgLy8gdGhpcyByZWdleCB3aGVuIHRoZSB0YWcgZW5kcy5cbiAgICBsZXQgcmF3VGV4dEVuZFJlZ2V4O1xuICAgIC8vIFRoZSBjdXJyZW50IHBhcnNpbmcgc3RhdGUsIHJlcHJlc2VudGVkIGFzIGEgcmVmZXJlbmNlIHRvIG9uZSBvZiB0aGVcbiAgICAvLyByZWdleGVzXG4gICAgbGV0IHJlZ2V4ID0gdGV4dEVuZFJlZ2V4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHMgPSBzdHJpbmdzW2ldO1xuICAgICAgICAvLyBUaGUgaW5kZXggb2YgdGhlIGVuZCBvZiB0aGUgbGFzdCBhdHRyaWJ1dGUgbmFtZS4gV2hlbiB0aGlzIGlzXG4gICAgICAgIC8vIHBvc2l0aXZlIGF0IGVuZCBvZiBhIHN0cmluZywgaXQgbWVhbnMgd2UncmUgaW4gYW4gYXR0cmlidXRlIHZhbHVlXG4gICAgICAgIC8vIHBvc2l0aW9uIGFuZCBuZWVkIHRvIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLlxuICAgICAgICAvLyBXZSBhbHNvIHVzZSBhIHNwZWNpYWwgdmFsdWUgb2YgLTIgdG8gaW5kaWNhdGUgdGhhdCB3ZSBlbmNvdW50ZXJlZFxuICAgICAgICAvLyB0aGUgZW5kIG9mIGEgc3RyaW5nIGluIGF0dHJpYnV0ZSBuYW1lIHBvc2l0aW9uLlxuICAgICAgICBsZXQgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgICAgICBsZXQgYXR0ck5hbWU7XG4gICAgICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgICAgICBsZXQgbWF0Y2g7XG4gICAgICAgIC8vIFRoZSBjb25kaXRpb25zIGluIHRoaXMgbG9vcCBoYW5kbGUgdGhlIGN1cnJlbnQgcGFyc2Ugc3RhdGUsIGFuZCB0aGVcbiAgICAgICAgLy8gYXNzaWdubWVudHMgdG8gdGhlIGByZWdleGAgdmFyaWFibGUgYXJlIHRoZSBzdGF0ZSB0cmFuc2l0aW9ucy5cbiAgICAgICAgd2hpbGUgKGxhc3RJbmRleCA8IHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2Ugc3RhcnQgc2VhcmNoaW5nIGZyb20gd2hlcmUgd2UgcHJldmlvdXNseSBsZWZ0IG9mZlxuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgICAgbWF0Y2ggPSByZWdleC5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0SW5kZXggPSByZWdleC5sYXN0SW5kZXg7XG4gICAgICAgICAgICBpZiAocmVnZXggPT09IHRleHRFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtDT01NRU5UX1NUQVJUXSA9PT0gJyEtLScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSBjb21tZW50RW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW0NPTU1FTlRfU1RBUlRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2Ugc3RhcnRlZCBhIHdlaXJkIGNvbW1lbnQsIGxpa2UgPC97XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gY29tbWVudDJFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbVEFHX05BTUVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3QobWF0Y2hbVEFHX05BTUVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVjb3JkIGlmIHdlIGVuY291bnRlciBhIHJhdy10ZXh0IGVsZW1lbnQuIFdlJ2xsIHN3aXRjaCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyByZWdleCBhdCB0aGUgZW5kIG9mIHRoZSB0YWcuXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdUZXh0RW5kUmVnZXggPSBuZXcgUmVnRXhwKGA8LyR7bWF0Y2hbVEFHX05BTUVdfWAsICdnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbRFlOQU1JQ19UQUdfTkFNRV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmluZGluZ3MgaW4gdGFnIG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIHN0YXRpYyB0ZW1wbGF0ZXMgaW5zdGVhZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwczovL2xpdC5kZXYvZG9jcy90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMvI3N0YXRpYy1leHByZXNzaW9ucycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IHRhZ0VuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW0VOVElSRV9NQVRDSF0gPT09ICc+Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbmQgb2YgYSB0YWcuIElmIHdlIGhhZCBzdGFydGVkIGEgcmF3LXRleHQgZWxlbWVudCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVnZXhcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSByYXdUZXh0RW5kUmVnZXggPz8gdGV4dEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXkgYmUgZW5kaW5nIGFuIHVucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZSwgc28gbWFrZSBzdXJlIHdlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFueSBwZW5kaW5nIGF0dHJOYW1lRW5kSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtBVFRSSUJVVEVfTkFNRV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRyaWJ1dGUgbmFtZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gcmVnZXgubGFzdEluZGV4IC0gbWF0Y2hbU1BBQ0VTX0FORF9FUVVBTFNdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBtYXRjaFtBVFRSSUJVVEVfTkFNRV07XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoW1FVT1RFX0NIQVJdID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ0VuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFtRVU9URV9DSEFSXSA9PT0gJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBjb21tZW50RW5kUmVnZXggfHwgcmVnZXggPT09IGNvbW1lbnQyRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBvbmUgb2YgdGhlIGZpdmUgc3RhdGUgcmVnZXhlcywgc28gaXQgbXVzdCBiZSB0aGUgZHluYW1pY2FsbHlcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGVkIHJhdyB0ZXh0IHJlZ2V4IGFuZCB3ZSdyZSBhdCB0aGUgY2xvc2Ugb2YgdGhhdCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGF0dHJOYW1lRW5kSW5kZXgsIHdoaWNoIGluZGljYXRlcyB0aGF0IHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGFzc2VydCB0aGF0IHdlJ3JlIGluIGEgdmFsaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBwb3NpdGlvbiAtIGVpdGhlciBpbiBhIHRhZywgb3IgYSBxdW90ZWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTEgfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gdGFnRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXgsICd1bmV4cGVjdGVkIHBhcnNlIHN0YXRlIEInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGZvdXIgY2FzZXM6XG4gICAgICAgIC8vICAxLiBXZSdyZSBpbiB0ZXh0IHBvc2l0aW9uLCBhbmQgbm90IGluIGEgcmF3IHRleHQgZWxlbWVudFxuICAgICAgICAvLyAgICAgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpOiBpbnNlcnQgYSBjb21tZW50IG1hcmtlci5cbiAgICAgICAgLy8gIDIuIFdlIGhhdmUgYSBub24tbmVnYXRpdmUgYXR0ck5hbWVFbmRJbmRleCB3aGljaCBtZWFucyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vICAgICByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBhZGQgYSBib3VuZCBhdHRyaWJ1dGUgc3VmZml4LlxuICAgICAgICAvLyAgMy4gV2UncmUgYXQgdGhlIG5vbi1maXJzdCBiaW5kaW5nIGluIGEgbXVsdGktYmluZGluZyBhdHRyaWJ1dGUsIHVzZSBhXG4gICAgICAgIC8vICAgICBwbGFpbiBtYXJrZXIuXG4gICAgICAgIC8vICA0LiBXZSdyZSBzb21ld2hlcmUgZWxzZSBpbnNpZGUgdGhlIHRhZy4gSWYgd2UncmUgaW4gYXR0cmlidXRlIG5hbWVcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uIChhdHRyTmFtZUVuZEluZGV4ID09PSAtMiksIGFkZCBhIHNlcXVlbnRpYWwgc3VmZml4IHRvXG4gICAgICAgIC8vICAgICBnZW5lcmF0ZSBhIHVuaXF1ZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gRGV0ZWN0IGEgYmluZGluZyBuZXh0IHRvIHNlbGYtY2xvc2luZyB0YWcgZW5kIGFuZCBpbnNlcnQgYSBzcGFjZSB0b1xuICAgICAgICAvLyBzZXBhcmF0ZSB0aGUgbWFya2VyIGZyb20gdGhlIHRhZyBlbmQ6XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZ2V4ID09PSB0YWdFbmRSZWdleCAmJiBzdHJpbmdzW2kgKyAxXS5zdGFydHNXaXRoKCcvPicpID8gJyAnIDogJyc7XG4gICAgICAgIGh0bWwgKz1cbiAgICAgICAgICAgIHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXhcbiAgICAgICAgICAgICAgICA/IHMgKyBub2RlTWFya2VyXG4gICAgICAgICAgICAgICAgOiBhdHRyTmFtZUVuZEluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoYXR0ck5hbWVzLnB1c2goYXR0ck5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGljZSgwLCBhdHRyTmFtZUVuZEluZGV4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoYXR0ck5hbWVFbmRJbmRleCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRcbiAgICAgICAgICAgICAgICAgICAgOiBzICsgbWFya2VyICsgKGF0dHJOYW1lRW5kSW5kZXggPT09IC0yID8gaSA6IGVuZCk7XG4gICAgfVxuICAgIGNvbnN0IGh0bWxSZXN1bHQgPSBodG1sICsgKHN0cmluZ3NbbF0gfHwgJzw/PicpICsgKHR5cGUgPT09IFNWR19SRVNVTFQgPyAnPC9zdmc+JyA6ICcnKTtcbiAgICAvLyBSZXR1cm5lZCBhcyBhbiBhcnJheSBmb3IgdGVyc2VuZXNzXG4gICAgcmV0dXJuIFt0cnVzdEZyb21UZW1wbGF0ZVN0cmluZyhzdHJpbmdzLCBodG1sUmVzdWx0KSwgYXR0ck5hbWVzXTtcbn07XG5jbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICB7IHN0cmluZ3MsIFsnXyRsaXRUeXBlJCddOiB0eXBlIH0sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBhdHRyTmFtZUluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgcGFydENvdW50ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydHM7XG4gICAgICAgIC8vIENyZWF0ZSB0ZW1wbGF0ZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IFtodG1sLCBhdHRyTmFtZXNdID0gZ2V0VGVtcGxhdGVIdG1sKHN0cmluZ3MsIHR5cGUpO1xuICAgICAgICB0aGlzLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudChodG1sLCBvcHRpb25zKTtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gdGhpcy5lbC5jb250ZW50O1xuICAgICAgICAvLyBSZS1wYXJlbnQgU1ZHIG5vZGVzIGludG8gdGVtcGxhdGUgcm9vdFxuICAgICAgICBpZiAodHlwZSA9PT0gU1ZHX1JFU1VMVCkge1xuICAgICAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IHRoaXMuZWwuY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgc3ZnRWxlbWVudC5yZXBsYWNlV2l0aCguLi5zdmdFbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdhbGsgdGhlIHRlbXBsYXRlIHRvIGZpbmQgYmluZGluZyBtYXJrZXJzIGFuZCBjcmVhdGUgVGVtcGxhdGVQYXJ0c1xuICAgICAgICB3aGlsZSAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkgIT09IG51bGwgJiYgcGFydHMubGVuZ3RoIDwgcGFydENvdW50KSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSBub2RlLmxvY2FsTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FybiBpZiBgdGV4dGFyZWFgIGluY2x1ZGVzIGFuIGV4cHJlc3Npb24gYW5kIHRocm93IGlmIGB0ZW1wbGF0ZWBcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lcyBzaW5jZSB0aGVzZSBhcmUgbm90IHN1cHBvcnRlZC4gV2UgZG8gdGhpcyBieSBjaGVja2luZ1xuICAgICAgICAgICAgICAgICAgICAvLyBpbm5lckhUTUwgZm9yIGFueXRoaW5nIHRoYXQgbG9va3MgbGlrZSBhIG1hcmtlci4gVGhpcyBjYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2VzIGxpa2UgYmluZGluZ3MgaW4gdGV4dGFyZWEgdGhlcmUgbWFya2VycyB0dXJuIGludG8gdGV4dCBub2Rlcy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eKD86dGV4dGFyZWF8dGVtcGxhdGUpJC9pLnRlc3QodGFnKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwuaW5jbHVkZXMobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IGBFeHByZXNzaW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbnNpZGUgXFxgJHt0YWd9XFxgIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBlbGVtZW50cy4gU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvZXhwcmVzc2lvbi1pbi0ke3RhZ30gZm9yIG1vcmUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZygnJywgbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGZvciBhdHRlbXB0ZWQgZHluYW1pYyB0YWcgbmFtZXMsIHdlIGRvbid0XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBiaW5kaW5nSW5kZXgsIGFuZCBpdCdsbCBiZSBvZmYgYnkgMSBpbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGFuZCBvZmYgYnkgdHdvIGFmdGVyIGl0LlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2Ygbm9kZS5nZXRBdHRyaWJ1dGVOYW1lcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFsTmFtZSA9IGF0dHJOYW1lc1thdHRyTmFtZUluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHZhbHVlLnNwbGl0KG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IC8oWy4/QF0pPyguKikvLmV4ZWMocmVhbE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBVFRSSUJVVEVfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG5vZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogc3RhdGljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RvcjogbVsxXSA9PT0gJy4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFByb3BlcnR5UGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnPydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnQCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBFdmVudFBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBBdHRyaWJ1dGVQYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZS5zdGFydHNXaXRoKG1hcmtlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRUxFTUVOVF9QQVJULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBiZW5jaG1hcmsgdGhlIHJlZ2V4IGFnYWluc3QgdGVzdGluZyBmb3IgZWFjaFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSAzIHJhdyB0ZXh0IGVsZW1lbnQgbmFtZXMuXG4gICAgICAgICAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgcmF3IHRleHQgZWxlbWVudHMgd2UgbmVlZCB0byBzcGxpdCB0aGUgdGV4dCBjb250ZW50IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmtlcnMsIGNyZWF0ZSBhIFRleHQgbm9kZSBmb3IgZWFjaCBzZWdtZW50LCBhbmQgY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgVGVtcGxhdGVQYXJ0IGZvciBlYWNoIG1hcmtlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRydXN0ZWRUeXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbid0IHVzZSBlbXB0eSB0ZXh0IG5vZGVzIGFzIG1hcmtlcnMgYmVjYXVzZSB0aGV5J3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemVkIHdoZW4gY2xvbmluZyBpbiBJRSAoY291bGQgc2ltcGxpZnkgd2hlblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUUgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2ldLCBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FsayBwYXN0IHRoZSBtYXJrZXIgbm9kZSB3ZSBqdXN0IGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENISUxEX1BBUlQsIGluZGV4OiArK25vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgYmVjYXVzZSB0aGlzIG1hcmtlciBpcyBhZGRlZCBhZnRlciB0aGUgd2Fsa2VyJ3MgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZSwgaXQgd2lsbCBiZSB3YWxrZWQgdG8gaW4gdGhlIG91dGVyIGxvb3AgKGFuZCBpZ25vcmVkKSwgc29cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gYWRqdXN0IG5vZGVJbmRleCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2xhc3RJbmRleF0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBtYXJrZXJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoaSA9IG5vZGUuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENPTU1FTlRfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gdGhlIGVuZCBvZiB0aGUgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gbWFya2VyLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBjb3VsZCBzZXQgd2Fsa2VyLmN1cnJlbnROb2RlIHRvIGFub3RoZXIgbm9kZSBoZXJlIHRvIHByZXZlbnQgYSBtZW1vcnlcbiAgICAgICAgLy8gbGVhaywgYnV0IGV2ZXJ5IHRpbWUgd2UgcHJlcGFyZSBhIHRlbXBsYXRlLCB3ZSBpbW1lZGlhdGVseSByZW5kZXIgaXRcbiAgICAgICAgLy8gYW5kIHJlLXVzZSB0aGUgd2Fsa2VyIGluIG5ldyBUZW1wbGF0ZUluc3RhbmNlLl9jbG9uZSgpLlxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgcHJlcCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMsXG4gICAgICAgICAgICAgICAgY2xvbmFibGVUZW1wbGF0ZTogdGhpcy5lbCxcbiAgICAgICAgICAgICAgICBwYXJ0czogdGhpcy5wYXJ0cyxcbiAgICAgICAgICAgICAgICBzdHJpbmdzLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUG9seWZpbGxTdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoaHRtbCwgX29wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIHZhbHVlLCBwYXJlbnQgPSBwYXJ0LCBhdHRyaWJ1dGVJbmRleCkge1xuICAgIC8vIEJhaWwgZWFybHkgaWYgdGhlIHZhbHVlIGlzIGV4cGxpY2l0bHkgbm9DaGFuZ2UuIE5vdGUsIHRoaXMgbWVhbnMgYW55XG4gICAgLy8gbmVzdGVkIGRpcmVjdGl2ZSBpcyBzdGlsbCBhdHRhY2hlZCBhbmQgaXMgbm90IHJ1bi5cbiAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnREaXJlY3RpdmUgPSBhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcGFyZW50Ll9fZGlyZWN0aXZlcz8uW2F0dHJpYnV0ZUluZGV4XVxuICAgICAgICA6IHBhcmVudC5fX2RpcmVjdGl2ZTtcbiAgICBjb25zdCBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IgPSBpc1ByaW1pdGl2ZSh2YWx1ZSlcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAgICAgdmFsdWVbJ18kbGl0RGlyZWN0aXZlJCddO1xuICAgIGlmIChjdXJyZW50RGlyZWN0aXZlPy5jb25zdHJ1Y3RvciAhPT0gbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIGN1cnJlbnREaXJlY3RpdmU/LlsnXyRub3RpZnlEaXJlY3RpdmVDb25uZWN0aW9uQ2hhbmdlZCddPy4oZmFsc2UpO1xuICAgICAgICBpZiAobmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gbmV3IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvcihwYXJ0KTtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUuXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAocGFyZW50Ll9fZGlyZWN0aXZlcyA/Pz0gW10pW2F0dHJpYnV0ZUluZGV4XSA9XG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5fX2RpcmVjdGl2ZSA9IGN1cnJlbnREaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN1cnJlbnREaXJlY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUocGFydCwgY3VycmVudERpcmVjdGl2ZS5fJHJlc29sdmUocGFydCwgdmFsdWUudmFsdWVzKSwgY3VycmVudERpcmVjdGl2ZSwgYXR0cmlidXRlSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgaW5zdGFuY2Ugb2YgYSBUZW1wbGF0ZS4gSG9sZHMgcmVmZXJlbmNlcyB0byB0aGUgUGFydHMgdXNlZCB0b1xuICogdXBkYXRlIHRoZSB0ZW1wbGF0ZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIHBhcmVudCkge1xuICAgICAgICB0aGlzLl8kcGFydHMgPSBbXTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8vIENhbGxlZCBieSBDaGlsZFBhcnQgcGFyZW50Tm9kZSBnZXR0ZXJcbiAgICBnZXQgcGFyZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBzZXBhcmF0ZSBmcm9tIHRoZSBjb25zdHJ1Y3RvciBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCB3ZSBkb24ndCB3YW50IHRvIGhvbGQgb250byBpdCB3aXRoIGFuIGluc3RhbmNlIGZpZWxkLlxuICAgIF9jbG9uZShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgZWw6IHsgY29udGVudCB9LCBwYXJ0czogcGFydHMsIH0gPSB0aGlzLl8kdGVtcGxhdGU7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gKG9wdGlvbnM/LmNyZWF0aW9uU2NvcGUgPz8gZCkuaW1wb3J0Tm9kZShjb250ZW50LCB0cnVlKTtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZnJhZ21lbnQ7XG4gICAgICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRlbXBsYXRlUGFydCA9IHBhcnRzWzBdO1xuICAgICAgICB3aGlsZSAodGVtcGxhdGVQYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChub2RlSW5kZXggPT09IHRlbXBsYXRlUGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJ0O1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQ0hJTERfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IENoaWxkUGFydChub2RlLCBub2RlLm5leHRTaWJsaW5nLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IEFUVFJJQlVURV9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgdGVtcGxhdGVQYXJ0LmN0b3Iobm9kZSwgdGVtcGxhdGVQYXJ0Lm5hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IEVMRU1FTlRfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IEVsZW1lbnRQYXJ0KG5vZGUsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl8kcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1srK3BhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ICE9PSB0ZW1wbGF0ZVBhcnQ/LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gc2V0IHRoZSBjdXJyZW50Tm9kZSBhd2F5IGZyb20gdGhlIGNsb25lZCB0cmVlIHNvIHRoYXQgd2VcbiAgICAgICAgLy8gZG9uJ3QgaG9sZCBvbnRvIHRoZSB0cmVlIGV2ZW4gaWYgdGhlIHRyZWUgaXMgZGV0YWNoZWQgYW5kIHNob3VsZCBiZVxuICAgICAgICAvLyBmcmVlZC5cbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZDtcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbiAgICBfdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl8kcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ3NldCBwYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiB2YWx1ZXMgdGhlIHBhcnQgY29uc3VtZXMgaXMgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhdGVyIGluIHRoZSBsb29wLCBzbyBpbmNyZW1lbnQgaXQgYnkgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDIgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpICs9IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ2hpbGRQYXJ0IHtcbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIC8vIENoaWxkUGFydHMgdGhhdCBhcmUgbm90IGF0IHRoZSByb290IHNob3VsZCBhbHdheXMgYmUgY3JlYXRlZCB3aXRoIGFcbiAgICAgICAgLy8gcGFyZW50OyBvbmx5IFJvb3RDaGlsZE5vZGUncyB3b24ndCwgc28gdGhleSByZXR1cm4gdGhlIGxvY2FsIGlzQ29ubmVjdGVkXG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Py5fJGlzQ29ubmVjdGVkID8/IHRoaXMuX19pc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgY29uc3RydWN0b3Ioc3RhcnROb2RlLCBlbmROb2RlLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50eXBlID0gQ0hJTERfUEFSVDtcbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmaWVsZHMgd2lsbCBiZSBwYXRjaGVkIG9udG8gQ2hpbGRQYXJ0cyB3aGVuIHJlcXVpcmVkIGJ5XG4gICAgICAgIC8vIEFzeW5jRGlyZWN0aXZlXG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRzdGFydE5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgIHRoaXMuXyRlbmROb2RlID0gZW5kTm9kZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgLy8gTm90ZSBfX2lzQ29ubmVjdGVkIGlzIG9ubHkgZXZlciBhY2Nlc3NlZCBvbiBSb290UGFydHMgKGkuZS4gd2hlbiB0aGVyZSBpc1xuICAgICAgICAvLyBubyBfJHBhcmVudCk7IHRoZSB2YWx1ZSBvbiBhIG5vbi1yb290LXBhcnQgaXMgXCJkb24ndCBjYXJlXCIsIGJ1dCBjaGVja2luZ1xuICAgICAgICAvLyBmb3IgcGFyZW50IHdvdWxkIGJlIG1vcmUgY29kZVxuICAgICAgICB0aGlzLl9faXNDb25uZWN0ZWQgPSBvcHRpb25zPy5pc0Nvbm5lY3RlZCA/PyB0cnVlO1xuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IGluaXRpYWxpemUgZm9yIGNvbnNpc3RlbnQgY2xhc3Mgc2hhcGUuXG4gICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJ0IHJlbmRlcnMgaXRzIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBBIENoaWxkUGFydCdzIGNvbnRlbnQgY29uc2lzdHMgb2YgYSByYW5nZSBvZiBhZGphY2VudCBjaGlsZCBub2RlcyBvZlxuICAgICAqIGAucGFyZW50Tm9kZWAsIHBvc3NpYmx5IGJvcmRlcmVkIGJ5ICdtYXJrZXIgbm9kZXMnIChgLnN0YXJ0Tm9kZWAgYW5kXG4gICAgICogYC5lbmROb2RlYCkuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgIGFyZSBub24tbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICAgKiBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgYmV0d2VlbiBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAsIGV4Y2x1c2l2ZWx5LlxuICAgICAqXG4gICAgICogLSBJZiBgLnN0YXJ0Tm9kZWAgaXMgbm9uLW51bGwgYnV0IGAuZW5kTm9kZWAgaXMgbnVsbCwgdGhlbiB0aGUgcGFydCdzXG4gICAgICogY29udGVudCBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgZm9sbG93aW5nIGAuc3RhcnROb2RlYCwgdXAgdG8gYW5kXG4gICAgICogaW5jbHVkaW5nIHRoZSBsYXN0IGNoaWxkIG9mIGAucGFyZW50Tm9kZWAuIElmIGAuZW5kTm9kZWAgaXMgbm9uLW51bGwsIHRoZW5cbiAgICAgKiBgLnN0YXJ0Tm9kZWAgd2lsbCBhbHdheXMgYmUgbm9uLW51bGwuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5lbmROb2RlYCBhbmQgYC5zdGFydE5vZGVgIGFyZSBudWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiBgLnBhcmVudE5vZGVgLlxuICAgICAqL1xuICAgIGdldCBwYXJlbnROb2RlKCkge1xuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fJHBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBwYXJlbnROb2RlPy5ub2RlVHlwZSA9PT0gMTEgLyogTm9kZS5ET0NVTUVOVF9GUkFHTUVOVCAqLykge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHBhcmVudE5vZGUgaXMgYSBEb2N1bWVudEZyYWdtZW50LCBpdCBtYXkgYmUgYmVjYXVzZSB0aGUgRE9NIGlzXG4gICAgICAgICAgICAvLyBzdGlsbCBpbiB0aGUgY2xvbmVkIGZyYWdtZW50IGR1cmluZyBpbml0aWFsIHJlbmRlcjsgaWYgc28sIGdldCB0aGUgcmVhbFxuICAgICAgICAgICAgLy8gcGFyZW50Tm9kZSB0aGUgcGFydCB3aWxsIGJlIGNvbW1pdHRlZCBpbnRvIGJ5IGFza2luZyB0aGUgcGFyZW50LlxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJlbnROb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCdzIGxlYWRpbmcgbWFya2VyIG5vZGUsIGlmIGFueS4gU2VlIGAucGFyZW50Tm9kZWAgZm9yIG1vcmVcbiAgICAgKiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgc3RhcnROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHN0YXJ0Tm9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQncyB0cmFpbGluZyBtYXJrZXIgbm9kZSwgaWYgYW55LiBTZWUgYC5wYXJlbnROb2RlYCBmb3IgbW9yZVxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldCBlbmROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJGVuZE5vZGU7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmIHRoaXMucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGlzIFxcYENoaWxkUGFydFxcYCBoYXMgbm8gXFxgcGFyZW50Tm9kZVxcYCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBhY2NlcHQgYSB2YWx1ZS4gVGhpcyBsaWtlbHkgbWVhbnMgdGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgcGFydCB3YXMgbWFuaXB1bGF0ZWQgaW4gYW4gdW5zdXBwb3J0ZWQgd2F5IG91dHNpZGUgb2YgTGl0J3MgY29udHJvbCBzdWNoIHRoYXQgdGhlIHBhcnQncyBtYXJrZXIgbm9kZXMgd2VyZSBlamVjdGVkIGZyb20gRE9NLiBGb3IgZXhhbXBsZSwgc2V0dGluZyB0aGUgZWxlbWVudCdzIFxcYGlubmVySFRNTFxcYCBvciBcXGB0ZXh0Q29udGVudFxcYCBjYW4gZG8gdGhpcy5gKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCk7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIE5vbi1yZW5kZXJpbmcgY2hpbGQgdmFsdWVzLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZXNlIGRvIG5vdCByZW5kZXJcbiAgICAgICAgICAgIC8vIGVtcHR5IHRleHQgbm9kZXMgdG8gYXZvaWQgaXNzdWVzIHdpdGggcHJldmVudGluZyBkZWZhdWx0IDxzbG90PlxuICAgICAgICAgICAgLy8gZmFsbGJhY2sgY29udGVudC5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZyB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBub3RoaW5nIHRvIGNoaWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5fJHN0YXJ0Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHRoaXMuXyRlbmROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5fJHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZVsnXyRsaXRUeXBlJCddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoREVWX01PREUgJiYgdGhpcy5vcHRpb25zPy5ob3N0ID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQoYFtwcm9iYWJsZSBtaXN0YWtlOiByZW5kZXJlZCBhIHRlbXBsYXRlJ3MgaG9zdCBpbiBpdHNlbGYgYCArXG4gICAgICAgICAgICAgICAgICAgIGAoY29tbW9ubHkgY2F1c2VkIGJ5IHdyaXRpbmcgXFwke3RoaXN9IGluIGEgdGVtcGxhdGVdYCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBBdHRlbXB0ZWQgdG8gcmVuZGVyIHRoZSB0ZW1wbGF0ZSBob3N0YCwgdmFsdWUsIGBpbnNpZGUgaXRzZWxmLiBUaGlzIGlzIGFsbW9zdCBhbHdheXMgYSBtaXN0YWtlLCBhbmQgaW4gZGV2IG1vZGUgYCwgYHdlIHJlbmRlciBzb21lIHdhcm5pbmcgdGV4dC4gSW4gcHJvZHVjdGlvbiBob3dldmVyLCB3ZSdsbCBgLCBgcmVuZGVyIGl0LCB3aGljaCB3aWxsIHVzdWFsbHkgcmVzdWx0IGluIGFuIGVycm9yLCBhbmQgc29tZXRpbWVzIGAsIGBpbiB0aGUgZWxlbWVudCBkaXNhcHBlYXJpbmcgZnJvbSB0aGUgRE9NLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2luc2VydChub2RlKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZSkuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuXyRlbmROb2RlKTtcbiAgICB9XG4gICAgX2NvbW1pdE5vZGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyAmJlxuICAgICAgICAgICAgICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVOYW1lID0gdGhpcy5fJHN0YXJ0Tm9kZS5wYXJlbnROb2RlPy5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZU5hbWUgPT09ICdTVFlMRScgfHwgcGFyZW50Tm9kZU5hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gJ0ZvcmJpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBMaXQgZG9lcyBub3Qgc3VwcG9ydCBiaW5kaW5nIGluc2lkZSBzdHlsZSBub2Rlcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgVGhpcyBpcyBhIHNlY3VyaXR5IHJpc2ssIGFzIHN0eWxlIGluamVjdGlvbiBhdHRhY2tzIGNhbiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBleGZpbHRyYXRlIGRhdGEgYW5kIHNwb29mIFVJcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQ29uc2lkZXIgaW5zdGVhZCB1c2luZyBjc3NcXGAuLi5cXGAgbGl0ZXJhbHMgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdG8gY29tcG9zZSBzdHlsZXMsIGFuZCBtYWtlIGRvIGR5bmFtaWMgc3R5bGluZyB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNzcyBjdXN0b20gcHJvcGVydGllcywgOjpwYXJ0cywgPHNsb3Q+cywgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYW5kIGJ5IG11dGF0aW5nIHRoZSBET00gcmF0aGVyIHRoYW4gc3R5bGVzaGVldHMuYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGl0IGRvZXMgbm90IHN1cHBvcnQgYmluZGluZyBpbnNpZGUgc2NyaXB0IG5vZGVzLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBUaGlzIGlzIGEgc2VjdXJpdHkgcmlzaywgYXMgaXQgY291bGQgYWxsb3cgYXJiaXRyYXJ5IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNvZGUgZXhlY3V0aW9uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgJiZcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBub2RlJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuXyRzdGFydE5vZGUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5fJHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIC8vIElmIHRoZSBjb21taXR0ZWQgdmFsdWUgaXMgYSBwcmltaXRpdmUgaXQgbWVhbnMgd2UgY2FsbGVkIF9jb21taXRUZXh0IG9uXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyByZW5kZXIsIGFuZCB3ZSBrbm93IHRoYXQgdGhpcy5fJHN0YXJ0Tm9kZS5uZXh0U2libGluZyBpcyBhXG4gICAgICAgIC8vIFRleHQgbm9kZS4gV2UgY2FuIG5vdyBqdXN0IHJlcGxhY2UgdGhlIHRleHQgY29udGVudCAoLmRhdGEpIG9mIHRoZSBub2RlLlxuICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSBub3RoaW5nICYmXG4gICAgICAgICAgICBpc1ByaW1pdGl2ZSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZztcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIobm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl90ZXh0U2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgJiZcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzZXR0aW5nIHRleHQgY29udGVudCwgZm9yIHNlY3VyaXR5IHB1cnBvc2VzIGl0IG1hdHRlcnMgYSBsb3RcbiAgICAgICAgICAgICAgICAvLyB3aGF0IHRoZSBwYXJlbnQgaXMuIEZvciBleGFtcGxlLCA8c3R5bGU+IGFuZCA8c2NyaXB0PiBuZWVkIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlZCB3aXRoIGNhcmUsIHdoaWxlIDxzcGFuPiBkb2VzIG5vdC4gU28gZmlyc3Qgd2UgbmVlZCB0byBwdXQgYVxuICAgICAgICAgICAgICAgIC8vIHRleHQgbm9kZSBpbnRvIHRoZSBkb2N1bWVudCwgdGhlbiB3ZSBjYW4gc2FuaXRpemUgaXRzIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyKHRleHROb2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogdGV4dE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShkLmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfY29tbWl0VGVtcGxhdGVSZXN1bHQocmVzdWx0KSB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBbJ18kbGl0VHlwZSQnXTogdHlwZSB9ID0gcmVzdWx0O1xuICAgICAgICAvLyBJZiAkbGl0VHlwZSQgaXMgYSBudW1iZXIsIHJlc3VsdCBpcyBhIHBsYWluIFRlbXBsYXRlUmVzdWx0IGFuZCB3ZSBnZXRcbiAgICAgICAgLy8gdGhlIHRlbXBsYXRlIGZyb20gdGhlIHRlbXBsYXRlIGNhY2hlLiBJZiBub3QsIHJlc3VsdCBpcyBhXG4gICAgICAgIC8vIENvbXBpbGVkVGVtcGxhdGVSZXN1bHQgYW5kIF8kbGl0VHlwZSQgaXMgYSBDb21waWxlZFRlbXBsYXRlIGFuZCB3ZSBuZWVkXG4gICAgICAgIC8vIHRvIGNyZWF0ZSB0aGUgPHRlbXBsYXRlPiBlbGVtZW50IHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBpdC5cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0eXBlb2YgdHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gdGhpcy5fJGdldFRlbXBsYXRlKHJlc3VsdClcbiAgICAgICAgICAgIDogKHR5cGUuZWwgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICh0eXBlLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudCh0cnVzdEZyb21UZW1wbGF0ZVN0cmluZyh0eXBlLmgsIHR5cGUuaFswXSksIHRoaXMub3B0aW9ucykpLFxuICAgICAgICAgICAgICAgIHR5cGUpO1xuICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlPy5fJHRlbXBsYXRlID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgdXBkYXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGFydHM6IHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fJHBhcnRzLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBpbnN0YW50aWF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIHBhcnRzOiBpbnN0YW5jZS5fJHBhcnRzLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBpbnN0YW50aWF0ZWQgYW5kIHVwZGF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIHBhcnRzOiBpbnN0YW5jZS5fJHBhcnRzLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUG9seWZpbGxTdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kZ2V0VGVtcGxhdGUocmVzdWx0KSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlQ2FjaGUuc2V0KHJlc3VsdC5zdHJpbmdzLCAodGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0KSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgICAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAgICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG4gICAgICAgIC8vIElmIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCB2YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIENoaWxkUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gcmVuZGVyLiBJZiB2YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgQ2hpbGRQYXJ0cy5cbiAgICAgICAgaWYgKCFpc0FycmF5KHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0SW5kZXggPT09IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IHRlc3QgcGVyZiBpbXBhY3Qgb2YgYWx3YXlzIGNyZWF0aW5nIHR3byBwYXJ0c1xuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2Ygc2hhcmluZyBwYXJ0cyBiZXR3ZWVuIG5vZGVzXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzEyNjZcbiAgICAgICAgICAgICAgICBpdGVtUGFydHMucHVzaCgoaXRlbVBhcnQgPSBuZXcgQ2hpbGRQYXJ0KHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMuX2luc2VydChjcmVhdGVNYXJrZXIoKSksIHRoaXMsIHRoaXMub3B0aW9ucykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuXyRzZXRWYWx1ZShpdGVtKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBpdGVtUGFydHMgYWx3YXlzIGhhdmUgZW5kIG5vZGVzXG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoaXRlbVBhcnQgJiYgd3JhcChpdGVtUGFydC5fJGVuZE5vZGUpLm5leHRTaWJsaW5nLCBwYXJ0SW5kZXgpO1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBub2RlcyBjb250YWluZWQgd2l0aGluIHRoaXMgUGFydCBmcm9tIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RhcnQgU3RhcnQgbm9kZSB0byBjbGVhciBmcm9tLCBmb3IgY2xlYXJpbmcgYSBzdWJzZXQgb2YgdGhlIHBhcnQnc1xuICAgICAqICAgICBET00gKHVzZWQgd2hlbiB0cnVuY2F0aW5nIGl0ZXJhYmxlcylcbiAgICAgKiBAcGFyYW0gZnJvbSAgV2hlbiBgc3RhcnRgIGlzIHNwZWNpZmllZCwgdGhlIGluZGV4IHdpdGhpbiB0aGUgaXRlcmFibGUgZnJvbVxuICAgICAqICAgICB3aGljaCBDaGlsZFBhcnRzIGFyZSBiZWluZyByZW1vdmVkLCB1c2VkIGZvciBkaXNjb25uZWN0aW5nIGRpcmVjdGl2ZXMgaW5cbiAgICAgKiAgICAgdGhvc2UgUGFydHMuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJGNsZWFyKHN0YXJ0ID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZywgZnJvbSkge1xuICAgICAgICB0aGlzLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQ/LihmYWxzZSwgdHJ1ZSwgZnJvbSk7XG4gICAgICAgIHdoaWxlIChzdGFydCAmJiBzdGFydCAhPT0gdGhpcy5fJGVuZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSB3cmFwKHN0YXJ0KS5uZXh0U2libGluZztcbiAgICAgICAgICAgIHdyYXAoc3RhcnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIFJvb3RQYXJ0J3MgYGlzQ29ubmVjdGVkYC4gTm90ZSB0aGF0IHRoaXMgbWV0b2RcbiAgICAgKiBzaG91bGQgb25seSBiZSBjYWxsZWQgb24gYFJvb3RQYXJ0YHMgKHRoZSBgQ2hpbGRQYXJ0YCByZXR1cm5lZCBmcm9tIGFcbiAgICAgKiB0b3AtbGV2ZWwgYHJlbmRlcigpYCBjYWxsKS4gSXQgaGFzIG5vIGVmZmVjdCBvbiBub24tcm9vdCBDaGlsZFBhcnRzLlxuICAgICAqIEBwYXJhbSBpc0Nvbm5lY3RlZCBXaGV0aGVyIHRvIHNldFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHNldENvbm5lY3RlZChpc0Nvbm5lY3RlZCkge1xuICAgICAgICBpZiAodGhpcy5fJHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9faXNDb25uZWN0ZWQgPSBpc0Nvbm5lY3RlZDtcbiAgICAgICAgICAgIHRoaXMuXyRub3RpZnlDb25uZWN0aW9uQ2hhbmdlZD8uKGlzQ29ubmVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJ0LnNldENvbm5lY3RlZCgpIG1heSBvbmx5IGJlIGNhbGxlZCBvbiBhICcgK1xuICAgICAgICAgICAgICAgICdSb290UGFydCByZXR1cm5lZCBmcm9tIHJlbmRlcigpLicpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgZ2V0IHRhZ05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudGFnTmFtZTtcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50eXBlID0gQVRUUklCVVRFX1BBUlQ7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHN0cmluZ3MubGVuZ3RoID4gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbmV3IEFycmF5KHN0cmluZ3MubGVuZ3RoIC0gMSkuZmlsbChuZXcgU3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoaXMgcGFydCBieSByZXNvbHZpbmcgdGhlIHZhbHVlIGZyb20gcG9zc2libHkgbXVsdGlwbGVcbiAgICAgKiB2YWx1ZXMgYW5kIHN0YXRpYyBzdHJpbmdzIGFuZCBjb21taXR0aW5nIGl0IHRvIHRoZSBET00uXG4gICAgICogSWYgdGhpcyBwYXJ0IGlzIHNpbmdsZS12YWx1ZWQsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIHVuZGVmaW5lZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgc2luZ2xlIHZhbHVlIGFyZ3VtZW50LiBJZiB0aGlzIHBhcnQgaXNcbiAgICAgKiBtdWx0aS12YWx1ZSwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgZGVmaW5lZCwgYW5kIHRoZSBtZXRob2QgaXMgY2FsbGVkXG4gICAgICogd2l0aCB0aGUgdmFsdWUgYXJyYXkgb2YgdGhlIHBhcnQncyBvd25pbmcgVGVtcGxhdGVJbnN0YW5jZSwgYW5kIGFuIG9mZnNldFxuICAgICAqIGludG8gdGhlIHZhbHVlIGFycmF5IGZyb20gd2hpY2ggdGhlIHZhbHVlcyBzaG91bGQgYmUgcmVhZC5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvdmVybG9hZGVkIHRoaXMgd2F5IHRvIGVsaW1pbmF0ZSBzaG9ydC1saXZlZCBhcnJheSBzbGljZXNcbiAgICAgKiBvZiB0aGUgdGVtcGxhdGUgaW5zdGFuY2UgdmFsdWVzLCBhbmQgYWxsb3cgYSBmYXN0LXBhdGggZm9yIHNpbmdsZS12YWx1ZWRcbiAgICAgKiBwYXJ0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcGFydCB2YWx1ZSwgb3IgYW4gYXJyYXkgb2YgdmFsdWVzIGZvciBtdWx0aS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gdmFsdWVJbmRleCB0aGUgaW5kZXggdG8gc3RhcnQgcmVhZGluZyB2YWx1ZXMgZnJvbS4gYHVuZGVmaW5lZGAgZm9yXG4gICAgICogICBzaW5nbGUtdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIG5vQ29tbWl0IGNhdXNlcyB0aGUgcGFydCB0byBub3QgY29tbWl0IGl0cyB2YWx1ZSB0byB0aGUgRE9NLiBVc2VkXG4gICAgICogICBpbiBoeWRyYXRpb24gdG8gcHJpbWUgYXR0cmlidXRlIHBhcnRzIHdpdGggdGhlaXIgZmlyc3QtcmVuZGVyZWQgdmFsdWUsXG4gICAgICogICBidXQgbm90IHNldCB0aGUgYXR0cmlidXRlLCBhbmQgaW4gU1NSIHRvIG5vLW9wIHRoZSBET00gb3BlcmF0aW9uIGFuZFxuICAgICAqICAgY2FwdHVyZSB0aGUgdmFsdWUgZm9yIHNlcmlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzLCB2YWx1ZUluZGV4LCBub0NvbW1pdCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICAvLyBXaGV0aGVyIGFueSBvZiB0aGUgdmFsdWVzIGhhcyBjaGFuZ2VkLCBmb3IgZGlydHktY2hlY2tpbmdcbiAgICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RyaW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTaW5nbGUtdmFsdWUgYmluZGluZyBjYXNlXG4gICAgICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCwgMCk7XG4gICAgICAgICAgICBjaGFuZ2UgPVxuICAgICAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRpb24gY2FzZVxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHN0cmluZ3NbMF07XG4gICAgICAgICAgICBsZXQgaSwgdjtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHYgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlc1t2YWx1ZUluZGV4ICsgaV0sIGRpcmVjdGl2ZVBhcmVudCwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyLXByb3ZpZGVkIHZhbHVlIGlzIGBub0NoYW5nZWAsIHVzZSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlIHx8PVxuICAgICAgICAgICAgICAgICAgICAhaXNQcmltaXRpdmUodikgfHwgdiAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldO1xuICAgICAgICAgICAgICAgIGlmICh2ID09PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbm90aGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gKHYgPz8gJycpICsgc3RyaW5nc1tpICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlIGFsd2F5cyByZWNvcmQgZWFjaCB2YWx1ZSwgZXZlbiBpZiBvbmUgaXMgYG5vdGhpbmdgLCBmb3IgZnV0dXJlXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIGRldGVjdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV0gPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2UgJiYgIW5vQ29tbWl0KSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAnYXR0cmlidXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlID8/ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgJiZcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAodmFsdWUgPz8gJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBQUk9QRVJUWV9QQVJUO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZSwgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3Nhbml0aXplcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBwcm9wZXJ0eScsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgdGhpcy5lbGVtZW50W3RoaXMubmFtZV0gPSB2YWx1ZSA9PT0gbm90aGluZyA/IHVuZGVmaW5lZCA6IHZhbHVlO1xuICAgIH1cbn1cbmNsYXNzIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBib29sZWFuIGF0dHJpYnV0ZScsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogISEodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkudG9nZ2xlQXR0cmlidXRlKHRoaXMubmFtZSwgISF2YWx1ZSAmJiB2YWx1ZSAhPT0gbm90aGluZyk7XG4gICAgfVxufVxuY2xhc3MgRXZlbnRQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEVWRU5UX1BBUlQ7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIFxcYDwke2VsZW1lbnQubG9jYWxOYW1lfT5cXGAgaGFzIGEgXFxgQCR7bmFtZX09Li4uXFxgIGxpc3RlbmVyIHdpdGggYCArXG4gICAgICAgICAgICAgICAgJ2ludmFsaWQgY29udGVudC4gRXZlbnQgbGlzdGVuZXJzIGluIHRlbXBsYXRlcyBtdXN0IGhhdmUgZXhhY3RseSAnICtcbiAgICAgICAgICAgICAgICAnb25lIGV4cHJlc3Npb24gYW5kIG5vIHN1cnJvdW5kaW5nIHRleHQuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRXZlbnRQYXJ0IGRvZXMgbm90IHVzZSB0aGUgYmFzZSBfJHNldFZhbHVlL19yZXNvbHZlVmFsdWUgaW1wbGVtZW50YXRpb25cbiAgICAvLyBzaW5jZSB0aGUgZGlydHkgY2hlY2tpbmcgaXMgbW9yZSBjb21wbGV4XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kc2V0VmFsdWUobmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCA9IHRoaXMpIHtcbiAgICAgICAgbmV3TGlzdGVuZXIgPVxuICAgICAgICAgICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCBuZXdMaXN0ZW5lciwgZGlyZWN0aXZlUGFyZW50LCAwKSA/PyBub3RoaW5nO1xuICAgICAgICBpZiAobmV3TGlzdGVuZXIgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90aGluZyBvciBhbnkgb3B0aW9ucyBjaGFuZ2Ugd2UgaGF2ZSB0byByZW1vdmUgdGhlXG4gICAgICAgIC8vIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSAobmV3TGlzdGVuZXIgPT09IG5vdGhpbmcgJiYgb2xkTGlzdGVuZXIgIT09IG5vdGhpbmcpIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5jYXB0dXJlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5wYXNzaXZlO1xuICAgICAgICAvLyBJZiB0aGUgbmV3IHZhbHVlIGlzIG5vdCBub3RoaW5nIGFuZCB3ZSByZW1vdmVkIHRoZSBsaXN0ZW5lciwgd2UgaGF2ZVxuICAgICAgICAvLyB0byBhZGQgdGhlIHBhcnQgYXMgYSBsaXN0ZW5lci5cbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciAhPT0gbm90aGluZyAmJlxuICAgICAgICAgICAgKG9sZExpc3RlbmVyID09PSBub3RoaW5nIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcbiAgICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBldmVudCBsaXN0ZW5lcicsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3TGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBzaG91bGRSZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcjogc2hvdWxkQWRkTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG9sZExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIC8vIEJld2FyZTogSUUxMSBhbmQgQ2hyb21lIDQxIGRvbid0IGxpa2UgdXNpbmcgdGhlIGxpc3RlbmVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gb3B0aW9ucyBvYmplY3QuIEZpZ3VyZSBvdXQgaG93IHRvIGRlYWwgdy8gdGhpcyBpbiBJRTExIC0gbWF5YmVcbiAgICAgICAgICAgIC8vIHBhdGNoIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5jYWxsKHRoaXMub3B0aW9ucz8uaG9zdCA/PyB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFbGVtZW50UGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudHlwZSA9IEVMRU1FTlRfUEFSVDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICBfJHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgJiZcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdG8gZWxlbWVudCBiaW5kaW5nJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUpO1xuICAgIH1cbn1cbi8qKlxuICogRU5EIFVTRVJTIFNIT1VMRCBOT1QgUkVMWSBPTiBUSElTIE9CSkVDVC5cbiAqXG4gKiBQcml2YXRlIGV4cG9ydHMgZm9yIHVzZSBieSBvdGhlciBMaXQgcGFja2FnZXMsIG5vdCBpbnRlbmRlZCBmb3IgdXNlIGJ5XG4gKiBleHRlcm5hbCB1c2Vycy5cbiAqXG4gKiBXZSBjdXJyZW50bHkgZG8gbm90IG1ha2UgYSBtYW5nbGVkIHJvbGx1cCBidWlsZCBvZiB0aGUgbGl0LXNzciBjb2RlLiBJbiBvcmRlclxuICogdG8ga2VlcCBhIG51bWJlciBvZiAob3RoZXJ3aXNlIHByaXZhdGUpIHRvcC1sZXZlbCBleHBvcnRzICBtYW5nbGVkIGluIHRoZVxuICogY2xpZW50IHNpZGUgY29kZSwgd2UgZXhwb3J0IGEgXyRMSCBvYmplY3QgY29udGFpbmluZyB0aG9zZSBtZW1iZXJzIChvclxuICogaGVscGVyIG1ldGhvZHMgZm9yIGFjY2Vzc2luZyBwcml2YXRlIGZpZWxkcyBvZiB0aG9zZSBtZW1iZXJzKSwgYW5kIHRoZW5cbiAqIHJlLWV4cG9ydCB0aGVtIGZvciB1c2UgaW4gbGl0LXNzci4gVGhpcyBrZWVwcyBsaXQtc3NyIGFnbm9zdGljIHRvIHdoZXRoZXIgdGhlXG4gKiBjbGllbnQtc2lkZSBjb2RlIGlzIGJlaW5nIHVzZWQgaW4gYGRldmAgbW9kZSBvciBgcHJvZGAgbW9kZS5cbiAqXG4gKiBUaGlzIGhhcyBhIHVuaXF1ZSBuYW1lLCB0byBkaXNhbWJpZ3VhdGUgaXQgZnJvbSBwcml2YXRlIGV4cG9ydHMgaW5cbiAqIGxpdC1lbGVtZW50LCB3aGljaCByZS1leHBvcnRzIGFsbCBvZiBsaXQtaHRtbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgXyRMSCA9IHtcbiAgICAvLyBVc2VkIGluIGxpdC1zc3JcbiAgICBfYm91bmRBdHRyaWJ1dGVTdWZmaXg6IGJvdW5kQXR0cmlidXRlU3VmZml4LFxuICAgIF9tYXJrZXI6IG1hcmtlcixcbiAgICBfbWFya2VyTWF0Y2g6IG1hcmtlck1hdGNoLFxuICAgIF9IVE1MX1JFU1VMVDogSFRNTF9SRVNVTFQsXG4gICAgX2dldFRlbXBsYXRlSHRtbDogZ2V0VGVtcGxhdGVIdG1sLFxuICAgIC8vIFVzZWQgaW4gdGVzdHMgYW5kIHByaXZhdGUtc3NyLXN1cHBvcnRcbiAgICBfVGVtcGxhdGVJbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZSxcbiAgICBfaXNJdGVyYWJsZTogaXNJdGVyYWJsZSxcbiAgICBfcmVzb2x2ZURpcmVjdGl2ZTogcmVzb2x2ZURpcmVjdGl2ZSxcbiAgICBfQ2hpbGRQYXJ0OiBDaGlsZFBhcnQsXG4gICAgX0F0dHJpYnV0ZVBhcnQ6IEF0dHJpYnV0ZVBhcnQsXG4gICAgX0Jvb2xlYW5BdHRyaWJ1dGVQYXJ0OiBCb29sZWFuQXR0cmlidXRlUGFydCxcbiAgICBfRXZlbnRQYXJ0OiBFdmVudFBhcnQsXG4gICAgX1Byb3BlcnR5UGFydDogUHJvcGVydHlQYXJ0LFxuICAgIF9FbGVtZW50UGFydDogRWxlbWVudFBhcnQsXG59O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IGdsb2JhbC5saXRIdG1sUG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogZ2xvYmFsLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnQ7XG5wb2x5ZmlsbFN1cHBvcnQ/LihUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4oZ2xvYmFsLmxpdEh0bWxWZXJzaW9ucyA/Pz0gW10pLnB1c2goJzMuMS4xJyk7XG5pZiAoREVWX01PREUgJiYgZ2xvYmFsLmxpdEh0bWxWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBgICtcbiAgICAgICAgYExvYWRpbmcgbXVsdGlwbGUgdmVyc2lvbnMgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLyoqXG4gKiBSZW5kZXJzIGEgdmFsdWUsIHVzdWFsbHkgYSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdCwgdG8gdGhlIGNvbnRhaW5lci5cbiAqXG4gKiBUaGlzIGV4YW1wbGUgcmVuZGVycyB0aGUgdGV4dCBcIkhlbGxvLCBab2UhXCIgaW5zaWRlIGEgcGFyYWdyYXBoIHRhZywgYXBwZW5kaW5nXG4gKiBpdCB0byB0aGUgY29udGFpbmVyIGBkb2N1bWVudC5ib2R5YC5cbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IHtodG1sLCByZW5kZXJ9IGZyb20gJ2xpdCc7XG4gKlxuICogY29uc3QgbmFtZSA9IFwiWm9lXCI7XG4gKiByZW5kZXIoaHRtbGA8cD5IZWxsbywgJHtuYW1lfSE8L3A+YCwgZG9jdW1lbnQuYm9keSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdmFsdWUgQW55IFtyZW5kZXJhYmxlXG4gKiAgIHZhbHVlXShodHRwczovL2xpdC5kZXYvZG9jcy90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMvI2NoaWxkLWV4cHJlc3Npb25zKSxcbiAqICAgdHlwaWNhbGx5IGEge0BsaW5rY29kZSBUZW1wbGF0ZVJlc3VsdH0gY3JlYXRlZCBieSBldmFsdWF0aW5nIGEgdGVtcGxhdGUgdGFnXG4gKiAgIGxpa2Uge0BsaW5rY29kZSBodG1sfSBvciB7QGxpbmtjb2RlIHN2Z30uXG4gKiBAcGFyYW0gY29udGFpbmVyIEEgRE9NIGNvbnRhaW5lciB0byByZW5kZXIgdG8uIFRoZSBmaXJzdCByZW5kZXIgd2lsbCBhcHBlbmRcbiAqICAgdGhlIHJlbmRlcmVkIHZhbHVlIHRvIHRoZSBjb250YWluZXIsIGFuZCBzdWJzZXF1ZW50IHJlbmRlcnMgd2lsbFxuICogICBlZmZpY2llbnRseSB1cGRhdGUgdGhlIHJlbmRlcmVkIHZhbHVlIGlmIHRoZSBzYW1lIHJlc3VsdCB0eXBlIHdhc1xuICogICBwcmV2aW91c2x5IHJlbmRlcmVkIHRoZXJlLlxuICogQHBhcmFtIG9wdGlvbnMgU2VlIHtAbGlua2NvZGUgUmVuZGVyT3B0aW9uc30gZm9yIG9wdGlvbnMgZG9jdW1lbnRhdGlvbi5cbiAqIEBzZWVcbiAqIHtAbGluayBodHRwczovL2xpdC5kZXYvZG9jcy9saWJyYXJpZXMvc3RhbmRhbG9uZS10ZW1wbGF0ZXMvI3JlbmRlcmluZy1saXQtaHRtbC10ZW1wbGF0ZXN8IFJlbmRlcmluZyBMaXQgSFRNTCBUZW1wbGF0ZXN9XG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAodmFsdWUsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIGlmIChERVZfTU9ERSAmJiBjb250YWluZXIgPT0gbnVsbCkge1xuICAgICAgICAvLyBHaXZlIGEgY2xlYXJlciBlcnJvciBtZXNzYWdlIHRoYW5cbiAgICAgICAgLy8gICAgIFVuY2F1Z2h0IFR5cGVFcnJvcjogQ2Fubm90IHJlYWQgcHJvcGVydGllcyBvZiBudWxsIChyZWFkaW5nXG4gICAgICAgIC8vICAgICAnXyRsaXRQYXJ0JCcpXG4gICAgICAgIC8vIHdoaWNoIHJlYWRzIGxpa2UgYW4gaW50ZXJuYWwgTGl0IGVycm9yLlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgY29udGFpbmVyIHRvIHJlbmRlciBpbnRvIG1heSBub3QgYmUgJHtjb250YWluZXJ9YCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlcklkID0gREVWX01PREUgPyBkZWJ1Z0xvZ1JlbmRlcklkKysgOiAwO1xuICAgIGNvbnN0IHBhcnRPd25lck5vZGUgPSBvcHRpb25zPy5yZW5kZXJCZWZvcmUgPz8gY29udGFpbmVyO1xuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBsZXQgcGFydCA9IHBhcnRPd25lck5vZGVbJ18kbGl0UGFydCQnXTtcbiAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2JlZ2luIHJlbmRlcicsXG4gICAgICAgICAgICBpZDogcmVuZGVySWQsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICB9KTtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSBvcHRpb25zPy5yZW5kZXJCZWZvcmUgPz8gbnVsbDtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgcGFydE93bmVyTm9kZVsnXyRsaXRQYXJ0JCddID0gcGFydCA9IG5ldyBDaGlsZFBhcnQoY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgZW5kTm9kZSksIGVuZE5vZGUsIHVuZGVmaW5lZCwgb3B0aW9ucyA/PyB7fSk7XG4gICAgfVxuICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdlbmQgcmVuZGVyJyxcbiAgICAgICAgICAgIGlkOiByZW5kZXJJZCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgIH0pO1xuICAgIHJldHVybiBwYXJ0O1xufTtcbmlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICByZW5kZXIuc2V0U2FuaXRpemVyID0gc2V0U2FuaXRpemVyO1xuICAgIHJlbmRlci5jcmVhdGVTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXI7XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgIHJlbmRlci5fdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPVxuICAgICAgICAgICAgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsImV4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9jdXN0b20tZWxlbWVudC5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9zdGF0ZS5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9ldmVudC1vcHRpb25zLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFsbC5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3luYy5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qc1wiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1ub2Rlcy5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVjb3JhdG9ycy5qcy5tYXBcbiIsImltcG9ydFwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0XCJsaXQtaHRtbFwiO2V4cG9ydCpmcm9tXCJsaXQtZWxlbWVudC9saXQtZWxlbWVudC5qc1wiO2V4cG9ydCpmcm9tXCJsaXQtaHRtbC9pcy1zZXJ2ZXIuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwcm92aWRlIH0gZnJvbSBcIkBsaXQvY29udGV4dFwiO1xuaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0L2RlY29yYXRvcnMuanNcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9wb2tlbW9uLWNhdGFsb2cvcG9rZW1vbi1jYXRhbG9nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUG9rZW1vblNlcnZpY2UsIHBva2Vtb25TZXJ2aWNlQ29udGV4dCB9IGZyb20gXCIuL3NlcnZpY2VzL3Bva2Vtb24uc2VydmljZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5AY3VzdG9tRWxlbWVudChcInBva2Vtb24tYXBwXCIpXG5leHBvcnQgY2xhc3MgUG9rZW1vbkFwcCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgb3ZlcnJpZGUgc3R5bGVzID0gc3R5bGVzO1xuXG4gIEBwcm92aWRlKHsgY29udGV4dDogcG9rZW1vblNlcnZpY2VDb250ZXh0IH0pXG4gIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSA9IG5ldyBQb2tlbW9uU2VydmljZSgpO1xuXG4gIHByb3RlY3RlZCBvdmVycmlkZSByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cImFwcFwiPjxwb2tlbW9uLWNhdGFsb2c+PC9wb2tlbW9uLWNhdGFsb2c+PC9kaXY+IGA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJodG1sIiwidGFnIiwic3RyaW5ncyJdLCJzb3VyY2VSb290IjoiIn0=