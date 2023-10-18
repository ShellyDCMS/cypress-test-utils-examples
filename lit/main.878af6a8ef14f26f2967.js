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
/* harmony import */ var _components_pokemon_image_pokemon_image_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/pokemon-image/pokemon-image.component */ "./src/components/pokemon-image/pokemon-image.component.ts");
/* harmony import */ var _lit_labs_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit-labs/context */ "./node_modules/@lit-labs/context/development/index.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/pokemon.service */ "./src/services/pokemon.service.ts");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _pokemon_catalog_component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pokemon-catalog.component.scss */ "./src/components/pokemon-catalog/pokemon-catalog.component.scss");
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






let PokemonCatalog = class extends lit__WEBPACK_IMPORTED_MODULE_3__.LitElement {
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
    new _components_pokemon_image_pokemon_image_component__WEBPACK_IMPORTED_MODULE_0__.PokemonImageComponent();
  }
  static get styles() {
    return _pokemon_catalog_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"];
  }
  connectedCallback() {
    super.connectedCallback();
    new _lit_labs_context__WEBPACK_IMPORTED_MODULE_1__.ContextConsumer(
      this,
      _services_pokemon_service__WEBPACK_IMPORTED_MODULE_2__.PokemonServiceContext,
      (context) => {
        this.pokemonService = context.pokemonService();
      },
      true
    );
    if (this.pokemonService.getPokemon)
      this.loadPokemon();
  }
  render() {
    return !this.pokemon ? "" : lit__WEBPACK_IMPORTED_MODULE_3__.html`
          <div class="catalog">
            <pokemon-image pokemonIndex="${this.getPokemonIndex()}"></pokemon-image>
            <h2 data-hook="pokemon-name">${this.pokemon.results[0].name}</h2>
            <p data-hook="count">${this.getPokemonIndex()} of ${this.pokemon.count}</p>
            <div>
              <button data-hook="prev" @click="${this.loadPrev}" .disabled="${this.isPrevDisabled()}">Prev</button>
              <button data-hook="next" @click="${this.loadNext}" .disabled="${this.isNextDisabled()}">Next</button>
            </div>
          </div>
        `;
  }
};
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.property)()
], PokemonCatalog.prototype, "onPrev", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.property)()
], PokemonCatalog.prototype, "onNext", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.state)()
], PokemonCatalog.prototype, "pokemon", 2);
__decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.state)()
], PokemonCatalog.prototype, "pokemonService", 2);
PokemonCatalog = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.customElement)("pokemon-catalog")
], PokemonCatalog);


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
/* harmony export */   PokemonInternalService: () => (/* binding */ PokemonInternalService),
/* harmony export */   PokemonServiceContext: () => (/* binding */ PokemonServiceContext)
/* harmony export */ });
/* harmony import */ var _lit_labs_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit-labs/context */ "./node_modules/@lit-labs/context/development/index.js");

const PokemonServiceContext = (0,_lit_labs_context__WEBPACK_IMPORTED_MODULE_0__.createContext)(
  "__pokemon_context__"
);
class PokemonInternalService {
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

/***/ "./node_modules/@lit-labs/context/development/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@lit-labs/context/development/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextConsumer: () => (/* reexport safe */ _lib_controllers_context_consumer_js__WEBPACK_IMPORTED_MODULE_2__.ContextConsumer),
/* harmony export */   ContextEvent: () => (/* reexport safe */ _lib_context_request_event_js__WEBPACK_IMPORTED_MODULE_0__.ContextRequestEvent),
/* harmony export */   ContextProvider: () => (/* reexport safe */ _lib_controllers_context_provider_js__WEBPACK_IMPORTED_MODULE_3__.ContextProvider),
/* harmony export */   ContextRoot: () => (/* reexport safe */ _lib_context_root_js__WEBPACK_IMPORTED_MODULE_4__.ContextRoot),
/* harmony export */   contextProvided: () => (/* reexport safe */ _lib_decorators_context_provided_js__WEBPACK_IMPORTED_MODULE_6__.contextProvided),
/* harmony export */   contextProvider: () => (/* reexport safe */ _lib_decorators_context_provider_js__WEBPACK_IMPORTED_MODULE_5__.contextProvider),
/* harmony export */   createContext: () => (/* reexport safe */ _lib_context_key_js__WEBPACK_IMPORTED_MODULE_1__.createContext)
/* harmony export */ });
/* harmony import */ var _lib_context_request_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/context-request-event.js */ "./node_modules/@lit-labs/context/development/lib/context-request-event.js");
/* harmony import */ var _lib_context_key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/context-key.js */ "./node_modules/@lit-labs/context/development/lib/context-key.js");
/* harmony import */ var _lib_controllers_context_consumer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/controllers/context-consumer.js */ "./node_modules/@lit-labs/context/development/lib/controllers/context-consumer.js");
/* harmony import */ var _lib_controllers_context_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/controllers/context-provider.js */ "./node_modules/@lit-labs/context/development/lib/controllers/context-provider.js");
/* harmony import */ var _lib_context_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/context-root.js */ "./node_modules/@lit-labs/context/development/lib/context-root.js");
/* harmony import */ var _lib_decorators_context_provider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/decorators/context-provider.js */ "./node_modules/@lit-labs/context/development/lib/decorators/context-provider.js");
/* harmony import */ var _lib_decorators_context_provided_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/decorators/context-provided.js */ "./node_modules/@lit-labs/context/development/lib/decorators/context-provided.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */









/***/ }),

/***/ "./node_modules/@lit-labs/context/development/lib/context-key.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@lit-labs/context/development/lib/context-key.js ***!
  \***********************************************************************/
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

/***/ "./node_modules/@lit-labs/context/development/lib/context-request-event.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@lit-labs/context/development/lib/context-request-event.js ***!
  \*********************************************************************************/
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
   * @param subscribe an optional argument, if true indicates we want to subscribe to future updates
   */
  constructor(context, callback, subscribe) {
    super("context-request", { bubbles: true, composed: true });
    this.context = context;
    this.callback = callback;
    this.subscribe = subscribe;
  }
}


/***/ }),

/***/ "./node_modules/@lit-labs/context/development/lib/context-root.js":
/*!************************************************************************!*\
  !*** ./node_modules/@lit-labs/context/development/lib/context-root.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextRoot: () => (/* binding */ ContextRoot)
/* harmony export */ });
/* harmony import */ var _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context-request-event.js */ "./node_modules/@lit-labs/context/development/lib/context-request-event.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

class ContextRoot {
  constructor() {
    this.pendingContextRequests = /* @__PURE__ */ new Map();
    this.onContextProvider = (ev) => {
      const pendingRequests = this.pendingContextRequests.get(ev.context);
      if (!pendingRequests) {
        return;
      }
      this.pendingContextRequests.delete(ev.context);
      pendingRequests.forEach((request) => {
        const element = request.element;
        const callback = request.callback;
        if (element) {
          element.dispatchEvent(new _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__.ContextRequestEvent(ev.context, callback, true));
        }
      });
    };
    this.onContextRequest = (ev) => {
      if (!ev.subscribe) {
        return;
      }
      const request = {
        element: ev.target,
        callback: ev.callback
      };
      let pendingContextRequests = this.pendingContextRequests.get(ev.context);
      if (!pendingContextRequests) {
        pendingContextRequests = /* @__PURE__ */ new Set();
        this.pendingContextRequests.set(ev.context, pendingContextRequests);
      }
      pendingContextRequests.add(request);
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

/***/ "./node_modules/@lit-labs/context/development/lib/controllers/context-consumer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@lit-labs/context/development/lib/controllers/context-consumer.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextConsumer: () => (/* binding */ ContextConsumer)
/* harmony export */ });
/* harmony import */ var _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context-request-event.js */ "./node_modules/@lit-labs/context/development/lib/context-request-event.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

class ContextConsumer {
  constructor(host, context, callback, subscribe = false) {
    this.host = host;
    this.context = context;
    this.callback = callback;
    this.subscribe = subscribe;
    this.provided = false;
    this.value = void 0;
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
    this.host.dispatchEvent(new _context_request_event_js__WEBPACK_IMPORTED_MODULE_0__.ContextRequestEvent(this.context, (value, unsubscribe) => {
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
    }, this.subscribe));
  }
}


/***/ }),

/***/ "./node_modules/@lit-labs/context/development/lib/controllers/context-provider.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@lit-labs/context/development/lib/controllers/context-provider.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextProvider: () => (/* binding */ ContextProvider),
/* harmony export */   ContextProviderEvent: () => (/* binding */ ContextProviderEvent)
/* harmony export */ });
/* harmony import */ var _value_notifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../value-notifier.js */ "./node_modules/@lit-labs/context/development/lib/value-notifier.js");
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
class ContextProvider extends _value_notifier_js__WEBPACK_IMPORTED_MODULE_0__.ValueNotifier {
  constructor(host, context, initialValue) {
    super(initialValue);
    this.host = host;
    this.context = context;
    this.onContextRequest = (ev) => {
      if (ev.context !== this.context || ev.composedPath()[0] === this.host) {
        return;
      }
      ev.stopPropagation();
      this.addCallback(ev.callback, ev.subscribe);
    };
    this.host.addController(this);
    this.attachListeners();
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new ContextProviderEvent(this.context));
  }
}


/***/ }),

/***/ "./node_modules/@lit-labs/context/development/lib/decorators/context-provided.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@lit-labs/context/development/lib/decorators/context-provided.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contextProvided: () => (/* binding */ contextProvided)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/* harmony import */ var _controllers_context_consumer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/context-consumer.js */ "./node_modules/@lit-labs/context/development/lib/controllers/context-consumer.js");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


function contextProvided({ context, subscribe }) {
  return (0,_lit_reactive_element_decorators_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
    finisher: (ctor, name) => {
      ctor.addInitializer((element) => {
        new _controllers_context_consumer_js__WEBPACK_IMPORTED_MODULE_1__.ContextConsumer(element, context, (value) => {
          element[name] = value;
        }, subscribe);
      });
    }
  });
}


/***/ }),

/***/ "./node_modules/@lit-labs/context/development/lib/decorators/context-provider.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@lit-labs/context/development/lib/decorators/context-provider.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contextProvider: () => (/* binding */ contextProvider)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/* harmony import */ var _controllers_context_provider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/context-provider.js */ "./node_modules/@lit-labs/context/development/lib/controllers/context-provider.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


function contextProvider({ context }) {
  return (0,_lit_reactive_element_decorators_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
    finisher: (ctor, name) => {
      const controllerMap = /* @__PURE__ */ new WeakMap();
      ctor.addInitializer((element) => {
        controllerMap.set(element, new _controllers_context_provider_js__WEBPACK_IMPORTED_MODULE_1__.ContextProvider(element, context));
      });
      const descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, name);
      const oldSetter = descriptor === null || descriptor === void 0 ? void 0 : descriptor.set;
      const newDescriptor = {
        ...descriptor,
        set: function(value) {
          var _a;
          (_a = controllerMap.get(this)) === null || _a === void 0 ? void 0 : _a.setValue(value);
          if (oldSetter) {
            oldSetter.call(this, value);
          }
        }
      };
      Object.defineProperty(ctor.prototype, name, newDescriptor);
    }
  });
}


/***/ }),

/***/ "./node_modules/@lit-labs/context/development/lib/value-notifier.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@lit-labs/context/development/lib/value-notifier.js ***!
  \**************************************************************************/
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
  constructor(defaultValue) {
    this.callbacks = /* @__PURE__ */ new Map();
    this.updateObservers = () => {
      for (const [callback, disposer] of this.callbacks) {
        callback(this._value, disposer);
      }
    };
    if (defaultValue !== void 0) {
      this.value = defaultValue;
    }
  }
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
  addCallback(callback, subscribe) {
    if (subscribe) {
      if (!this.callbacks.has(callback)) {
        this.callbacks.set(callback, () => {
          this.callbacks.delete(callback);
        });
      }
    }
    callback(this.value);
  }
  clearCallbacks() {
    this.callbacks.clear();
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
const global = NODE_MODE ? globalThis : window;
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
    styles.forEach((s) => {
      const style = document.createElement("style");
      const nonce = global["litNonce"];
      if (nonce !== void 0) {
        style.setAttribute("nonce", nonce);
      }
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    });
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
/* harmony export */   decorateProperty: () => (/* binding */ decorateProperty),
/* harmony export */   legacyPrototypeMethod: () => (/* binding */ legacyPrototypeMethod),
/* harmony export */   standardPrototypeMethod: () => (/* binding */ standardPrototypeMethod)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyPrototypeMethod = (descriptor, proto, name) => {
  Object.defineProperty(proto, name, descriptor);
};
const standardPrototypeMethod = (descriptor, element) => ({
  kind: "method",
  placement: "prototype",
  key: element.key,
  descriptor
});
const decorateProperty = ({ finisher, descriptor }) => (protoOrDescriptor, name) => {
  var _a;
  if (name !== void 0) {
    const ctor = protoOrDescriptor.constructor;
    if (descriptor !== void 0) {
      Object.defineProperty(protoOrDescriptor, name, descriptor(name));
    }
    finisher === null || finisher === void 0 ? void 0 : finisher(ctor, name);
  } else {
    const key = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (_a = protoOrDescriptor.originalKey) !== null && _a !== void 0 ? _a : protoOrDescriptor.key
    );
    const info = descriptor != void 0 ? {
      kind: "method",
      placement: "prototype",
      key,
      descriptor: descriptor(protoOrDescriptor.key)
    } : { ...protoOrDescriptor, key };
    if (finisher != void 0) {
      info.finisher = function(ctor) {
        finisher(ctor, key);
      };
    }
    return info;
  }
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
const legacyCustomElement = (tagName, clazz) => {
  customElements.define(tagName, clazz);
  return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
  const { kind, elements } = descriptor;
  return {
    kind,
    elements,
    // This callback is called once the class is otherwise fully defined
    finisher(clazz) {
      customElements.define(tagName, clazz);
    }
  };
};
const customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);


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
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

function eventOptions(options) {
  return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
    finisher: (ctor, name) => {
      Object.assign(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ctor.prototype[name],
        options
      );
    }
  });
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   property: () => (/* binding */ property)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const standardProperty = (options, element) => {
  if (element.kind === "method" && element.descriptor && !("value" in element.descriptor)) {
    return {
      ...element,
      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  } else {
    return {
      kind: "field",
      key: Symbol(),
      placement: "own",
      descriptor: {},
      // store the original key so subsequent decorators have access to it.
      originalKey: element.key,
      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      initializer() {
        if (typeof element.initializer === "function") {
          this[element.key] = element.initializer.call(this);
        }
      },
      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  }
};
const legacyProperty = (options, proto, name) => {
  proto.constructor.createProperty(name, options);
};
function property(options) {
  return (protoOrDescriptor, name) => name !== void 0 ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
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

function queryAll(selector) {
  return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
    descriptor: (_name) => ({
      get() {
        var _a, _b;
        return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector)) !== null && _b !== void 0 ? _b : [];
      },
      enumerable: true,
      configurable: true
    })
  });
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
var _a;

const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
const slotAssignedElements = ((_a = global.HTMLSlotElement) === null || _a === void 0 ? void 0 : _a.prototype.assignedElements) != null ? (slot, opts) => slot.assignedElements(opts) : (slot, opts) => slot.assignedNodes(opts).filter((node) => node.nodeType === Node.ELEMENT_NODE);
function queryAssignedElements(options) {
  const { slot, selector } = options !== null && options !== void 0 ? options : {};
  return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
    descriptor: (_name) => ({
      get() {
        var _a2;
        const slotSelector = `slot${slot ? `[name=${slot}]` : ":not([name])"}`;
        const slotEl = (_a2 = this.renderRoot) === null || _a2 === void 0 ? void 0 : _a2.querySelector(slotSelector);
        const elements = slotEl != null ? slotAssignedElements(slotEl, options) : [];
        if (selector) {
          return elements.filter((node) => node.matches(selector));
        }
        return elements;
      },
      enumerable: true,
      configurable: true
    })
  });
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
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


function queryAssignedNodes(slotOrOptions, flatten, selector) {
  let slot = slotOrOptions;
  let assignedNodesOptions;
  if (typeof slotOrOptions === "object") {
    slot = slotOrOptions.slot;
    assignedNodesOptions = slotOrOptions;
  } else {
    assignedNodesOptions = { flatten };
  }
  if (selector) {
    return (0,_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__.queryAssignedElements)({
      slot,
      flatten,
      selector
    });
  }
  return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
    descriptor: (_name) => ({
      get() {
        var _a, _b;
        const slotSelector = `slot${slot ? `[name=${slot}]` : ":not([name])"}`;
        const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
        return (_b = slotEl === null || slotEl === void 0 ? void 0 : slotEl.assignedNodes(assignedNodesOptions)) !== null && _b !== void 0 ? _b : [];
      },
      enumerable: true,
      configurable: true
    })
  });
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
  return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
    descriptor: (_name) => ({
      async get() {
        var _a;
        await this.updateComplete;
        return (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
      },
      enumerable: true,
      configurable: true
    })
  });
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

function query(selector, cache) {
  return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
    descriptor: (name) => {
      const descriptor = {
        get() {
          var _a, _b;
          return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
        },
        enumerable: true,
        configurable: true
      };
      if (cache) {
        const key = typeof name === "symbol" ? Symbol() : `__${name}`;
        descriptor.get = function() {
          var _a, _b;
          if (this[key] === void 0) {
            this[key] = (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
          }
          return this[key];
        };
      }
      return descriptor;
    }
  });
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
    state: true
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
var _a, _b, _c, _d;
var _e;


const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
if (NODE_MODE) {
  (_a = global.customElements) !== null && _a !== void 0 ? _a : global.customElements = customElements;
}
const DEV_MODE = true;
let requestUpdateThenable;
let issueWarning;
const trustedTypes = global.trustedTypes;
const emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : "";
const polyfillSupport = DEV_MODE ? global.reactiveElementPolyfillSupportDevMode : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
  const issuedWarnings = (_b = global.litIssuedWarnings) !== null && _b !== void 0 ? _b : global.litIssuedWarnings = /* @__PURE__ */ new Set();
  issueWarning = (code, warning) => {
    warning += ` See https://lit.dev/msg/${code} for more information.`;
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
  issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
  if (((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.inUse) && polyfillSupport === void 0) {
    issueWarning("polyfill-support-missing", `Shadow DOM is being polyfilled via \`ShadyDOM\` but the \`polyfill-support\` module has not been loaded.`);
  }
  requestUpdateThenable = (name) => ({
    then: (onfulfilled, _onrejected) => {
      issueWarning("request-update-promise", `The \`requestUpdate\` method should no longer return a Promise but does so on \`${name}\`. Use \`updateComplete\` instead.`);
      if (onfulfilled !== void 0) {
        onfulfilled(false);
      }
    }
  });
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
const notEqual = (value, old) => {
  return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
const finalized = "finalized";
class ReactiveElement extends HTMLElement {
  constructor() {
    super();
    this.__instanceProperties = /* @__PURE__ */ new Map();
    this.isUpdatePending = false;
    this.hasUpdated = false;
    this.__reflectingProperty = null;
    this.__initialize();
  }
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
    var _a2;
    this.finalize();
    ((_a2 = this._initializers) !== null && _a2 !== void 0 ? _a2 : this._initializers = []).push(initializer);
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   * @category attributes
   */
  static get observedAttributes() {
    this.finalize();
    const attributes = [];
    this.elementProperties.forEach((v, p) => {
      const attr = this.__attributeNameForProperty(p, v);
      if (attr !== void 0) {
        this.__attributeToPropertyMap.set(attr, p);
        attributes.push(attr);
      }
    });
    return attributes;
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
    var _a2;
    if (options.state) {
      options.attribute = false;
    }
    this.finalize();
    this.elementProperties.set(name, options);
    if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
      const key = typeof name === "symbol" ? Symbol() : `__${name}`;
      const descriptor = this.getPropertyDescriptor(name, key, options);
      if (descriptor !== void 0) {
        Object.defineProperty(this.prototype, name, descriptor);
        if (DEV_MODE) {
          if (!this.hasOwnProperty("__reactivePropertyKeys")) {
            this.__reactivePropertyKeys = new Set((_a2 = this.__reactivePropertyKeys) !== null && _a2 !== void 0 ? _a2 : []);
          }
          this.__reactivePropertyKeys.add(name);
        }
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
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      get() {
        return this[key];
      },
      set(value) {
        const oldValue = this[name];
        this[key] = value;
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
    return this.elementProperties.get(name) || defaultPropertyDeclaration;
  }
  /**
   * Creates property accessors for registered properties, sets up element
   * styling, and ensures any superclasses are also finalized. Returns true if
   * the element was finalized.
   * @nocollapse
   */
  static finalize() {
    if (this.hasOwnProperty(finalized)) {
      return false;
    }
    this[finalized] = true;
    const superCtor = Object.getPrototypeOf(this);
    superCtor.finalize();
    if (superCtor._initializers !== void 0) {
      this._initializers = [...superCtor._initializers];
    }
    this.elementProperties = new Map(superCtor.elementProperties);
    this.__attributeToPropertyMap = /* @__PURE__ */ new Map();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const props = this.properties;
      const propKeys = [
        ...Object.getOwnPropertyNames(props),
        ...Object.getOwnPropertySymbols(props)
      ];
      for (const p of propKeys) {
        this.createProperty(p, props[p]);
      }
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    if (DEV_MODE) {
      const warnRemovedOrRenamed = (name, renamed = false) => {
        if (this.prototype.hasOwnProperty(name)) {
          issueWarning(renamed ? "renamed-api" : "removed-api", `\`${name}\` is implemented on class ${this.name}. It has been ${renamed ? "renamed" : "removed"} in this version of LitElement.`);
        }
      };
      warnRemovedOrRenamed("initialize");
      warnRemovedOrRenamed("requestUpdateInternal");
      warnRemovedOrRenamed("_getUpdateComplete", true);
    }
    return true;
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
  /**
   * Internal only override point for customizing work done when elements
   * are constructed.
   */
  __initialize() {
    var _a2;
    this.__updatePromise = new Promise((res) => this.enableUpdating = res);
    this._$changedProperties = /* @__PURE__ */ new Map();
    this.__saveInstanceProperties();
    this.requestUpdate();
    (_a2 = this.constructor._initializers) === null || _a2 === void 0 ? void 0 : _a2.forEach((i) => i(this));
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
    var _a2, _b2;
    ((_a2 = this.__controllers) !== null && _a2 !== void 0 ? _a2 : this.__controllers = []).push(controller);
    if (this.renderRoot !== void 0 && this.isConnected) {
      (_b2 = controller.hostConnected) === null || _b2 === void 0 ? void 0 : _b2.call(controller);
    }
  }
  /**
   * Removes a `ReactiveController` from the element.
   * @category controllers
   */
  removeController(controller) {
    var _a2;
    (_a2 = this.__controllers) === null || _a2 === void 0 ? void 0 : _a2.splice(this.__controllers.indexOf(controller) >>> 0, 1);
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
    this.constructor.elementProperties.forEach((_v, p) => {
      if (this.hasOwnProperty(p)) {
        this.__instanceProperties.set(p, this[p]);
        delete this[p];
      }
    });
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
    var _a2;
    const renderRoot = (_a2 = this.shadowRoot) !== null && _a2 !== void 0 ? _a2 : this.attachShadow(this.constructor.shadowRootOptions);
    (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  /**
   * On first connection, creates the element's renderRoot, sets up
   * element styling, and enables updating.
   * @category lifecycle
   */
  connectedCallback() {
    var _a2;
    if (this.renderRoot === void 0) {
      this.renderRoot = this.createRenderRoot();
    }
    this.enableUpdating(true);
    (_a2 = this.__controllers) === null || _a2 === void 0 ? void 0 : _a2.forEach((c) => {
      var _a3;
      return (_a3 = c.hostConnected) === null || _a3 === void 0 ? void 0 : _a3.call(c);
    });
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
    var _a2;
    (_a2 = this.__controllers) === null || _a2 === void 0 ? void 0 : _a2.forEach((c) => {
      var _a3;
      return (_a3 = c.hostDisconnected) === null || _a3 === void 0 ? void 0 : _a3.call(c);
    });
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
  __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
    var _a2;
    const attr = this.constructor.__attributeNameForProperty(name, options);
    if (attr !== void 0 && options.reflect === true) {
      const converter = ((_a2 = options.converter) === null || _a2 === void 0 ? void 0 : _a2.toAttribute) !== void 0 ? options.converter : defaultConverter;
      const attrValue = converter.toAttribute(value, options.type);
      if (DEV_MODE && this.constructor.enabledWarnings.indexOf("migration") >= 0 && attrValue === void 0) {
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
    var _a2;
    const ctor = this.constructor;
    const propName = ctor.__attributeToPropertyMap.get(name);
    if (propName !== void 0 && this.__reflectingProperty !== propName) {
      const options = ctor.getPropertyOptions(propName);
      const converter = typeof options.converter === "function" ? { fromAttribute: options.converter } : ((_a2 = options.converter) === null || _a2 === void 0 ? void 0 : _a2.fromAttribute) !== void 0 ? options.converter : defaultConverter;
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
    let shouldRequestUpdate = true;
    if (name !== void 0) {
      options = options || this.constructor.getPropertyOptions(name);
      const hasChanged = options.hasChanged || notEqual;
      if (hasChanged(this[name], oldValue)) {
        if (!this._$changedProperties.has(name)) {
          this._$changedProperties.set(name, oldValue);
        }
        if (options.reflect === true && this.__reflectingProperty !== name) {
          if (this.__reflectingProperties === void 0) {
            this.__reflectingProperties = /* @__PURE__ */ new Map();
          }
          this.__reflectingProperties.set(name, options);
        }
      } else {
        shouldRequestUpdate = false;
      }
    }
    if (!this.isUpdatePending && shouldRequestUpdate) {
      this.__updatePromise = this.__enqueueUpdate();
    }
    return DEV_MODE ? requestUpdateThenable(this.localName) : void 0;
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
    return this.performUpdate();
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * Call `performUpdate()` to immediately process a pending update. This should
   * generally not be needed, but it can be done in rare cases when you need to
   * update synchronously.
   *
   * Note: To ensure `performUpdate()` synchronously completes a pending update,
   * it should not be overridden. In LitElement 2.x it was suggested to override
   * `performUpdate()` to also customizing update scheduling. Instead, you should now
   * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
   * scheduling updates via `performUpdate()` continues to work, but will make
   * also calling `performUpdate()` to synchronously process updates difficult.
   *
   * @category updates
   */
  performUpdate() {
    var _a2, _b2;
    if (!this.isUpdatePending) {
      return;
    }
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({ kind: "update" });
    if (!this.hasUpdated) {
      if (DEV_MODE) {
        const shadowedProperties = [];
        (_a2 = this.constructor.__reactivePropertyKeys) === null || _a2 === void 0 ? void 0 : _a2.forEach((p) => {
          var _a3;
          if (this.hasOwnProperty(p) && !((_a3 = this.__instanceProperties) === null || _a3 === void 0 ? void 0 : _a3.has(p))) {
            shadowedProperties.push(p);
          }
        });
        if (shadowedProperties.length) {
          throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${shadowedProperties.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`);
        }
      }
    }
    if (this.__instanceProperties) {
      this.__instanceProperties.forEach((v, p) => this[p] = v);
      this.__instanceProperties = void 0;
    }
    let shouldUpdate = false;
    const changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.willUpdate(changedProperties);
        (_b2 = this.__controllers) === null || _b2 === void 0 ? void 0 : _b2.forEach((c) => {
          var _a3;
          return (_a3 = c.hostUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(c);
        });
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
    var _a2;
    (_a2 = this.__controllers) === null || _a2 === void 0 ? void 0 : _a2.forEach((c) => {
      var _a3;
      return (_a3 = c.hostUpdated) === null || _a3 === void 0 ? void 0 : _a3.call(c);
    });
    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }
    this.updated(changedProperties);
    if (DEV_MODE && this.isUpdatePending && this.constructor.enabledWarnings.indexOf("change-in-update") >= 0) {
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
    if (this.__reflectingProperties !== void 0) {
      this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
      this.__reflectingProperties = void 0;
    }
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
_e = finalized;
ReactiveElement[_e] = true;
ReactiveElement.elementProperties = /* @__PURE__ */ new Map();
ReactiveElement.elementStyles = [];
ReactiveElement.shadowRootOptions = { mode: "open" };
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ ReactiveElement });
if (DEV_MODE) {
  ReactiveElement.enabledWarnings = ["change-in-update"];
  const ensureOwnWarnings = function(ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty("enabledWarnings", ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };
  ReactiveElement.enableWarning = function(warning) {
    ensureOwnWarnings(this);
    if (this.enabledWarnings.indexOf(warning) < 0) {
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
((_d = global.reactiveElementVersions) !== null && _d !== void 0 ? _d : global.reactiveElementVersions = []).push("1.6.3");
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
/* harmony export */   UpdatingElement: () => (/* binding */ UpdatingElement),
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
var _a, _b, _c;




const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
  const issuedWarnings = (_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : globalThis.litIssuedWarnings = /* @__PURE__ */ new Set();
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
    var _a2;
    var _b2;
    const renderRoot = super.createRenderRoot();
    (_a2 = (_b2 = this.renderOptions).renderBefore) !== null && _a2 !== void 0 ? _a2 : _b2.renderBefore = renderRoot.firstChild;
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
    var _a2;
    super.connectedCallback();
    (_a2 = this.__childPart) === null || _a2 === void 0 ? void 0 : _a2.setConnected(true);
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
    var _a2;
    super.disconnectedCallback();
    (_a2 = this.__childPart) === null || _a2 === void 0 ? void 0 : _a2.setConnected(false);
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
LitElement["finalized"] = true;
LitElement["_$litElement$"] = true;
(_b = globalThis.litElementHydrateSupport) === null || _b === void 0 ? void 0 : _b.call(globalThis, { LitElement });
const polyfillSupport = DEV_MODE ? globalThis.litElementPolyfillSupportDevMode : globalThis.litElementPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ LitElement });
if (DEV_MODE) {
  LitElement["finalize"] = function() {
    const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);
    if (!finalized) {
      return false;
    }
    const warnRemovedOrRenamed = (obj, name, renamed = false) => {
      if (obj.hasOwnProperty(name)) {
        const ctorName = (typeof obj === "function" ? obj : obj.constructor).name;
        issueWarning(renamed ? "renamed-api" : "removed-api", `\`${name}\` is implemented on class ${ctorName}. It has been ${renamed ? "renamed" : "removed"} in this version of LitElement.`);
      }
    };
    warnRemovedOrRenamed(this, "render");
    warnRemovedOrRenamed(this, "getStyles", true);
    warnRemovedOrRenamed(this.prototype, "adoptStyles");
    return true;
  };
}
const _$LE = {
  _$attributeToProperty: (el, name, value) => {
    el._$attributeToProperty(name, value);
  },
  // eslint-disable-next-line
  _$changedProperties: (el) => el._$changedProperties
};
((_c = globalThis.litElementVersions) !== null && _c !== void 0 ? _c : globalThis.litElementVersions = []).push("3.3.3");
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
var _a, _b, _c, _d;
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
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
  (_a = global.litIssuedWarnings) !== null && _a !== void 0 ? _a : global.litIssuedWarnings = /* @__PURE__ */ new Set();
  issueWarning = (code, warning) => {
    warning += code ? ` See https://lit.dev/msg/${code} for more information.` : "";
    if (!global.litIssuedWarnings.has(warning)) {
      console.warn(warning);
      global.litIssuedWarnings.add(warning);
    }
  };
  issueWarning("dev-mode", `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ENABLE_SHADYDOM_NOPATCH && ((_b = global.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) && ((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true ? global.ShadyDOM.wrap : (node) => node;
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
typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === "function";
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
const walker = d.createTreeWalker(d, 129, null, false);
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
          regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
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
    html2 += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? (attrNames.push(void 0), i) : end);
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
      const content = this.el.content;
      const svgElement = content.firstChild;
      svgElement.remove();
      content.append(...svgElement.childNodes);
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
          const attrsToRemove = [];
          for (const name of node.getAttributeNames()) {
            if (name.endsWith(boundAttributeSuffix) || name.startsWith(marker)) {
              const realName = attrNames[attrNameIndex++];
              attrsToRemove.push(name);
              if (realName !== void 0) {
                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                const statics = value.split(marker);
                const m = /([.?@])?(.*)/.exec(realName);
                parts.push({
                  type: ATTRIBUTE_PART,
                  index: nodeIndex,
                  name: m[2],
                  strings: statics,
                  ctor: m[1] === "." ? PropertyPart : m[1] === "?" ? BooleanAttributePart : m[1] === "@" ? EventPart : AttributePart
                });
              } else {
                parts.push({
                  type: ELEMENT_PART,
                  index: nodeIndex
                });
              }
            }
          }
          for (const name of attrsToRemove) {
            node.removeAttribute(name);
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
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
  var _a2, _b2, _c2;
  var _d2;
  if (value === noChange) {
    return value;
  }
  let currentDirective = attributeIndex !== void 0 ? (_a2 = parent.__directives) === null || _a2 === void 0 ? void 0 : _a2[attributeIndex] : parent.__directive;
  const nextDirectiveConstructor = isPrimitive(value) ? void 0 : (
    // This property needs to remain unminified.
    value["_$litDirective$"]
  );
  if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
    (_b2 = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective["_$notifyDirectiveConnectionChanged"]) === null || _b2 === void 0 ? void 0 : _b2.call(currentDirective, false);
    if (nextDirectiveConstructor === void 0) {
      currentDirective = void 0;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== void 0) {
      ((_c2 = (_d2 = parent).__directives) !== null && _c2 !== void 0 ? _c2 : _d2.__directives = [])[attributeIndex] = currentDirective;
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
    var _a2;
    const { el: { content }, parts } = this._$template;
    const fragment = ((_a2 = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a2 !== void 0 ? _a2 : d).importNode(content, true);
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
      if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
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
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
  constructor(startNode, endNode, parent, options) {
    var _a2;
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    this._$disconnectableChildren = void 0;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    this.__isConnected = (_a2 = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a2 !== void 0 ? _a2 : true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._textSanitizer = void 0;
    }
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    var _a2, _b2;
    return (_b2 = (_a2 = this._$parent) === null || _a2 === void 0 ? void 0 : _a2._$isConnected) !== null && _b2 !== void 0 ? _b2 : this.__isConnected;
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
    if (parent !== void 0 && (parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 11) {
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
    var _a2;
    if (DEV_MODE && this.parentNode === null) {
      throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      if (value === nothing || value == null || value === "") {
        if (this._$committedValue !== nothing) {
          debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
      if (DEV_MODE && ((_a2 = this.options) === null || _a2 === void 0 ? void 0 : _a2.host) === value) {
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
    var _a2;
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        const parentNodeName = (_a2 = this._$startNode.parentNode) === null || _a2 === void 0 ? void 0 : _a2.nodeName;
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
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
          kind: "commit text",
          node: textNode,
          value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
    var _a2;
    const { values, ["_$litType$"]: type } = result;
    const template = typeof type === "number" ? this._$getTemplate(result) : (type.el === void 0 && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (((_a2 = this._$committedValue) === null || _a2 === void 0 ? void 0 : _a2._$template) === template) {
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "template instantiated",
        template,
        instance,
        parts: instance._$parts,
        options: this.options,
        fragment,
        values
      });
      instance._update(values);
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
    var _a2;
    (_a2 = this._$notifyConnectionChanged) === null || _a2 === void 0 ? void 0 : _a2.call(this, false, true, from);
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
    var _a2;
    if (this._$parent === void 0) {
      this.__isConnected = isConnected;
      (_a2 = this._$notifyConnectionChanged) === null || _a2 === void 0 ? void 0 : _a2.call(this, isConnected);
    } else if (DEV_MODE) {
      throw new Error("part.setConnected() may only be called on a RootPart returned from render().");
    }
  }
}
class AttributePart {
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
  get tagName() {
    return this.element.tagName;
  }
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
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
          value += (v !== null && v !== void 0 ? v : "") + strings[i + 1];
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
        value = this._sanitizer(value !== null && value !== void 0 ? value : "");
      }
      debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: "commit attribute",
        element: this.element,
        name: this.name,
        value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, value !== null && value !== void 0 ? value : "");
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
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit property",
      element: this.element,
      name: this.name,
      value,
      options: this.options
    });
    this.element[this.name] = value === nothing ? void 0 : value;
  }
}
const emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : "";
class BooleanAttributePart extends AttributePart {
  constructor() {
    super(...arguments);
    this.type = BOOLEAN_ATTRIBUTE_PART;
  }
  /** @internal */
  _commitValue(value) {
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
      kind: "commit boolean attribute",
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });
    if (value && value !== nothing) {
      wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
    } else {
      wrap(this.element).removeAttribute(this.name);
    }
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
    var _a2;
    newListener = (_a2 = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a2 !== void 0 ? _a2 : nothing;
    if (newListener === noChange) {
      return;
    }
    const oldListener = this._$committedValue;
    const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
    var _a2, _b2;
    if (typeof this._$committedValue === "function") {
      this._$committedValue.call((_b2 = (_a2 = this.options) === null || _a2 === void 0 ? void 0 : _a2.host) !== null && _b2 !== void 0 ? _b2 : this.element, event);
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
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
((_d = global.litHtmlVersions) !== null && _d !== void 0 ? _d : global.litHtmlVersions = []).push("2.8.0");
if (DEV_MODE && global.litHtmlVersions.length > 1) {
  issueWarning("multiple-versions", `Multiple versions of Lit loaded. Loading multiple versions is not recommended.`);
}
const render = (value, container, options) => {
  var _a2, _b2;
  if (DEV_MODE && container == null) {
    throw new TypeError(`The container to render into may not be ${container}`);
  }
  const renderId = DEV_MODE ? debugLogRenderId++ : 0;
  const partOwnerNode = (_a2 = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a2 !== void 0 ? _a2 : container;
  let part = partOwnerNode["_$litPart$"];
  debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
    kind: "begin render",
    id: renderId,
    value,
    container,
    options,
    part
  });
  if (part === void 0) {
    const endNode = (_b2 = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b2 !== void 0 ? _b2 : null;
    partOwnerNode["_$litPart$"] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, void 0, options !== null && options !== void 0 ? options : {});
  }
  part._$setValue(value);
  debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
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
/* harmony export */   UpdatingElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement),
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
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _components_pokemon_catalog_pokemon_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pokemon-catalog/pokemon-catalog.component */ "./src/components/pokemon-catalog/pokemon-catalog.component.ts");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/pokemon.service */ "./src/services/pokemon.service.ts");
/* harmony import */ var _lit_labs_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit-labs/context */ "./node_modules/@lit-labs/context/development/index.js");
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






let PokemonApp = class extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  connectedCallback() {
    super.connectedCallback();
    new _lit_labs_context__WEBPACK_IMPORTED_MODULE_4__.ContextProvider(this, _services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__.PokemonServiceContext, {
      pokemonService: () => {
        if (!this.pokemonService) {
          this.pokemonService = new _services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__.PokemonInternalService();
        }
        return this.pokemonService;
      }
    });
  }
  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<div class="app"><pokemon-catalog></pokemon-catalog></div> `;
  }
};
PokemonApp.styles = _styles_scss__WEBPACK_IMPORTED_MODULE_5__["default"];
PokemonApp = __decorateClass([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)("pokemon-app")
], PokemonApp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ1c7QUFDYztBQUk1QjtBQUVnQjtBQUNqQjtBQUU1QixJQUFNLGFBQU4sY0FBeUIsMkNBQVUsQ0FBQztBQUFBLEVBS2hDLG9CQUFvQjtBQUMzQixVQUFNLGtCQUFrQjtBQUN4QixRQUFJLDhEQUFlLENBQUMsTUFBTSw0RUFBcUIsRUFBRTtBQUFBLE1BQy9DLGdCQUFnQixNQUFNO0FBQ3BCLFlBQUksQ0FBQyxLQUFLLGdCQUFnQjtBQUN4QixlQUFLLGlCQUFpQixJQUFJLDZFQUFzQixDQUFDO0FBQUEsUUFDbkQ7QUFDQSxlQUFPLEtBQUs7QUFBQSxNQUNkO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ21CLFNBQVM7QUFDMUIsV0FBTyxxQ0FBSTtBQUFKLEVBQ1Q7QUFDRjtBQW5CYSxXQUNLLFNBQVMsb0RBQU07QUFEcEIsYUFBTjtBQUFBLEVBRE4sZ0VBQWEsQ0FBQyxhQUFhO0FBQUEsR0FDZiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9zcmMvY29tcG9uZW50cy9wb2tlbW9uLWNhdGFsb2cvcG9rZW1vbi1jYXRhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vc3JjL2NvbXBvbmVudHMvcG9rZW1vbi1pbWFnZS9wb2tlbW9uLWltYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vc3JjL3NlcnZpY2VzL3Bva2Vtb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vc3JjL2NvbXBvbmVudHMvcG9rZW1vbi1jYXRhbG9nL3Bva2Vtb24tY2F0YWxvZy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vc3JjL2NvbXBvbmVudHMvcG9rZW1vbi1pbWFnZS9wb2tlbW9uLWltYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0LWxhYnMvY29udGV4dC9kZXZlbG9wbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQtbGFicy9jb250ZXh0L2RldmVsb3BtZW50L2xpYi9jb250ZXh0LWtleS5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQtbGFicy9jb250ZXh0L2RldmVsb3BtZW50L2xpYi9jb250ZXh0LXJlcXVlc3QtZXZlbnQuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0LWxhYnMvY29udGV4dC9kZXZlbG9wbWVudC9saWIvY29udGV4dC1yb290LmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC1sYWJzL2NvbnRleHQvZGV2ZWxvcG1lbnQvbGliL2NvbnRyb2xsZXJzL2NvbnRleHQtY29uc3VtZXIuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0LWxhYnMvY29udGV4dC9kZXZlbG9wbWVudC9saWIvY29udHJvbGxlcnMvY29udGV4dC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQtbGFicy9jb250ZXh0L2RldmVsb3BtZW50L2xpYi9kZWNvcmF0b3JzL2NvbnRleHQtcHJvdmlkZWQuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0LWxhYnMvY29udGV4dC9kZXZlbG9wbWVudC9saWIvZGVjb3JhdG9ycy9jb250ZXh0LXByb3ZpZGVyLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC1sYWJzL2NvbnRleHQvZGV2ZWxvcG1lbnQvbGliL3ZhbHVlLW5vdGlmaWVyLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2Nzcy10YWcuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9iYXNlLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvY3VzdG9tLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9ldmVudC1vcHRpb25zLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hbGwuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS1hc3NpZ25lZC1lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L2RlY29yYXRvcnMvcXVlcnktYXN5bmMuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvZGVjb3JhdG9ycy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9saXQtZWxlbWVudC9kZXZlbG9wbWVudC9saXQtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2lzLXNlcnZlci5qcyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2xpdC1odG1sLmpzIiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvbGl0L2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9saXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb2NrZW1vbi1jYXRhbG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ja2Vtb24tY2F0YWxvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvY2tlbW9uLWNhdGFsb2cvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2tlbW9uSW1hZ2VDb21wb25lbnQgfSBmcm9tIFwiQGNvbXBvbmVudHMvcG9rZW1vbi1pbWFnZS9wb2tlbW9uLWltYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGV4dENvbnN1bWVyIH0gZnJvbSBcIkBsaXQtbGFicy9jb250ZXh0XCI7XG5pbXBvcnQgeyBQb2tlbW9uSW50ZXJuYWxTZXJ2aWNlLCBQb2tlbW9uTGlzdCwgUG9rZW1vblNlcnZpY2VDb250ZXh0IH0gZnJvbSBcIkBzZXJ2aWNlcy9wb2tlbW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tIFwibGl0L2RlY29yYXRvcnMuanNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcG9rZW1vbi1jYXRhbG9nLmNvbXBvbmVudC5zY3NzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwicG9rZW1vbi1jYXRhbG9nXCIpXG5leHBvcnQgY2xhc3MgUG9rZW1vbkNhdGFsb2cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KClcbiAgb25QcmV2PzogKCkgPT4gdm9pZDtcblxuICBAcHJvcGVydHkoKVxuICBvbk5leHQ/OiAoKSA9PiB2b2lkO1xuXG4gIEBzdGF0ZSgpXG4gIHBva2Vtb24hOiBQb2tlbW9uTGlzdDtcblxuICBAc3RhdGUoKVxuICBwb2tlbW9uU2VydmljZSE6IFBva2Vtb25JbnRlcm5hbFNlcnZpY2U7XG5cbiAgc3RhdGljIG92ZXJyaWRlIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIG5ldyBQb2tlbW9uSW1hZ2VDb21wb25lbnQoKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgbmV3IENvbnRleHRDb25zdW1lcihcbiAgICAgIHRoaXMsXG4gICAgICBQb2tlbW9uU2VydmljZUNvbnRleHQsXG4gICAgICBjb250ZXh0ID0+IHtcbiAgICAgICAgdGhpcy5wb2tlbW9uU2VydmljZSA9IGNvbnRleHQucG9rZW1vblNlcnZpY2UoKTtcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBpZiAodGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9uKSB0aGlzLmxvYWRQb2tlbW9uKCk7XG4gIH1cblxuICBpc05leHREaXNhYmxlZCA9ICgpID0+ICF0aGlzLnBva2Vtb24ubmV4dCB8fCAhdGhpcy5wb2tlbW9uU2VydmljZTtcbiAgaXNQcmV2RGlzYWJsZWQgPSAoKSA9PiAhdGhpcy5wb2tlbW9uLnByZXZpb3VzIHx8ICF0aGlzLnBva2Vtb25TZXJ2aWNlO1xuXG4gIGxvYWRQb2tlbW9uID0gYXN5bmMgKCkgPT4gKHRoaXMucG9rZW1vbiA9IGF3YWl0IHRoaXMucG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbkJ5T2Zmc2V0KCkpO1xuXG4gIGxvYWROZXh0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMub25OZXh0ICYmIHRoaXMub25OZXh0KCk7XG4gICAgdGhpcy5wb2tlbW9uID0gYXdhaXQgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9uKHRoaXMucG9rZW1vbi5uZXh0KTtcbiAgfTtcblxuICBsb2FkUHJldiA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLnBva2Vtb24gPSBhd2FpdCB0aGlzLnBva2Vtb25TZXJ2aWNlLmdldFBva2Vtb24odGhpcy5wb2tlbW9uLnByZXZpb3VzKTtcbiAgICB0aGlzLm9uUHJldiAmJiB0aGlzLm9uUHJldigpO1xuICB9O1xuXG4gIGdldFBva2Vtb25JbmRleCA9ICgpID0+XG4gICAgTnVtYmVyKFxuICAgICAgdGhpcy5wb2tlbW9uPy5yZXN1bHRzWzBdLnVybFxuICAgICAgICAuc3BsaXQoXCIvXCIpXG4gICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50KVxuICAgICAgICAucG9wKClcbiAgICApO1xuICBnZXRQb2tlbW9uTmFtZSA9ICgpID0+IHRoaXMucG9rZW1vbj8ucmVzdWx0c1swXS5uYW1lO1xuICBnZXRPZmZzZXRGcm9tSW5kZXggPSAoaW5kZXg6IHN0cmluZykgPT4gKE51bWJlcihpbmRleCkgLSAxKS50b1N0cmluZygpO1xuXG4gIGZldGNoUG9rZW1vbkJ5T2Zmc2V0ID0gYXN5bmMgKGluZGV4OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgdGhpcy5wb2tlbW9uU2VydmljZT8uZ2V0UG9rZW1vbkJ5T2Zmc2V0KHRoaXMuZ2V0T2Zmc2V0RnJvbUluZGV4KGluZGV4KSk7XG4gICAgaWYgKHBva2Vtb24/LnJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBva2Vtb24gPSBwb2tlbW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChgcG9rZW1vbiAke2luZGV4fSBub3QgZm91bmRgKTtcbiAgICB9XG4gIH07XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbmRlcigpIHtcbiAgICByZXR1cm4gIXRoaXMucG9rZW1vblxuICAgICAgPyBcIlwiXG4gICAgICA6IGh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGFsb2dcIj5cbiAgICAgICAgICAgIDxwb2tlbW9uLWltYWdlIHBva2Vtb25JbmRleD1cIiR7dGhpcy5nZXRQb2tlbW9uSW5kZXgoKX1cIj48L3Bva2Vtb24taW1hZ2U+XG4gICAgICAgICAgICA8aDIgZGF0YS1ob29rPVwicG9rZW1vbi1uYW1lXCI+JHt0aGlzLnBva2Vtb24ucmVzdWx0c1swXS5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8cCBkYXRhLWhvb2s9XCJjb3VudFwiPiR7dGhpcy5nZXRQb2tlbW9uSW5kZXgoKX0gb2YgJHt0aGlzLnBva2Vtb24uY291bnR9PC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWhvb2s9XCJwcmV2XCIgQGNsaWNrPVwiJHt0aGlzLmxvYWRQcmV2fVwiIC5kaXNhYmxlZD1cIiR7dGhpcy5pc1ByZXZEaXNhYmxlZCgpfVwiPlByZXY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWhvb2s9XCJuZXh0XCIgQGNsaWNrPVwiJHt0aGlzLmxvYWROZXh0fVwiIC5kaXNhYmxlZD1cIiR7dGhpcy5pc05leHREaXNhYmxlZCgpfVwiPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHN0YXRlIH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzLmpzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Bva2Vtb24taW1hZ2UuY29tcG9uZW50LnNjc3NcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJwb2tlbW9uLWltYWdlXCIpXG5leHBvcnQgY2xhc3MgUG9rZW1vbkltYWdlQ29tcG9uZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBwb2tlbW9uSW5kZXghOiBudW1iZXI7XG5cbiAgQHN0YXRlKClcbiAgc2hvd0ZhbGxiYWNrSW1hZ2UgPSBmYWxzZTtcblxuICBzdGF0aWMgb3ZlcnJpZGUgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgb25JbWFnZUVycm9yID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2hvd0ZhbGxiYWNrSW1hZ2UgPSB0cnVlO1xuICB9O1xuXG4gIGdldFBva2Vtb25JbWFnZSA9ICgpID0+XG4gICAgYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi92ZXJzaW9ucy9nZW5lcmF0aW9uLXYvYmxhY2std2hpdGUvYW5pbWF0ZWQvJHt0aGlzLnBva2Vtb25JbmRleH0uZ2lmYDtcblxuICBnZXRGYWxsYmFja0ltYWdlID0gKCkgPT5cbiAgICBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLyR7dGhpcy5wb2tlbW9uSW5kZXh9LnBuZ2A7XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXY+XG4gICAgICAgICR7dGhpcy5zaG93RmFsbGJhY2tJbWFnZVxuICAgICAgICAgID8gaHRtbGAgPGltZ1xuICAgICAgICAgICAgICBkYXRhLWhvb2s9XCJwb2tlbW9uLWZhbGxiYWNrLWltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPVwiJHt0aGlzLmdldEZhbGxiYWNrSW1hZ2UoKX1cIlxuICAgICAgICAgICAgICBjbGFzcz1cInBva2Vtb24tZmFsbGJhY2tcIlxuICAgICAgICAgICAgICBhbHQ9XCJwb2tlbW9uXCJcbiAgICAgICAgICAgIC8+YFxuICAgICAgICAgIDogaHRtbGA8aW1nXG4gICAgICAgICAgICAgIGRhdGEtaG9vaz1cInBva2Vtb24taW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9XCIke3RoaXMuZ2V0UG9rZW1vbkltYWdlKCl9XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwb2tlbW9uXCJcbiAgICAgICAgICAgICAgYWx0PVwicG9rZW1vblwiXG4gICAgICAgICAgICAgIEBlcnJvcj1cIiR7dGhpcy5vbkltYWdlRXJyb3J9XCJcbiAgICAgICAgICAgIC8+YH1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwiQGxpdC1sYWJzL2NvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IFBva2Vtb25TZXJ2aWNlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UG9rZW1vblNlcnZpY2U+KFxuICBcIl9fcG9rZW1vbl9jb250ZXh0X19cIlxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uU2VydmljZSB7XG4gIHBva2Vtb25TZXJ2aWNlOiAoKSA9PiBQb2tlbW9uSW50ZXJuYWxTZXJ2aWNlO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uTGlzdCB7XG4gIGNvdW50OiBudW1iZXI7XG4gIG5leHQ6IHN0cmluZyB8IG51bGw7XG4gIHByZXZpb3VzOiBzdHJpbmcgfCBudWxsO1xuICByZXN1bHRzOiBQb2tlbW9uW107XG59XG5cbmV4cG9ydCBjbGFzcyBQb2tlbW9uSW50ZXJuYWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBiYXNlVXJsID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb25cIjtcbiAgZ2V0UG9rZW1vbiA9IGFzeW5jICh1cmw6IHN0cmluZyB8IFVSTCk6IFByb21pc2U8UG9rZW1vbkxpc3Q+ID0+XG4gICAgYXdhaXQgKGF3YWl0IGZldGNoKHVybCkpLmpzb24oKTtcblxuICBnZXRQb2tlbW9uQnlPZmZzZXQgPSBhc3luYyAob2Zmc2V0OiBzdHJpbmcgPSBcIjBcIik6IFByb21pc2U8UG9rZW1vbkxpc3Q+ID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgbGltaXQ6IFwiMVwiLCBvZmZzZXQgfSk7XG4gICAgY29uc3QgZmV0Y2hVcmwgPSBuZXcgVVJMKHRoaXMuYmFzZVVybCk7XG4gICAgZmV0Y2hVcmwuc2VhcmNoID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UG9rZW1vbihmZXRjaFVybCk7XG4gIH07XG59XG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcbmV4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgOmhvc3R7ZGlzcGxheTpmbGV4O2hlaWdodDo5NXZofS5jYXRhbG9ne2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24tc2VsZjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMHZ3fWA7XG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcbmV4cG9ydCBjb25zdCBzdHlsZXMgPSBjc3NgLnBva2Vtb257aGVpZ2h0OjRyZW19LnBva2Vtb24tZmFsbGJhY2t7aGVpZ2h0OjhyZW19YDtcbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiIsImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IGNzc2AuYXBwe2JhY2tncm91bmQtY29sb3I6IzgwYTdmNzttaW4taGVpZ2h0Ojk1dmg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2ZvbnQtc2l6ZTpjYWxjKDEwcHggKyAydm1pbik7Y29sb3I6I2ZmZn1gO1xuZXhwb3J0IGRlZmF1bHQgc3R5bGVzO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5leHBvcnQgeyBDb250ZXh0UmVxdWVzdEV2ZW50IGFzIENvbnRleHRFdmVudCwgfSBmcm9tICcuL2xpYi9jb250ZXh0LXJlcXVlc3QtZXZlbnQuanMnO1xuZXhwb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJy4vbGliL2NvbnRleHQta2V5LmpzJztcbmV4cG9ydCB7IENvbnRleHRDb25zdW1lciB9IGZyb20gJy4vbGliL2NvbnRyb2xsZXJzL2NvbnRleHQtY29uc3VtZXIuanMnO1xuZXhwb3J0IHsgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi9saWIvY29udHJvbGxlcnMvY29udGV4dC1wcm92aWRlci5qcyc7XG5leHBvcnQgeyBDb250ZXh0Um9vdCB9IGZyb20gJy4vbGliL2NvbnRleHQtcm9vdC5qcyc7XG5leHBvcnQgeyBjb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL2xpYi9kZWNvcmF0b3JzL2NvbnRleHQtcHJvdmlkZXIuanMnO1xuZXhwb3J0IHsgY29udGV4dFByb3ZpZGVkIH0gZnJvbSAnLi9saWIvZGVjb3JhdG9ycy9jb250ZXh0LXByb3ZpZGVkLmpzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLyoqXG4gKiBBIGhlbHBlciBtZXRob2QgZm9yIGNyZWF0aW5nIGEgY29udGV4dCBrZXkgd2l0aCB0aGUgYXBwcm9wcmlhdGUgdHlwZVxuICpcbiAqIEBwYXJhbSBrZXkgYSBjb250ZXh0IGtleSB2YWx1ZVxuICogQHJldHVybnMgdGhlIGNvbnRleHQga2V5IHZhbHVlIHdpdGggdGhlIGNvcnJlY3QgdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChrZXkpIHtcbiAgICByZXR1cm4ga2V5O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC1rZXkuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKipcbiAqIEFuIGV2ZW50IGZpcmVkIGJ5IGEgY29udGV4dCByZXF1ZXN0ZXIgdG8gc2lnbmFsIGl0IGRlc2lyZXMgYSBzcGVjaWZpZWQgY29udGV4dCB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gKlxuICogQSBwcm92aWRlciBzaG91bGQgaW5zcGVjdCB0aGUgYGNvbnRleHRgIHByb3BlcnR5IG9mIHRoZSBldmVudCB0byBkZXRlcm1pbmUgaWYgaXQgaGFzIGEgdmFsdWUgdGhhdCBjYW5cbiAqIHNhdGlzZnkgdGhlIHJlcXVlc3QsIGNhbGxpbmcgdGhlIGBjYWxsYmFja2Agd2l0aCB0aGUgcmVxdWVzdGVkIHZhbHVlIGlmIHNvLlxuICpcbiAqIElmIHRoZSByZXF1ZXN0ZWQgY29udGV4dCBldmVudCBjb250YWlucyBhIHRydXRoeSBgc3Vic2NyaWJlYCB2YWx1ZSwgdGhlbiBhIHByb3ZpZGVyIGNhbiBjYWxsIHRoZSBjYWxsYmFja1xuICogbXVsdGlwbGUgdGltZXMgaWYgdGhlIHZhbHVlIGlzIGNoYW5nZWQsIGlmIHRoaXMgaXMgdGhlIGNhc2UgdGhlIHByb3ZpZGVyIHNob3VsZCBwYXNzIGFuIGB1bnN1YnNjcmliZWBcbiAqIG1ldGhvZCB0byB0aGUgY2FsbGJhY2sgd2hpY2ggY29uc3VtZXJzIGNhbiBpbnZva2UgdG8gaW5kaWNhdGUgdGhleSBubyBsb25nZXIgd2lzaCB0byByZWNlaXZlIHRoZXNlIHVwZGF0ZXMuXG4gKlxuICogSWYgbm8gYHN1YnNjcmliZWAgdmFsdWUgaXMgcHJlc2VudCBpbiB0aGUgZXZlbnQsIHRoZW4gdGhlIHByb3ZpZGVyIGNhbiBhc3N1bWUgdGhhdCB0aGlzIGlzIGEgJ29uZSB0aW1lJ1xuICogcmVxdWVzdCBmb3IgdGhlIGNvbnRleHQgYW5kIGNhbiB0aGVyZWZvcmUgbm90IHRyYWNrIHRoZSBjb25zdW1lci5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRSZXF1ZXN0RXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBrZXkgdG8gcmVxdWVzdFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZSBjb250ZXh0IHdpdGggdGhlIHNwZWNpZmllZCBrZXkgaXMgYXZhaWxhYmxlXG4gICAgICogQHBhcmFtIHN1YnNjcmliZSBhbiBvcHRpb25hbCBhcmd1bWVudCwgaWYgdHJ1ZSBpbmRpY2F0ZXMgd2Ugd2FudCB0byBzdWJzY3JpYmUgdG8gZnV0dXJlIHVwZGF0ZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjYWxsYmFjaywgc3Vic2NyaWJlKSB7XG4gICAgICAgIHN1cGVyKCdjb250ZXh0LXJlcXVlc3QnLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQtcmVxdWVzdC1ldmVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IENvbnRleHRSZXF1ZXN0RXZlbnQgfSBmcm9tICcuL2NvbnRleHQtcmVxdWVzdC1ldmVudC5qcyc7XG4vKipcbiAqIEEgQ29udGV4dFJvb3QgY2FuIGJlIHVzZWQgdG8gZ2F0aGVyIHVuc2F0aXNmaWVkIGNvbnRleHQgcmVxdWVzdHMgYW5kIHJlZGlzcGF0Y2ggdGhlc2VcbiAqIHJlcXVlc3RzIHdoZW4gbmV3IHByb3ZpZGVycyB3aGljaCBzYXRpc2Z5IG1hdGNoaW5nIGNvbnRleHQga2V5cyBhcmUgYXZhaWxhYmxlLlxuICovXG5leHBvcnQgY2xhc3MgQ29udGV4dFJvb3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBlbmRpbmdDb250ZXh0UmVxdWVzdHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMub25Db250ZXh0UHJvdmlkZXIgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBlbmRpbmdSZXF1ZXN0cyA9IHRoaXMucGVuZGluZ0NvbnRleHRSZXF1ZXN0cy5nZXQoZXYuY29udGV4dCk7XG4gICAgICAgICAgICBpZiAoIXBlbmRpbmdSZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8gbm8gcGVuZGluZyByZXF1ZXN0cyBmb3IgdGhpcyBwcm92aWRlciBhdCB0aGlzIHRpbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNsZWFyIG91ciBsaXN0LCBhbnkgc3RpbGwgdW5zYXRpc2ZpZWQgcmVxdWVzdHMgd2lsbCByZS1hZGQgdGhlbXNlbHZlc1xuICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ29udGV4dFJlcXVlc3RzLmRlbGV0ZShldi5jb250ZXh0KTtcbiAgICAgICAgICAgIC8vIGxvb3Agb3ZlciBhbGwgcGVuZGluZyByZXF1ZXN0cyBhbmQgcmUtZGlzcGF0Y2ggdGhlbSBmcm9tIHRoZWlyIHNvdXJjZVxuICAgICAgICAgICAgcGVuZGluZ1JlcXVlc3RzLmZvckVhY2goKHJlcXVlc3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVxdWVzdC5lbGVtZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVxdWVzdC5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICAvLyByZWRpc3BhdGNoIGlmIHdlIHN0aWxsIGhhdmUgYWxsIHRoZSBwYXJ0cyBvZiB0aGUgcmVxdWVzdFxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ29udGV4dFJlcXVlc3RFdmVudChldi5jb250ZXh0LCBjYWxsYmFjaywgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uQ29udGV4dFJlcXVlc3QgPSAoZXYpID0+IHtcbiAgICAgICAgICAgIC8vIGV2ZW50cyB0aGF0IGFyZSBub3Qgc3Vic2NyaWJpbmcgc2hvdWxkIG5vdCBiZSBjYXB0dXJlZFxuICAgICAgICAgICAgaWYgKCFldi5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzdG9yZSBhIHdlYWtyZWYgdG8gdGhpcyBlbGVtZW50IHVuZGVyIHRoZSBjb250ZXh0IGtleVxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBldi50YXJnZXQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGV2LmNhbGxiYWNrLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBwZW5kaW5nQ29udGV4dFJlcXVlc3RzID0gdGhpcy5wZW5kaW5nQ29udGV4dFJlcXVlc3RzLmdldChldi5jb250ZXh0KTtcbiAgICAgICAgICAgIGlmICghcGVuZGluZ0NvbnRleHRSZXF1ZXN0cykge1xuICAgICAgICAgICAgICAgIHBlbmRpbmdDb250ZXh0UmVxdWVzdHMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ29udGV4dFJlcXVlc3RzLnNldChldi5jb250ZXh0LCBwZW5kaW5nQ29udGV4dFJlcXVlc3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5PVEU6IGlmIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCBtdWx0aXBsZSB0aW1lcyBpdCB3aWxsIGFkZCBpdHNlbGZcbiAgICAgICAgICAgIC8vIHRvIHRoaXMgc2V0IG11bHRpcGxlIHRpbWVzIHNpbmNlIHRoZSBzZXQgaWRlbnRpZnkgb2YgdGhlIHJlcXVlc3RcbiAgICAgICAgICAgIC8vIG9iamVjdCB3aWxsIGJlIHVuaXF1ZSBlYWNoIHRpbWUuXG4gICAgICAgICAgICBwZW5kaW5nQ29udGV4dFJlcXVlc3RzLmFkZChyZXF1ZXN0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXR0YWNoIHRoZSBDb250ZXh0Um9vdCB0byBhIGdpdmVuIGVsZW1lbnQgdG8gaW50ZXJjZXB0IGBjb250ZXh0LXJlcXVlc3RgIGFuZFxuICAgICAqIGBjb250ZXh0LXByb3ZpZGVyYCBldmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBhbiBlbGVtZW50IHRvIGFkZCBldmVudCBsaXN0ZW5lcnMgdG9cbiAgICAgKi9cbiAgICBhdHRhY2goZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHQtcmVxdWVzdCcsIHRoaXMub25Db250ZXh0UmVxdWVzdCk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dC1wcm92aWRlcicsIHRoaXMub25Db250ZXh0UHJvdmlkZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBDb250ZXh0Um9vdCBldmVudCBsaXN0ZW5lcnMgZnJvbSBhIGdpdmVuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBhbiBlbGVtZW50IGZyb20gd2hpY2ggdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGRldGFjaChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dC1yZXF1ZXN0JywgdGhpcy5vbkNvbnRleHRSZXF1ZXN0KTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0LXByb3ZpZGVyJywgdGhpcy5vbkNvbnRleHRQcm92aWRlcik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC1yb290LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgQ29udGV4dFJlcXVlc3RFdmVudCB9IGZyb20gJy4uL2NvbnRleHQtcmVxdWVzdC1ldmVudC5qcyc7XG4vKipcbiAqIENvbnRleHRDb25zdW1lciBpcyBhIFJlYWN0aXZlQ29udHJvbGxlciB3aGljaCBiaW5kcyBhIGN1c3RvbS1lbGVtZW50J3NcbiAqIGxpZmVjeWNsZSB0byB0aGUgQ29udGV4dCBBUEkuIFdoZW4gYW4gZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTSBpdFxuICogd2lsbCBlbWl0IHRoZSBjb250ZXh0LXJlcXVlc3QgZXZlbnQsIGludm9raW5nIHRoZSBjYWxsYmFjayBzZXQgb24gdGhlXG4gKiBjb250cm9sbGVyIHdoZW4gdGhlIGNvbnRleHQgcmVxdWVzdCBpcyBzYXRpc2ZpZWQuIEl0IHdpbGwgYWxzbyBjYWxsXG4gKiB0aGUgZGlzcG9zZSBtZXRob2QgcHJvdmlkZWQgYnkgdGhlIENvbnRleHQgQVBJIHdoZW4gdGhlIGVsZW1lbnQgaXNcbiAqIGRpc2Nvbm5lY3RlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRDb25zdW1lciB7XG4gICAgY29uc3RydWN0b3IoaG9zdCwgY29udGV4dCwgY2FsbGJhY2ssIHN1YnNjcmliZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIHRoaXMucHJvdmlkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgfVxuICAgIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hSZXF1ZXN0KCk7XG4gICAgfVxuICAgIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3BhdGNoUmVxdWVzdCgpIHtcbiAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQobmV3IENvbnRleHRSZXF1ZXN0RXZlbnQodGhpcy5jb250ZXh0LCAodmFsdWUsIHVuc3Vic2NyaWJlKSA9PiB7XG4gICAgICAgICAgICAvLyBzb21lIHByb3ZpZGVycyB3aWxsIHBhc3MgYW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24gaW5kaWNhdGluZyB0aGV5IG1heSBwcm92aWRlIGZ1dHVyZSB2YWx1ZXNcbiAgICAgICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHVuc3Vic2NyaWJlIGZ1bmN0aW9uIGNoYW5nZXMgdGhpcyBpbXBsaWVzIHdlIGhhdmUgY2hhbmdlZCBwcm92aWRlclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlICE9PSB1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhbnVwIHRoZSBvbGQgcHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGRvbid0IHN1cHBvcnQgc3Vic2NyaXB0aW9uLCBpbW1lZGlhdGVseSB1bnN1YnNjcmliZVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSB2YWx1ZSBzbyB0aGF0IGl0IGNhbiBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgY29udHJvbGxlclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgLy8gc2NoZWR1bGUgYW4gdXBkYXRlIGluIGNhc2UgdGhpcyB2YWx1ZSBpcyB1c2VkIGluIGEgdGVtcGxhdGVcbiAgICAgICAgICAgIHRoaXMuaG9zdC5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgICAgICAvLyBvbmx5IGludm9rZSBjYWxsYmFjayBpZiB3ZSBhcmUgZWl0aGVyIGV4cGVjdGluZyB1cGRhdGVzIG9yIGhhdmUgbm90IHlldFxuICAgICAgICAgICAgLy8gYmVlbiBwcm92aWRlZCBhIHZhbHVlXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvdmlkZWQgfHwgdGhpcy5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKHZhbHVlLCB1bnN1YnNjcmliZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHVuc3Vic2NyaWJlO1xuICAgICAgICB9LCB0aGlzLnN1YnNjcmliZSkpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQtY29uc3VtZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBWYWx1ZU5vdGlmaWVyIH0gZnJvbSAnLi4vdmFsdWUtbm90aWZpZXIuanMnO1xuZXhwb3J0IGNsYXNzIENvbnRleHRQcm92aWRlckV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQgd2hpY2ggdGhpcyBwcm92aWRlciBjYW4gcHJvdmlkZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoJ2NvbnRleHQtcHJvdmlkZXInLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbn1cbi8qKlxuICogQSBSZWFjdGl2ZUNvbnRyb2xsZXIgd2hpY2ggY2FuIGFkZCBjb250ZXh0IHByb3ZpZGVyIGJlaGF2aW9yIHRvIGFcbiAqIGN1c3RvbS1lbGVtZW50LlxuICpcbiAqIFRoaXMgY29udHJvbGxlciBzaW1wbHkgbGlzdGVucyB0byB0aGUgYGNvbnRleHQtcmVxdWVzdGAgZXZlbnQgd2hlblxuICogdGhlIGhvc3QgaXMgY29ubmVjdGVkIHRvIHRoZSBET00gYW5kIHJlZ2lzdGVycyB0aGUgcmVjZWl2ZWQgY2FsbGJhY2tzXG4gKiBhZ2FpbnN0IGl0cyBvYnNlcnZhYmxlIENvbnRleHQgaW1wbGVtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0UHJvdmlkZXIgZXh0ZW5kcyBWYWx1ZU5vdGlmaWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0LCBjb250ZXh0LCBpbml0aWFsVmFsdWUpIHtcbiAgICAgICAgc3VwZXIoaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5vbkNvbnRleHRSZXF1ZXN0ID0gKGV2KSA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IGNhbGwgdGhlIGNhbGxiYWNrIGlmIHRoZSBjb250ZXh0IG1hdGNoZXMuIFxuICAgICAgICAgICAgLy8gQWxzbywgaW4gY2FzZSBhbiBlbGVtZW50IGlzIGEgY29uc3VtZXIgQU5EIGEgcHJvdmlkZXIgXG4gICAgICAgICAgICAvLyBvZiB0aGUgc2FtZSBjb250ZXh0LCB3ZSB3YW50IHRvIGF2b2lkIHRoZSBlbGVtZW50IHRvIHNlbGYtcmVnaXN0ZXIuXG4gICAgICAgICAgICAvLyBUaGUgY2hlY2sgb24gY29tcG9zZWRQYXRoIChhcyBvcHBvc2VkIHRvIGV2LnRhcmdldCkgaXMgdG8gY292ZXIgY2FzZXNcbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSBjb25zdW1lciBpcyBpbiB0aGUgc2hhZG93RG9tIG9mIHRoZSBwcm92aWRlciAoaW4gd2hpY2ggY2FzZSwgXG4gICAgICAgICAgICAvLyBldmVudC50YXJnZXQgPT09IHRoaXMuaG9zdCBiZWNhdXNlIG9mIGV2ZW50IHJldGFyZ2V0aW5nKS5cbiAgICAgICAgICAgIGlmIChldi5jb250ZXh0ICE9PSB0aGlzLmNvbnRleHQgfHwgZXYuY29tcG9zZWRQYXRoKClbMF0gPT09IHRoaXMuaG9zdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5hZGRDYWxsYmFjayhldi5jYWxsYmFjaywgZXYuc3Vic2NyaWJlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5ob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIGF0dGFjaExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHQtcmVxdWVzdCcsIHRoaXMub25Db250ZXh0UmVxdWVzdCk7XG4gICAgfVxuICAgIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgICAgIC8vIGVtaXQgYW4gZXZlbnQgdG8gc2lnbmFsIGEgcHJvdmlkZXIgaXMgYXZhaWxhYmxlIGZvciB0aGlzIGNvbnRleHRcbiAgICAgICAgdGhpcy5ob3N0LmRpc3BhdGNoRXZlbnQobmV3IENvbnRleHRQcm92aWRlckV2ZW50KHRoaXMuY29udGV4dCkpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQtcHJvdmlkZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvYmFzZS5qcyc7XG5pbXBvcnQgeyBDb250ZXh0Q29uc3VtZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9jb250ZXh0LWNvbnN1bWVyLmpzJztcbi8qXG4gKiBJTVBPUlRBTlQ6IEZvciBjb21wYXRpYmlsaXR5IHdpdGggdHNpY2tsZSBhbmQgdGhlIENsb3N1cmUgSlMgY29tcGlsZXIsIGFsbFxuICogcHJvcGVydHkgZGVjb3JhdG9ycyAoYnV0IG5vdCBjbGFzcyBkZWNvcmF0b3JzKSBpbiB0aGlzIGZpbGUgdGhhdCBoYXZlXG4gKiBhbiBARXhwb3J0RGVjb3JhdGVkSXRlbXMgYW5ub3RhdGlvbiBtdXN0IGJlIGRlZmluZWQgYXMgYSByZWd1bGFyIGZ1bmN0aW9uLFxuICogbm90IGFuIGFycm93IGZ1bmN0aW9uLlxuICovXG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgYWRkcyBhIENvbnRleHRDb25zdW1lciBjb250cm9sbGVyIHRvIHRoZSBjb21wb25lbnRcbiAqIHdoaWNoIHdpbGwgdHJ5IGFuZCByZXRyaWV2ZSBhIHZhbHVlIGZvciB0aGUgcHJvcGVydHkgdmlhIHRoZSBDb250ZXh0IEFQSS5cbiAqXG4gKiBAcGFyYW0gY29udGV4dCBBIENvbnRleHQgaWRlbnRpZmllciB2YWx1ZSBjcmVhdGVkIHZpYSBgY3JlYXRlQ29udGV4dGBcbiAqIEBwYXJhbSBzdWJzY3JpYmUgQW4gb3B0aW9uYWwgYm9vbGVhbiB3aGljaCB3aGVuIHRydWUgYWxsb3dzIHRoZSB2YWx1ZSB0byBiZSB1cGRhdGVkXG4gKiAgIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7bG9nZ2VyQ29udGV4dCwgTG9nZ2VyfSBmcm9tICdjb21tdW5pdHktcHJvdG9jb2xzL2xvZ2dlcic7XG4gKlxuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQGNvbnRleHRQcm92aWRlZCh7Y29udGV4dDogbG9nZ2VyQ29udGV4dH0pXG4gKiAgIGxvZ2dlcj86IExvZ2dlcjtcbiAqXG4gKiAgIGRvVGhpbmcoKSB7XG4gKiAgICAgdGhpcy5sb2dnZXIhLmxvZygndGhpbmcgd2FzIGRvbmUnKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250ZXh0UHJvdmlkZWQoeyBjb250ZXh0OiBjb250ZXh0LCBzdWJzY3JpYmUsIH0pIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGZpbmlzaGVyOiAoY3RvciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY3Rvci5hZGRJbml0aWFsaXplcigoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ldyBDb250ZXh0Q29uc3VtZXIoZWxlbWVudCwgY29udGV4dCwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIGhhdmUgdG8gZm9yY2UgdGhlIHByb3BlcnR5IG9uIHRoZSB0eXBlXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9LCBzdWJzY3JpYmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LXByb3ZpZGVkLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2Jhc2UuanMnO1xuaW1wb3J0IHsgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvY29udGV4dC1wcm92aWRlci5qcyc7XG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGFkZHMgYSBDb250ZXh0Q29uc3VtZXIgY29udHJvbGxlciB0byB0aGUgY29tcG9uZW50XG4gKiB3aGljaCB3aWxsIHRyeSBhbmQgcmV0cmlldmUgYSB2YWx1ZSBmb3IgdGhlIHByb3BlcnR5IHZpYSB0aGUgQ29udGV4dCBBUEkuXG4gKlxuICogQHBhcmFtIGNvbnRleHQgQSBDb250ZXh0IGlkZW50aWZpZXIgdmFsdWUgY3JlYXRlZCB2aWEgYGNyZWF0ZUNvbnRleHRgXG4gKiBAcGFyYW0gbXVsdGlwbGUgQW4gb3B0aW9uYWwgYm9vbGVhbiB3aGljaCB3aGVuIHRydWUgYWxsb3dzIHRoZSB2YWx1ZSB0byBiZSB1cGRhdGVkXG4gKiAgIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQge2xvZ2dlckNvbnRleHR9IGZyb20gJ2NvbW11bml0eS1wcm90b2NvbHMvbG9nZ2VyJztcbiAqXG4gKiBjbGFzcyBNeUVsZW1lbnQge1xuICogICBAY29udGV4dFByb3ZpZGVkKGxvZ2dlckNvbnRleHQpXG4gKiAgIGxvZ2dlcjtcbiAqXG4gKiAgIGRvVGhpbmcoKSB7XG4gKiAgICAgdGhpcy5sb2dnZXIubG9nKCd0aGluZyB3YXMgZG9uZScpO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHRQcm92aWRlcih7IGNvbnRleHQ6IGNvbnRleHQsIH0pIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGZpbmlzaGVyOiAoY3RvciwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgICAgICBjdG9yLmFkZEluaXRpYWxpemVyKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlck1hcC5zZXQoZWxlbWVudCwgbmV3IENvbnRleHRQcm92aWRlcihlbGVtZW50LCBjb250ZXh0KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHByb3h5IGFueSBleGlzdGluZyBzZXR0ZXIgZm9yIHRoaXMgcHJvcGVydHkgYW5kIHVzZSBpdCB0b1xuICAgICAgICAgICAgLy8gbm90aWZ5IHRoZSBjb250cm9sbGVyIG9mIGFuIHVwZGF0ZWQgdmFsdWVcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGN0b3IucHJvdG90eXBlLCBuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFNldHRlciA9IGRlc2NyaXB0b3IgPT09IG51bGwgfHwgZGVzY3JpcHRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVzY3JpcHRvci5zZXQ7XG4gICAgICAgICAgICBjb25zdCBuZXdEZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICAgIC4uLmRlc2NyaXB0b3IsXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjb250cm9sbGVyTWFwLmdldCh0aGlzKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFNldHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkU2V0dGVyLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3Rvci5wcm90b3R5cGUsIG5hbWUsIG5ld0Rlc2NyaXB0b3IpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC1wcm92aWRlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbi8qKlxuICogQSBzaW1wbGUgY2xhc3Mgd2hpY2ggc3RvcmVzIGEgdmFsdWUsIGFuZCB0cmlnZ2VycyByZWdpc3RlcmVkIGNhbGxiYWNrcyB3aGVuIHRoZVxuICogdmFsdWUgaXMgY2hhbmdlZCB2aWEgaXRzIHNldHRlci5cbiAqXG4gKiBBbiBpbXBsZW1lbnRvciBtaWdodCB1c2Ugb3RoZXIgb2JzZXJ2YWJsZSBwYXR0ZXJucyBzdWNoIGFzIE1vYlggb3IgUmVkdXggdG8gZ2V0XG4gKiBiZWhhdmlvciBsaWtlIHRoaXMuIEJ1dCB0aGlzIGlzIGEgcHJldHR5IG1pbmltYWwgYXBwcm9hY2ggdGhhdCB3aWxsIGxpa2VseSB3b3JrXG4gKiBmb3IgYSBudW1iZXIgb2YgdXNlIGNhc2VzLlxuICovXG5leHBvcnQgY2xhc3MgVmFsdWVOb3RpZmllciB7XG4gICAgY29uc3RydWN0b3IoZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZU9ic2VydmVycyA9ICgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2NhbGxiYWNrLCBkaXNwb3Nlcl0gb2YgdGhpcy5jYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLl92YWx1ZSwgZGlzcG9zZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHNldCB2YWx1ZSh2KSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodik7XG4gICAgfVxuICAgIHNldFZhbHVlKHYsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlID0gZm9yY2UgfHwgIU9iamVjdC5pcyh2LCB0aGlzLl92YWx1ZSk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDYWxsYmFjayhjYWxsYmFjaywgc3Vic2NyaWJlKSB7XG4gICAgICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLnNldChjYWxsYmFjaywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBjbGVhckNhbGxiYWNrcygpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuY2xlYXIoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWx1ZS1ub3RpZmllci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmNvbnN0IE5PREVfTU9ERSA9IGZhbHNlO1xuY29uc3QgZ2xvYmFsID0gTk9ERV9NT0RFID8gZ2xvYmFsVGhpcyA6IHdpbmRvdztcbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGBhZG9wdGVkU3R5bGVTaGVldHNgLlxuICovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzID0gZ2xvYmFsLlNoYWRvd1Jvb3QgJiZcbiAgICAoZ2xvYmFsLlNoYWR5Q1NTID09PSB1bmRlZmluZWQgfHwgZ2xvYmFsLlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykgJiZcbiAgICAnYWRvcHRlZFN0eWxlU2hlZXRzJyBpbiBEb2N1bWVudC5wcm90b3R5cGUgJiZcbiAgICAncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGU7XG5jb25zdCBjb25zdHJ1Y3Rpb25Ub2tlbiA9IFN5bWJvbCgpO1xuY29uc3QgY3NzVGFnQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgYSBzdHJpbmcgb2YgQ1NTIHRleHQsIHRoYXQgbWF5IGJlIHVzZWQgdG8gY3JlYXRlIGEgQ1NTU3R5bGVTaGVldC5cbiAqXG4gKiBDU1NSZXN1bHQgaXMgdGhlIHJldHVybiB2YWx1ZSBvZiBgY3NzYC10YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbHMgYW5kXG4gKiBgdW5zYWZlQ1NTKClgLiBJbiBvcmRlciB0byBlbnN1cmUgdGhhdCBDU1NSZXN1bHRzIGFyZSBvbmx5IGNyZWF0ZWQgdmlhIHRoZVxuICogYGNzc2AgdGFnIGFuZCBgdW5zYWZlQ1NTKClgLCBDU1NSZXN1bHQgY2Fubm90IGJlIGNvbnN0cnVjdGVkIGRpcmVjdGx5LlxuICovXG5leHBvcnQgY2xhc3MgQ1NTUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihjc3NUZXh0LCBzdHJpbmdzLCBzYWZlVG9rZW4pIHtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgdGhpc1snXyRjc3NSZXN1bHQkJ10gPSB0cnVlO1xuICAgICAgICBpZiAoc2FmZVRva2VuICE9PSBjb25zdHJ1Y3Rpb25Ub2tlbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgICAgIHRoaXMuX3N0cmluZ3MgPSBzdHJpbmdzO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIGEgZ2V0dGVyIHNvIHRoYXQgaXQncyBsYXp5LiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyBzdHlsZXNoZWV0c1xuICAgIC8vIGFyZSBub3QgY3JlYXRlZCB1bnRpbCB0aGUgZmlyc3QgZWxlbWVudCBpbnN0YW5jZSBpcyBtYWRlLlxuICAgIGdldCBzdHlsZVNoZWV0KCkge1xuICAgICAgICAvLyBJZiBgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzYCBpcyB0cnVlIHRoZW4gd2UgYXNzdW1lIENTU1N0eWxlU2hlZXQgaXNcbiAgICAgICAgLy8gY29uc3RydWN0YWJsZS5cbiAgICAgICAgbGV0IHN0eWxlU2hlZXQgPSB0aGlzLl9zdHlsZVNoZWV0O1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5fc3RyaW5ncztcbiAgICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyAmJiBzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlYWJsZSA9IHN0cmluZ3MgIT09IHVuZGVmaW5lZCAmJiBzdHJpbmdzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgICAgIGlmIChjYWNoZWFibGUpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0ID0gY3NzVGFnQ2FjaGUuZ2V0KHN0cmluZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0eWxlU2hlZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICh0aGlzLl9zdHlsZVNoZWV0ID0gc3R5bGVTaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCkpLnJlcGxhY2VTeW5jKHRoaXMuY3NzVGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBjc3NUYWdDYWNoZS5zZXQoc3RyaW5ncywgc3R5bGVTaGVldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZVNoZWV0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzVGV4dDtcbiAgICB9XG59XG5jb25zdCB0ZXh0RnJvbUNTU1Jlc3VsdCA9ICh2YWx1ZSkgPT4ge1xuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgaWYgKHZhbHVlWydfJGNzc1Jlc3VsdCQnXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3NzVGV4dDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBgICtcbiAgICAgICAgICAgIGAke3ZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXQgdGFrZSBjYXJlIGAgK1xuICAgICAgICAgICAgYHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LmApO1xuICAgIH1cbn07XG4vKipcbiAqIFdyYXAgYSB2YWx1ZSBmb3IgaW50ZXJwb2xhdGlvbiBpbiBhIHtAbGlua2NvZGUgY3NzfSB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbC5cbiAqXG4gKiBUaGlzIGlzIHVuc2FmZSBiZWNhdXNlIHVudHJ1c3RlZCBDU1MgdGV4dCBjYW4gYmUgdXNlZCB0byBwaG9uZSBob21lXG4gKiBvciBleGZpbHRyYXRlIGRhdGEgdG8gYW4gYXR0YWNrZXIgY29udHJvbGxlZCBzaXRlLiBUYWtlIGNhcmUgdG8gb25seSB1c2VcbiAqIHRoaXMgd2l0aCB0cnVzdGVkIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgdW5zYWZlQ1NTID0gKHZhbHVlKSA9PiBuZXcgQ1NTUmVzdWx0KHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSksIHVuZGVmaW5lZCwgY29uc3RydWN0aW9uVG9rZW4pO1xuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggTGl0RWxlbWVudCdzXG4gKiB7QGxpbmtjb2RlIExpdEVsZW1lbnQuc3R5bGVzfSBwcm9wZXJ0eSB0byBzZXQgZWxlbWVudCBzdHlsZXMuXG4gKlxuICogRm9yIHNlY3VyaXR5IHJlYXNvbnMsIG9ubHkgbGl0ZXJhbCBzdHJpbmcgdmFsdWVzIGFuZCBudW1iZXIgbWF5IGJlIHVzZWQgaW5cbiAqIGVtYmVkZGVkIGV4cHJlc3Npb25zLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMge0BsaW5rY29kZSB1bnNhZmVDU1N9XG4gKiBtYXkgYmUgdXNlZCBpbnNpZGUgYW4gZXhwcmVzc2lvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGNzcyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgICBjb25zdCBjc3NUZXh0ID0gc3RyaW5ncy5sZW5ndGggPT09IDFcbiAgICAgICAgPyBzdHJpbmdzWzBdXG4gICAgICAgIDogdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+IGFjYyArIHRleHRGcm9tQ1NTUmVzdWx0KHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gICAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoY3NzVGV4dCwgc3RyaW5ncywgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gc3R5bGVzIHRvIGEgYHNoYWRvd1Jvb3RgLiBXaGVuIFNoYWRvdyBET00gaXNcbiAqIGF2YWlsYWJsZSBidXQgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgbm90LCBzdHlsZXMgYXJlIGFwcGVuZGVkIHRvIHRoZVxuICogYHNoYWRvd1Jvb3RgIHRvIFttaW1pYyBzcGVjIGJlaGF2aW9yXShodHRwczovL3dpY2cuZ2l0aHViLmlvL2NvbnN0cnVjdC1zdHlsZXNoZWV0cy8jdXNpbmctY29uc3RydWN0ZWQtc3R5bGVzaGVldHMpLlxuICogTm90ZSwgd2hlbiBzaGltbWluZyBpcyB1c2VkLCBhbnkgc3R5bGVzIHRoYXQgYXJlIHN1YnNlcXVlbnRseSBwbGFjZWQgaW50b1xuICogdGhlIHNoYWRvd1Jvb3Qgc2hvdWxkIGJlIHBsYWNlZCAqYmVmb3JlKiBhbnkgc2hpbW1lZCBhZG9wdGVkIHN0eWxlcy4gVGhpc1xuICogd2lsbCBtYXRjaCBzcGVjIGJlaGF2aW9yIHRoYXQgZ2l2ZXMgYWRvcHRlZCBzaGVldHMgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICogc2hhZG93Um9vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFkb3B0U3R5bGVzID0gKHJlbmRlclJvb3QsIHN0eWxlcykgPT4ge1xuICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICAgcmVuZGVyUm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPSBzdHlsZXMubWFwKChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IHMgOiBzLnN0eWxlU2hlZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBjb25zdCBub25jZSA9IGdsb2JhbFsnbGl0Tm9uY2UnXTtcbiAgICAgICAgICAgIGlmIChub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0O1xuICAgICAgICAgICAgcmVuZGVyUm9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldCA9IChzaGVldCkgPT4ge1xuICAgIGxldCBjc3NUZXh0ID0gJyc7XG4gICAgZm9yIChjb25zdCBydWxlIG9mIHNoZWV0LmNzc1J1bGVzKSB7XG4gICAgICAgIGNzc1RleHQgKz0gcnVsZS5jc3NUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlQ1NTKGNzc1RleHQpO1xufTtcbmV4cG9ydCBjb25zdCBnZXRDb21wYXRpYmxlU3R5bGUgPSBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgfHxcbiAgICAoTk9ERV9NT0RFICYmIGdsb2JhbC5DU1NTdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpXG4gICAgPyAocykgPT4gc1xuICAgIDogKHMpID0+IHMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0ID8gY3NzUmVzdWx0RnJvbVN0eWxlU2hlZXQocykgOiBzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXRhZy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmV4cG9ydCBjb25zdCBsZWdhY3lQcm90b3R5cGVNZXRob2QgPSAoZGVzY3JpcHRvciwgcHJvdG8sIG5hbWUpID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbmV4cG9ydCBjb25zdCBzdGFuZGFyZFByb3RvdHlwZU1ldGhvZCA9IChkZXNjcmlwdG9yLCBlbGVtZW50KSA9PiAoe1xuICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgIHBsYWNlbWVudDogJ3Byb3RvdHlwZScsXG4gICAga2V5OiBlbGVtZW50LmtleSxcbiAgICBkZXNjcmlwdG9yLFxufSk7XG4vKipcbiAqIEhlbHBlciBmb3IgZGVjb3JhdGluZyBhIHByb3BlcnR5IHRoYXQgaXMgY29tcGF0aWJsZSB3aXRoIGJvdGggVHlwZVNjcmlwdFxuICogYW5kIEJhYmVsIGRlY29yYXRvcnMuIFRoZSBvcHRpb25hbCBgZmluaXNoZXJgIGNhbiBiZSB1c2VkIHRvIHBlcmZvcm0gd29yayBvblxuICogdGhlIGNsYXNzLiBUaGUgb3B0aW9uYWwgYGRlc2NyaXB0b3JgIHNob3VsZCByZXR1cm4gYSBQcm9wZXJ0eURlc2NyaXB0b3JcbiAqIHRvIGluc3RhbGwgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0gZmluaXNoZXIge2Z1bmN0aW9ufSBPcHRpb25hbCBmaW5pc2hlciBtZXRob2Q7IHJlY2VpdmVzIHRoZSBlbGVtZW50XG4gKiBjb25zdHJ1Y3RvciBhbmQgcHJvcGVydHkga2V5IGFzIGFyZ3VtZW50cyBhbmQgaGFzIG5vIHJldHVybiB2YWx1ZS5cbiAqIEBwYXJhbSBkZXNjcmlwdG9yIHtmdW5jdGlvbn0gT3B0aW9uYWwgZGVzY3JpcHRvciBtZXRob2Q7IHJlY2VpdmVzIHRoZVxuICogcHJvcGVydHkga2V5IGFzIGFuIGFyZ3VtZW50IGFuZCByZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBkZWZpbmUgZm9yXG4gKiB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gKiBAcmV0dXJucyB7Q2xhc3NFbGVtZW50fHZvaWR9XG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvcmF0ZVByb3BlcnR5ID0gKHsgZmluaXNoZXIsIGRlc2NyaXB0b3IsIH0pID0+IChwcm90b09yRGVzY3JpcHRvciwgbmFtZVxuLy8gTm90ZSBUeXBlU2NyaXB0IHJlcXVpcmVzIHRoZSByZXR1cm4gdHlwZSB0byBiZSBgdm9pZHxhbnlgXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIC8vIFR5cGVTY3JpcHQgLyBCYWJlbCBsZWdhY3kgbW9kZVxuICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY3RvciA9IHByb3RvT3JEZXNjcmlwdG9yXG4gICAgICAgICAgICAuY29uc3RydWN0b3I7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b09yRGVzY3JpcHRvciwgbmFtZSwgZGVzY3JpcHRvcihuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluaXNoZXIgPT09IG51bGwgfHwgZmluaXNoZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpbmlzaGVyKGN0b3IsIG5hbWUpO1xuICAgICAgICAvLyBCYWJlbCBzdGFuZGFyZCBtb2RlXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBOb3RlLCB0aGUgQHByb3BlcnR5IGRlY29yYXRvciBzYXZlcyBga2V5YCBhcyBgb3JpZ2luYWxLZXlgXG4gICAgICAgIC8vIHNvIHRyeSB0byB1c2UgaXQgaGVyZS5cbiAgICAgICAgY29uc3Qga2V5ID0gXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIChfYSA9IHByb3RvT3JEZXNjcmlwdG9yLm9yaWdpbmFsS2V5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBwcm90b09yRGVzY3JpcHRvci5rZXk7XG4gICAgICAgIGNvbnN0IGluZm8gPSBkZXNjcmlwdG9yICE9IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAga2luZDogJ21ldGhvZCcsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvcihwcm90b09yRGVzY3JpcHRvci5rZXkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7IC4uLnByb3RvT3JEZXNjcmlwdG9yLCBrZXkgfTtcbiAgICAgICAgaWYgKGZpbmlzaGVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5mby5maW5pc2hlciA9IGZ1bmN0aW9uIChjdG9yKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoZXIoY3Rvciwga2V5KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhc2UuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBsZWdhY3lDdXN0b21FbGVtZW50ID0gKHRhZ05hbWUsIGNsYXp6KSA9PiB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAvLyBDYXN0IGFzIGFueSBiZWNhdXNlIFRTIGRvZXNuJ3QgcmVjb2duaXplIHRoZSByZXR1cm4gdHlwZSBhcyBiZWluZyBhXG4gICAgLy8gc3VidHlwZSBvZiB0aGUgZGVjb3JhdGVkIGNsYXNzIHdoZW4gY2xhenogaXMgdHlwZWQgYXNcbiAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBmb3Igc29tZSByZWFzb24uXG4gICAgLy8gYENvbnN0cnVjdG9yPEhUTUxFbGVtZW50PmAgaXMgaGVscGZ1bCB0byBtYWtlIHN1cmUgdGhlIGRlY29yYXRvciBpc1xuICAgIC8vIGFwcGxpZWQgdG8gZWxlbWVudHMgaG93ZXZlci5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiBjbGF6ejtcbn07XG5jb25zdCBzdGFuZGFyZEN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZSwgZGVzY3JpcHRvcikgPT4ge1xuICAgIGNvbnN0IHsga2luZCwgZWxlbWVudHMgfSA9IGRlc2NyaXB0b3I7XG4gICAgcmV0dXJuIHtcbiAgICAgICAga2luZCxcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIG9uY2UgdGhlIGNsYXNzIGlzIG90aGVyd2lzZSBmdWxseSBkZWZpbmVkXG4gICAgICAgIGZpbmlzaGVyKGNsYXp6KSB7XG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhenopO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIGBgYGpzXG4gKiBAY3VzdG9tRWxlbWVudCgnbXktZWxlbWVudCcpXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICogQHBhcmFtIHRhZ05hbWUgVGhlIHRhZyBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBjdXN0b21FbGVtZW50ID0gKHRhZ05hbWUpID0+IChjbGFzc09yRGVzY3JpcHRvcikgPT4gdHlwZW9mIGNsYXNzT3JEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nXG4gICAgPyBsZWdhY3lDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKVxuICAgIDogc3RhbmRhcmRDdXN0b21FbGVtZW50KHRhZ05hbWUsIGNsYXNzT3JEZXNjcmlwdG9yKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyB0byBhIG1ldGhvZCB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGluIGFcbiAqIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIGFzIGFjY2VwdGVkIGJ5XG4gKiBgRXZlbnRUYXJnZXQjYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIGBFdmVudFRhcmdldCNyZW1vdmVFdmVudExpc3RlbmVyYC5cbiAqXG4gKiBDdXJyZW50IGJyb3dzZXJzIHN1cHBvcnQgdGhlIGBjYXB0dXJlYCwgYHBhc3NpdmVgLCBhbmQgYG9uY2VgIG9wdGlvbnMuIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyI1BhcmFtZXRlcnNcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgY2xpY2tlZCA9IGZhbHNlO1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBAY2xpY2s9JHt0aGlzLl9vbkNsaWNrfT5cbiAqICAgICAgICAgPGJ1dHRvbj48L2J1dHRvbj5cbiAqICAgICAgIDwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqXG4gKiAgIEBldmVudE9wdGlvbnMoe2NhcHR1cmU6IHRydWV9KVxuICogICBfb25DbGljayhlKSB7XG4gKiAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZmluaXNoZXI6IChjdG9yLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGN0b3IucHJvdG90eXBlW25hbWVdLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50LW9wdGlvbnMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBzdGFuZGFyZFByb3BlcnR5ID0gKG9wdGlvbnMsIGVsZW1lbnQpID0+IHtcbiAgICAvLyBXaGVuIGRlY29yYXRpbmcgYW4gYWNjZXNzb3IsIHBhc3MgaXQgdGhyb3VnaCBhbmQgYWRkIHByb3BlcnR5IG1ldGFkYXRhLlxuICAgIC8vIE5vdGUsIHRoZSBgaGFzT3duUHJvcGVydHlgIGNoZWNrIGluIGBjcmVhdGVQcm9wZXJ0eWAgZW5zdXJlcyB3ZSBkb24ndFxuICAgIC8vIHN0b21wIG92ZXIgdGhlIHVzZXIncyBhY2Nlc3Nvci5cbiAgICBpZiAoZWxlbWVudC5raW5kID09PSAnbWV0aG9kJyAmJlxuICAgICAgICBlbGVtZW50LmRlc2NyaXB0b3IgJiZcbiAgICAgICAgISgndmFsdWUnIGluIGVsZW1lbnQuZGVzY3JpcHRvcikpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgICAgICBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGVQcm9wZXJ0eSgpIHRha2VzIGNhcmUgb2YgZGVmaW5pbmcgdGhlIHByb3BlcnR5LCBidXQgd2Ugc3RpbGxcbiAgICAgICAgLy8gbXVzdCByZXR1cm4gc29tZSBraW5kIG9mIGRlc2NyaXB0b3IsIHNvIHJldHVybiBhIGRlc2NyaXB0b3IgZm9yIGFuXG4gICAgICAgIC8vIHVudXNlZCBwcm90b3R5cGUgZmllbGQuIFRoZSBmaW5pc2hlciBjYWxscyBjcmVhdGVQcm9wZXJ0eSgpLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogJ2ZpZWxkJyxcbiAgICAgICAgICAgIGtleTogU3ltYm9sKCksXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgZGVzY3JpcHRvcjoge30sXG4gICAgICAgICAgICAvLyBzdG9yZSB0aGUgb3JpZ2luYWwga2V5IHNvIHN1YnNlcXVlbnQgZGVjb3JhdG9ycyBoYXZlIGFjY2VzcyB0byBpdC5cbiAgICAgICAgICAgIG9yaWdpbmFsS2V5OiBlbGVtZW50LmtleSxcbiAgICAgICAgICAgIC8vIFdoZW4gQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1kZWNvcmF0b3JzIGltcGxlbWVudHMgaW5pdGlhbGl6ZXJzLFxuICAgICAgICAgICAgLy8gZG8gdGhpcyBpbnN0ZWFkIG9mIHRoZSBpbml0aWFsaXplciBiZWxvdy4gU2VlOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL2lzc3Vlcy85MjYwIGV4dHJhczogW1xuICAgICAgICAgICAgLy8gICB7XG4gICAgICAgICAgICAvLyAgICAga2luZDogJ2luaXRpYWxpemVyJyxcbiAgICAgICAgICAgIC8vICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgICAgLy8gICAgIGluaXRpYWxpemVyOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyLFxuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyBdLFxuICAgICAgICAgICAgaW5pdGlhbGl6ZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmluaXRpYWxpemVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbZWxlbWVudC5rZXldID0gZWxlbWVudC5pbml0aWFsaXplci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaW5pc2hlcihjbGF6eikge1xuICAgICAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGxlZ2FjeVByb3BlcnR5ID0gKG9wdGlvbnMsIHByb3RvLCBuYW1lKSA9PiB7XG4gICAgcHJvdG8uY29uc3RydWN0b3IuY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG59O1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB3aGljaCBjcmVhdGVzIGEgcmVhY3RpdmUgcHJvcGVydHkgdGhhdCByZWZsZWN0cyBhXG4gKiBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZSB2YWx1ZS4gV2hlbiBhIGRlY29yYXRlZCBwcm9wZXJ0eSBpcyBzZXRcbiAqIHRoZSBlbGVtZW50IHdpbGwgdXBkYXRlIGFuZCByZW5kZXIuIEEge0BsaW5rY29kZSBQcm9wZXJ0eURlY2xhcmF0aW9ufSBtYXlcbiAqIG9wdGlvbmFsbHkgYmUgc3VwcGxpZWQgdG8gY29uZmlndXJlIHByb3BlcnR5IGZlYXR1cmVzLlxuICpcbiAqIFRoaXMgZGVjb3JhdG9yIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIHB1YmxpYyBmaWVsZHMuIEFzIHB1YmxpYyBmaWVsZHMsXG4gKiBwcm9wZXJ0aWVzIHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHByaW1hcmlseSBzZXR0YWJsZSBieSBlbGVtZW50IHVzZXJzLFxuICogZWl0aGVyIHZpYSBhdHRyaWJ1dGUgb3IgdGhlIHByb3BlcnR5IGl0c2VsZi5cbiAqXG4gKiBHZW5lcmFsbHksIHByb3BlcnRpZXMgdGhhdCBhcmUgY2hhbmdlZCBieSB0aGUgZWxlbWVudCBzaG91bGQgYmUgcHJpdmF0ZSBvclxuICogcHJvdGVjdGVkIGZpZWxkcyBhbmQgc2hvdWxkIHVzZSB0aGUge0BsaW5rY29kZSBzdGF0ZX0gZGVjb3JhdG9yLlxuICpcbiAqIEhvd2V2ZXIsIHNvbWV0aW1lcyBlbGVtZW50IGNvZGUgZG9lcyBuZWVkIHRvIHNldCBhIHB1YmxpYyBwcm9wZXJ0eS4gVGhpc1xuICogc2hvdWxkIHR5cGljYWxseSBvbmx5IGJlIGRvbmUgaW4gcmVzcG9uc2UgdG8gdXNlciBpbnRlcmFjdGlvbiwgYW5kIGFuIGV2ZW50XG4gKiBzaG91bGQgYmUgZmlyZWQgaW5mb3JtaW5nIHRoZSB1c2VyOyBmb3IgZXhhbXBsZSwgYSBjaGVja2JveCBzZXRzIGl0c1xuICogYGNoZWNrZWRgIHByb3BlcnR5IHdoZW4gY2xpY2tlZCBhbmQgZmlyZXMgYSBgY2hhbmdlZGAgZXZlbnQuIE11dGF0aW5nIHB1YmxpY1xuICogcHJvcGVydGllcyBzaG91bGQgdHlwaWNhbGx5IG5vdCBiZSBkb25lIGZvciBub24tcHJpbWl0aXZlIChvYmplY3Qgb3IgYXJyYXkpXG4gKiBwcm9wZXJ0aWVzLiBJbiBvdGhlciBjYXNlcyB3aGVuIGFuIGVsZW1lbnQgbmVlZHMgdG8gbWFuYWdlIHN0YXRlLCBhIHByaXZhdGVcbiAqIHByb3BlcnR5IGRlY29yYXRlZCB2aWEgdGhlIHtAbGlua2NvZGUgc3RhdGV9IGRlY29yYXRvciBzaG91bGQgYmUgdXNlZC4gV2hlblxuICogbmVlZGVkLCBzdGF0ZSBwcm9wZXJ0aWVzIGNhbiBiZSBpbml0aWFsaXplZCB2aWEgcHVibGljIHByb3BlcnRpZXMgdG9cbiAqIGZhY2lsaXRhdGUgY29tcGxleCBpbnRlcmFjdGlvbnMuXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAqICAgY2xpY2tlZCA9IGZhbHNlO1xuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKiBARXhwb3J0RGVjb3JhdGVkSXRlbXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5KG9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3IsIG5hbWUpID0+IG5hbWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGxlZ2FjeVByb3BlcnR5KG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yLCBuYW1lKVxuICAgICAgICA6IHN0YW5kYXJkUHJvcGVydHkob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcGVydHkuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3IgdGhhdCBjb252ZXJ0cyBhIGNsYXNzIHByb3BlcnR5IGludG8gYSBnZXR0ZXJcbiAqIHRoYXQgZXhlY3V0ZXMgYSBxdWVyeVNlbGVjdG9yQWxsIG9uIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdC5cbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgQSBET01TdHJpbmcgY29udGFpbmluZyBvbmUgb3IgbW9yZSBzZWxlY3RvcnMgdG8gbWF0Y2guXG4gKlxuICogU2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JBbGxcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QWxsKCdkaXYnKVxuICogICBkaXZzOiBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PjtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgaWQ9XCJmaXJzdFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBpZD1cInNlY29uZFwiPjwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICogQGNhdGVnb3J5IERlY29yYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbGwoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hbGwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2E7XG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG5jb25zdCBOT0RFX01PREUgPSBmYWxzZTtcbmNvbnN0IGdsb2JhbCA9IE5PREVfTU9ERSA/IGdsb2JhbFRoaXMgOiB3aW5kb3c7XG4vKipcbiAqIEEgdGlueSBtb2R1bGUgc2NvcGVkIHBvbHlmaWxsIGZvciBIVE1MU2xvdEVsZW1lbnQuYXNzaWduZWRFbGVtZW50cy5cbiAqL1xuY29uc3Qgc2xvdEFzc2lnbmVkRWxlbWVudHMgPSAoKF9hID0gZ2xvYmFsLkhUTUxTbG90RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb3RvdHlwZS5hc3NpZ25lZEVsZW1lbnRzKSAhPSBudWxsXG4gICAgPyAoc2xvdCwgb3B0cykgPT4gc2xvdC5hc3NpZ25lZEVsZW1lbnRzKG9wdHMpXG4gICAgOiAoc2xvdCwgb3B0cykgPT4gc2xvdFxuICAgICAgICAuYXNzaWduZWROb2RlcyhvcHRzKVxuICAgICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSk7XG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIHJldHVybnMgdGhlIGBhc3NpZ25lZEVsZW1lbnRzYCBvZiB0aGUgZ2l2ZW4gYHNsb3RgLiBQcm92aWRlcyBhIGRlY2xhcmF0aXZlXG4gKiB3YXkgdG8gdXNlXG4gKiBbYEhUTUxTbG90RWxlbWVudC5hc3NpZ25lZEVsZW1lbnRzYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxTbG90RWxlbWVudC9hc3NpZ25lZEVsZW1lbnRzKS5cbiAqXG4gKiBDYW4gYmUgcGFzc2VkIGFuIG9wdGlvbmFsIHtAbGlua2NvZGUgUXVlcnlBc3NpZ25lZEVsZW1lbnRzT3B0aW9uc30gb2JqZWN0LlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QXNzaWduZWRFbGVtZW50cyh7IHNsb3Q6ICdsaXN0JyB9KVxuICogICBsaXN0SXRlbXMhOiBBcnJheTxIVE1MRWxlbWVudD47XG4gKiAgIEBxdWVyeUFzc2lnbmVkRWxlbWVudHMoKVxuICogICB1bm5hbWVkU2xvdEVscyE6IEFycmF5PEhUTUxFbGVtZW50PjtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxzbG90IG5hbWU9XCJsaXN0XCI+PC9zbG90PlxuICogICAgICAgPHNsb3Q+PC9zbG90PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIE5vdGUsIHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHkgc2hvdWxkIGJlIGFubm90YXRlZCBhcyBgQXJyYXk8SFRNTEVsZW1lbnQ+YC5cbiAqXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzc2lnbmVkRWxlbWVudHMob3B0aW9ucykge1xuICAgIGNvbnN0IHsgc2xvdCwgc2VsZWN0b3IgfSA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9O1xuICAgIHJldHVybiBkZWNvcmF0ZVByb3BlcnR5KHtcbiAgICAgICAgZGVzY3JpcHRvcjogKF9uYW1lKSA9PiAoe1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90U2VsZWN0b3IgPSBgc2xvdCR7c2xvdCA/IGBbbmFtZT0ke3Nsb3R9XWAgOiAnOm5vdChbbmFtZV0pJ31gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RFbCA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2xvdFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHNsb3RFbCAhPSBudWxsID8gc2xvdEFzc2lnbmVkRWxlbWVudHMoc2xvdEVsLCBvcHRpb25zKSA6IFtdO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHMuZmlsdGVyKChub2RlKSA9PiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtZWxlbWVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKlxuICogSU1QT1JUQU5UOiBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRzaWNrbGUgYW5kIHRoZSBDbG9zdXJlIEpTIGNvbXBpbGVyLCBhbGxcbiAqIHByb3BlcnR5IGRlY29yYXRvcnMgKGJ1dCBub3QgY2xhc3MgZGVjb3JhdG9ycykgaW4gdGhpcyBmaWxlIHRoYXQgaGF2ZVxuICogYW4gQEV4cG9ydERlY29yYXRlZEl0ZW1zIGFubm90YXRpb24gbXVzdCBiZSBkZWZpbmVkIGFzIGEgcmVndWxhciBmdW5jdGlvbixcbiAqIG5vdCBhbiBhcnJvdyBmdW5jdGlvbi5cbiAqL1xuaW1wb3J0IHsgZGVjb3JhdGVQcm9wZXJ0eSB9IGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgeyBxdWVyeUFzc2lnbmVkRWxlbWVudHMgfSBmcm9tICcuL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzJztcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFzc2lnbmVkTm9kZXMoc2xvdE9yT3B0aW9ucywgZmxhdHRlbiwgc2VsZWN0b3IpIHtcbiAgICAvLyBOb3JtYWxpemUgdGhlIG92ZXJsb2FkZWQgYXJndW1lbnRzLlxuICAgIGxldCBzbG90ID0gc2xvdE9yT3B0aW9ucztcbiAgICBsZXQgYXNzaWduZWROb2Rlc09wdGlvbnM7XG4gICAgaWYgKHR5cGVvZiBzbG90T3JPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzbG90ID0gc2xvdE9yT3B0aW9ucy5zbG90O1xuICAgICAgICBhc3NpZ25lZE5vZGVzT3B0aW9ucyA9IHNsb3RPck9wdGlvbnM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhc3NpZ25lZE5vZGVzT3B0aW9ucyA9IHsgZmxhdHRlbiB9O1xuICAgIH1cbiAgICAvLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHF1ZXJ5QXNzaWduZWROb2RlcyB3aXRoIGEgc2VsZWN0b3IgYmVoYXZlc1xuICAgIC8vIGV4YWN0bHkgbGlrZSBxdWVyeUFzc2lnbmVkRWxlbWVudHMgd2l0aCBhIHNlbGVjdG9yLlxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gcXVlcnlBc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgICAgIHNsb3Q6IHNsb3QsXG4gICAgICAgICAgICBmbGF0dGVuLFxuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RTZWxlY3RvciA9IGBzbG90JHtzbG90ID8gYFtuYW1lPSR7c2xvdH1dYCA6ICc6bm90KFtuYW1lXSknfWA7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdEVsID0gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzbG90U2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoX2IgPSBzbG90RWwgPT09IG51bGwgfHwgc2xvdEVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbG90RWwuYXNzaWduZWROb2Rlcyhhc3NpZ25lZE5vZGVzT3B0aW9ucykpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnktYXNzaWduZWQtbm9kZXMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBkZWNvcmF0ZVByb3BlcnR5IH0gZnJvbSAnLi9iYXNlLmpzJztcbi8vIE5vdGUsIGluIHRoZSBmdXR1cmUsIHdlIG1heSBleHRlbmQgdGhpcyBkZWNvcmF0b3IgdG8gc3VwcG9ydCB0aGUgdXNlIGNhc2Vcbi8vIHdoZXJlIHRoZSBxdWVyaWVkIGVsZW1lbnQgbWF5IG5lZWQgdG8gZG8gd29yayB0byBiZWNvbWUgcmVhZHkgdG8gaW50ZXJhY3Rcbi8vIHdpdGggKGUuZy4gbG9hZCBzb21lIGltcGxlbWVudGF0aW9uIGNvZGUpLiBJZiBzbywgd2UgbWlnaHQgZWxlY3QgdG9cbi8vIGFkZCBhIHNlY29uZCBhcmd1bWVudCBkZWZpbmluZyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHJ1biB0byBtYWtlIHRoZVxuLy8gcXVlcmllZCBlbGVtZW50IGxvYWRlZC91cGRhdGVkL3JlYWR5LlxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXN1bHQgb2YgYSBxdWVyeVNlbGVjdG9yIG9uIHRoZVxuICogZWxlbWVudCdzIHJlbmRlclJvb3QgZG9uZSBhZnRlciB0aGUgZWxlbWVudCdzIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZVxuICogcmVzb2x2ZXMuIFdoZW4gdGhlIHF1ZXJpZWQgcHJvcGVydHkgbWF5IGNoYW5nZSB3aXRoIGVsZW1lbnQgc3RhdGUsIHRoaXNcbiAqIGRlY29yYXRvciBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHJlcXVpcmluZyB1c2VycyB0byBhd2FpdCB0aGVcbiAqIGB1cGRhdGVDb21wbGV0ZWAgYmVmb3JlIGFjY2Vzc2luZyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIEEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgb25lIG9yIG1vcmUgc2VsZWN0b3JzIHRvIG1hdGNoLlxuICpcbiAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3F1ZXJ5U2VsZWN0b3JcbiAqXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFbGVtZW50IHtcbiAqICAgQHF1ZXJ5QXN5bmMoJyNmaXJzdCcpXG4gKiAgIGZpcnN0OiBQcm9taXNlPEhUTUxEaXZFbGVtZW50PjtcbiAqXG4gKiAgIHJlbmRlcigpIHtcbiAqICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgIDxkaXYgaWQ9XCJmaXJzdFwiPjwvZGl2PlxuICogICAgICAgPGRpdiBpZD1cInNlY29uZFwiPjwvZGl2PlxuICogICAgIGA7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiAvLyBleHRlcm5hbCB1c2FnZVxuICogYXN5bmMgZG9Tb21ldGhpbmdXaXRoRmlyc3QoKSB7XG4gKiAgKGF3YWl0IGFNeUVsZW1lbnQuZmlyc3QpLmRvU29tZXRoaW5nKCk7XG4gKiB9XG4gKiBgYGBcbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QXN5bmMoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChfbmFtZSkgPT4gKHtcbiAgICAgICAgICAgIGFzeW5jIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5yZW5kZXJSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS1hc3luYy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IGRlY29yYXRlUHJvcGVydHkgfSBmcm9tICcuL2Jhc2UuanMnO1xuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciBBIERPTVN0cmluZyBjb250YWluaW5nIG9uZSBvciBtb3JlIHNlbGVjdG9ycyB0byBtYXRjaC5cbiAqIEBwYXJhbSBjYWNoZSBBbiBvcHRpb25hbCBib29sZWFuIHdoaWNoIHdoZW4gdHJ1ZSBwZXJmb3JtcyB0aGUgRE9NIHF1ZXJ5IG9ubHlcbiAqICAgICBvbmNlIGFuZCBjYWNoZXMgdGhlIHJlc3VsdC5cbiAqXG4gKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9xdWVyeVNlbGVjdG9yXG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIE15RWxlbWVudCB7XG4gKiAgIEBxdWVyeSgnI2ZpcnN0JylcbiAqICAgZmlyc3Q6IEhUTUxEaXZFbGVtZW50O1xuICpcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYFxuICogICAgICAgPGRpdiBpZD1cImZpcnN0XCI+PC9kaXY+XG4gKiAgICAgICA8ZGl2IGlkPVwic2Vjb25kXCI+PC9kaXY+XG4gKiAgICAgYDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKiBAY2F0ZWdvcnkgRGVjb3JhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeShzZWxlY3RvciwgY2FjaGUpIHtcbiAgICByZXR1cm4gZGVjb3JhdGVQcm9wZXJ0eSh7XG4gICAgICAgIGRlc2NyaXB0b3I6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMucmVuZGVyUm9vdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gdHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnID8gU3ltYm9sKCkgOiBgX18ke25hbWV9YDtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSAoX2IgPSAoX2EgPSB0aGlzLnJlbmRlclJvb3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLypcbiAqIElNUE9SVEFOVDogRm9yIGNvbXBhdGliaWxpdHkgd2l0aCB0c2lja2xlIGFuZCB0aGUgQ2xvc3VyZSBKUyBjb21waWxlciwgYWxsXG4gKiBwcm9wZXJ0eSBkZWNvcmF0b3JzIChidXQgbm90IGNsYXNzIGRlY29yYXRvcnMpIGluIHRoaXMgZmlsZSB0aGF0IGhhdmVcbiAqIGFuIEBFeHBvcnREZWNvcmF0ZWRJdGVtcyBhbm5vdGF0aW9uIG11c3QgYmUgZGVmaW5lZCBhcyBhIHJlZ3VsYXIgZnVuY3Rpb24sXG4gKiBub3QgYW4gYXJyb3cgZnVuY3Rpb24uXG4gKi9cbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSAnLi9wcm9wZXJ0eS5qcyc7XG4vKipcbiAqIERlY2xhcmVzIGEgcHJpdmF0ZSBvciBwcm90ZWN0ZWQgcmVhY3RpdmUgcHJvcGVydHkgdGhhdCBzdGlsbCB0cmlnZ2Vyc1xuICogdXBkYXRlcyB0byB0aGUgZWxlbWVudCB3aGVuIGl0IGNoYW5nZXMuIEl0IGRvZXMgbm90IHJlZmxlY3QgZnJvbSB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlLlxuICpcbiAqIFByb3BlcnRpZXMgZGVjbGFyZWQgdGhpcyB3YXkgbXVzdCBub3QgYmUgdXNlZCBmcm9tIEhUTUwgb3IgSFRNTCB0ZW1wbGF0aW5nXG4gKiBzeXN0ZW1zLCB0aGV5J3JlIHNvbGVseSBmb3IgcHJvcGVydGllcyBpbnRlcm5hbCB0byB0aGUgZWxlbWVudC4gVGhlc2VcbiAqIHByb3BlcnRpZXMgbWF5IGJlIHJlbmFtZWQgYnkgb3B0aW1pemF0aW9uIHRvb2xzIGxpa2UgY2xvc3VyZSBjb21waWxlci5cbiAqIEBjYXRlZ29yeSBEZWNvcmF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcHJvcGVydHkoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzdGF0ZTogdHJ1ZSxcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0YXRlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kO1xudmFyIF9lO1xuLyoqXG4gKiBVc2UgdGhpcyBtb2R1bGUgaWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIGJhc2UgY2xhc3MgZXh0ZW5kaW5nXG4gKiB7QGxpbmsgUmVhY3RpdmVFbGVtZW50fS5cbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBnZXRDb21wYXRpYmxlU3R5bGUsIGFkb3B0U3R5bGVzLCB9IGZyb20gJy4vY3NzLXRhZy5qcyc7XG4vLyBJbiB0aGUgTm9kZSBidWlsZCwgdGhpcyBpbXBvcnQgd2lsbCBiZSBpbmplY3RlZCBieSBSb2xsdXA6XG4vLyBpbXBvcnQge0hUTUxFbGVtZW50LCBjdXN0b21FbGVtZW50c30gZnJvbSAnQGxpdC1sYWJzL3Nzci1kb20tc2hpbSc7XG5leHBvcnQgKiBmcm9tICcuL2Nzcy10YWcuanMnO1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG5jb25zdCBnbG9iYWwgPSBOT0RFX01PREUgPyBnbG9iYWxUaGlzIDogd2luZG93O1xuaWYgKE5PREVfTU9ERSkge1xuICAgIChfYSA9IGdsb2JhbC5jdXN0b21FbGVtZW50cykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGdsb2JhbC5jdXN0b21FbGVtZW50cyA9IGN1c3RvbUVsZW1lbnRzKTtcbn1cbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCByZXF1ZXN0VXBkYXRlVGhlbmFibGU7XG5sZXQgaXNzdWVXYXJuaW5nO1xuY29uc3QgdHJ1c3RlZFR5cGVzID0gZ2xvYmFsXG4gICAgLnRydXN0ZWRUeXBlcztcbi8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBodHRwczovL2NyYnVnLmNvbS85OTMyNjhcbi8vIEN1cnJlbnRseSwgYW55IGF0dHJpYnV0ZSBzdGFydGluZyB3aXRoIFwib25cIiBpcyBjb25zaWRlcmVkIHRvIGJlIGFcbi8vIFRydXN0ZWRTY3JpcHQgc291cmNlLiBTdWNoIGJvb2xlYW4gYXR0cmlidXRlcyBtdXN0IGJlIHNldCB0byB0aGUgZXF1aXZhbGVudFxuLy8gdHJ1c3RlZCBlbXB0eVNjcmlwdCB2YWx1ZS5cbmNvbnN0IGVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgOiAnJztcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gICAgPyBnbG9iYWwucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogZ2xvYmFsLnJlYWN0aXZlRWxlbWVudFBvbHlmaWxsU3VwcG9ydDtcbmlmIChERVZfTU9ERSkge1xuICAgIC8vIEVuc3VyZSB3YXJuaW5ncyBhcmUgaXNzdWVkIG9ubHkgMXgsIGV2ZW4gaWYgbXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0XG4gICAgLy8gYXJlIGxvYWRlZC5cbiAgICBjb25zdCBpc3N1ZWRXYXJuaW5ncyA9ICgoX2IgPSBnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IChnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MgPSBuZXcgU2V0KCkpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICBpZiAoIWlzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgaXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpc3N1ZVdhcm5pbmcoJ2Rldi1tb2RlJywgYExpdCBpcyBpbiBkZXYgbW9kZS4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIWApO1xuICAgIC8vIElzc3VlIHBvbHlmaWxsIHN1cHBvcnQgd2FybmluZy5cbiAgICBpZiAoKChfYyA9IGdsb2JhbC5TaGFkeURPTSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmluVXNlKSAmJiBwb2x5ZmlsbFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpc3N1ZVdhcm5pbmcoJ3BvbHlmaWxsLXN1cHBvcnQtbWlzc2luZycsIGBTaGFkb3cgRE9NIGlzIGJlaW5nIHBvbHlmaWxsZWQgdmlhIFxcYFNoYWR5RE9NXFxgIGJ1dCBgICtcbiAgICAgICAgICAgIGB0aGUgXFxgcG9seWZpbGwtc3VwcG9ydFxcYCBtb2R1bGUgaGFzIG5vdCBiZWVuIGxvYWRlZC5gKTtcbiAgICB9XG4gICAgcmVxdWVzdFVwZGF0ZVRoZW5hYmxlID0gKG5hbWUpID0+ICh7XG4gICAgICAgIHRoZW46IChvbmZ1bGZpbGxlZCwgX29ucmVqZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIGlzc3VlV2FybmluZygncmVxdWVzdC11cGRhdGUtcHJvbWlzZScsIGBUaGUgXFxgcmVxdWVzdFVwZGF0ZVxcYCBtZXRob2Qgc2hvdWxkIG5vIGxvbmdlciByZXR1cm4gYSBQcm9taXNlIGJ1dCBgICtcbiAgICAgICAgICAgICAgICBgZG9lcyBzbyBvbiBcXGAke25hbWV9XFxgLiBVc2UgXFxgdXBkYXRlQ29tcGxldGVcXGAgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgIGlmIChvbmZ1bGZpbGxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb25mdWxmaWxsZWQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xufVxuLyoqXG4gKiBVc2VmdWwgZm9yIHZpc3VhbGl6aW5nIGFuZCBsb2dnaW5nIGluc2lnaHRzIGludG8gd2hhdCB0aGUgTGl0IHRlbXBsYXRlIHN5c3RlbSBpcyBkb2luZy5cbiAqXG4gKiBDb21waWxlZCBvdXQgb2YgcHJvZCBtb2RlIGJ1aWxkcy5cbiAqL1xuY29uc3QgZGVidWdMb2dFdmVudCA9IERFVl9NT0RFXG4gICAgPyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW1pdCA9IGdsb2JhbFxuICAgICAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXQtZGVidWcnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDogdW5kZWZpbmVkO1xuLypcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xuLypAX19JTkxJTkVfXyovXG5jb25zdCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gKHByb3AsIF9vYmopID0+IHByb3A7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlIDogbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgIHBhc3MgdGhpcyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgLy8gdG8gYWxsb3cgcmVtb3Zpbmcvbm8gY2hhbmdlIGJlaGF2aW9yLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgbGV0IGZyb21WYWx1ZSA9IHZhbHVlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlID09PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgLy8gRG8gKm5vdCogZ2VuZXJhdGUgZXhjZXB0aW9uIHdoZW4gaW52YWxpZCBKU09OIGlzIHNldCBhcyBlbGVtZW50c1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IG5vcm1hbGx5IGNvbXBsYWluIG9uIGJlaW5nIG1pcy1jb25maWd1cmVkLlxuICAgICAgICAgICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IERvIGdlbmVyYXRlIGV4Y2VwdGlvbiBpbiAqZGV2IG1vZGUqLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc2VydCB0byBhZGhlcmUgdG8gQmF6ZWwncyBcIm11c3QgdHlwZSBhc3NlcnQgSlNPTiBwYXJzZVwiIHJ1bGUuXG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbVZhbHVlO1xuICAgIH0sXG59O1xuLyoqXG4gKiBDaGFuZ2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBkaWZmZXJlbnQgZnJvbSBgb2xkVmFsdWVgLlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgYSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVxdWFsID0gKHZhbHVlLCBvbGQpID0+IHtcbiAgICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICAgIHJldHVybiBvbGQgIT09IHZhbHVlICYmIChvbGQgPT09IG9sZCB8fCB2YWx1ZSA9PT0gdmFsdWUpO1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uID0ge1xuICAgIGF0dHJpYnV0ZTogdHJ1ZSxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgY29udmVydGVyOiBkZWZhdWx0Q29udmVydGVyLFxuICAgIHJlZmxlY3Q6IGZhbHNlLFxuICAgIGhhc0NoYW5nZWQ6IG5vdEVxdWFsLFxufTtcbi8qKlxuICogVGhlIENsb3N1cmUgSlMgQ29tcGlsZXIgZG9lc24ndCBjdXJyZW50bHkgaGF2ZSBnb29kIHN1cHBvcnQgZm9yIHN0YXRpY1xuICogcHJvcGVydHkgc2VtYW50aWNzIHdoZXJlIFwidGhpc1wiIGlzIGR5bmFtaWMgKGUuZy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9pc3N1ZXMvMzE3NyBhbmQgb3RoZXJzKSBzbyB3ZSB1c2VcbiAqIHRoaXMgaGFjayB0byBieXBhc3MgYW55IHJld3JpdGluZyBieSB0aGUgY29tcGlsZXIuXG4gKi9cbmNvbnN0IGZpbmFsaXplZCA9ICdmaW5hbGl6ZWQnO1xuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3Mgd2hpY2ggbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMuIFdoZW5cbiAqIHByb3BlcnRpZXMgY2hhbmdlLCB0aGUgYHVwZGF0ZWAgbWV0aG9kIGlzIGFzeW5jaHJvbm91c2x5IGNhbGxlZC4gVGhpcyBtZXRob2RcbiAqIHNob3VsZCBiZSBzdXBwbGllZCBieSBzdWJjbGFzc2VycyB0byByZW5kZXIgdXBkYXRlcyBhcyBkZXNpcmVkLlxuICogQG5vSW5oZXJpdERvY1xuICovXG5leHBvcnQgY2xhc3MgUmVhY3RpdmVFbGVtZW50XG4vLyBJbiB0aGUgTm9kZSBidWlsZCwgdGhpcyBgZXh0ZW5kc2AgY2xhdXNlIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aFxuLy8gYChnbG9iYWxUaGlzLkhUTUxFbGVtZW50ID8/IEhUTUxFbGVtZW50KWAuXG4vL1xuLy8gVGhpcyB3YXksIHdlIHdpbGwgZmlyc3QgcHJlZmVyIGFueSBnbG9iYWwgYEhUTUxFbGVtZW50YCBwb2x5ZmlsbCB0aGF0IHRoZVxuLy8gdXNlciBoYXMgYXNzaWduZWQsIGFuZCB0aGVuIGZhbGwgYmFjayB0byB0aGUgYEhUTUxFbGVtZW50YCBzaGltIHdoaWNoIGhhc1xuLy8gYmVlbiBpbXBvcnRlZCAoc2VlIG5vdGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUgYWJvdXQgaG93IHRoaXMgaW1wb3J0IGlzXG4vLyBnZW5lcmF0ZWQgYnkgUm9sbHVwKS4gTm90ZSB0aGF0IHRoZSBgSFRNTEVsZW1lbnRgIHZhcmlhYmxlIGhhcyBiZWVuXG4vLyBzaGFkb3dlZCBieSB0aGlzIGltcG9ydCwgc28gaXQgbm8gbG9uZ2VyIHJlZmVycyB0byB0aGUgZ2xvYmFsLlxuIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGVyZSBpcyBhIHBlbmRpbmcgdXBkYXRlIGFzIGEgcmVzdWx0IG9mIGNhbGxpbmcgYHJlcXVlc3RVcGRhdGUoKWAuXG4gICAgICAgICAqIFNob3VsZCBvbmx5IGJlIHJlYWQuXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXMgc2V0IHRvIGB0cnVlYCBhZnRlciB0aGUgZmlyc3QgdXBkYXRlLiBUaGUgZWxlbWVudCBjb2RlIGNhbm5vdCBhc3N1bWVcbiAgICAgICAgICogdGhhdCBgcmVuZGVyUm9vdGAgZXhpc3RzIGJlZm9yZSB0aGUgZWxlbWVudCBgaGFzVXBkYXRlZGAuXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgY3VycmVudGx5IHJlZmxlY3RpbmcgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGluaXRpYWxpemVyIGZ1bmN0aW9uIHRvIHRoZSBjbGFzcyB0aGF0IGlzIGNhbGxlZCBkdXJpbmcgaW5zdGFuY2VcbiAgICAgKiBjb25zdHJ1Y3Rpb24uXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY29kZSB0aGF0IHJ1bnMgYWdhaW5zdCBhIGBSZWFjdGl2ZUVsZW1lbnRgXG4gICAgICogc3ViY2xhc3MsIHN1Y2ggYXMgYSBkZWNvcmF0b3IsIHRoYXQgbmVlZHMgdG8gZG8gd29yayBmb3IgZWFjaFxuICAgICAqIGluc3RhbmNlLCBzdWNoIGFzIHNldHRpbmcgdXAgYSBgUmVhY3RpdmVDb250cm9sbGVyYC5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY29uc3QgbXlEZWNvcmF0b3IgPSAodGFyZ2V0OiB0eXBlb2YgUmVhY3RpdmVFbGVtZW50LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAqICAgdGFyZ2V0LmFkZEluaXRpYWxpemVyKChpbnN0YW5jZTogUmVhY3RpdmVFbGVtZW50KSA9PiB7XG4gICAgICogICAgIC8vIFRoaXMgaXMgcnVuIGR1cmluZyBjb25zdHJ1Y3Rpb24gb2YgdGhlIGVsZW1lbnRcbiAgICAgKiAgICAgbmV3IE15Q29udHJvbGxlcihpbnN0YW5jZSk7XG4gICAgICogICB9KTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBEZWNvcmF0aW5nIGEgZmllbGQgd2lsbCB0aGVuIGNhdXNlIGVhY2ggaW5zdGFuY2UgdG8gcnVuIGFuIGluaXRpYWxpemVyXG4gICAgICogdGhhdCBhZGRzIGEgY29udHJvbGxlcjpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICBAbXlEZWNvcmF0b3IgZm9vO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEluaXRpYWxpemVycyBhcmUgc3RvcmVkIHBlci1jb25zdHJ1Y3Rvci4gQWRkaW5nIGFuIGluaXRpYWxpemVyIHRvIGFcbiAgICAgKiBzdWJjbGFzcyBkb2VzIG5vdCBhZGQgaXQgdG8gYSBzdXBlcmNsYXNzLiBTaW5jZSBpbml0aWFsaXplcnMgYXJlIHJ1biBpblxuICAgICAqIGNvbnN0cnVjdG9ycywgaW5pdGlhbGl6ZXJzIHdpbGwgcnVuIGluIG9yZGVyIG9mIHRoZSBjbGFzcyBoaWVyYXJjaHksXG4gICAgICogc3RhcnRpbmcgd2l0aCBzdXBlcmNsYXNzZXMgYW5kIHByb2dyZXNzaW5nIHRvIHRoZSBpbnN0YW5jZSdzIGNsYXNzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkSW5pdGlhbGl6ZXIoaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgICgoX2EgPSB0aGlzLl9pbml0aWFsaXplcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9pbml0aWFsaXplcnMgPSBbXSkpLnB1c2goaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAgICovXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIC8vIG5vdGU6IHBpZ2d5IGJhY2tpbmcgb24gdGhpcyB0byBlbnN1cmUgd2UncmUgZmluYWxpemVkLlxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5fX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShwLCB2KTtcbiAgICAgICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5zZXQoYXR0ciwgcCk7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0XG4gICAgICogYW5kIHN0b3JlcyBhIHtAbGlua2NvZGUgUHJvcGVydHlEZWNsYXJhdGlvbn0gZm9yIHRoZSBwcm9wZXJ0eSB3aXRoIHRoZVxuICAgICAqIGdpdmVuIG9wdGlvbnMuIFRoZSBwcm9wZXJ0eSBzZXR0ZXIgY2FsbHMgdGhlIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgXG4gICAgICogcHJvcGVydHkgb3B0aW9uIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90XG4gICAgICogdG8gcmVxdWVzdCBhbiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemUgcHJvcGVydGllczsgaG93ZXZlcixcbiAgICAgKiB3aGVuIGRvaW5nIHNvLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGBzdXBlci5jcmVhdGVQcm9wZXJ0eWAgdG8gZW5zdXJlXG4gICAgICogdGhlIHByb3BlcnR5IGlzIHNldHVwIGNvcnJlY3RseS4gVGhpcyBtZXRob2QgY2FsbHNcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYCBpbnRlcm5hbGx5IHRvIGdldCBhIGRlc2NyaXB0b3IgdG8gaW5zdGFsbC5cbiAgICAgKiBUbyBjdXN0b21pemUgd2hhdCBwcm9wZXJ0aWVzIGRvIHdoZW4gdGhleSBhcmUgZ2V0IG9yIHNldCwgb3ZlcnJpZGVcbiAgICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYC4gVG8gY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIHByb3BlcnR5LFxuICAgICAqIGltcGxlbWVudCBgY3JlYXRlUHJvcGVydHlgIGxpa2UgdGhpczpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgKiAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtteU9wdGlvbjogdHJ1ZX0pO1xuICAgICAqICAgc3VwZXIuY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgc3RhdGUgcHJvcGVydHksIGZvcmNlIHRoZSBhdHRyaWJ1dGUgdG8gZmFsc2UuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgICAgICAgICAvLyBDYXN0IGFzIGFueSBzaW5jZSB0aGlzIGlzIHJlYWRvbmx5LlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIG9wdGlvbnMuYXR0cmlidXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBjYW4gYmUgY2FsbGVkIGJ5IHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3Igd2hpY2hcbiAgICAgICAgLy8gaXMgY2FsbGVkIGJlZm9yZSBgZmluYWxpemVgLCB3ZSBlbnN1cmUgZmluYWxpemF0aW9uIGhhcyBiZWVuIGtpY2tlZCBvZmYuXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhbiBhY2Nlc3NvciBpZiB0aGUgcHJvdG90eXBlIGFscmVhZHkgaGFzIG9uZSwgc2luY2VcbiAgICAgICAgLy8gaXQgd291bGQgYmUgbG9zdCBvdGhlcndpc2UgYW5kIHRoYXQgd291bGQgbmV2ZXIgYmUgdGhlIHVzZXIncyBpbnRlbnRpb247XG4gICAgICAgIC8vIEluc3RlYWQsIHdlIGV4cGVjdCB1c2VycyB0byBjYWxsIGByZXF1ZXN0VXBkYXRlYCB0aGVtc2VsdmVzIGZyb21cbiAgICAgICAgLy8gdXNlci1kZWZpbmVkIGFjY2Vzc29ycy4gTm90ZSB0aGF0IGlmIHRoZSBzdXBlciBoYXMgYW4gYWNjZXNzb3Igd2Ugd2lsbFxuICAgICAgICAvLyBzdGlsbCBvdmVyd3JpdGUgaXRcbiAgICAgICAgaWYgKCFvcHRpb25zLm5vQWNjZXNzb3IgJiYgIXRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7bmFtZX1gO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBjbGFzcyBkb2Vzbid0IGhhdmUgaXRzIG93biBzZXQsIGNyZWF0ZSBvbmUgYW5kIGluaXRpYWxpemVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCB0aGUgdmFsdWVzIGluIHRoZSBzZXQgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciBjbGFzcywgaWYgYW55LlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoJ19fcmVhY3RpdmVQcm9wZXJ0eUtleXMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlYWN0aXZlUHJvcGVydHlLZXlzID0gbmV3IFNldCgoX2EgPSB0aGlzLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMuYWRkKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBiZSBkZWZpbmVkIG9uIHRoZSBnaXZlbiBuYW1lZCBwcm9wZXJ0eS5cbiAgICAgKiBJZiBubyBkZXNjcmlwdG9yIGlzIHJldHVybmVkLCB0aGUgcHJvcGVydHkgd2lsbCBub3QgYmVjb21lIGFuIGFjY2Vzc29yLlxuICAgICAqIEZvciBleGFtcGxlLFxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICogICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdG9yID1cbiAgICAgKiAgICAgICAgIHN1cGVyLmdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpO1xuICAgICAqICAgICBjb25zdCBzZXR0ZXIgPSBkZWZhdWx0RGVzY3JpcHRvci5zZXQ7XG4gICAgICogICAgIHJldHVybiB7XG4gICAgICogICAgICAgZ2V0OiBkZWZhdWx0RGVzY3JpcHRvci5nZXQsXG4gICAgICogICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICogICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICogICAgICAgICAvLyBjdXN0b20gYWN0aW9uLlxuICAgICAqICAgICAgIH0sXG4gICAgICogICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAqICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG9wdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAgICAgKiBUaGVzZSBvcHRpb25zIGFyZSBkZWZpbmVkIHdpdGggYSBgUHJvcGVydHlEZWNsYXJhdGlvbmAgdmlhIHRoZSBgcHJvcGVydGllc2BcbiAgICAgKiBvYmplY3Qgb3IgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciBhbmQgYXJlIHJlZ2lzdGVyZWQgaW5cbiAgICAgKiBgY3JlYXRlUHJvcGVydHkoLi4uKWAuXG4gICAgICpcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBcImZpbmFsXCIgYW5kIG5vdCBvdmVycmlkZGVuLiBUb1xuICAgICAqIGN1c3RvbWl6ZSB0aGUgb3B0aW9ucyBmb3IgYSBnaXZlbiBwcm9wZXJ0eSwgb3ZlcnJpZGVcbiAgICAgKiB7QGxpbmtjb2RlIGNyZWF0ZVByb3BlcnR5fS5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGZpbmFsXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJvcGVydHlPcHRpb25zKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZ2V0KG5hbWUpIHx8IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLCBzZXRzIHVwIGVsZW1lbnRcbiAgICAgKiBzdHlsaW5nLCBhbmQgZW5zdXJlcyBhbnkgc3VwZXJjbGFzc2VzIGFyZSBhbHNvIGZpbmFsaXplZC4gUmV0dXJucyB0cnVlIGlmXG4gICAgICogdGhlIGVsZW1lbnQgd2FzIGZpbmFsaXplZC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoZmluYWxpemVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbZmluYWxpemVkXSA9IHRydWU7XG4gICAgICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICAgICAgY29uc3Qgc3VwZXJDdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO1xuICAgICAgICBzdXBlckN0b3IuZmluYWxpemUoKTtcbiAgICAgICAgLy8gQ3JlYXRlIG93biBzZXQgb2YgaW5pdGlhbGl6ZXJzIGZvciB0aGlzIGNsYXNzIGlmIGFueSBleGlzdCBvbiB0aGVcbiAgICAgICAgLy8gc3VwZXJjbGFzcyBhbmQgY29weSB0aGVtIGRvd24uIE5vdGUsIGZvciBhIHNtYWxsIHBlcmYgYm9vc3QsIGF2b2lkXG4gICAgICAgIC8vIGNyZWF0aW5nIGluaXRpYWxpemVycyB1bmxlc3MgbmVlZGVkLlxuICAgICAgICBpZiAoc3VwZXJDdG9yLl9pbml0aWFsaXplcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZXJzID0gWy4uLnN1cGVyQ3Rvci5faW5pdGlhbGl6ZXJzXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcChzdXBlckN0b3IuZWxlbWVudFByb3BlcnRpZXMpO1xuICAgICAgICAvLyBpbml0aWFsaXplIE1hcCBwb3B1bGF0ZWQgaW4gb2JzZXJ2ZWRBdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBtYWtlIGFueSBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIE5vdGUsIG9ubHkgcHJvY2VzcyBcIm93blwiIHByb3BlcnRpZXMgc2luY2UgdGhpcyBlbGVtZW50IHdpbGwgaW5oZXJpdFxuICAgICAgICAvLyBhbnkgcHJvcGVydGllcyBkZWZpbmVkIG9uIHRoZSBzdXBlckNsYXNzLCBhbmQgZmluYWxpemF0aW9uIGVuc3VyZXNcbiAgICAgICAgLy8gdGhlIGVudGlyZSBwcm90b3R5cGUgY2hhaW4gaXMgZmluYWxpemVkLlxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdwcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgc3ltYm9scyBpbiBwcm9wZXJ0aWVzIChJRTExIGRvZXMgbm90IHN1cHBvcnQgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gW1xuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKSxcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BzKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICAvLyBUaGlzIGZvci9vZiBpcyBvayBiZWNhdXNlIHByb3BLZXlzIGlzIGFuIGFycmF5XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvcEtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBub3RlLCB1c2Ugb2YgYGFueWAgaXMgZHVlIHRvIFR5cGVTY3JpcHQgbGFjayBvZiBzdXBwb3J0IGZvciBzeW1ib2wgaW5cbiAgICAgICAgICAgICAgICAvLyBpbmRleCB0eXBlc1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9wZXJ0eShwLCBwcm9wc1twXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50U3R5bGVzID0gdGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcyk7XG4gICAgICAgIC8vIERFViBtb2RlIHdhcm5pbmdzXG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgY29uc3Qgd2FyblJlbW92ZWRPclJlbmFtZWQgPSAobmFtZSwgcmVuYW1lZCA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZyhyZW5hbWVkID8gJ3JlbmFtZWQtYXBpJyA6ICdyZW1vdmVkLWFwaScsIGBcXGAke25hbWV9XFxgIGlzIGltcGxlbWVudGVkIG9uIGNsYXNzICR7dGhpcy5uYW1lfS4gSXQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gJHtyZW5hbWVkID8gJ3JlbmFtZWQnIDogJ3JlbW92ZWQnfSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBpbiB0aGlzIHZlcnNpb24gb2YgTGl0RWxlbWVudC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQoJ2luaXRpYWxpemUnKTtcbiAgICAgICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKCdyZXF1ZXN0VXBkYXRlSW50ZXJuYWwnKTtcbiAgICAgICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKCdfZ2V0VXBkYXRlQ29tcGxldGUnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgdGhlIHN0eWxlcyB0aGUgdXNlciBzdXBwbGllZCB2aWEgdGhlIGBzdGF0aWMgc3R5bGVzYCBwcm9wZXJ0eSBhbmRcbiAgICAgKiByZXR1cm5zIHRoZSBhcnJheSBvZiBzdHlsZXMgdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gaW50ZWdyYXRlIGludG8gYSBzdHlsZSBtYW5hZ2VtZW50IHN5c3RlbS5cbiAgICAgKlxuICAgICAqIFN0eWxlcyBhcmUgZGVkdXBsaWNhdGVkIHByZXNlcnZpbmcgdGhlIF9sYXN0XyBpbnN0YW5jZSBpbiB0aGUgbGlzdC4gVGhpc1xuICAgICAqIGlzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHRvIGF2b2lkIGR1cGxpY2F0ZWQgc3R5bGVzIHRoYXQgY2FuIG9jY3VyXG4gICAgICogZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0byB0cnlcbiAgICAgKiB0byBwcmVzZXJ2ZSB0aGUgY2FzY2FkZSBvcmRlciB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQncyBtb3N0IGltcG9ydGFudFxuICAgICAqIHRoYXQgbGFzdCBhZGRlZCBzdHlsZXMgb3ZlcnJpZGUgcHJldmlvdXMgc3R5bGVzLlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgc3R5bGVzXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlcykpIHtcbiAgICAgICAgICAgIC8vIERlZHVwZSB0aGUgZmxhdHRlbmVkIGFycmF5IGluIHJldmVyc2Ugb3JkZXIgdG8gcHJlc2VydmUgdGhlIGxhc3QgaXRlbXMuXG4gICAgICAgICAgICAvLyBDYXN0aW5nIHRvIEFycmF5PHVua25vd24+IHdvcmtzIGFyb3VuZCBUUyBlcnJvciB0aGF0XG4gICAgICAgICAgICAvLyBhcHBlYXJzIHRvIGNvbWUgZnJvbSB0cnlpbmcgdG8gZmxhdHRlbiBhIHR5cGUgQ1NTUmVzdWx0QXJyYXkuXG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHN0eWxlcy5mbGF0KEluZmluaXR5KS5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgLy8gVGhlbiBwcmVzZXJ2ZSBvcmlnaW5hbCBvcmRlciBieSBhZGRpbmcgdGhlIHNldCBpdGVtcyBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNldCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMudW5zaGlmdChnZXRDb21wYXRpYmxlU3R5bGUocykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50U3R5bGVzLnB1c2goZ2V0Q29tcGF0aWJsZVN0eWxlKHN0eWxlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50U3R5bGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIGBuYW1lYC5cbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBfX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG9wdGlvbnMuYXR0cmlidXRlO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogdHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBvbmx5IG92ZXJyaWRlIHBvaW50IGZvciBjdXN0b21pemluZyB3b3JrIGRvbmUgd2hlbiBlbGVtZW50c1xuICAgICAqIGFyZSBjb25zdHJ1Y3RlZC5cbiAgICAgKi9cbiAgICBfX2luaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzKSA9PiAodGhpcy5lbmFibGVVcGRhdGluZyA9IHJlcykpO1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCk7XG4gICAgICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZlxuICAgICAgICAvLyBgdXBkYXRlQ29tcGxldGVgXG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yLl9pbml0aWFsaXplcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChpKSA9PiBpKHRoaXMpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAgdG8gcGFydGljaXBhdGUgaW4gdGhlIGVsZW1lbnQncyByZWFjdGl2ZVxuICAgICAqIHVwZGF0ZSBjeWNsZS4gVGhlIGVsZW1lbnQgYXV0b21hdGljYWxseSBjYWxscyBpbnRvIGFueSByZWdpc3RlcmVkXG4gICAgICogY29udHJvbGxlcnMgZHVyaW5nIGl0cyBsaWZlY3ljbGUgY2FsbGJhY2tzLlxuICAgICAqXG4gICAgICogSWYgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHdoZW4gYGFkZENvbnRyb2xsZXIoKWAgaXMgY2FsbGVkLCB0aGVcbiAgICAgKiBjb250cm9sbGVyJ3MgYGhvc3RDb25uZWN0ZWQoKWAgY2FsbGJhY2sgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXG4gICAgICogQGNhdGVnb3J5IGNvbnRyb2xsZXJzXG4gICAgICovXG4gICAgYWRkQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICgoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9fY29udHJvbGxlcnMgPSBbXSkpLnB1c2goY29udHJvbGxlcik7XG4gICAgICAgIC8vIElmIGEgY29udHJvbGxlciBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiBjb25uZWN0ZWQsXG4gICAgICAgIC8vIGNhbGwgaG9zdENvbm5lY3RlZC4gTm90ZSwgcmUtdXNpbmcgZXhpc3RlbmNlIG9mIGByZW5kZXJSb290YCBoZXJlXG4gICAgICAgIC8vICh3aGljaCBpcyBzZXQgaW4gY29ubmVjdGVkQ2FsbGJhY2spIHRvIGF2b2lkIHRoZSBuZWVkIHRvIHRyYWNrIGFcbiAgICAgICAgLy8gZmlyc3QgY29ubmVjdGVkIHN0YXRlLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJSb290ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgKF9iID0gY29udHJvbGxlci5ob3N0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAgZnJvbSB0aGUgZWxlbWVudC5cbiAgICAgKiBAY2F0ZWdvcnkgY29udHJvbGxlcnNcbiAgICAgKi9cbiAgICByZW1vdmVDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBOb3RlLCBpZiB0aGUgaW5kZXhPZiBpcyAtMSwgdGhlID4+PiB3aWxsIGZsaXAgdGhlIHNpZ24gd2hpY2ggbWFrZXMgdGhlXG4gICAgICAgIC8vIHNwbGljZSBkbyBub3RoaW5nLlxuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpY2UodGhpcy5fX2NvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlcikgPj4+IDAsIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaXhlcyBhbnkgcHJvcGVydGllcyBzZXQgb24gdGhlIGluc3RhbmNlIGJlZm9yZSB1cGdyYWRlIHRpbWUuXG4gICAgICogT3RoZXJ3aXNlIHRoZXNlIHdvdWxkIHNoYWRvdyB0aGUgYWNjZXNzb3IgYW5kIGJyZWFrIHRoZXNlIHByb3BlcnRpZXMuXG4gICAgICogVGhlIHByb3BlcnRpZXMgYXJlIHN0b3JlZCBpbiBhIE1hcCB3aGljaCBpcyBwbGF5ZWQgYmFjayBhZnRlciB0aGVcbiAgICAgKiBjb25zdHJ1Y3RvciBydW5zLiBOb3RlLCBvbiB2ZXJ5IG9sZCB2ZXJzaW9ucyBvZiBTYWZhcmkgKDw9OSkgb3IgQ2hyb21lXG4gICAgICogKDw9NDEpLCBwcm9wZXJ0aWVzIGNyZWF0ZWQgZm9yIG5hdGl2ZSBwbGF0Zm9ybSBwcm9wZXJ0aWVzIGxpa2UgKGBpZGAgb3JcbiAgICAgKiBgbmFtZWApIG1heSBub3QgaGF2ZSBkZWZhdWx0IHZhbHVlcyBzZXQgaW4gdGhlIGVsZW1lbnQgY29uc3RydWN0b3IuIE9uXG4gICAgICogdGhlc2UgYnJvd3NlcnMgbmF0aXZlIHByb3BlcnRpZXMgYXBwZWFyIG9uIGluc3RhbmNlcyBhbmQgdGhlcmVmb3JlIHRoZWlyXG4gICAgICogZGVmYXVsdCB2YWx1ZSB3aWxsIG92ZXJ3cml0ZSBhbnkgZWxlbWVudCBkZWZhdWx0IChlLmcuIGlmIHRoZSBlbGVtZW50IHNldHNcbiAgICAgKiB0aGlzLmlkID0gJ2lkJyBpbiB0aGUgY29uc3RydWN0b3IsIHRoZSAnaWQnIHdpbGwgYmVjb21lICcnIHNpbmNlIHRoaXMgaXNcbiAgICAgKiB0aGUgbmF0aXZlIHBsYXRmb3JtIGRlZmF1bHQpLlxuICAgICAqL1xuICAgIF9fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpIHtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKChfdiwgcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB0aGlzW3BdKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAgICogY3JlYXRlcyBhbmQgcmV0dXJucyBhbiBvcGVuIHNoYWRvd1Jvb3QuIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlXG4gICAgICogZWxlbWVudCdzIERPTSBpcyByZW5kZXJlZC4gRm9yIGV4YW1wbGUsIHRvIHJlbmRlciBpbnRvIHRoZSBlbGVtZW50J3NcbiAgICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgICAqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCByZW5kZXJSb290ID0gKF9hID0gdGhpcy5zaGFkb3dSb290KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLmF0dGFjaFNoYWRvdyh0aGlzLmNvbnN0cnVjdG9yLnNoYWRvd1Jvb3RPcHRpb25zKTtcbiAgICAgICAgYWRvcHRTdHlsZXMocmVuZGVyUm9vdCwgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50U3R5bGVzKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9uIGZpcnN0IGNvbm5lY3Rpb24sIGNyZWF0ZXMgdGhlIGVsZW1lbnQncyByZW5kZXJSb290LCBzZXRzIHVwXG4gICAgICogZWxlbWVudCBzdHlsaW5nLCBhbmQgZW5hYmxlcyB1cGRhdGluZy5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QgPSB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVVwZGF0aW5nKHRydWUpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5hbCBhbmQgbm90IG92ZXJyaWRkZW4uIEl0IGlzXG4gICAgICogb3ZlcnJpZGRlbiBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZSB3aXRoIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyB0aGUgZmlyc3RcbiAgICAgKiB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBlbmFibGVVcGRhdGluZyhfcmVxdWVzdGVkVXBkYXRlKSB7IH1cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAgICogcmVzZXJ2aW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtYWtpbmcgbm9uLWJyZWFraW5nIGZlYXR1cmUgYWRkaXRpb25zXG4gICAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3REaXNjb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemVzIHByb3BlcnR5IHZhbHVlcyB3aGVuIGF0dHJpYnV0ZXMgY2hhbmdlLlxuICAgICAqXG4gICAgICogU3BlY2lmaWNhbGx5LCB3aGVuIGFuIGF0dHJpYnV0ZSBpcyBzZXQsIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnR5IGlzIHNldC5cbiAgICAgKiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRvIGltcGxlbWVudCB0aGlzIGNhbGxiYWNrLiBJZiB0aGlzIG1ldGhvZCBpc1xuICAgICAqIG92ZXJyaWRkZW4sIGBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgX29sZCwgdmFsdWUpYCBtdXN0IGJlXG4gICAgICogY2FsbGVkLlxuICAgICAqXG4gICAgICogU2VlIFt1c2luZyB0aGUgbGlmZWN5Y2xlIGNhbGxiYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvV2ViX0NvbXBvbmVudHMvVXNpbmdfY3VzdG9tX2VsZW1lbnRzI3VzaW5nX3RoZV9saWZlY3ljbGVfY2FsbGJhY2tzKVxuICAgICAqIG9uIE1ETiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgX29sZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBfX3Byb3BlcnR5VG9BdHRyaWJ1dGUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmNvbnN0cnVjdG9yLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gKChfYSA9IG9wdGlvbnMuY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9BdHRyaWJ1dGUpICE9PVxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5jb252ZXJ0ZXJcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb252ZXJ0ZXI7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBjb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgICBpZiAoREVWX01PREUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKCdtaWdyYXRpb24nKSA+PSAwICYmXG4gICAgICAgICAgICAgICAgYXR0clZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ3VuZGVmaW5lZC1hdHRyaWJ1dGUtdmFsdWUnLCBgVGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlICR7bmFtZX0gcHJvcGVydHkgaXMgYCArXG4gICAgICAgICAgICAgICAgICAgIGB1bmRlZmluZWQgb24gZWxlbWVudCAke3RoaXMubG9jYWxOYW1lfS4gVGhlIGF0dHJpYnV0ZSB3aWxsIGJlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgcmVtb3ZlZCwgYnV0IGluIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIFxcYFJlYWN0aXZlRWxlbWVudFxcYCwgYCArXG4gICAgICAgICAgICAgICAgICAgIGB0aGUgYXR0cmlidXRlIHdvdWxkIG5vdCBoYXZlIGNoYW5nZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAgICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgICAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gTm90ZSwgaGludCB0aGlzIGFzIGFuIGBBdHRyaWJ1dGVNYXBgIHNvIGNsb3N1cmUgY2xlYXJseSB1bmRlcnN0YW5kc1xuICAgICAgICAvLyB0aGUgdHlwZTsgaXQgaGFzIGlzc3VlcyB3aXRoIHRyYWNraW5nIHR5cGVzIHRocm91Z2ggc3RhdGljc1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGN0b3IuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLmdldChuYW1lKTtcbiAgICAgICAgLy8gVXNlIHRyYWNraW5nIGluZm8gdG8gYXZvaWQgcmVmbGVjdGluZyBhIHByb3BlcnR5IHZhbHVlIHRvIGFuIGF0dHJpYnV0ZVxuICAgICAgICAvLyBpZiBpdCB3YXMganVzdCBzZXQgYmVjYXVzZSB0aGUgYXR0cmlidXRlIGNoYW5nZWQuXG4gICAgICAgIGlmIChwcm9wTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IHByb3BOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMocHJvcE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gdHlwZW9mIG9wdGlvbnMuY29udmVydGVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyB7IGZyb21BdHRyaWJ1dGU6IG9wdGlvbnMuY29udmVydGVyIH1cbiAgICAgICAgICAgICAgICA6ICgoX2EgPSBvcHRpb25zLmNvbnZlcnRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZyb21BdHRyaWJ1dGUpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmNvbnZlcnRlclxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb252ZXJ0ZXI7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBwcm9wTmFtZTtcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gY29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhbiB1cGRhdGUgd2hpY2ggaXMgcHJvY2Vzc2VkIGFzeW5jaHJvbm91c2x5LiBUaGlzIHNob3VsZCBiZSBjYWxsZWRcbiAgICAgKiB3aGVuIGFuIGVsZW1lbnQgc2hvdWxkIHVwZGF0ZSBiYXNlZCBvbiBzb21lIHN0YXRlIG5vdCB0cmlnZ2VyZWQgYnkgc2V0dGluZ1xuICAgICAqIGEgcmVhY3RpdmUgcHJvcGVydHkuIEluIHRoaXMgY2FzZSwgcGFzcyBubyBhcmd1bWVudHMuIEl0IHNob3VsZCBhbHNvIGJlXG4gICAgICogY2FsbGVkIHdoZW4gbWFudWFsbHkgaW1wbGVtZW50aW5nIGEgcHJvcGVydHkgc2V0dGVyLiBJbiB0aGlzIGNhc2UsIHBhc3MgdGhlXG4gICAgICogcHJvcGVydHkgYG5hbWVgIGFuZCBgb2xkVmFsdWVgIHRvIGVuc3VyZSB0aGF0IGFueSBjb25maWd1cmVkIHByb3BlcnR5XG4gICAgICogb3B0aW9ucyBhcmUgaG9ub3JlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSBvbGQgdmFsdWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvcHRpb25zIHByb3BlcnR5IG9wdGlvbnMgdG8gdXNlIGluc3RlYWQgb2YgdGhlIHByZXZpb3VzbHlcbiAgICAgKiAgICAgY29uZmlndXJlZCBvcHRpb25zXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICByZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBzaG91bGRSZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHByb3BlcnR5IGtleSwgcGVyZm9ybSBwcm9wZXJ0eSB1cGRhdGUgc3RlcHMuXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPVxuICAgICAgICAgICAgICAgIG9wdGlvbnMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBoYXNDaGFuZ2VkID0gb3B0aW9ucy5oYXNDaGFuZ2VkIHx8IG5vdEVxdWFsO1xuICAgICAgICAgICAgaWYgKGhhc0NoYW5nZWQodGhpc1tuYW1lXSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5zZXQobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IGV2ZXJ5IGNoYW5nZSBoYXMgYSBjaGFuY2UgdG8gYWRkIHRoZVxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvIGBfcmVmbGVjdGluZ1Byb3BlcnRpZXNgLiBUaGlzIGVuc3VyZXMgc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBYm9ydCB0aGUgcmVxdWVzdCBpZiB0aGUgcHJvcGVydHkgc2hvdWxkIG5vdCBiZSBjb25zaWRlcmVkIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiYgc2hvdWxkUmVxdWVzdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSB0aGlzLl9fZW5xdWV1ZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgbm8gbG9uZ2VyIHJldHVybnMgYSBwcm9taXNlLCBpbiBkZXYgbW9kZSB3ZSByZXR1cm4gYVxuICAgICAgICAvLyB0aGVuYWJsZSB3aGljaCB3YXJucyBpZiBpdCdzIGNhbGxlZC5cbiAgICAgICAgcmV0dXJuIERFVl9NT0RFXG4gICAgICAgICAgICA/IHJlcXVlc3RVcGRhdGVUaGVuYWJsZSh0aGlzLmxvY2FsTmFtZSlcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBlbGVtZW50IHRvIGFzeW5jaHJvbm91c2x5IHVwZGF0ZS5cbiAgICAgKi9cbiAgICBhc3luYyBfX2VucXVldWVVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBhbnkgcHJldmlvdXMgdXBkYXRlIGhhcyByZXNvbHZlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgICAgICAgICAvLyBUaGlzIGBhd2FpdGAgYWxzbyBlbnN1cmVzIHRoYXQgcHJvcGVydHkgY2hhbmdlcyBhcmUgYmF0Y2hlZC5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBSZWZpcmUgYW55IHByZXZpb3VzIGVycm9ycyBhc3luYyBzbyB0aGV5IGRvIG5vdCBkaXNydXB0IHRoZSB1cGRhdGVcbiAgICAgICAgICAgIC8vIGN5Y2xlLiBFcnJvcnMgYXJlIHJlZmlyZWQgc28gZGV2ZWxvcGVycyBoYXZlIGEgY2hhbmNlIHRvIG9ic2VydmVcbiAgICAgICAgICAgIC8vIHRoZW0sIGFuZCB0aGlzIGNhbiBiZSBkb25lIGJ5IGltcGxlbWVudGluZ1xuICAgICAgICAgICAgLy8gYHdpbmRvdy5vbnVuaGFuZGxlZHJlamVjdGlvbmAuXG4gICAgICAgICAgICBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIC8vIElmIGBzY2hlZHVsZVVwZGF0ZWAgcmV0dXJucyBhIFByb21pc2UsIHdlIGF3YWl0IGl0LiBUaGlzIGlzIGRvbmUgdG9cbiAgICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzVXBkYXRlUGVuZGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGFuIGVsZW1lbnQgdXBkYXRlLiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGVcbiAgICAgKiB0aW1pbmcgb2YgdXBkYXRlcyBieSByZXR1cm5pbmcgYSBQcm9taXNlLiBUaGUgdXBkYXRlIHdpbGwgYXdhaXQgdGhlXG4gICAgICogcmV0dXJuZWQgUHJvbWlzZSwgYW5kIHlvdSBzaG91bGQgcmVzb2x2ZSB0aGUgUHJvbWlzZSB0byBhbGxvdyB0aGUgdXBkYXRlXG4gICAgICogdG8gcHJvY2VlZC4gSWYgdGhpcyBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnNjaGVkdWxlVXBkYXRlKClgXG4gICAgICogbXVzdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIG92ZXJyaWRlIHByb3RlY3RlZCBhc3luYyBzY2hlZHVsZVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAgICogICBzdXBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIGVsZW1lbnQgdXBkYXRlLiBOb3RlLCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGVcbiAgICAgKiB1cGRhdGUsIGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgd2lsbCBub3QgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogQ2FsbCBgcGVyZm9ybVVwZGF0ZSgpYCB0byBpbW1lZGlhdGVseSBwcm9jZXNzIGEgcGVuZGluZyB1cGRhdGUuIFRoaXMgc2hvdWxkXG4gICAgICogZ2VuZXJhbGx5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpdCBjYW4gYmUgZG9uZSBpbiByYXJlIGNhc2VzIHdoZW4geW91IG5lZWQgdG9cbiAgICAgKiB1cGRhdGUgc3luY2hyb25vdXNseS5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRvIGVuc3VyZSBgcGVyZm9ybVVwZGF0ZSgpYCBzeW5jaHJvbm91c2x5IGNvbXBsZXRlcyBhIHBlbmRpbmcgdXBkYXRlLFxuICAgICAqIGl0IHNob3VsZCBub3QgYmUgb3ZlcnJpZGRlbi4gSW4gTGl0RWxlbWVudCAyLnggaXQgd2FzIHN1Z2dlc3RlZCB0byBvdmVycmlkZVxuICAgICAqIGBwZXJmb3JtVXBkYXRlKClgIHRvIGFsc28gY3VzdG9taXppbmcgdXBkYXRlIHNjaGVkdWxpbmcuIEluc3RlYWQsIHlvdSBzaG91bGQgbm93XG4gICAgICogb3ZlcnJpZGUgYHNjaGVkdWxlVXBkYXRlKClgLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBMaXRFbGVtZW50IDIueCxcbiAgICAgKiBzY2hlZHVsaW5nIHVwZGF0ZXMgdmlhIGBwZXJmb3JtVXBkYXRlKClgIGNvbnRpbnVlcyB0byB3b3JrLCBidXQgd2lsbCBtYWtlXG4gICAgICogYWxzbyBjYWxsaW5nIGBwZXJmb3JtVXBkYXRlKClgIHRvIHN5bmNocm9ub3VzbHkgcHJvY2VzcyB1cGRhdGVzIGRpZmZpY3VsdC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQWJvcnQgYW55IHVwZGF0ZSBpZiBvbmUgaXMgbm90IHBlbmRpbmcgd2hlbiB0aGlzIGlzIGNhbGxlZC5cbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIGBwZXJmb3JtVXBkYXRlYCBpcyBjYWxsZWQgZWFybHkgdG8gXCJmbHVzaFwiXG4gICAgICAgIC8vIHRoZSB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoeyBraW5kOiAndXBkYXRlJyB9KTtcbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIC8vIFByb2R1Y2Ugd2FybmluZyBpZiBhbnkgY2xhc3MgcHJvcGVydGllcyBhcmUgc2hhZG93ZWQgYnkgY2xhc3MgZmllbGRzXG4gICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dlZFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkgJiYgISgoX2EgPSB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGFzKHApKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93ZWRQcm9wZXJ0aWVzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hhZG93ZWRQcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBvbiBlbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHdpbGwgbm90IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYHRyaWdnZXIgdXBkYXRlcyBhcyBleHBlY3RlZCBiZWNhdXNlIHRoZXkgYXJlIHNldCB1c2luZyBjbGFzcyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBmaWVsZHM6ICR7c2hhZG93ZWRQcm9wZXJ0aWVzLmpvaW4oJywgJyl9LiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBOYXRpdmUgY2xhc3MgZmllbGRzIGFuZCBzb21lIGNvbXBpbGVkIG91dHB1dCB3aWxsIG92ZXJ3cml0ZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhY2Nlc3NvcnMgdXNlZCBmb3IgZGV0ZWN0aW5nIGNoYW5nZXMuIFNlZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwczovL2xpdC5kZXYvbXNnL2NsYXNzLWZpZWxkLXNoYWRvd2luZyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWl4aW4gaW5zdGFuY2UgcHJvcGVydGllcyBvbmNlLCBpZiB0aGV5IGV4aXN0LlxuICAgICAgICBpZiAodGhpcy5fX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiAodGhpc1twXSA9IHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjaGFuZ2VkUHJvcGVydGllcyA9IHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0VXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBFbnN1cmUgZWxlbWVudCBjYW4gYWNjZXB0IGFkZGl0aW9uYWwgdXBkYXRlcyBhZnRlciBhbiBleGNlcHRpb24uXG4gICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHVwZGF0ZSBpcyBubyBsb25nZXIgY29uc2lkZXJlZCBwZW5kaW5nIGFuZCBmdXJ0aGVyIHVwZGF0ZXMgYXJlIG5vdyBhbGxvd2VkLlxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIGJlZm9yZSBgdXBkYXRlKClgIHRvIGNvbXB1dGUgdmFsdWVzIG5lZWRlZCBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudCBgd2lsbFVwZGF0ZWAgdG8gY29tcHV0ZSBwcm9wZXJ0eSB2YWx1ZXMgdGhhdCBkZXBlbmQgb24gb3RoZXJcbiAgICAgKiBwcm9wZXJ0aWVzIGFuZCBhcmUgdXNlZCBpbiB0aGUgcmVzdCBvZiB0aGUgdXBkYXRlIHByb2Nlc3MuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgKiAgIC8vIG9ubHkgbmVlZCB0byBjaGVjayBjaGFuZ2VkIHByb3BlcnRpZXMgZm9yIGFuIGV4cGVuc2l2ZSBjb21wdXRhdGlvbi5cbiAgICAgKiAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2ZpcnN0TmFtZScpIHx8IGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnbGFzdE5hbWUnKSkge1xuICAgICAqICAgICB0aGlzLnNoYSA9IGNvbXB1dGVTSEEoYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gKTtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiByZW5kZXIoKSB7XG4gICAgICogICByZXR1cm4gaHRtbGBTSEE6ICR7dGhpcy5zaGF9YDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHdpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvLyBOb3RlLCB0aGlzIGlzIGFuIG92ZXJyaWRlIHBvaW50IGZvciBwb2x5ZmlsbC1zdXBwb3J0LlxuICAgIC8vIEBpbnRlcm5hbFxuICAgIF8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ2NoYW5nZS1pbi11cGRhdGUnKSA+PSAwKSB7XG4gICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ2NoYW5nZS1pbi11cGRhdGUnLCBgRWxlbWVudCAke3RoaXMubG9jYWxOYW1lfSBzY2hlZHVsZWQgYW4gdXBkYXRlIGAgK1xuICAgICAgICAgICAgICAgIGAoZ2VuZXJhbGx5IGJlY2F1c2UgYSBwcm9wZXJ0eSB3YXMgc2V0KSBgICtcbiAgICAgICAgICAgICAgICBgYWZ0ZXIgYW4gdXBkYXRlIGNvbXBsZXRlZCwgY2F1c2luZyBhIG5ldyB1cGRhdGUgdG8gYmUgc2NoZWR1bGVkLiBgICtcbiAgICAgICAgICAgICAgICBgVGhpcyBpcyBpbmVmZmljaWVudCBhbmQgc2hvdWxkIGJlIGF2b2lkZWQgdW5sZXNzIHRoZSBuZXh0IHVwZGF0ZSBgICtcbiAgICAgICAgICAgICAgICBgY2FuIG9ubHkgYmUgc2NoZWR1bGVkIGFzIGEgc2lkZSBlZmZlY3Qgb2YgdGhlIHByZXZpb3VzIHVwZGF0ZS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX21hcmtVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZWxlbWVudCBoYXMgY29tcGxldGVkIHVwZGF0aW5nLlxuICAgICAqIFRoZSBQcm9taXNlIHZhbHVlIGlzIGEgYm9vbGVhbiB0aGF0IGlzIGB0cnVlYCBpZiB0aGUgZWxlbWVudCBjb21wbGV0ZWQgdGhlXG4gICAgICogdXBkYXRlIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS4gVGhlIFByb21pc2UgcmVzdWx0IGlzIGBmYWxzZWAgaWZcbiAgICAgKiBhIHByb3BlcnR5IHdhcyBzZXQgaW5zaWRlIGB1cGRhdGVkKClgLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgYW5cbiAgICAgKiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRvIGF3YWl0IGFkZGl0aW9uYWwgYXN5bmNocm9ub3VzIHdvcmssIG92ZXJyaWRlIHRoZSBgZ2V0VXBkYXRlQ29tcGxldGVgXG4gICAgICogbWV0aG9kLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhIHJlbmRlcmVkIGVsZW1lbnRcbiAgICAgKiBiZWZvcmUgZnVsZmlsbGluZyB0aGlzIFByb21pc2UuIFRvIGRvIHRoaXMsIGZpcnN0IGF3YWl0XG4gICAgICogYHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKClgLCB0aGVuIGFueSBzdWJzZXF1ZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiBBIHByb21pc2Ugb2YgYSBib29sZWFuIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgdXBkYXRlIGNvbXBsZXRlZFxuICAgICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXQgdXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHBvaW50IGZvciB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlLlxuICAgICAqXG4gICAgICogSXQgaXMgbm90IHNhZmUgdG8gb3ZlcnJpZGUgdGhlIGB1cGRhdGVDb21wbGV0ZWAgZ2V0dGVyIGRpcmVjdGx5IGR1ZSB0byBhXG4gICAgICogbGltaXRhdGlvbiBpbiBUeXBlU2NyaXB0IHdoaWNoIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBjYWxsIGFcbiAgICAgKiBzdXBlcmNsYXNzIGdldHRlciAoZS5nLiBgc3VwZXIudXBkYXRlQ29tcGxldGUudGhlbiguLi4pYCkgd2hlbiB0aGUgdGFyZ2V0XG4gICAgICogbGFuZ3VhZ2UgaXMgRVM1IChodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMzOCkuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaW5zdGVhZC4gRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgb3ZlcnJpZGUgYXN5bmMgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICogICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgICogICAgIGF3YWl0IHRoaXMuX215Q2hpbGQudXBkYXRlQ29tcGxldGU7XG4gICAgICogICAgIHJldHVybiByZXN1bHQ7XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHJldHVybiBBIHByb21pc2Ugb2YgYSBib29sZWFuIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgdXBkYXRlIGNvbXBsZXRlZFxuICAgICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBgdXBkYXRlKClgIHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCByZXF1ZXN0c1xuICAgICAqIGFuIHVwZGF0ZS4gQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgYWx3YXlzIHJldHVybnMgYHRydWVgLCBidXQgdGhpcyBjYW4gYmVcbiAgICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBzaG91bGRVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlcy5cbiAgICAgKiBJdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byByZW5kZXIgYW5kIGtlZXAgdXBkYXRlZCBlbGVtZW50IERPTS5cbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIGFub3RoZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvclxuICAgICAgICAgICAgLy8gbG9vcHMgZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHRoaXMuX19wcm9wZXJ0eVRvQXR0cmlidXRlKGssIHRoaXNba10sIHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuZXZlciB0aGUgZWxlbWVudCBpcyB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybVxuICAgICAqIHBvc3QtdXBkYXRpbmcgdGFza3MgdmlhIERPTSBBUElzLCBmb3IgZXhhbXBsZSwgZm9jdXNpbmcgYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZmlyc3QgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm0gb25lIHRpbWVcbiAgICAgKiB3b3JrIG9uIHRoZSBlbGVtZW50IGFmdGVyIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogZmlyc3RVcGRhdGVkKCkge1xuICAgICAqICAgdGhpcy5yZW5kZXJSb290LmdldEVsZW1lbnRCeUlkKCdteS10ZXh0LWFyZWEnKS5mb2N1cygpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGZpcnN0VXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxufVxuX2UgPSBmaW5hbGl6ZWQ7XG4vKipcbiAqIE1hcmtzIGNsYXNzIGFzIGhhdmluZyBmaW5pc2hlZCBjcmVhdGluZyBwcm9wZXJ0aWVzLlxuICovXG5SZWFjdGl2ZUVsZW1lbnRbX2VdID0gdHJ1ZTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgYW55IHN1cGVyY2xhc3MgcHJvcGVydGllcy5cbiAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBzdHlsZXMuXG4gKiBDcmVhdGVkIGxhemlseSBvbiB1c2VyIHN1YmNsYXNzZXMgd2hlbiBmaW5hbGl6aW5nIHRoZSBjbGFzcy5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgc3R5bGVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50U3R5bGVzID0gW107XG4vKipcbiAqIE9wdGlvbnMgdXNlZCB3aGVuIGNhbGxpbmcgYGF0dGFjaFNoYWRvd2AuIFNldCB0aGlzIHByb3BlcnR5IHRvIGN1c3RvbWl6ZVxuICogdGhlIG9wdGlvbnMgZm9yIHRoZSBzaGFkb3dSb290OyBmb3IgZXhhbXBsZSwgdG8gY3JlYXRlIGEgY2xvc2VkXG4gKiBzaGFkb3dSb290OiBge21vZGU6ICdjbG9zZWQnfWAuXG4gKlxuICogTm90ZSwgdGhlc2Ugb3B0aW9ucyBhcmUgdXNlZCBpbiBgY3JlYXRlUmVuZGVyUm9vdGAuIElmIHRoaXMgbWV0aG9kXG4gKiBpcyBjdXN0b21pemVkLCBvcHRpb25zIHNob3VsZCBiZSByZXNwZWN0ZWQgaWYgcG9zc2libGUuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICovXG5SZWFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdE9wdGlvbnMgPSB7IG1vZGU6ICdvcGVuJyB9O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxucG9seWZpbGxTdXBwb3J0ID09PSBudWxsIHx8IHBvbHlmaWxsU3VwcG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9seWZpbGxTdXBwb3J0KHsgUmVhY3RpdmVFbGVtZW50IH0pO1xuLy8gRGV2IG1vZGUgd2FybmluZ3MuLi5cbmlmIChERVZfTU9ERSkge1xuICAgIC8vIERlZmF1bHQgd2FybmluZyBzZXQuXG4gICAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZWRXYXJuaW5ncyA9IFsnY2hhbmdlLWluLXVwZGF0ZSddO1xuICAgIGNvbnN0IGVuc3VyZU93bldhcm5pbmdzID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgICAgaWYgKCFjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VuYWJsZWRXYXJuaW5ncycsIGN0b3IpKSkge1xuICAgICAgICAgICAgY3Rvci5lbmFibGVkV2FybmluZ3MgPSBjdG9yLmVuYWJsZWRXYXJuaW5ncy5zbGljZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnB1c2god2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5kaXNhYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKTtcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgUmVhY3RpdmVFbGVtZW50IHVzYWdlLlxuKChfZCA9IGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogKGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucyA9IFtdKSkucHVzaCgnMS42LjMnKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWwucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBgICtcbiAgICAgICAgYGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYztcbi8qKlxuICogVGhlIG1haW4gTGl0RWxlbWVudCBtb2R1bGUsIHdoaWNoIGRlZmluZXMgdGhlIHtAbGlua2NvZGUgTGl0RWxlbWVudH0gYmFzZVxuICogY2xhc3MgYW5kIHJlbGF0ZWQgQVBJcy5cbiAqXG4gKiAgTGl0RWxlbWVudCBjb21wb25lbnRzIGNhbiBkZWZpbmUgYSB0ZW1wbGF0ZSBhbmQgYSBzZXQgb2Ygb2JzZXJ2ZWRcbiAqIHByb3BlcnRpZXMuIENoYW5naW5nIGFuIG9ic2VydmVkIHByb3BlcnR5IHRyaWdnZXJzIGEgcmUtcmVuZGVyIG9mIHRoZVxuICogZWxlbWVudC5cbiAqXG4gKiAgSW1wb3J0IHtAbGlua2NvZGUgTGl0RWxlbWVudH0gYW5kIHtAbGlua2NvZGUgaHRtbH0gZnJvbSB0aGlzIG1vZHVsZSB0b1xuICogY3JlYXRlIGEgY29tcG9uZW50OlxuICpcbiAqICBgYGBqc1xuICogaW1wb3J0IHtMaXRFbGVtZW50LCBodG1sfSBmcm9tICdsaXQtZWxlbWVudCc7XG4gKlxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKlxuICogICAvLyBEZWNsYXJlIG9ic2VydmVkIHByb3BlcnRpZXNcbiAqICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICogICAgIHJldHVybiB7XG4gKiAgICAgICBhZGplY3RpdmU6IHt9XG4gKiAgICAgfVxuICogICB9XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICB0aGlzLmFkamVjdGl2ZSA9ICdhd2Vzb21lJztcbiAqICAgfVxuICpcbiAqICAgLy8gRGVmaW5lIHRoZSBlbGVtZW50J3MgdGVtcGxhdGVcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYDxwPnlvdXIgJHthZGplY3RpdmV9IHRlbXBsYXRlIGhlcmU8L3A+YDtcbiAqICAgfVxuICogfVxuICpcbiAqIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gKiBgYGBcbiAqXG4gKiBgTGl0RWxlbWVudGAgZXh0ZW5kcyB7QGxpbmtjb2RlIFJlYWN0aXZlRWxlbWVudH0gYW5kIGFkZHMgbGl0LWh0bWxcbiAqIHRlbXBsYXRpbmcuIFRoZSBgUmVhY3RpdmVFbGVtZW50YCBjbGFzcyBpcyBwcm92aWRlZCBmb3IgdXNlcnMgdGhhdCB3YW50IHRvXG4gKiBidWlsZCB0aGVpciBvd24gY3VzdG9tIGVsZW1lbnQgYmFzZSBjbGFzc2VzIHRoYXQgZG9uJ3QgdXNlIGxpdC1odG1sLlxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBub0NoYW5nZSB9IGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbCc7XG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXhwb3J0IFJlYWN0aXZlRWxlbWVudCBhcyBVcGRhdGluZ0VsZW1lbnQuIE5vdGUsXG4vLyBJRSB0cmFuc3BpbGF0aW9uIHJlcXVpcmVzIGV4cG9ydGluZyBsaWtlIHRoaXMuXG5leHBvcnQgY29uc3QgVXBkYXRpbmdFbGVtZW50ID0gUmVhY3RpdmVFbGVtZW50O1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xubGV0IGlzc3VlV2FybmluZztcbmlmIChERVZfTU9ERSkge1xuICAgIC8vIEVuc3VyZSB3YXJuaW5ncyBhcmUgaXNzdWVkIG9ubHkgMXgsIGV2ZW4gaWYgbXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0XG4gICAgLy8gYXJlIGxvYWRlZC5cbiAgICBjb25zdCBpc3N1ZWRXYXJuaW5ncyA9ICgoX2EgPSBnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSkpO1xuICAgIC8vIElzc3VlIGEgd2FybmluZywgaWYgd2UgaGF2ZW4ndCBhbHJlYWR5LlxuICAgIGlzc3VlV2FybmluZyA9IChjb2RlLCB3YXJuaW5nKSA9PiB7XG4gICAgICAgIHdhcm5pbmcgKz0gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgIGlmICghaXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBpc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3MgdGhhdCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcywgYW5kXG4gKiByZW5kZXJzIGEgbGl0LWh0bWwgdGVtcGxhdGUuXG4gKlxuICogVG8gZGVmaW5lIGEgY29tcG9uZW50LCBzdWJjbGFzcyBgTGl0RWxlbWVudGAgYW5kIGltcGxlbWVudCBhXG4gKiBgcmVuZGVyYCBtZXRob2QgdG8gcHJvdmlkZSB0aGUgY29tcG9uZW50J3MgdGVtcGxhdGUuIERlZmluZSBwcm9wZXJ0aWVzXG4gKiB1c2luZyB0aGUge0BsaW5rY29kZSBMaXRFbGVtZW50LnByb3BlcnRpZXMgcHJvcGVydGllc30gcHJvcGVydHkgb3IgdGhlXG4gKiB7QGxpbmtjb2RlIHByb3BlcnR5fSBkZWNvcmF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50IGV4dGVuZHMgUmVhY3RpdmVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucyA9IHsgaG9zdDogdGhpcyB9O1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2I7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSBzdXBlci5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIC8vIFdoZW4gYWRvcHRlZFN0eWxlU2hlZXRzIGFyZSBzaGltbWVkLCB0aGV5IGFyZSBpbnNlcnRlZCBpbnRvIHRoZVxuICAgICAgICAvLyBzaGFkb3dSb290IGJ5IGNyZWF0ZVJlbmRlclJvb3QuIEFkanVzdCB0aGUgcmVuZGVyQmVmb3JlIG5vZGUgc28gdGhhdFxuICAgICAgICAvLyBhbnkgc3R5bGVzIGluIExpdCBjb250ZW50IHJlbmRlciBiZWZvcmUgYWRvcHRlZFN0eWxlU2hlZXRzLiBUaGlzIGlzXG4gICAgICAgIC8vIGltcG9ydGFudCBzbyB0aGF0IGFkb3B0ZWRTdHlsZVNoZWV0cyBoYXZlIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAgICAgICAgLy8gdGhlIHNoYWRvd1Jvb3QuXG4gICAgICAgIChfYSA9IChfYiA9IHRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2IucmVuZGVyQmVmb3JlID0gcmVuZGVyUm9vdC5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAgICogYW5kIGNhbGxzIGByZW5kZXJgIHRvIHJlbmRlciBET00gdmlhIGxpdC1odG1sLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlXG4gICAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBwYXJhbSBjaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vIFNldHRpbmcgcHJvcGVydGllcyBpbiBgcmVuZGVyYCBzaG91bGQgbm90IHRyaWdnZXIgYW4gdXBkYXRlLiBTaW5jZVxuICAgICAgICAvLyB1cGRhdGVzIGFyZSBhbGxvd2VkIGFmdGVyIHN1cGVyLnVwZGF0ZSwgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgcmVuZGVyYFxuICAgICAgICAvLyBiZWZvcmUgdGhhdC5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJPcHRpb25zLmlzQ29ubmVjdGVkID0gdGhpcy5pc0Nvbm5lY3RlZDtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gcmVuZGVyKHZhbHVlLCB0aGlzLnJlbmRlclJvb3QsIHRoaXMucmVuZGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSBkb2N1bWVudCdzIERPTS5cbiAgICAgKlxuICAgICAqIEluIGBjb25uZWN0ZWRDYWxsYmFjaygpYCB5b3Ugc2hvdWxkIHNldHVwIHRhc2tzIHRoYXQgc2hvdWxkIG9ubHkgb2NjdXIgd2hlblxuICAgICAqIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuIFRoZSBtb3N0IGNvbW1vbiBvZiB0aGVzZSBpc1xuICAgICAqIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gbm9kZXMgZXh0ZXJuYWwgdG8gdGhlIGVsZW1lbnQsIGxpa2UgYSBrZXlkb3duXG4gICAgICogZXZlbnQgaGFuZGxlciBhZGRlZCB0byB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgKiAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICogICBhZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogVHlwaWNhbGx5LCBhbnl0aGluZyBkb25lIGluIGBjb25uZWN0ZWRDYWxsYmFjaygpYCBzaG91bGQgYmUgdW5kb25lIHdoZW4gdGhlXG4gICAgICogZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQsIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFjaygpYC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY2hpbGRQYXJ0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Q29ubmVjdGVkKHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgICAqXG4gICAgICogVGhpcyBjYWxsYmFjayBpcyB0aGUgbWFpbiBzaWduYWwgdG8gdGhlIGVsZW1lbnQgdGhhdCBpdCBtYXkgbm8gbG9uZ2VyIGJlXG4gICAgICogdXNlZC4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIHNob3VsZCBlbnN1cmUgdGhhdCBub3RoaW5nIGlzIGhvbGRpbmcgYVxuICAgICAqIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCAoc3VjaCBhcyBldmVudCBsaXN0ZW5lcnMgYWRkZWQgdG8gbm9kZXMgZXh0ZXJuYWxcbiAgICAgKiB0byB0aGUgZWxlbWVudCksIHNvIHRoYXQgaXQgaXMgZnJlZSB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICogICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAqICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBBbiBlbGVtZW50IG1heSBiZSByZS1jb25uZWN0ZWQgYWZ0ZXIgYmVpbmcgZGlzY29ubmVjdGVkLlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtYXkgcmV0dXJuXG4gICAgICogYW55IHZhbHVlIHJlbmRlcmFibGUgYnkgbGl0LWh0bWwncyBgQ2hpbGRQYXJ0YCAtIHR5cGljYWxseSBhXG4gICAgICogYFRlbXBsYXRlUmVzdWx0YC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICAgKiB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICogaXQgd2lsbCBub3QgbmVlZGxlc3NseSB0cnkgdG8gYGZpbmFsaXplYC5cbiAqXG4gKiBOb3RlIHRoaXMgcHJvcGVydHkgbmFtZSBpcyBhIHN0cmluZyB0byBwcmV2ZW50IGJyZWFraW5nIENsb3N1cmUgSlMgQ29tcGlsZXJcbiAqIG9wdGltaXphdGlvbnMuIFNlZSBAbGl0L3JlYWN0aXZlLWVsZW1lbnQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbkxpdEVsZW1lbnRbJ2ZpbmFsaXplZCddID0gdHJ1ZTtcbi8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG5MaXRFbGVtZW50WydfJGxpdEVsZW1lbnQkJ10gPSB0cnVlO1xuLy8gSW5zdGFsbCBoeWRyYXRpb24gaWYgYXZhaWxhYmxlXG4oX2IgPSBnbG9iYWxUaGlzLmxpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoZ2xvYmFsVGhpcywgeyBMaXRFbGVtZW50IH0pO1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IGdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydERldk1vZGVcbiAgICA6IGdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydDtcbnBvbHlmaWxsU3VwcG9ydCA9PT0gbnVsbCB8fCBwb2x5ZmlsbFN1cHBvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvbHlmaWxsU3VwcG9ydCh7IExpdEVsZW1lbnQgfSk7XG4vLyBERVYgbW9kZSB3YXJuaW5nc1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuICAgIC8vIE5vdGUsIGZvciBjb21wYXRpYmlsaXR5IHdpdGggY2xvc3VyZSBjb21waWxhdGlvbiwgdGhpcyBhY2Nlc3NcbiAgICAvLyBuZWVkcyB0byBiZSBhcyBhIHN0cmluZyBwcm9wZXJ0eSBpbmRleC5cbiAgICBMaXRFbGVtZW50WydmaW5hbGl6ZSddID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBmaW5hbGl6ZWQgPSBSZWFjdGl2ZUVsZW1lbnQuZmluYWxpemUuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKCFmaW5hbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZE9yUmVuYW1lZCA9IChvYmosIG5hbWUsIHJlbmFtZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0b3JOYW1lID0gKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicgPyBvYmogOiBvYmouY29uc3RydWN0b3IpXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lO1xuICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZyhyZW5hbWVkID8gJ3JlbmFtZWQtYXBpJyA6ICdyZW1vdmVkLWFwaScsIGBcXGAke25hbWV9XFxgIGlzIGltcGxlbWVudGVkIG9uIGNsYXNzICR7Y3Rvck5hbWV9LiBJdCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGhhcyBiZWVuICR7cmVuYW1lZCA/ICdyZW5hbWVkJyA6ICdyZW1vdmVkJ30gYCArXG4gICAgICAgICAgICAgICAgICAgIGBpbiB0aGlzIHZlcnNpb24gb2YgTGl0RWxlbWVudC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQodGhpcywgJ3JlbmRlcicpO1xuICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCh0aGlzLCAnZ2V0U3R5bGVzJywgdHJ1ZSk7XG4gICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKHRoaXMucHJvdG90eXBlLCAnYWRvcHRTdHlsZXMnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbn1cbi8qKlxuICogRU5EIFVTRVJTIFNIT1VMRCBOT1QgUkVMWSBPTiBUSElTIE9CSkVDVC5cbiAqXG4gKiBQcml2YXRlIGV4cG9ydHMgZm9yIHVzZSBieSBvdGhlciBMaXQgcGFja2FnZXMsIG5vdCBpbnRlbmRlZCBmb3IgdXNlIGJ5XG4gKiBleHRlcm5hbCB1c2Vycy5cbiAqXG4gKiBXZSBjdXJyZW50bHkgZG8gbm90IG1ha2UgYSBtYW5nbGVkIHJvbGx1cCBidWlsZCBvZiB0aGUgbGl0LXNzciBjb2RlLiBJbiBvcmRlclxuICogdG8ga2VlcCBhIG51bWJlciBvZiAob3RoZXJ3aXNlIHByaXZhdGUpIHRvcC1sZXZlbCBleHBvcnRzICBtYW5nbGVkIGluIHRoZVxuICogY2xpZW50IHNpZGUgY29kZSwgd2UgZXhwb3J0IGEgXyRMRSBvYmplY3QgY29udGFpbmluZyB0aG9zZSBtZW1iZXJzIChvclxuICogaGVscGVyIG1ldGhvZHMgZm9yIGFjY2Vzc2luZyBwcml2YXRlIGZpZWxkcyBvZiB0aG9zZSBtZW1iZXJzKSwgYW5kIHRoZW5cbiAqIHJlLWV4cG9ydCB0aGVtIGZvciB1c2UgaW4gbGl0LXNzci4gVGhpcyBrZWVwcyBsaXQtc3NyIGFnbm9zdGljIHRvIHdoZXRoZXIgdGhlXG4gKiBjbGllbnQtc2lkZSBjb2RlIGlzIGJlaW5nIHVzZWQgaW4gYGRldmAgbW9kZSBvciBgcHJvZGAgbW9kZS5cbiAqXG4gKiBUaGlzIGhhcyBhIHVuaXF1ZSBuYW1lLCB0byBkaXNhbWJpZ3VhdGUgaXQgZnJvbSBwcml2YXRlIGV4cG9ydHMgaW5cbiAqIGxpdC1odG1sLCBzaW5jZSB0aGlzIG1vZHVsZSByZS1leHBvcnRzIGFsbCBvZiBsaXQtaHRtbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgXyRMRSA9IHtcbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHk6IChlbCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGVsLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBfJGNoYW5nZWRQcm9wZXJ0aWVzOiAoZWwpID0+IGVsLl8kY2hhbmdlZFByb3BlcnRpZXMsXG59O1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBMaXRFbGVtZW50IHVzYWdlLlxuKChfYyA9IGdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMgPSBbXSkpLnB1c2goJzMuMy4zJyk7XG5pZiAoREVWX01PREUgJiYgZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBgICtcbiAgICAgICAgYGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKlxuICogVGhpcyBmaWxlIGV4cG9ydHMgYSBib29sZWFuIGNvbnN0IHdob3NlIHZhbHVlIHdpbGwgZGVwZW5kIG9uIHdoYXQgZW52aXJvbm1lbnRcbiAqIHRoZSBtb2R1bGUgaXMgYmVpbmcgaW1wb3J0ZWQgZnJvbS5cbiAqL1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG4vKipcbiAqIEEgYm9vbGVhbiB0aGF0IHdpbGwgYmUgYHRydWVgIGluIHNlcnZlciBlbnZpcm9ubWVudHMgbGlrZSBOb2RlLCBhbmQgYGZhbHNlYFxuICogaW4gYnJvd3NlciBlbnZpcm9ubWVudHMuIE5vdGUgdGhhdCB5b3VyIHNlcnZlciBlbnZpcm9ubWVudCBvciB0b29sY2hhaW4gbXVzdFxuICogc3VwcG9ydCB0aGUgYFwibm9kZVwiYCBleHBvcnQgY29uZGl0aW9uIGZvciB0aGlzIHRvIGJlIGB0cnVlYC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHdoZW4gYXV0aG9yaW5nIGNvbXBvbmVudHMgdG8gY2hhbmdlIGJlaGF2aW9yIGJhc2VkIG9uXG4gKiB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGlzIGV4ZWN1dGluZyBpbiBhbiBTU1IgY29udGV4dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzU2VydmVyID0gTk9ERV9NT0RFO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtc2VydmVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kO1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xuY29uc3QgRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIID0gdHJ1ZTtcbmNvbnN0IE5PREVfTU9ERSA9IGZhbHNlO1xuLy8gVXNlIHdpbmRvdyBmb3IgYnJvd3NlciBidWlsZHMgYmVjYXVzZSBJRTExIGRvZXNuJ3QgaGF2ZSBnbG9iYWxUaGlzLlxuY29uc3QgZ2xvYmFsID0gTk9ERV9NT0RFID8gZ2xvYmFsVGhpcyA6IHdpbmRvdztcbi8qKlxuICogVXNlZnVsIGZvciB2aXN1YWxpemluZyBhbmQgbG9nZ2luZyBpbnNpZ2h0cyBpbnRvIHdoYXQgdGhlIExpdCB0ZW1wbGF0ZSBzeXN0ZW0gaXMgZG9pbmcuXG4gKlxuICogQ29tcGlsZWQgb3V0IG9mIHByb2QgbW9kZSBidWlsZHMuXG4gKi9cbmNvbnN0IGRlYnVnTG9nRXZlbnQgPSBERVZfTU9ERVxuICAgID8gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNob3VsZEVtaXQgPSBnbG9iYWxcbiAgICAgICAgICAgIC5lbWl0TGl0RGVidWdMb2dFdmVudHM7XG4gICAgICAgIGlmICghc2hvdWxkRW1pdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdsb2JhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbGl0LWRlYnVnJywge1xuICAgICAgICAgICAgZGV0YWlsOiBldmVudCxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICA6IHVuZGVmaW5lZDtcbi8vIFVzZWQgZm9yIGNvbm5lY3RpbmcgYmVnaW5SZW5kZXIgYW5kIGVuZFJlbmRlciBldmVudHMgd2hlbiB0aGVyZSBhcmUgbmVzdGVkXG4vLyByZW5kZXJzIHdoZW4gZXJyb3JzIGFyZSB0aHJvd24gcHJldmVudGluZyBhbiBlbmRSZW5kZXIgZXZlbnQgZnJvbSBiZWluZ1xuLy8gY2FsbGVkLlxubGV0IGRlYnVnTG9nUmVuZGVySWQgPSAwO1xubGV0IGlzc3VlV2FybmluZztcbmlmIChERVZfTU9ERSkge1xuICAgIChfYSA9IGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSk7XG4gICAgLy8gSXNzdWUgYSB3YXJuaW5nLCBpZiB3ZSBoYXZlbid0IGFscmVhZHkuXG4gICAgaXNzdWVXYXJuaW5nID0gKGNvZGUsIHdhcm5pbmcpID0+IHtcbiAgICAgICAgd2FybmluZyArPSBjb2RlXG4gICAgICAgICAgICA/IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICBpZiAoIWdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncy5oYXMod2FybmluZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICAgICAgICAgIGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlzc3VlV2FybmluZygnZGV2LW1vZGUnLCBgTGl0IGlzIGluIGRldiBtb2RlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24hYCk7XG59XG5jb25zdCB3cmFwID0gRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggJiZcbiAgICAoKF9iID0gZ2xvYmFsLlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5Vc2UpICYmXG4gICAgKChfYyA9IGdsb2JhbC5TaGFkeURPTSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm5vUGF0Y2gpID09PSB0cnVlXG4gICAgPyBnbG9iYWwuU2hhZHlET00ud3JhcFxuICAgIDogKG5vZGUpID0+IG5vZGU7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSBnbG9iYWwudHJ1c3RlZFR5cGVzO1xuLyoqXG4gKiBPdXIgVHJ1c3RlZFR5cGVQb2xpY3kgZm9yIEhUTUwgd2hpY2ggaXMgZGVjbGFyZWQgdXNpbmcgdGhlIGh0bWwgdGVtcGxhdGVcbiAqIHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBUaGF0IEhUTUwgaXMgYSBkZXZlbG9wZXItYXV0aG9yZWQgY29uc3RhbnQsIGFuZCBpcyBwYXJzZWQgd2l0aCBpbm5lckhUTUxcbiAqIGJlZm9yZSBhbnkgdW50cnVzdGVkIGV4cHJlc3Npb25zIGhhdmUgYmVlbiBtaXhlZCBpbi4gVGhlcmVmb3IgaXQgaXNcbiAqIGNvbnNpZGVyZWQgc2FmZSBieSBjb25zdHJ1Y3Rpb24uXG4gKi9cbmNvbnN0IHBvbGljeSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnbGl0LWh0bWwnLCB7XG4gICAgICAgIGNyZWF0ZUhUTUw6IChzKSA9PiBzLFxuICAgIH0pXG4gICAgOiB1bmRlZmluZWQ7XG5jb25zdCBpZGVudGl0eUZ1bmN0aW9uID0gKHZhbHVlKSA9PiB2YWx1ZTtcbmNvbnN0IG5vb3BTYW5pdGl6ZXIgPSAoX25vZGUsIF9uYW1lLCBfdHlwZSkgPT4gaWRlbnRpdHlGdW5jdGlvbjtcbi8qKiBTZXRzIHRoZSBnbG9iYWwgc2FuaXRpemVyIGZhY3RvcnkuICovXG5jb25zdCBzZXRTYW5pdGl6ZXIgPSAobmV3U2FuaXRpemVyKSA9PiB7XG4gICAgaWYgKCFFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2FuaXRpemVyRmFjdG9yeUludGVybmFsICE9PSBub29wU2FuaXRpemVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIG92ZXJ3cml0ZSBleGlzdGluZyBsaXQtaHRtbCBzZWN1cml0eSBwb2xpY3kuYCArXG4gICAgICAgICAgICBgIHNldFNhbml0aXplRE9NVmFsdWVGYWN0b3J5IHNob3VsZCBiZSBjYWxsZWQgYXQgbW9zdCBvbmNlLmApO1xuICAgIH1cbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBuZXdTYW5pdGl6ZXI7XG59O1xuLyoqXG4gKiBPbmx5IHVzZWQgaW4gaW50ZXJuYWwgdGVzdHMsIG5vdCBhIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkuXG4gKi9cbmNvbnN0IF90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZSA9ICgpID0+IHtcbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xufTtcbmNvbnN0IGNyZWF0ZVNhbml0aXplciA9IChub2RlLCBuYW1lLCB0eXBlKSA9PiB7XG4gICAgcmV0dXJuIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbChub2RlLCBuYW1lLCB0eXBlKTtcbn07XG4vLyBBZGRlZCB0byBhbiBhdHRyaWJ1dGUgbmFtZSB0byBtYXJrIHRoZSBhdHRyaWJ1dGUgYXMgYm91bmQgc28gd2UgY2FuIGZpbmRcbi8vIGl0IGVhc2lseS5cbmNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcbi8vIFRoaXMgbWFya2VyIGlzIHVzZWQgaW4gbWFueSBzeW50YWN0aWMgcG9zaXRpb25zIGluIEhUTUwsIHNvIGl0IG11c3QgYmVcbi8vIGEgdmFsaWQgZWxlbWVudCBuYW1lIGFuZCBhdHRyaWJ1dGUgbmFtZS4gV2UgZG9uJ3Qgc3VwcG9ydCBkeW5hbWljIG5hbWVzICh5ZXQpXG4vLyBidXQgdGhpcyBhdCBsZWFzdCBlbnN1cmVzIHRoYXQgdGhlIHBhcnNlIHRyZWUgaXMgY2xvc2VyIHRvIHRoZSB0ZW1wbGF0ZVxuLy8gaW50ZW50aW9uLlxuY29uc3QgbWFya2VyID0gYGxpdCQke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSg5KX0kYDtcbi8vIFN0cmluZyB1c2VkIHRvIHRlbGwgaWYgYSBjb21tZW50IGlzIGEgbWFya2VyIGNvbW1lbnRcbmNvbnN0IG1hcmtlck1hdGNoID0gJz8nICsgbWFya2VyO1xuLy8gVGV4dCB1c2VkIHRvIGluc2VydCBhIGNvbW1lbnQgbWFya2VyIG5vZGUuIFdlIHVzZSBwcm9jZXNzaW5nIGluc3RydWN0aW9uXG4vLyBzeW50YXggYmVjYXVzZSBpdCdzIHNsaWdodGx5IHNtYWxsZXIsIGJ1dCBwYXJzZXMgYXMgYSBjb21tZW50IG5vZGUuXG5jb25zdCBub2RlTWFya2VyID0gYDwke21hcmtlck1hdGNofT5gO1xuY29uc3QgZCA9IE5PREVfTU9ERSAmJiBnbG9iYWwuZG9jdW1lbnQgPT09IHVuZGVmaW5lZFxuICAgID8ge1xuICAgICAgICBjcmVhdGVUcmVlV2Fsa2VyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgIH1cbiAgICA6IGRvY3VtZW50O1xuLy8gQ3JlYXRlcyBhIGR5bmFtaWMgbWFya2VyLiBXZSBuZXZlciBoYXZlIHRvIHNlYXJjaCBmb3IgdGhlc2UgaW4gdGhlIERPTS5cbmNvbnN0IGNyZWF0ZU1hcmtlciA9ICgpID0+IGQuY3JlYXRlQ29tbWVudCgnJyk7XG5jb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT0gJ2Z1bmN0aW9uJyk7XG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWUpID0+IGlzQXJyYXkodmFsdWUpIHx8XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB0eXBlb2YgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKSA9PT0gJ2Z1bmN0aW9uJztcbmNvbnN0IFNQQUNFX0NIQVIgPSBgWyBcXHRcXG5cXGZcXHJdYDtcbmNvbnN0IEFUVFJfVkFMVUVfQ0hBUiA9IGBbXiBcXHRcXG5cXGZcXHJcIidcXGA8Pj1dYDtcbmNvbnN0IE5BTUVfQ0hBUiA9IGBbXlxcXFxzXCInPj0vXWA7XG4vLyBUaGVzZSByZWdleGVzIHJlcHJlc2VudCB0aGUgZml2ZSBwYXJzaW5nIHN0YXRlcyB0aGF0IHdlIGNhcmUgYWJvdXQgaW4gdGhlXG4vLyBUZW1wbGF0ZSdzIEhUTUwgc2Nhbm5lci4gVGhleSBtYXRjaCB0aGUgKmVuZCogb2YgdGhlIHN0YXRlIHRoZXkncmUgbmFtZWRcbi8vIGFmdGVyLlxuLy8gRGVwZW5kaW5nIG9uIHRoZSBtYXRjaCwgd2UgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZS4gSWYgdGhlcmUncyBubyBtYXRjaCxcbi8vIHdlIHN0YXkgaW4gdGhlIHNhbWUgc3RhdGUuXG4vLyBOb3RlIHRoYXQgdGhlIHJlZ2V4ZXMgYXJlIHN0YXRlZnVsLiBXZSB1dGlsaXplIGxhc3RJbmRleCBhbmQgc3luYyBpdFxuLy8gYWNyb3NzIHRoZSBtdWx0aXBsZSByZWdleGVzIHVzZWQuIEluIGFkZGl0aW9uIHRvIHRoZSBmaXZlIHJlZ2V4ZXMgYmVsb3dcbi8vIHdlIGFsc28gZHluYW1pY2FsbHkgY3JlYXRlIGEgcmVnZXggdG8gZmluZCB0aGUgbWF0Y2hpbmcgZW5kIHRhZ3MgZm9yIHJhd1xuLy8gdGV4dCBlbGVtZW50cy5cbi8qKlxuICogRW5kIG9mIHRleHQgaXM6IGA8YCBmb2xsb3dlZCBieTpcbiAqICAgKGNvbW1lbnQgc3RhcnQpIG9yICh0YWcpIG9yIChkeW5hbWljIHRhZyBiaW5kaW5nKVxuICovXG5jb25zdCB0ZXh0RW5kUmVnZXggPSAvPCg/OighLS18XFwvW15hLXpBLVpdKXwoXFwvP1thLXpBLVpdW14+XFxzXSopfChcXC8/JCkpL2c7XG5jb25zdCBDT01NRU5UX1NUQVJUID0gMTtcbmNvbnN0IFRBR19OQU1FID0gMjtcbmNvbnN0IERZTkFNSUNfVEFHX05BTUUgPSAzO1xuY29uc3QgY29tbWVudEVuZFJlZ2V4ID0gLy0tPi9nO1xuLyoqXG4gKiBDb21tZW50cyBub3Qgc3RhcnRlZCB3aXRoIDwhLS0sIGxpa2UgPC97LCBjYW4gYmUgZW5kZWQgYnkgYSBzaW5nbGUgYD5gXG4gKi9cbmNvbnN0IGNvbW1lbnQyRW5kUmVnZXggPSAvPi9nO1xuLyoqXG4gKiBUaGUgdGFnRW5kIHJlZ2V4IG1hdGNoZXMgdGhlIGVuZCBvZiB0aGUgXCJpbnNpZGUgYW4gb3BlbmluZ1wiIHRhZyBzeW50YXhcbiAqIHBvc2l0aW9uLiBJdCBlaXRoZXIgbWF0Y2hlcyBhIGA+YCwgYW4gYXR0cmlidXRlLWxpa2Ugc2VxdWVuY2UsIG9yIHRoZSBlbmRcbiAqIG9mIHRoZSBzdHJpbmcgYWZ0ZXIgYSBzcGFjZSAoYXR0cmlidXRlLW5hbWUgcG9zaXRpb24gZW5kaW5nKS5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHRcXG5cXGZcXHJcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXdoaXRlc3BhY2VcbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSB3aGl0ZXNwYWNlIGNoYXJhY3RlciwgKFwiKSwgKCcpLCBcIj5cIixcbiAqICAgIFwiPVwiLCBvciBcIi9cIi4gTm90ZTogdGhpcyBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgSFRNTCBzcGVjIHdoaWNoIGFsc28gZXhjbHVkZXMgY29udHJvbCBjaGFyYWN0ZXJzLlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuY29uc3QgdGFnRW5kUmVnZXggPSBuZXcgUmVnRXhwKGA+fCR7U1BBQ0VfQ0hBUn0oPzooJHtOQU1FX0NIQVJ9KykoJHtTUEFDRV9DSEFSfSo9JHtTUEFDRV9DSEFSfSooPzoke0FUVFJfVkFMVUVfQ0hBUn18KFwifCcpfCkpfCQpYCwgJ2cnKTtcbmNvbnN0IEVOVElSRV9NQVRDSCA9IDA7XG5jb25zdCBBVFRSSUJVVEVfTkFNRSA9IDE7XG5jb25zdCBTUEFDRVNfQU5EX0VRVUFMUyA9IDI7XG5jb25zdCBRVU9URV9DSEFSID0gMztcbmNvbnN0IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4ID0gLycvZztcbmNvbnN0IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4ID0gL1wiL2c7XG4vKipcbiAqIE1hdGNoZXMgdGhlIHJhdyB0ZXh0IGVsZW1lbnRzLlxuICpcbiAqIENvbW1lbnRzIGFyZSBub3QgcGFyc2VkIHdpdGhpbiByYXcgdGV4dCBlbGVtZW50cywgc28gd2UgbmVlZCB0byBzZWFyY2ggdGhlaXJcbiAqIHRleHQgY29udGVudCBmb3IgbWFya2VyIHN0cmluZ3MuXG4gKi9cbmNvbnN0IHJhd1RleHRFbGVtZW50ID0gL14oPzpzY3JpcHR8c3R5bGV8dGV4dGFyZWF8dGl0bGUpJC9pO1xuLyoqIFRlbXBsYXRlUmVzdWx0IHR5cGVzICovXG5jb25zdCBIVE1MX1JFU1VMVCA9IDE7XG5jb25zdCBTVkdfUkVTVUxUID0gMjtcbi8vIFRlbXBsYXRlUGFydCB0eXBlc1xuLy8gSU1QT1JUQU5UOiB0aGVzZSBtdXN0IG1hdGNoIHRoZSB2YWx1ZXMgaW4gUGFydFR5cGVcbmNvbnN0IEFUVFJJQlVURV9QQVJUID0gMTtcbmNvbnN0IENISUxEX1BBUlQgPSAyO1xuY29uc3QgUFJPUEVSVFlfUEFSVCA9IDM7XG5jb25zdCBCT09MRUFOX0FUVFJJQlVURV9QQVJUID0gNDtcbmNvbnN0IEVWRU5UX1BBUlQgPSA1O1xuY29uc3QgRUxFTUVOVF9QQVJUID0gNjtcbmNvbnN0IENPTU1FTlRfUEFSVCA9IDc7XG4vKipcbiAqIEdlbmVyYXRlcyBhIHRlbXBsYXRlIGxpdGVyYWwgdGFnIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFRlbXBsYXRlUmVzdWx0IHdpdGhcbiAqIHRoZSBnaXZlbiByZXN1bHQgdHlwZS5cbiAqL1xuY29uc3QgdGFnID0gKHR5cGUpID0+IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgICAvLyBXYXJuIGFnYWluc3QgdGVtcGxhdGVzIG9jdGFsIGVzY2FwZSBzZXF1ZW5jZXNcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgcmF0aGVyIHRoYW4gaW4gcmVuZGVyIHNvIHRoYXQgdGhlIHdhcm5pbmcgaXMgY2xvc2VyIHRvIHRoZVxuICAgIC8vIHRlbXBsYXRlIGRlZmluaXRpb24uXG4gICAgaWYgKERFVl9NT0RFICYmIHN0cmluZ3Muc29tZSgocykgPT4gcyA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NvbWUgdGVtcGxhdGUgc3RyaW5ncyBhcmUgdW5kZWZpbmVkLlxcbicgK1xuICAgICAgICAgICAgJ1RoaXMgaXMgcHJvYmFibHkgY2F1c2VkIGJ5IGlsbGVnYWwgb2N0YWwgZXNjYXBlIHNlcXVlbmNlcy4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgWydfJGxpdFR5cGUkJ106IHR5cGUsXG4gICAgICAgIHN0cmluZ3MsXG4gICAgICAgIHZhbHVlcyxcbiAgICB9O1xufTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGhlYWRlciA9ICh0aXRsZTogc3RyaW5nKSA9PiBodG1sYDxoMT4ke3RpdGxlfTwvaDE+YDtcbiAqIGBgYFxuICpcbiAqIFRoZSBgaHRtbGAgdGFnIHJldHVybnMgYSBkZXNjcmlwdGlvbiBvZiB0aGUgRE9NIHRvIHJlbmRlciBhcyBhIHZhbHVlLiBJdCBpc1xuICogbGF6eSwgbWVhbmluZyBubyB3b3JrIGlzIGRvbmUgdW50aWwgdGhlIHRlbXBsYXRlIGlzIHJlbmRlcmVkLiBXaGVuIHJlbmRlcmluZyxcbiAqIGlmIGEgdGVtcGxhdGUgY29tZXMgZnJvbSB0aGUgc2FtZSBleHByZXNzaW9uIGFzIGEgcHJldmlvdXNseSByZW5kZXJlZCByZXN1bHQsXG4gKiBpdCdzIGVmZmljaWVudGx5IHVwZGF0ZWQgaW5zdGVhZCBvZiByZXBsYWNlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSB0YWcoSFRNTF9SRVNVTFQpO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgZnJhZ21lbnQgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCByZWN0ID0gc3ZnYDxyZWN0IHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiPjwvcmVjdD5gO1xuICpcbiAqIGNvbnN0IG15SW1hZ2UgPSBodG1sYFxuICogICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gKiAgICAgJHtyZWN0fVxuICogICA8L3N2Zz5gO1xuICogYGBgXG4gKlxuICogVGhlIGBzdmdgICp0YWcgZnVuY3Rpb24qIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIFNWRyBmcmFnbWVudHMsIG9yIGVsZW1lbnRzXG4gKiB0aGF0IHdvdWxkIGJlIGNvbnRhaW5lZCAqKmluc2lkZSoqIGFuIGA8c3ZnPmAgSFRNTCBlbGVtZW50LiBBIGNvbW1vbiBlcnJvciBpc1xuICogcGxhY2luZyBhbiBgPHN2Zz5gICplbGVtZW50KiBpbiBhIHRlbXBsYXRlIHRhZ2dlZCB3aXRoIHRoZSBgc3ZnYCB0YWdcbiAqIGZ1bmN0aW9uLiBUaGUgYDxzdmc+YCBlbGVtZW50IGlzIGFuIEhUTUwgZWxlbWVudCBhbmQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIGFcbiAqIHRlbXBsYXRlIHRhZ2dlZCB3aXRoIHRoZSB7QGxpbmtjb2RlIGh0bWx9IHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBJbiBMaXRFbGVtZW50IHVzYWdlLCBpdCdzIGludmFsaWQgdG8gcmV0dXJuIGFuIFNWRyBmcmFnbWVudCBmcm9tIHRoZVxuICogYHJlbmRlcigpYCBtZXRob2QsIGFzIHRoZSBTVkcgZnJhZ21lbnQgd2lsbCBiZSBjb250YWluZWQgd2l0aGluIHRoZSBlbGVtZW50J3NcbiAqIHNoYWRvdyByb290IGFuZCB0aHVzIGNhbm5vdCBiZSB1c2VkIHdpdGhpbiBhbiBgPHN2Zz5gIEhUTUwgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IHRhZyhTVkdfUkVTVUxUKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IFN5bWJvbC5mb3IoJ2xpdC1ub0NoYW5nZScpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIENoaWxkUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgYnV0dG9uID0gaHRtbGAke1xuICogIHVzZXIuaXNBZG1pblxuICogICAgPyBodG1sYDxidXR0b24+REVMRVRFPC9idXR0b24+YFxuICogICAgOiBub3RoaW5nXG4gKiB9YDtcbiAqIGBgYFxuICpcbiAqIFByZWZlciB1c2luZyBgbm90aGluZ2Agb3ZlciBvdGhlciBmYWxzeSB2YWx1ZXMgYXMgaXQgcHJvdmlkZXMgYSBjb25zaXN0ZW50XG4gKiBiZWhhdmlvciBiZXR3ZWVuIHZhcmlvdXMgZXhwcmVzc2lvbiBiaW5kaW5nIGNvbnRleHRzLlxuICpcbiAqIEluIGNoaWxkIGV4cHJlc3Npb25zLCBgdW5kZWZpbmVkYCwgYG51bGxgLCBgJydgLCBhbmQgYG5vdGhpbmdgIGFsbCBiZWhhdmUgdGhlXG4gKiBzYW1lIGFuZCByZW5kZXIgbm8gbm9kZXMuIEluIGF0dHJpYnV0ZSBleHByZXNzaW9ucywgYG5vdGhpbmdgIF9yZW1vdmVzXyB0aGVcbiAqIGF0dHJpYnV0ZSwgd2hpbGUgYHVuZGVmaW5lZGAgYW5kIGBudWxsYCB3aWxsIHJlbmRlciBhbiBlbXB0eSBzdHJpbmcuIEluXG4gKiBwcm9wZXJ0eSBleHByZXNzaW9ucyBgbm90aGluZ2AgYmVjb21lcyBgdW5kZWZpbmVkYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSBTeW1ib2wuZm9yKCdsaXQtbm90aGluZycpO1xuLyoqXG4gKiBUaGUgY2FjaGUgb2YgcHJlcGFyZWQgdGVtcGxhdGVzLCBrZXllZCBieSB0aGUgdGFnZ2VkIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gKiBhbmQgX25vdF8gYWNjb3VudGluZyBmb3IgdGhlIHNwZWNpZmljIHRlbXBsYXRlIHRhZyB1c2VkLiBUaGlzIG1lYW5zIHRoYXRcbiAqIHRlbXBsYXRlIHRhZ3MgY2Fubm90IGJlIGR5bmFtaWMgLSB0aGUgbXVzdCBzdGF0aWNhbGx5IGJlIG9uZSBvZiBodG1sLCBzdmcsXG4gKiBvciBhdHRyLiBUaGlzIHJlc3RyaWN0aW9uIHNpbXBsaWZpZXMgdGhlIGNhY2hlIGxvb2t1cCwgd2hpY2ggaXMgb24gdGhlIGhvdFxuICogcGF0aCBmb3IgcmVuZGVyaW5nLlxuICovXG5jb25zdCB0ZW1wbGF0ZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHdhbGtlciA9IGQuY3JlYXRlVHJlZVdhbGtlcihkLCAxMjkgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR9ICovLCBudWxsLCBmYWxzZSk7XG5sZXQgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbmZ1bmN0aW9uIHRydXN0RnJvbVRlbXBsYXRlU3RyaW5nKHRzYSwgc3RyaW5nRnJvbVRTQSkge1xuICAgIC8vIEEgc2VjdXJpdHkgY2hlY2sgdG8gcHJldmVudCBzcG9vZmluZyBvZiBMaXQgdGVtcGxhdGUgcmVzdWx0cy5cbiAgICAvLyBJbiB0aGUgZnV0dXJlLCB3ZSBtYXkgYmUgYWJsZSB0byByZXBsYWNlIHRoaXMgd2l0aCBBcnJheS5pc1RlbXBsYXRlT2JqZWN0LFxuICAgIC8vIHRob3VnaCB3ZSBtaWdodCBuZWVkIHRvIG1ha2UgdGhhdCBjaGVjayBpbnNpZGUgb2YgdGhlIGh0bWwgYW5kIHN2Z1xuICAgIC8vIGZ1bmN0aW9ucywgYmVjYXVzZSBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgZG9uJ3QgY29tZSBpbiBhc1xuICAgIC8vIFRlbXBsYXRlU3RyaW5nQXJyYXkgb2JqZWN0cy5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHNhKSB8fCAhdHNhLmhhc093blByb3BlcnR5KCdyYXcnKSkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9ICdpbnZhbGlkIHRlbXBsYXRlIHN0cmluZ3MgYXJyYXknO1xuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgXG4gICAgICAgICAgSW50ZXJuYWwgRXJyb3I6IGV4cGVjdGVkIHRlbXBsYXRlIHN0cmluZ3MgdG8gYmUgYW4gYXJyYXlcbiAgICAgICAgICB3aXRoIGEgJ3JhdycgZmllbGQuIEZha2luZyBhIHRlbXBsYXRlIHN0cmluZ3MgYXJyYXkgYnlcbiAgICAgICAgICBjYWxsaW5nIGh0bWwgb3Igc3ZnIGxpa2UgYW4gb3JkaW5hcnkgZnVuY3Rpb24gaXMgZWZmZWN0aXZlbHlcbiAgICAgICAgICB0aGUgc2FtZSBhcyBjYWxsaW5nIHVuc2FmZUh0bWwgYW5kIGNhbiBsZWFkIHRvIG1ham9yIHNlY3VyaXR5XG4gICAgICAgICAgaXNzdWVzLCBlLmcuIG9wZW5pbmcgeW91ciBjb2RlIHVwIHRvIFhTUyBhdHRhY2tzLlxuICAgICAgICAgIElmIHlvdSdyZSB1c2luZyB0aGUgaHRtbCBvciBzdmcgdGFnZ2VkIHRlbXBsYXRlIGZ1bmN0aW9ucyBub3JtYWxseVxuICAgICAgICAgIGFuZCBzdGlsbCBzZWVpbmcgdGhpcyBlcnJvciwgcGxlYXNlIGZpbGUgYSBidWcgYXRcbiAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvbmV3P3RlbXBsYXRlPWJ1Z19yZXBvcnQubWRcbiAgICAgICAgICBhbmQgaW5jbHVkZSBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIGJ1aWxkIHRvb2xpbmcsIGlmIGFueS5cbiAgICAgICAgYFxuICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxuICovZywgJ1xcbicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBvbGljeSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcG9saWN5LmNyZWF0ZUhUTUwoc3RyaW5nRnJvbVRTQSlcbiAgICAgICAgOiBzdHJpbmdGcm9tVFNBO1xufVxuLyoqXG4gKiBSZXR1cm5zIGFuIEhUTUwgc3RyaW5nIGZvciB0aGUgZ2l2ZW4gVGVtcGxhdGVTdHJpbmdzQXJyYXkgYW5kIHJlc3VsdCB0eXBlXG4gKiAoSFRNTCBvciBTVkcpLCBhbG9uZyB3aXRoIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW5cbiAqIHRlbXBsYXRlIG9yZGVyLiBUaGUgSFRNTCBjb250YWlucyBjb21tZW50IG1hcmtlcnMgZGVub3RpbmcgdGhlIGBDaGlsZFBhcnRgc1xuICogYW5kIHN1ZmZpeGVzIG9uIGJvdW5kIGF0dHJpYnV0ZXMgZGVub3RpbmcgdGhlIGBBdHRyaWJ1dGVQYXJ0c2AuXG4gKlxuICogQHBhcmFtIHN0cmluZ3MgdGVtcGxhdGUgc3RyaW5ncyBhcnJheVxuICogQHBhcmFtIHR5cGUgSFRNTCBvciBTVkdcbiAqIEByZXR1cm4gQXJyYXkgY29udGFpbmluZyBgW2h0bWwsIGF0dHJOYW1lc11gIChhcnJheSByZXR1cm5lZCBmb3IgdGVyc2VuZXNzLFxuICogICAgIHRvIGF2b2lkIG9iamVjdCBmaWVsZHMgc2luY2UgdGhpcyBjb2RlIGlzIHNoYXJlZCB3aXRoIG5vbi1taW5pZmllZCBTU1JcbiAqICAgICBjb2RlKVxuICovXG5jb25zdCBnZXRUZW1wbGF0ZUh0bWwgPSAoc3RyaW5ncywgdHlwZSkgPT4ge1xuICAgIC8vIEluc2VydCBtYWtlcnMgaW50byB0aGUgdGVtcGxhdGUgSFRNTCB0byByZXByZXNlbnQgdGhlIHBvc2l0aW9uIG9mXG4gICAgLy8gYmluZGluZ3MuIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc3RyaW5ncyB0byBkZXRlcm1pbmUgdGhlXG4gICAgLy8gc3ludGFjdGljIHBvc2l0aW9uIG9mIHRoZSBiaW5kaW5ncy4gVGhleSBjYW4gYmUgaW4gdGV4dCBwb3NpdGlvbiwgd2hlcmVcbiAgICAvLyB3ZSBpbnNlcnQgYW4gSFRNTCBjb21tZW50LCBhdHRyaWJ1dGUgdmFsdWUgcG9zaXRpb24sIHdoZXJlIHdlIGluc2VydCBhXG4gICAgLy8gc2VudGluZWwgc3RyaW5nIGFuZCByZS13cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIG9yIGluc2lkZSBhIHRhZyB3aGVyZVxuICAgIC8vIHdlIGluc2VydCB0aGUgc2VudGluZWwgc3RyaW5nLlxuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgLy8gU3RvcmVzIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW4gdGhlIG9yZGVyIG9mIHRoZWlyXG4gICAgLy8gcGFydHMuIEVsZW1lbnRQYXJ0cyBhcmUgYWxzbyByZWZsZWN0ZWQgaW4gdGhpcyBhcnJheSBhcyB1bmRlZmluZWRcbiAgICAvLyByYXRoZXIgdGhhbiBhIHN0cmluZywgdG8gZGlzYW1iaWd1YXRlIGZyb20gYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgIGNvbnN0IGF0dHJOYW1lcyA9IFtdO1xuICAgIGxldCBodG1sID0gdHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8c3ZnPicgOiAnJztcbiAgICAvLyBXaGVuIHdlJ3JlIGluc2lkZSBhIHJhdyB0ZXh0IHRhZyAobm90IGl0J3MgdGV4dCBjb250ZW50KSwgdGhlIHJlZ2V4XG4gICAgLy8gd2lsbCBzdGlsbCBiZSB0YWdSZWdleCBzbyB3ZSBjYW4gZmluZCBhdHRyaWJ1dGVzLCBidXQgd2lsbCBzd2l0Y2ggdG9cbiAgICAvLyB0aGlzIHJlZ2V4IHdoZW4gdGhlIHRhZyBlbmRzLlxuICAgIGxldCByYXdUZXh0RW5kUmVnZXg7XG4gICAgLy8gVGhlIGN1cnJlbnQgcGFyc2luZyBzdGF0ZSwgcmVwcmVzZW50ZWQgYXMgYSByZWZlcmVuY2UgdG8gb25lIG9mIHRoZVxuICAgIC8vIHJlZ2V4ZXNcbiAgICBsZXQgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgZW5kIG9mIHRoZSBsYXN0IGF0dHJpYnV0ZSBuYW1lLiBXaGVuIHRoaXMgaXNcbiAgICAgICAgLy8gcG9zaXRpdmUgYXQgZW5kIG9mIGEgc3RyaW5nLCBpdCBtZWFucyB3ZSdyZSBpbiBhbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgLy8gcG9zaXRpb24gYW5kIG5lZWQgdG8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIFdlIGFsc28gdXNlIGEgc3BlY2lhbCB2YWx1ZSBvZiAtMiB0byBpbmRpY2F0ZSB0aGF0IHdlIGVuY291bnRlcmVkXG4gICAgICAgIC8vIHRoZSBlbmQgb2YgYSBzdHJpbmcgaW4gYXR0cmlidXRlIG5hbWUgcG9zaXRpb24uXG4gICAgICAgIGxldCBhdHRyTmFtZUVuZEluZGV4ID0gLTE7XG4gICAgICAgIGxldCBhdHRyTmFtZTtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgLy8gVGhlIGNvbmRpdGlvbnMgaW4gdGhpcyBsb29wIGhhbmRsZSB0aGUgY3VycmVudCBwYXJzZSBzdGF0ZSwgYW5kIHRoZVxuICAgICAgICAvLyBhc3NpZ25tZW50cyB0byB0aGUgYHJlZ2V4YCB2YXJpYWJsZSBhcmUgdGhlIHN0YXRlIHRyYW5zaXRpb25zLlxuICAgICAgICB3aGlsZSAobGFzdEluZGV4IDwgcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzdGFydCBzZWFyY2hpbmcgZnJvbSB3aGVyZSB3ZSBwcmV2aW91c2x5IGxlZnQgb2ZmXG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleDtcbiAgICAgICAgICAgIGlmIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW0NPTU1FTlRfU1RBUlRdID09PSAnIS0tJykge1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBzdGFydGVkIGEgd2VpcmQgY29tbWVudCwgbGlrZSA8L3tcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSBjb21tZW50MkVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtUQUdfTkFNRV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChtYXRjaFtUQUdfTkFNRV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWNvcmQgaWYgd2UgZW5jb3VudGVyIGEgcmF3LXRleHQgZWxlbWVudC4gV2UnbGwgc3dpdGNoIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHJlZ2V4IGF0IHRoZSBlbmQgb2YgdGhlIHRhZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IG5ldyBSZWdFeHAoYDwvJHttYXRjaFtUQUdfTkFNRV19YCwgJ2cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtEWU5BTUlDX1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCaW5kaW5ncyBpbiB0YWcgbmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2Ugc3RhdGljIHRlbXBsYXRlcyBpbnN0ZWFkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHBzOi8vbGl0LmRldi9kb2NzL3RlbXBsYXRlcy9leHByZXNzaW9ucy8jc3RhdGljLWV4cHJlc3Npb25zJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gdGFnRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbRU5USVJFX01BVENIXSA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZCBvZiBhIHRhZy4gSWYgd2UgaGFkIHN0YXJ0ZWQgYSByYXctdGV4dCBlbGVtZW50LCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyByZWdleFxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHJhd1RleHRFbmRSZWdleCAhPT0gbnVsbCAmJiByYXdUZXh0RW5kUmVnZXggIT09IHZvaWQgMCA/IHJhd1RleHRFbmRSZWdleCA6IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF5IGJlIGVuZGluZyBhbiB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIHNvIG1ha2Ugc3VyZSB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBhbnkgcGVuZGluZyBhdHRyTmFtZUVuZEluZGV4XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQVRUUklCVVRFX05BTUVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0cmlidXRlIG5hbWUgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleCAtIG1hdGNoW1NQQUNFU19BTkRfRVFVQUxTXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gbWF0Y2hbQVRUUklCVVRFX05BTUVdO1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFtRVU9URV9DSEFSXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0YWdFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWF0Y2hbUVVPVEVfQ0hBUl0gPT09ICdcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb3VibGVRdW90ZUF0dHJFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCB8fFxuICAgICAgICAgICAgICAgIHJlZ2V4ID09PSBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gY29tbWVudEVuZFJlZ2V4IHx8IHJlZ2V4ID09PSBjb21tZW50MkVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBOb3Qgb25lIG9mIHRoZSBmaXZlIHN0YXRlIHJlZ2V4ZXMsIHNvIGl0IG11c3QgYmUgdGhlIGR5bmFtaWNhbGx5XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlZCByYXcgdGV4dCByZWdleCBhbmQgd2UncmUgYXQgdGhlIGNsb3NlIG9mIHRoYXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBhdHRyTmFtZUVuZEluZGV4LCB3aGljaCBpbmRpY2F0ZXMgdGhhdCB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLCBhc3NlcnQgdGhhdCB3ZSdyZSBpbiBhIHZhbGlkIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gcG9zaXRpb24gLSBlaXRoZXIgaW4gYSB0YWcsIG9yIGEgcXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGF0dHJOYW1lRW5kSW5kZXggPT09IC0xIHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHRhZ0VuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4LCAndW5leHBlY3RlZCBwYXJzZSBzdGF0ZSBCJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBmb3VyIGNhc2VzOlxuICAgICAgICAvLyAgMS4gV2UncmUgaW4gdGV4dCBwb3NpdGlvbiwgYW5kIG5vdCBpbiBhIHJhdyB0ZXh0IGVsZW1lbnRcbiAgICAgICAgLy8gICAgIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KTogaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIuXG4gICAgICAgIC8vICAyLiBXZSBoYXZlIGEgbm9uLW5lZ2F0aXZlIGF0dHJOYW1lRW5kSW5kZXggd2hpY2ggbWVhbnMgd2UgbmVlZCB0b1xuICAgICAgICAvLyAgICAgcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUgdG8gYWRkIGEgYm91bmQgYXR0cmlidXRlIHN1ZmZpeC5cbiAgICAgICAgLy8gIDMuIFdlJ3JlIGF0IHRoZSBub24tZmlyc3QgYmluZGluZyBpbiBhIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlLCB1c2UgYVxuICAgICAgICAvLyAgICAgcGxhaW4gbWFya2VyLlxuICAgICAgICAvLyAgNC4gV2UncmUgc29tZXdoZXJlIGVsc2UgaW5zaWRlIHRoZSB0YWcuIElmIHdlJ3JlIGluIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgIC8vICAgICBwb3NpdGlvbiAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIpLCBhZGQgYSBzZXF1ZW50aWFsIHN1ZmZpeCB0b1xuICAgICAgICAvLyAgICAgZ2VuZXJhdGUgYSB1bmlxdWUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIERldGVjdCBhIGJpbmRpbmcgbmV4dCB0byBzZWxmLWNsb3NpbmcgdGFnIGVuZCBhbmQgaW5zZXJ0IGEgc3BhY2UgdG9cbiAgICAgICAgLy8gc2VwYXJhdGUgdGhlIG1hcmtlciBmcm9tIHRoZSB0YWcgZW5kOlxuICAgICAgICBjb25zdCBlbmQgPSByZWdleCA9PT0gdGFnRW5kUmVnZXggJiYgc3RyaW5nc1tpICsgMV0uc3RhcnRzV2l0aCgnLz4nKSA/ICcgJyA6ICcnO1xuICAgICAgICBodG1sICs9XG4gICAgICAgICAgICByZWdleCA9PT0gdGV4dEVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgPyBzICsgbm9kZU1hcmtlclxuICAgICAgICAgICAgICAgIDogYXR0ck5hbWVFbmRJbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKGF0dHJOYW1lcy5wdXNoKGF0dHJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoMCwgYXR0ck5hbWVFbmRJbmRleCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kQXR0cmlidXRlU3VmZml4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWNlKGF0dHJOYW1lRW5kSW5kZXgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kXG4gICAgICAgICAgICAgICAgICAgIDogcyArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF0dHJOYW1lRW5kSW5kZXggPT09IC0yID8gKGF0dHJOYW1lcy5wdXNoKHVuZGVmaW5lZCksIGkpIDogZW5kKTtcbiAgICB9XG4gICAgY29uc3QgaHRtbFJlc3VsdCA9IGh0bWwgKyAoc3RyaW5nc1tsXSB8fCAnPD8+JykgKyAodHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8L3N2Zz4nIDogJycpO1xuICAgIC8vIFJldHVybmVkIGFzIGFuIGFycmF5IGZvciB0ZXJzZW5lc3NcbiAgICByZXR1cm4gW3RydXN0RnJvbVRlbXBsYXRlU3RyaW5nKHN0cmluZ3MsIGh0bWxSZXN1bHQpLCBhdHRyTmFtZXNdO1xufTtcbmNsYXNzIFRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgIHsgc3RyaW5ncywgWydfJGxpdFR5cGUkJ106IHR5cGUgfSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIGxldCBub2RlO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IGF0dHJOYW1lSW5kZXggPSAwO1xuICAgICAgICBjb25zdCBwYXJ0Q291bnQgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5wYXJ0cztcbiAgICAgICAgLy8gQ3JlYXRlIHRlbXBsYXRlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgW2h0bWwsIGF0dHJOYW1lc10gPSBnZXRUZW1wbGF0ZUh0bWwoc3RyaW5ncywgdHlwZSk7XG4gICAgICAgIHRoaXMuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KGh0bWwsIG9wdGlvbnMpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgIC8vIFJlcGFyZW50IFNWRyBub2RlcyBpbnRvIHRlbXBsYXRlIHJvb3RcbiAgICAgICAgaWYgKHR5cGUgPT09IFNWR19SRVNVTFQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgc3ZnRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKC4uLnN2Z0VsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2FsayB0aGUgdGVtcGxhdGUgdG8gZmluZCBiaW5kaW5nIG1hcmtlcnMgYW5kIGNyZWF0ZSBUZW1wbGF0ZVBhcnRzXG4gICAgICAgIHdoaWxlICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSAhPT0gbnVsbCAmJiBwYXJ0cy5sZW5ndGggPCBwYXJ0Q291bnQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZyA9IG5vZGUubG9jYWxOYW1lO1xuICAgICAgICAgICAgICAgICAgICAvLyBXYXJuIGlmIGB0ZXh0YXJlYWAgaW5jbHVkZXMgYW4gZXhwcmVzc2lvbiBhbmQgdGhyb3cgaWYgYHRlbXBsYXRlYFxuICAgICAgICAgICAgICAgICAgICAvLyBkb2VzIHNpbmNlIHRoZXNlIGFyZSBub3Qgc3VwcG9ydGVkLiBXZSBkbyB0aGlzIGJ5IGNoZWNraW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIGlubmVySFRNTCBmb3IgYW55dGhpbmcgdGhhdCBsb29rcyBsaWtlIGEgbWFya2VyLiBUaGlzIGNhdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZXMgbGlrZSBiaW5kaW5ncyBpbiB0ZXh0YXJlYSB0aGVyZSBtYXJrZXJzIHR1cm4gaW50byB0ZXh0IG5vZGVzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoL14oPzp0ZXh0YXJlYXx0ZW1wbGF0ZSkkL2kudGVzdCh0YWcpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTC5pbmNsdWRlcyhtYXJrZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gYEV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluc2lkZSBcXGAke3RhZ31cXGAgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGVsZW1lbnRzLiBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy9leHByZXNzaW9uLWluLSR7dGFnfSBmb3IgbW9yZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCcnLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogZm9yIGF0dGVtcHRlZCBkeW5hbWljIHRhZyBuYW1lcywgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGJpbmRpbmdJbmRleCwgYW5kIGl0J2xsIGJlIG9mZiBieSAxIGluIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIG9mZiBieSB0d28gYWZ0ZXIgaXQuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRlZmVyIHJlbW92aW5nIGJvdW5kIGF0dHJpYnV0ZXMgYmVjYXVzZSBvbiBJRSB3ZSBtaWdodCBub3QgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW5nIGF0dHJpYnV0ZXMgaW4gdGhlaXIgdGVtcGxhdGUgb3JkZXIsIGFuZCB3b3VsZCBzb21ldGltZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGF0dHJpYnV0ZSB0aGF0IHdlIHN0aWxsIG5lZWQgdG8gY3JlYXRlIGEgcGFydCBmb3IuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5vZGUuZ2V0QXR0cmlidXRlTmFtZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYG5hbWVgIGlzIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2UncmUgaXRlcmF0aW5nIG92ZXIsIGJ1dCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF9uZWNlc3NhcmlseV8gdGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB3ZSB3aWxsIGNyZWF0ZSBhIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvci4gVGhleSBjYW4gYmUgZGlmZmVyZW50IGluIGJyb3dzZXJzIHRoYXQgZG9uJ3QgaXRlcmF0ZSBvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBzb3VyY2Ugb3JkZXIuIEluIHRoYXQgY2FzZSB0aGUgYXR0ck5hbWVzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250YWlucyB0aGUgYXR0cmlidXRlIG5hbWUgd2UnbGwgcHJvY2VzcyBuZXh0LiBXZSBvbmx5IG5lZWQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGUgbmFtZSBoZXJlIHRvIGtub3cgaWYgd2Ugc2hvdWxkIHByb2Nlc3MgYSBib3VuZCBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uIHRoaXMgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lLmVuZHNXaXRoKGJvdW5kQXR0cmlidXRlU3VmZml4KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuc3RhcnRzV2l0aChtYXJrZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhbE5hbWUgPSBhdHRyTmFtZXNbYXR0ck5hbWVJbmRleCsrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyc1RvUmVtb3ZlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWxOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG93ZXJjYXNlIGZvciBjYXNlLXNlbnNpdGl2ZSBTVkcgYXR0cmlidXRlcyBsaWtlIHZpZXdCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShyZWFsTmFtZS50b0xvd2VyQ2FzZSgpICsgYm91bmRBdHRyaWJ1dGVTdWZmaXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0aWNzID0gdmFsdWUuc3BsaXQobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IC8oWy4/QF0pPyguKikvLmV4ZWMocmVhbE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFUVFJJQlVURV9QQVJULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG5vZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1bMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdzOiBzdGF0aWNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RvcjogbVsxXSA9PT0gJy4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBQcm9wZXJ0eVBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1bMV0gPT09ICc/J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbVsxXSA9PT0gJ0AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IEV2ZW50UGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBBdHRyaWJ1dGVQYXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRUxFTUVOVF9QQVJULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG5vZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBhdHRyc1RvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogYmVuY2htYXJrIHRoZSByZWdleCBhZ2FpbnN0IHRlc3RpbmcgZm9yIGVhY2hcbiAgICAgICAgICAgICAgICAvLyBvZiB0aGUgMyByYXcgdGV4dCBlbGVtZW50IG5hbWVzLlxuICAgICAgICAgICAgICAgIGlmIChyYXdUZXh0RWxlbWVudC50ZXN0KG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHJhdyB0ZXh0IGVsZW1lbnRzIHdlIG5lZWQgdG8gc3BsaXQgdGhlIHRleHQgY29udGVudCBvblxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJrZXJzLCBjcmVhdGUgYSBUZXh0IG5vZGUgZm9yIGVhY2ggc2VnbWVudCwgYW5kIGNyZWF0ZVxuICAgICAgICAgICAgICAgICAgICAvLyBhIFRlbXBsYXRlUGFydCBmb3IgZWFjaCBtYXJrZXIuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBub2RlLnRleHRDb250ZW50LnNwbGl0KG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB0cnVzdGVkVHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydXN0ZWRUeXBlcy5lbXB0eVNjcmlwdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW4ndCB1c2UgZW1wdHkgdGV4dCBub2RlcyBhcyBtYXJrZXJzIGJlY2F1c2UgdGhleSdyZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsaXplZCB3aGVuIGNsb25pbmcgaW4gSUUgKGNvdWxkIHNpbXBsaWZ5IHdoZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmQoc3RyaW5nc1tpXSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhbGsgcGFzdCB0aGUgbWFya2VyIG5vZGUgd2UganVzdCBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDSElMRF9QQVJULCBpbmRleDogKytub2RlSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlIGJlY2F1c2UgdGhpcyBtYXJrZXIgaXMgYWRkZWQgYWZ0ZXIgdGhlIHdhbGtlcidzIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGUsIGl0IHdpbGwgYmUgd2Fsa2VkIHRvIGluIHRoZSBvdXRlciBsb29wIChhbmQgaWdub3JlZCksIHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIGFkanVzdCBub2RlSW5kZXggaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmQoc3RyaW5nc1tsYXN0SW5kZXhdLCBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PT0gbWFya2VyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENISUxEX1BBUlQsIGluZGV4OiBub2RlSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGkgPSBub2RlLmRhdGEuaW5kZXhPZihtYXJrZXIsIGkgKyAxKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG5vZGUgaGFzIGEgYmluZGluZyBtYXJrZXIgaW5zaWRlLCBtYWtlIGFuIGluYWN0aXZlIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBiaW5kaW5nIHdvbid0IHdvcmssIGJ1dCBzdWJzZXF1ZW50IGJpbmRpbmdzIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDT01NRU5UX1BBUlQsIGluZGV4OiBub2RlSW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHRvIHRoZSBlbmQgb2YgdGhlIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICBpICs9IG1hcmtlci5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgY291bGQgc2V0IHdhbGtlci5jdXJyZW50Tm9kZSB0byBhbm90aGVyIG5vZGUgaGVyZSB0byBwcmV2ZW50IGEgbWVtb3J5XG4gICAgICAgIC8vIGxlYWssIGJ1dCBldmVyeSB0aW1lIHdlIHByZXBhcmUgYSB0ZW1wbGF0ZSwgd2UgaW1tZWRpYXRlbHkgcmVuZGVyIGl0XG4gICAgICAgIC8vIGFuZCByZS11c2UgdGhlIHdhbGtlciBpbiBuZXcgVGVtcGxhdGVJbnN0YW5jZS5fY2xvbmUoKS5cbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBwcmVwJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLFxuICAgICAgICAgICAgY2xvbmFibGVUZW1wbGF0ZTogdGhpcy5lbCxcbiAgICAgICAgICAgIHBhcnRzOiB0aGlzLnBhcnRzLFxuICAgICAgICAgICAgc3RyaW5ncyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUG9seWZpbGxTdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoaHRtbCwgX29wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG59XG5mdW5jdGlvbiByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIHZhbHVlLCBwYXJlbnQgPSBwYXJ0LCBhdHRyaWJ1dGVJbmRleCkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHZhciBfZDtcbiAgICAvLyBCYWlsIGVhcmx5IGlmIHRoZSB2YWx1ZSBpcyBleHBsaWNpdGx5IG5vQ2hhbmdlLiBOb3RlLCB0aGlzIG1lYW5zIGFueVxuICAgIC8vIG5lc3RlZCBkaXJlY3RpdmUgaXMgc3RpbGwgYXR0YWNoZWQgYW5kIGlzIG5vdCBydW4uXG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGxldCBjdXJyZW50RGlyZWN0aXZlID0gYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZFxuICAgICAgICA/IChfYSA9IHBhcmVudC5fX2RpcmVjdGl2ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVthdHRyaWJ1dGVJbmRleF1cbiAgICAgICAgOiBwYXJlbnQuX19kaXJlY3RpdmU7XG4gICAgY29uc3QgbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yID0gaXNQcmltaXRpdmUodmFsdWUpXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgICAgIHZhbHVlWydfJGxpdERpcmVjdGl2ZSQnXTtcbiAgICBpZiAoKGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZS5jb25zdHJ1Y3RvcikgIT09IG5leHREaXJlY3RpdmVDb25zdHJ1Y3Rvcikge1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAoX2IgPSBjdXJyZW50RGlyZWN0aXZlID09PSBudWxsIHx8IGN1cnJlbnREaXJlY3RpdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnREaXJlY3RpdmVbJ18kbm90aWZ5RGlyZWN0aXZlQ29ubmVjdGlvbkNoYW5nZWQnXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoY3VycmVudERpcmVjdGl2ZSwgZmFsc2UpO1xuICAgICAgICBpZiAobmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gbmV3IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvcihwYXJ0KTtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUuXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAoKF9jID0gKF9kID0gcGFyZW50KS5fX2RpcmVjdGl2ZXMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChfZC5fX2RpcmVjdGl2ZXMgPSBbXSkpW2F0dHJpYnV0ZUluZGV4XSA9XG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5fX2RpcmVjdGl2ZSA9IGN1cnJlbnREaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN1cnJlbnREaXJlY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUocGFydCwgY3VycmVudERpcmVjdGl2ZS5fJHJlc29sdmUocGFydCwgdmFsdWUudmFsdWVzKSwgY3VycmVudERpcmVjdGl2ZSwgYXR0cmlidXRlSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgaW5zdGFuY2Ugb2YgYSBUZW1wbGF0ZS4gSG9sZHMgcmVmZXJlbmNlcyB0byB0aGUgUGFydHMgdXNlZCB0b1xuICogdXBkYXRlIHRoZSB0ZW1wbGF0ZSBpbnN0YW5jZS5cbiAqL1xuY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIHBhcmVudCkge1xuICAgICAgICB0aGlzLl8kcGFydHMgPSBbXTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8vIENhbGxlZCBieSBDaGlsZFBhcnQgcGFyZW50Tm9kZSBnZXR0ZXJcbiAgICBnZXQgcGFyZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBzZXBhcmF0ZSBmcm9tIHRoZSBjb25zdHJ1Y3RvciBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCB3ZSBkb24ndCB3YW50IHRvIGhvbGQgb250byBpdCB3aXRoIGFuIGluc3RhbmNlIGZpZWxkLlxuICAgIF9jbG9uZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyBlbDogeyBjb250ZW50IH0sIHBhcnRzOiBwYXJ0cywgfSA9IHRoaXMuXyR0ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSAoKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNyZWF0aW9uU2NvcGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGQpLmltcG9ydE5vZGUoY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGZyYWdtZW50O1xuICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1swXTtcbiAgICAgICAgd2hpbGUgKHRlbXBsYXRlUGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ID09PSB0ZW1wbGF0ZVBhcnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydDtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IENISUxEX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBDaGlsZFBhcnQobm9kZSwgbm9kZS5uZXh0U2libGluZywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBBVFRSSUJVVEVfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IHRlbXBsYXRlUGFydC5jdG9yKG5vZGUsIHRlbXBsYXRlUGFydC5uYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBFTEVNRU5UX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBFbGVtZW50UGFydChub2RlLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fJHBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVQYXJ0ID0gcGFydHNbKytwYXJ0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGVJbmRleCAhPT0gKHRlbXBsYXRlUGFydCA9PT0gbnVsbCB8fCB0ZW1wbGF0ZVBhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRlbXBsYXRlUGFydC5pbmRleCkpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgbmVlZCB0byBzZXQgdGhlIGN1cnJlbnROb2RlIGF3YXkgZnJvbSB0aGUgY2xvbmVkIHRyZWUgc28gdGhhdCB3ZVxuICAgICAgICAvLyBkb24ndCBob2xkIG9udG8gdGhlIHRyZWUgZXZlbiBpZiB0aGUgdHJlZSBpcyBkZXRhY2hlZCBhbmQgc2hvdWxkIGJlXG4gICAgICAgIC8vIGZyZWVkLlxuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBkO1xuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuICAgIF91cGRhdGUodmFsdWVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuXyRwYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdzZXQgcGFydCcsXG4gICAgICAgICAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXNbaV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlSW5kZXg6IGksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVJbnN0YW5jZTogdGhpcyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocGFydC5zdHJpbmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlcywgcGFydCwgaSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBudW1iZXIgb2YgdmFsdWVzIHRoZSBwYXJ0IGNvbnN1bWVzIGlzIHBhcnQuc3RyaW5ncy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIHZhbHVlcyBhcmUgaW4gYmV0d2VlbiB0ZW1wbGF0ZSBzcGFucy4gV2UgaW5jcmVtZW50IGkgYnkgMVxuICAgICAgICAgICAgICAgICAgICAvLyBsYXRlciBpbiB0aGUgbG9vcCwgc28gaW5jcmVtZW50IGl0IGJ5IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgaSArPSBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIENoaWxkUGFydCB7XG4gICAgY29uc3RydWN0b3Ioc3RhcnROb2RlLCBlbmROb2RlLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLnR5cGUgPSBDSElMRF9QQVJUO1xuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGZpZWxkcyB3aWxsIGJlIHBhdGNoZWQgb250byBDaGlsZFBhcnRzIHdoZW4gcmVxdWlyZWQgYnlcbiAgICAgICAgLy8gQXN5bmNEaXJlY3RpdmVcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHN0YXJ0Tm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgdGhpcy5fJGVuZE5vZGUgPSBlbmROb2RlO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAvLyBOb3RlIF9faXNDb25uZWN0ZWQgaXMgb25seSBldmVyIGFjY2Vzc2VkIG9uIFJvb3RQYXJ0cyAoaS5lLiB3aGVuIHRoZXJlIGlzXG4gICAgICAgIC8vIG5vIF8kcGFyZW50KTsgdGhlIHZhbHVlIG9uIGEgbm9uLXJvb3QtcGFydCBpcyBcImRvbid0IGNhcmVcIiwgYnV0IGNoZWNraW5nXG4gICAgICAgIC8vIGZvciBwYXJlbnQgd291bGQgYmUgbW9yZSBjb2RlXG4gICAgICAgIHRoaXMuX19pc0Nvbm5lY3RlZCA9IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pc0Nvbm5lY3RlZCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdHJ1ZTtcbiAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgLy8gRXhwbGljaXRseSBpbml0aWFsaXplIGZvciBjb25zaXN0ZW50IGNsYXNzIHNoYXBlLlxuICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIENoaWxkUGFydHMgdGhhdCBhcmUgbm90IGF0IHRoZSByb290IHNob3VsZCBhbHdheXMgYmUgY3JlYXRlZCB3aXRoIGFcbiAgICAgICAgLy8gcGFyZW50OyBvbmx5IFJvb3RDaGlsZE5vZGUncyB3b24ndCwgc28gdGhleSByZXR1cm4gdGhlIGxvY2FsIGlzQ29ubmVjdGVkXG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHJldHVybiAoX2IgPSAoX2EgPSB0aGlzLl8kcGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuXyRpc0Nvbm5lY3RlZCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdGhpcy5fX2lzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFyZW50IG5vZGUgaW50byB3aGljaCB0aGUgcGFydCByZW5kZXJzIGl0cyBjb250ZW50LlxuICAgICAqXG4gICAgICogQSBDaGlsZFBhcnQncyBjb250ZW50IGNvbnNpc3RzIG9mIGEgcmFuZ2Ugb2YgYWRqYWNlbnQgY2hpbGQgbm9kZXMgb2ZcbiAgICAgKiBgLnBhcmVudE5vZGVgLCBwb3NzaWJseSBib3JkZXJlZCBieSAnbWFya2VyIG5vZGVzJyAoYC5zdGFydE5vZGVgIGFuZFxuICAgICAqIGAuZW5kTm9kZWApLlxuICAgICAqXG4gICAgICogLSBJZiBib3RoIGAuc3RhcnROb2RlYCBhbmQgYC5lbmROb2RlYCBhcmUgbm9uLW51bGwsIHRoZW4gdGhlIHBhcnQncyBjb250ZW50XG4gICAgICogY29uc2lzdHMgb2YgYWxsIHNpYmxpbmdzIGJldHdlZW4gYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgLCBleGNsdXNpdmVseS5cbiAgICAgKlxuICAgICAqIC0gSWYgYC5zdGFydE5vZGVgIGlzIG5vbi1udWxsIGJ1dCBgLmVuZE5vZGVgIGlzIG51bGwsIHRoZW4gdGhlIHBhcnQnc1xuICAgICAqIGNvbnRlbnQgY29uc2lzdHMgb2YgYWxsIHNpYmxpbmdzIGZvbGxvd2luZyBgLnN0YXJ0Tm9kZWAsIHVwIHRvIGFuZFxuICAgICAqIGluY2x1ZGluZyB0aGUgbGFzdCBjaGlsZCBvZiBgLnBhcmVudE5vZGVgLiBJZiBgLmVuZE5vZGVgIGlzIG5vbi1udWxsLCB0aGVuXG4gICAgICogYC5zdGFydE5vZGVgIHdpbGwgYWx3YXlzIGJlIG5vbi1udWxsLlxuICAgICAqXG4gICAgICogLSBJZiBib3RoIGAuZW5kTm9kZWAgYW5kIGAuc3RhcnROb2RlYCBhcmUgbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICAgKiBjb25zaXN0cyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgYC5wYXJlbnROb2RlYC5cbiAgICAgKi9cbiAgICBnZXQgcGFyZW50Tm9kZSgpIHtcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuXyRwYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgKHBhcmVudE5vZGUgPT09IG51bGwgfHwgcGFyZW50Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50Tm9kZS5ub2RlVHlwZSkgPT09IDExIC8qIE5vZGUuRE9DVU1FTlRfRlJBR01FTlQgKi8pIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBwYXJlbnROb2RlIGlzIGEgRG9jdW1lbnRGcmFnbWVudCwgaXQgbWF5IGJlIGJlY2F1c2UgdGhlIERPTSBpc1xuICAgICAgICAgICAgLy8gc3RpbGwgaW4gdGhlIGNsb25lZCBmcmFnbWVudCBkdXJpbmcgaW5pdGlhbCByZW5kZXI7IGlmIHNvLCBnZXQgdGhlIHJlYWxcbiAgICAgICAgICAgIC8vIHBhcmVudE5vZGUgdGhlIHBhcnQgd2lsbCBiZSBjb21taXR0ZWQgaW50byBieSBhc2tpbmcgdGhlIHBhcmVudC5cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQncyBsZWFkaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IHN0YXJ0Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRzdGFydE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgdHJhaWxpbmcgbWFya2VyIG5vZGUsIGlmIGFueS4gU2VlIGAucGFyZW50Tm9kZWAgZm9yIG1vcmVcbiAgICAgKiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgZW5kTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRlbmROb2RlO1xuICAgIH1cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmIHRoaXMucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGlzIFxcYENoaWxkUGFydFxcYCBoYXMgbm8gXFxgcGFyZW50Tm9kZVxcYCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBhY2NlcHQgYSB2YWx1ZS4gVGhpcyBsaWtlbHkgbWVhbnMgdGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgcGFydCB3YXMgbWFuaXB1bGF0ZWQgaW4gYW4gdW5zdXBwb3J0ZWQgd2F5IG91dHNpZGUgb2YgTGl0J3MgY29udHJvbCBzdWNoIHRoYXQgdGhlIHBhcnQncyBtYXJrZXIgbm9kZXMgd2VyZSBlamVjdGVkIGZyb20gRE9NLiBGb3IgZXhhbXBsZSwgc2V0dGluZyB0aGUgZWxlbWVudCdzIFxcYGlubmVySFRNTFxcYCBvciBcXGB0ZXh0Q29udGVudFxcYCBjYW4gZG8gdGhpcy5gKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCk7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIE5vbi1yZW5kZXJpbmcgY2hpbGQgdmFsdWVzLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZXNlIGRvIG5vdCByZW5kZXJcbiAgICAgICAgICAgIC8vIGVtcHR5IHRleHQgbm9kZXMgdG8gYXZvaWQgaXNzdWVzIHdpdGggcHJldmVudGluZyBkZWZhdWx0IDxzbG90PlxuICAgICAgICAgICAgLy8gZmFsbGJhY2sgY29udGVudC5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZyB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgbm90aGluZyB0byBjaGlsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5fJHN0YXJ0Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogdGhpcy5fJGVuZE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMuXyRwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlWydfJGxpdFR5cGUkJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLm5vZGVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJiAoKF9hID0gdGhpcy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaG9zdCkgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dChgW3Byb2JhYmxlIG1pc3Rha2U6IHJlbmRlcmVkIGEgdGVtcGxhdGUncyBob3N0IGluIGl0c2VsZiBgICtcbiAgICAgICAgICAgICAgICAgICAgYChjb21tb25seSBjYXVzZWQgYnkgd3JpdGluZyBcXCR7dGhpc30gaW4gYSB0ZW1wbGF0ZV1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEF0dGVtcHRlZCB0byByZW5kZXIgdGhlIHRlbXBsYXRlIGhvc3RgLCB2YWx1ZSwgYGluc2lkZSBpdHNlbGYuIFRoaXMgaXMgYWxtb3N0IGFsd2F5cyBhIG1pc3Rha2UsIGFuZCBpbiBkZXYgbW9kZSBgLCBgd2UgcmVuZGVyIHNvbWUgd2FybmluZyB0ZXh0LiBJbiBwcm9kdWN0aW9uIGhvd2V2ZXIsIHdlJ2xsIGAsIGByZW5kZXIgaXQsIHdoaWNoIHdpbGwgdXN1YWxseSByZXN1bHQgaW4gYW4gZXJyb3IsIGFuZCBzb21ldGltZXMgYCwgYGluIHRoZSBlbGVtZW50IGRpc2FwcGVhcmluZyBmcm9tIHRoZSBET00uYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5zZXJ0KG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHdyYXAod3JhcCh0aGlzLl8kc3RhcnROb2RlKS5wYXJlbnROb2RlKS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5fJGVuZE5vZGUpO1xuICAgIH1cbiAgICBfY29tbWl0Tm9kZSh2YWx1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MgJiZcbiAgICAgICAgICAgICAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlTmFtZSA9IChfYSA9IHRoaXMuXyRzdGFydE5vZGUucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSA9PT0gJ1NUWUxFJyB8fCBwYXJlbnROb2RlTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnRm9yYmlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZU5hbWUgPT09ICdTVFlMRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYExpdCBkb2VzIG5vdCBzdXBwb3J0IGJpbmRpbmcgaW5zaWRlIHN0eWxlIG5vZGVzLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBUaGlzIGlzIGEgc2VjdXJpdHkgcmlzaywgYXMgc3R5bGUgaW5qZWN0aW9uIGF0dGFja3MgY2FuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGV4ZmlsdHJhdGUgZGF0YSBhbmQgc3Bvb2YgVUlzLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBDb25zaWRlciBpbnN0ZWFkIHVzaW5nIGNzc1xcYC4uLlxcYCBsaXRlcmFscyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0byBjb21wb3NlIHN0eWxlcywgYW5kIG1ha2UgZG8gZHluYW1pYyBzdHlsaW5nIHdpdGggYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgY3NzIGN1c3RvbSBwcm9wZXJ0aWVzLCA6OnBhcnRzLCA8c2xvdD5zLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBhbmQgYnkgbXV0YXRpbmcgdGhlIERPTSByYXRoZXIgdGhhbiBzdHlsZXNoZWV0cy5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBMaXQgZG9lcyBub3Qgc3VwcG9ydCBiaW5kaW5nIGluc2lkZSBzY3JpcHQgbm9kZXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFRoaXMgaXMgYSBzZWN1cml0eSByaXNrLCBhcyBpdCBjb3VsZCBhbGxvdyBhcmJpdHJhcnkgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgY29kZSBleGVjdXRpb24uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IG5vZGUnLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLl8kc3RhcnROb2RlLFxuICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5fJHBhcmVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIC8vIElmIHRoZSBjb21taXR0ZWQgdmFsdWUgaXMgYSBwcmltaXRpdmUgaXQgbWVhbnMgd2UgY2FsbGVkIF9jb21taXRUZXh0IG9uXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyByZW5kZXIsIGFuZCB3ZSBrbm93IHRoYXQgdGhpcy5fJHN0YXJ0Tm9kZS5uZXh0U2libGluZyBpcyBhXG4gICAgICAgIC8vIFRleHQgbm9kZS4gV2UgY2FuIG5vdyBqdXN0IHJlcGxhY2UgdGhlIHRleHQgY29udGVudCAoLmRhdGEpIG9mIHRoZSBub2RlLlxuICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSBub3RoaW5nICYmXG4gICAgICAgICAgICBpc1ByaW1pdGl2ZSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZztcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIobm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl90ZXh0U2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkLmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKHRleHROb2RlKTtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGV4dCBjb250ZW50LCBmb3Igc2VjdXJpdHkgcHVycG9zZXMgaXQgbWF0dGVycyBhIGxvdFxuICAgICAgICAgICAgICAgIC8vIHdoYXQgdGhlIHBhcmVudCBpcy4gRm9yIGV4YW1wbGUsIDxzdHlsZT4gYW5kIDxzY3JpcHQ+IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIHdpdGggY2FyZSwgd2hpbGUgPHNwYW4+IGRvZXMgbm90LiBTbyBmaXJzdCB3ZSBuZWVkIHRvIHB1dCBhXG4gICAgICAgICAgICAgICAgLy8gdGV4dCBub2RlIGludG8gdGhlIGRvY3VtZW50LCB0aGVuIHdlIGNhbiBzYW5pdGl6ZSBpdHMgY29udGVudC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIodGV4dE5vZGUsICdkYXRhJywgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdGV4dFNhbml0aXplcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogdGV4dE5vZGUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShkLmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHJlc3VsdCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBbJ18kbGl0VHlwZSQnXTogdHlwZSB9ID0gcmVzdWx0O1xuICAgICAgICAvLyBJZiAkbGl0VHlwZSQgaXMgYSBudW1iZXIsIHJlc3VsdCBpcyBhIHBsYWluIFRlbXBsYXRlUmVzdWx0IGFuZCB3ZSBnZXRcbiAgICAgICAgLy8gdGhlIHRlbXBsYXRlIGZyb20gdGhlIHRlbXBsYXRlIGNhY2hlLiBJZiBub3QsIHJlc3VsdCBpcyBhXG4gICAgICAgIC8vIENvbXBpbGVkVGVtcGxhdGVSZXN1bHQgYW5kIF8kbGl0VHlwZSQgaXMgYSBDb21waWxlZFRlbXBsYXRlIGFuZCB3ZSBuZWVkXG4gICAgICAgIC8vIHRvIGNyZWF0ZSB0aGUgPHRlbXBsYXRlPiBlbGVtZW50IHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBpdC5cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0eXBlb2YgdHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gdGhpcy5fJGdldFRlbXBsYXRlKHJlc3VsdClcbiAgICAgICAgICAgIDogKHR5cGUuZWwgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICh0eXBlLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudCh0cnVzdEZyb21UZW1wbGF0ZVN0cmluZyh0eXBlLmgsIHR5cGUuaFswXSksIHRoaXMub3B0aW9ucykpLFxuICAgICAgICAgICAgICAgIHR5cGUpO1xuICAgICAgICBpZiAoKChfYSA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl8kdGVtcGxhdGUpID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgdXBkYXRpbmcnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiB0aGlzLl8kY29tbWl0dGVkVmFsdWUsXG4gICAgICAgICAgICAgICAgcGFydHM6IHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fJHBhcnRzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBpbnN0YW50aWF0ZWQnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIHBhcnRzOiBpbnN0YW5jZS5fJHBhcnRzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGluc3RhbmNlLl91cGRhdGUodmFsdWVzKTtcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIGluc3RhbnRpYXRlZCBhbmQgdXBkYXRlZCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgcGFydHM6IGluc3RhbmNlLl8kcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBvbHlmaWxsU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGdldFRlbXBsYXRlKHJlc3VsdCkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgKHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIF9jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgICAgICAvLyBpdGVyYWJsZSBhbmQgdmFsdWUgd2lsbCBjb250YWluIHRoZSBDaGlsZFBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIENoaWxkUGFydHMuXG4gICAgICAgIGlmICghaXNBcnJheSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiB0ZXN0IHBlcmYgaW1wYWN0IG9mIGFsd2F5cyBjcmVhdGluZyB0d28gcGFydHNcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIHNoYXJpbmcgcGFydHMgYmV0d2VlbiBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xMjY2XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goKGl0ZW1QYXJ0ID0gbmV3IENoaWxkUGFydCh0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLCB0aGlzLm9wdGlvbnMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0Ll8kc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gaXRlbVBhcnRzIGFsd2F5cyBoYXZlIGVuZCBub2Rlc1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKGl0ZW1QYXJ0ICYmIHdyYXAoaXRlbVBhcnQuXyRlbmROb2RlKS5uZXh0U2libGluZywgcGFydEluZGV4KTtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbm9kZXMgY29udGFpbmVkIHdpdGhpbiB0aGlzIFBhcnQgZnJvbSB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0IFN0YXJ0IG5vZGUgdG8gY2xlYXIgZnJvbSwgZm9yIGNsZWFyaW5nIGEgc3Vic2V0IG9mIHRoZSBwYXJ0J3NcbiAgICAgKiAgICAgRE9NICh1c2VkIHdoZW4gdHJ1bmNhdGluZyBpdGVyYWJsZXMpXG4gICAgICogQHBhcmFtIGZyb20gIFdoZW4gYHN0YXJ0YCBpcyBzcGVjaWZpZWQsIHRoZSBpbmRleCB3aXRoaW4gdGhlIGl0ZXJhYmxlIGZyb21cbiAgICAgKiAgICAgd2hpY2ggQ2hpbGRQYXJ0cyBhcmUgYmVpbmcgcmVtb3ZlZCwgdXNlZCBmb3IgZGlzY29ubmVjdGluZyBkaXJlY3RpdmVzIGluXG4gICAgICogICAgIHRob3NlIFBhcnRzLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRjbGVhcihzdGFydCA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcsIGZyb20pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGZhbHNlLCB0cnVlLCBmcm9tKTtcbiAgICAgICAgd2hpbGUgKHN0YXJ0ICYmIHN0YXJ0ICE9PSB0aGlzLl8kZW5kTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHdyYXAoc3RhcnQpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgd3JhcChzdGFydCkucmVtb3ZlKCk7XG4gICAgICAgICAgICBzdGFydCA9IG47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgUm9vdFBhcnQncyBgaXNDb25uZWN0ZWRgLiBOb3RlIHRoYXQgdGhpcyBtZXRvZFxuICAgICAqIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbiBgUm9vdFBhcnRgcyAodGhlIGBDaGlsZFBhcnRgIHJldHVybmVkIGZyb20gYVxuICAgICAqIHRvcC1sZXZlbCBgcmVuZGVyKClgIGNhbGwpLiBJdCBoYXMgbm8gZWZmZWN0IG9uIG5vbi1yb290IENoaWxkUGFydHMuXG4gICAgICogQHBhcmFtIGlzQ29ubmVjdGVkIFdoZXRoZXIgdG8gc2V0XG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgc2V0Q29ubmVjdGVkKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRwYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fX2lzQ29ubmVjdGVkID0gaXNDb25uZWN0ZWQ7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGlzQ29ubmVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJ0LnNldENvbm5lY3RlZCgpIG1heSBvbmx5IGJlIGNhbGxlZCBvbiBhICcgK1xuICAgICAgICAgICAgICAgICdSb290UGFydCByZXR1cm5lZCBmcm9tIHJlbmRlcigpLicpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IEFUVFJJQlVURV9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChzdHJpbmdzLmxlbmd0aCA+IDIgfHwgc3RyaW5nc1swXSAhPT0gJycgfHwgc3RyaW5nc1sxXSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5ldyBBcnJheShzdHJpbmdzLmxlbmd0aCAtIDEpLmZpbGwobmV3IFN0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdGFnTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoaXMgcGFydCBieSByZXNvbHZpbmcgdGhlIHZhbHVlIGZyb20gcG9zc2libHkgbXVsdGlwbGVcbiAgICAgKiB2YWx1ZXMgYW5kIHN0YXRpYyBzdHJpbmdzIGFuZCBjb21taXR0aW5nIGl0IHRvIHRoZSBET00uXG4gICAgICogSWYgdGhpcyBwYXJ0IGlzIHNpbmdsZS12YWx1ZWQsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIHVuZGVmaW5lZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgc2luZ2xlIHZhbHVlIGFyZ3VtZW50LiBJZiB0aGlzIHBhcnQgaXNcbiAgICAgKiBtdWx0aS12YWx1ZSwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgZGVmaW5lZCwgYW5kIHRoZSBtZXRob2QgaXMgY2FsbGVkXG4gICAgICogd2l0aCB0aGUgdmFsdWUgYXJyYXkgb2YgdGhlIHBhcnQncyBvd25pbmcgVGVtcGxhdGVJbnN0YW5jZSwgYW5kIGFuIG9mZnNldFxuICAgICAqIGludG8gdGhlIHZhbHVlIGFycmF5IGZyb20gd2hpY2ggdGhlIHZhbHVlcyBzaG91bGQgYmUgcmVhZC5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvdmVybG9hZGVkIHRoaXMgd2F5IHRvIGVsaW1pbmF0ZSBzaG9ydC1saXZlZCBhcnJheSBzbGljZXNcbiAgICAgKiBvZiB0aGUgdGVtcGxhdGUgaW5zdGFuY2UgdmFsdWVzLCBhbmQgYWxsb3cgYSBmYXN0LXBhdGggZm9yIHNpbmdsZS12YWx1ZWRcbiAgICAgKiBwYXJ0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcGFydCB2YWx1ZSwgb3IgYW4gYXJyYXkgb2YgdmFsdWVzIGZvciBtdWx0aS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gdmFsdWVJbmRleCB0aGUgaW5kZXggdG8gc3RhcnQgcmVhZGluZyB2YWx1ZXMgZnJvbS4gYHVuZGVmaW5lZGAgZm9yXG4gICAgICogICBzaW5nbGUtdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIG5vQ29tbWl0IGNhdXNlcyB0aGUgcGFydCB0byBub3QgY29tbWl0IGl0cyB2YWx1ZSB0byB0aGUgRE9NLiBVc2VkXG4gICAgICogICBpbiBoeWRyYXRpb24gdG8gcHJpbWUgYXR0cmlidXRlIHBhcnRzIHdpdGggdGhlaXIgZmlyc3QtcmVuZGVyZWQgdmFsdWUsXG4gICAgICogICBidXQgbm90IHNldCB0aGUgYXR0cmlidXRlLCBhbmQgaW4gU1NSIHRvIG5vLW9wIHRoZSBET00gb3BlcmF0aW9uIGFuZFxuICAgICAqICAgY2FwdHVyZSB0aGUgdmFsdWUgZm9yIHNlcmlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzLCB2YWx1ZUluZGV4LCBub0NvbW1pdCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICAvLyBXaGV0aGVyIGFueSBvZiB0aGUgdmFsdWVzIGhhcyBjaGFuZ2VkLCBmb3IgZGlydHktY2hlY2tpbmdcbiAgICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RyaW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTaW5nbGUtdmFsdWUgYmluZGluZyBjYXNlXG4gICAgICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCwgMCk7XG4gICAgICAgICAgICBjaGFuZ2UgPVxuICAgICAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRpb24gY2FzZVxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHN0cmluZ3NbMF07XG4gICAgICAgICAgICBsZXQgaSwgdjtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHYgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlc1t2YWx1ZUluZGV4ICsgaV0sIGRpcmVjdGl2ZVBhcmVudCwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyLXByb3ZpZGVkIHZhbHVlIGlzIGBub0NoYW5nZWAsIHVzZSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlIHx8IChjaGFuZ2UgPSAhaXNQcmltaXRpdmUodikgfHwgdiAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9ICh2ICE9PSBudWxsICYmIHYgIT09IHZvaWQgMCA/IHYgOiAnJykgKyBzdHJpbmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHJlY29yZCBlYWNoIHZhbHVlLCBldmVuIGlmIG9uZSBpcyBgbm90aGluZ2AsIGZvciBmdXR1cmVcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZSAmJiAhbm9Db21taXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwodGhpcy5lbGVtZW50LCB0aGlzLm5hbWUsICdhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IGF0dHJpYnV0ZScsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBQUk9QRVJUWV9QQVJUO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZSwgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3Nhbml0aXplcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgcHJvcGVydHknLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHZhbHVlID09PSBub3RoaW5nID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgfVxufVxuLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGh0dHBzOi8vY3JidWcuY29tLzk5MzI2OFxuLy8gQ3VycmVudGx5LCBhbnkgYXR0cmlidXRlIHN0YXJ0aW5nIHdpdGggXCJvblwiIGlzIGNvbnNpZGVyZWQgdG8gYmUgYVxuLy8gVHJ1c3RlZFNjcmlwdCBzb3VyY2UuIFN1Y2ggYm9vbGVhbiBhdHRyaWJ1dGVzIG11c3QgYmUgc2V0IHRvIHRoZSBlcXVpdmFsZW50XG4vLyB0cnVzdGVkIGVtcHR5U2NyaXB0IHZhbHVlLlxuY29uc3QgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICA6ICcnO1xuY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gQk9PTEVBTl9BVFRSSUJVVEVfUEFSVDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCBib29sZWFuIGF0dHJpYnV0ZScsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogISEodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEV2ZW50UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBFVkVOVF9QQVJUO1xuICAgICAgICBpZiAoREVWX01PREUgJiYgdGhpcy5zdHJpbmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBcXGA8JHtlbGVtZW50LmxvY2FsTmFtZX0+XFxgIGhhcyBhIFxcYEAke25hbWV9PS4uLlxcYCBsaXN0ZW5lciB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICdpbnZhbGlkIGNvbnRlbnQuIEV2ZW50IGxpc3RlbmVycyBpbiB0ZW1wbGF0ZXMgbXVzdCBoYXZlIGV4YWN0bHkgJyArXG4gICAgICAgICAgICAgICAgJ29uZSBleHByZXNzaW9uIGFuZCBubyBzdXJyb3VuZGluZyB0ZXh0LicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEV2ZW50UGFydCBkb2VzIG5vdCB1c2UgdGhlIGJhc2UgXyRzZXRWYWx1ZS9fcmVzb2x2ZVZhbHVlIGltcGxlbWVudGF0aW9uXG4gICAgLy8gc2luY2UgdGhlIGRpcnR5IGNoZWNraW5nIGlzIG1vcmUgY29tcGxleFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJHNldFZhbHVlKG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbmV3TGlzdGVuZXIgPVxuICAgICAgICAgICAgKF9hID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCBuZXdMaXN0ZW5lciwgZGlyZWN0aXZlUGFyZW50LCAwKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbm90aGluZztcbiAgICAgICAgaWYgKG5ld0xpc3RlbmVyID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgICAgICAvLyBJZiB0aGUgbmV3IHZhbHVlIGlzIG5vdGhpbmcgb3IgYW55IG9wdGlvbnMgY2hhbmdlIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZVxuICAgICAgICAvLyBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gKG5ld0xpc3RlbmVyID09PSBub3RoaW5nICYmIG9sZExpc3RlbmVyICE9PSBub3RoaW5nKSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIuY2FwdHVyZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIucGFzc2l2ZTtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3Qgbm90aGluZyBhbmQgd2UgcmVtb3ZlZCB0aGUgbGlzdGVuZXIsIHdlIGhhdmVcbiAgICAgICAgLy8gdG8gYWRkIHRoZSBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID0gbmV3TGlzdGVuZXIgIT09IG5vdGhpbmcgJiZcbiAgICAgICAgICAgIChvbGRMaXN0ZW5lciA9PT0gbm90aGluZyB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IGV2ZW50IGxpc3RlbmVyJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBuZXdMaXN0ZW5lcixcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBzaG91bGRSZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgIGFkZExpc3RlbmVyOiBzaG91bGRBZGRMaXN0ZW5lcixcbiAgICAgICAgICAgIG9sZExpc3RlbmVyLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG9sZExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIC8vIEJld2FyZTogSUUxMSBhbmQgQ2hyb21lIDQxIGRvbid0IGxpa2UgdXNpbmcgdGhlIGxpc3RlbmVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gb3B0aW9ucyBvYmplY3QuIEZpZ3VyZSBvdXQgaG93IHRvIGRlYWwgdy8gdGhpcyBpbiBJRTExIC0gbWF5YmVcbiAgICAgICAgICAgIC8vIHBhdGNoIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5jYWxsKChfYiA9IChfYSA9IHRoaXMub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3QpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEVsZW1lbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy50eXBlID0gRUxFTUVOVF9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdG8gZWxlbWVudCBiaW5kaW5nJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfJExIIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWVsZW1lbnQsIHdoaWNoIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfJExIID0ge1xuICAgIC8vIFVzZWQgaW4gbGl0LXNzclxuICAgIF9ib3VuZEF0dHJpYnV0ZVN1ZmZpeDogYm91bmRBdHRyaWJ1dGVTdWZmaXgsXG4gICAgX21hcmtlcjogbWFya2VyLFxuICAgIF9tYXJrZXJNYXRjaDogbWFya2VyTWF0Y2gsXG4gICAgX0hUTUxfUkVTVUxUOiBIVE1MX1JFU1VMVCxcbiAgICBfZ2V0VGVtcGxhdGVIdG1sOiBnZXRUZW1wbGF0ZUh0bWwsXG4gICAgLy8gVXNlZCBpbiB0ZXN0cyBhbmQgcHJpdmF0ZS1zc3Itc3VwcG9ydFxuICAgIF9UZW1wbGF0ZUluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlLFxuICAgIF9pc0l0ZXJhYmxlOiBpc0l0ZXJhYmxlLFxuICAgIF9yZXNvbHZlRGlyZWN0aXZlOiByZXNvbHZlRGlyZWN0aXZlLFxuICAgIF9DaGlsZFBhcnQ6IENoaWxkUGFydCxcbiAgICBfQXR0cmlidXRlUGFydDogQXR0cmlidXRlUGFydCxcbiAgICBfQm9vbGVhbkF0dHJpYnV0ZVBhcnQ6IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LFxuICAgIF9FdmVudFBhcnQ6IEV2ZW50UGFydCxcbiAgICBfUHJvcGVydHlQYXJ0OiBQcm9wZXJ0eVBhcnQsXG4gICAgX0VsZW1lbnRQYXJ0OiBFbGVtZW50UGFydCxcbn07XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5jb25zdCBwb2x5ZmlsbFN1cHBvcnQgPSBERVZfTU9ERVxuICAgID8gZ2xvYmFsLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiBnbG9iYWwubGl0SHRtbFBvbHlmaWxsU3VwcG9ydDtcbnBvbHlmaWxsU3VwcG9ydCA9PT0gbnVsbCB8fCBwb2x5ZmlsbFN1cHBvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvbHlmaWxsU3VwcG9ydChUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4oKF9kID0gZ2xvYmFsLmxpdEh0bWxWZXJzaW9ucykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogKGdsb2JhbC5saXRIdG1sVmVyc2lvbnMgPSBbXSkpLnB1c2goJzIuOC4wJyk7XG5pZiAoREVWX01PREUgJiYgZ2xvYmFsLmxpdEh0bWxWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBgICtcbiAgICAgICAgYExvYWRpbmcgbXVsdGlwbGUgdmVyc2lvbnMgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLyoqXG4gKiBSZW5kZXJzIGEgdmFsdWUsIHVzdWFsbHkgYSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdCwgdG8gdGhlIGNvbnRhaW5lci5cbiAqXG4gKiBUaGlzIGV4YW1wbGUgcmVuZGVycyB0aGUgdGV4dCBcIkhlbGxvLCBab2UhXCIgaW5zaWRlIGEgcGFyYWdyYXBoIHRhZywgYXBwZW5kaW5nXG4gKiBpdCB0byB0aGUgY29udGFpbmVyIGBkb2N1bWVudC5ib2R5YC5cbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IHtodG1sLCByZW5kZXJ9IGZyb20gJ2xpdCc7XG4gKlxuICogY29uc3QgbmFtZSA9IFwiWm9lXCI7XG4gKiByZW5kZXIoaHRtbGA8cD5IZWxsbywgJHtuYW1lfSE8L3A+YCwgZG9jdW1lbnQuYm9keSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdmFsdWUgQW55IFtyZW5kZXJhYmxlXG4gKiAgIHZhbHVlXShodHRwczovL2xpdC5kZXYvZG9jcy90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMvI2NoaWxkLWV4cHJlc3Npb25zKSxcbiAqICAgdHlwaWNhbGx5IGEge0BsaW5rY29kZSBUZW1wbGF0ZVJlc3VsdH0gY3JlYXRlZCBieSBldmFsdWF0aW5nIGEgdGVtcGxhdGUgdGFnXG4gKiAgIGxpa2Uge0BsaW5rY29kZSBodG1sfSBvciB7QGxpbmtjb2RlIHN2Z30uXG4gKiBAcGFyYW0gY29udGFpbmVyIEEgRE9NIGNvbnRhaW5lciB0byByZW5kZXIgdG8uIFRoZSBmaXJzdCByZW5kZXIgd2lsbCBhcHBlbmRcbiAqICAgdGhlIHJlbmRlcmVkIHZhbHVlIHRvIHRoZSBjb250YWluZXIsIGFuZCBzdWJzZXF1ZW50IHJlbmRlcnMgd2lsbFxuICogICBlZmZpY2llbnRseSB1cGRhdGUgdGhlIHJlbmRlcmVkIHZhbHVlIGlmIHRoZSBzYW1lIHJlc3VsdCB0eXBlIHdhc1xuICogICBwcmV2aW91c2x5IHJlbmRlcmVkIHRoZXJlLlxuICogQHBhcmFtIG9wdGlvbnMgU2VlIHtAbGlua2NvZGUgUmVuZGVyT3B0aW9uc30gZm9yIG9wdGlvbnMgZG9jdW1lbnRhdGlvbi5cbiAqIEBzZWVcbiAqIHtAbGluayBodHRwczovL2xpdC5kZXYvZG9jcy9saWJyYXJpZXMvc3RhbmRhbG9uZS10ZW1wbGF0ZXMvI3JlbmRlcmluZy1saXQtaHRtbC10ZW1wbGF0ZXN8IFJlbmRlcmluZyBMaXQgSFRNTCBUZW1wbGF0ZXN9XG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAodmFsdWUsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKERFVl9NT0RFICYmIGNvbnRhaW5lciA9PSBudWxsKSB7XG4gICAgICAgIC8vIEdpdmUgYSBjbGVhcmVyIGVycm9yIG1lc3NhZ2UgdGhhblxuICAgICAgICAvLyAgICAgVW5jYXVnaHQgVHlwZUVycm9yOiBDYW5ub3QgcmVhZCBwcm9wZXJ0aWVzIG9mIG51bGwgKHJlYWRpbmdcbiAgICAgICAgLy8gICAgICdfJGxpdFBhcnQkJylcbiAgICAgICAgLy8gd2hpY2ggcmVhZHMgbGlrZSBhbiBpbnRlcm5hbCBMaXQgZXJyb3IuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBjb250YWluZXIgdG8gcmVuZGVyIGludG8gbWF5IG5vdCBiZSAke2NvbnRhaW5lcn1gKTtcbiAgICB9XG4gICAgY29uc3QgcmVuZGVySWQgPSBERVZfTU9ERSA/IGRlYnVnTG9nUmVuZGVySWQrKyA6IDA7XG4gICAgY29uc3QgcGFydE93bmVyTm9kZSA9IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNvbnRhaW5lcjtcbiAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgbGV0IHBhcnQgPSBwYXJ0T3duZXJOb2RlWydfJGxpdFBhcnQkJ107XG4gICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAga2luZDogJ2JlZ2luIHJlbmRlcicsXG4gICAgICAgIGlkOiByZW5kZXJJZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgcGFydCxcbiAgICB9KTtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBwYXJ0T3duZXJOb2RlWydfJGxpdFBhcnQkJ10gPSBwYXJ0ID0gbmV3IENoaWxkUGFydChjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBlbmROb2RlKSwgZW5kTm9kZSwgdW5kZWZpbmVkLCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSk7XG4gICAgfVxuICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAga2luZDogJ2VuZCByZW5kZXInLFxuICAgICAgICBpZDogcmVuZGVySWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHBhcnQsXG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnQ7XG59O1xuaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgIHJlbmRlci5zZXRTYW5pdGl6ZXIgPSBzZXRTYW5pdGl6ZXI7XG4gICAgcmVuZGVyLmNyZWF0ZVNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcjtcbiAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgcmVuZGVyLl90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZSA9XG4gICAgICAgICAgICBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2U7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwiZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2N1c3RvbS1lbGVtZW50LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3N0YXRlLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL2V2ZW50LW9wdGlvbnMuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnkuanNcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RlY29yYXRvcnMvcXVlcnktYWxsLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzeW5jLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLWVsZW1lbnRzLmpzXCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudC9kZWNvcmF0b3JzL3F1ZXJ5LWFzc2lnbmVkLW5vZGVzLmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvcmF0b3JzLmpzLm1hcFxuIiwiaW1wb3J0XCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtpbXBvcnRcImxpdC1odG1sXCI7ZXhwb3J0KmZyb21cImxpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzXCI7ZXhwb3J0KmZyb21cImxpdC1odG1sL2lzLXNlcnZlci5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzLmpzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvcG9rZW1vbi1jYXRhbG9nL3Bva2Vtb24tY2F0YWxvZy5jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gIFBva2Vtb25JbnRlcm5hbFNlcnZpY2UsXG4gIFBva2Vtb25TZXJ2aWNlQ29udGV4dFxufSBmcm9tIFwiLi9zZXJ2aWNlcy9wb2tlbW9uLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIkBsaXQtbGFicy9jb250ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5AY3VzdG9tRWxlbWVudChcInBva2Vtb24tYXBwXCIpXG5leHBvcnQgY2xhc3MgUG9rZW1vbkFwcCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgb3ZlcnJpZGUgc3R5bGVzID0gc3R5bGVzO1xuXG4gIHB1YmxpYyBwb2tlbW9uU2VydmljZTogUG9rZW1vbkludGVybmFsU2VydmljZTtcblxuICBvdmVycmlkZSBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIG5ldyBDb250ZXh0UHJvdmlkZXIodGhpcywgUG9rZW1vblNlcnZpY2VDb250ZXh0LCB7XG4gICAgICBwb2tlbW9uU2VydmljZTogKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMucG9rZW1vblNlcnZpY2UpIHtcbiAgICAgICAgICB0aGlzLnBva2Vtb25TZXJ2aWNlID0gbmV3IFBva2Vtb25JbnRlcm5hbFNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb2tlbW9uU2VydmljZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJhcHBcIj48cG9rZW1vbi1jYXRhbG9nPjwvcG9rZW1vbi1jYXRhbG9nPjwvZGl2PiBgO1xuICB9XG59XG4iXSwibmFtZXMiOlsiX2EiLCJfYiIsImh0bWwiLCJ0YWciLCJzdHJpbmdzIiwiX2MiLCJfZCJdLCJzb3VyY2VSb290IjoiIn0=