/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./spec/tests/store.test.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./spec/tests/store.test.ts":
/*!**********************************!*\
  !*** ./spec/tests/store.test.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/store */ \"./src/store.ts\");\n\ndescribe('Testing Store...', function () {\n    var store;\n    var name = 'store';\n    var id = 'store_123456789';\n    var item = {\n        content: 'Brush your teeth',\n        state: _src_store__WEBPACK_IMPORTED_MODULE_0__[\"TodoState\"].active,\n    };\n    beforeEach(function () {\n        store = new _src_store__WEBPACK_IMPORTED_MODULE_0__[\"Store\"](name, id);\n    });\n    it('it should return the class id', function () {\n        expect(store.getId()).toBe(id);\n    });\n    it('it should return the class name', function () {\n        expect(store.getName()).toBe(name);\n    });\n    it('It should edit class name', function () {\n        store.editName('Todo store');\n        expect(store.getName()).toBe('Todo store');\n    });\n    it('it should add an item/todo to the store', function () {\n        store.addItem(item);\n        var items = store.getItems();\n        expect(items.length).toBe(1);\n    });\n    it('it should delete an item/todo from the store', function () {\n        store.addItem(item);\n        store.removeItem(0);\n        var items = store.getItems();\n        expect(items[0].state).toBe(_src_store__WEBPACK_IMPORTED_MODULE_0__[\"TodoState\"].deleted);\n    });\n});\n\n\n//# sourceURL=webpack:///./spec/tests/store.test.ts?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: TodoState, Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoState\", function() { return TodoState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\nvar TodoState;\n(function (TodoState) {\n    TodoState[\"active\"] = \"active\";\n    TodoState[\"done\"] = \"done\";\n    TodoState[\"deleted\"] = \"deleted\";\n})(TodoState || (TodoState = {}));\n/**\n * create a new store for a specific type a todos\n */\nvar Store = /** @class */ (function () {\n    /**\n     * instantiate a new store\n     */\n    function Store(name, id) {\n        /* store todos */\n        this.todos = [];\n        /* store glory aka completeness */\n        this.glory = 0;\n        /* empty store flag */\n        this.empty = true;\n        this.name = name;\n        this.id = id;\n        this.todos;\n    }\n    /* return store id */\n    Store.prototype.getId = function () {\n        return this.id;\n    };\n    /* return store name */\n    Store.prototype.getName = function () {\n        return this.name;\n    };\n    Store.prototype.editName = function (name) {\n        this.name = name;\n        return this;\n    };\n    /* Set the empty flag accordingly */\n    Store.prototype.switchEmptyFlag = function (to) {\n        if (to === void 0) { to = false; }\n        if (this.todos.length > 0) {\n            this.empty = false;\n        }\n        if (to && this.todos.length === 0) {\n            this.empty = true;\n        }\n    };\n    /* check if an item/todo exists in the store*/\n    Store.prototype.itemExist = function (index) {\n        return this.todos[index].state !== TodoState.deleted;\n    };\n    /* add an item/todo to the store */\n    Store.prototype.addItem = function (todo) {\n        this.todos.push(todo);\n        if (this.empty) {\n            this.switchEmptyFlag();\n        }\n        return this;\n    };\n    /* remove an item/todo from the store */\n    Store.prototype.removeItem = function (index) {\n        if (this.itemExist(index)) {\n            this.todos[index].state = TodoState.deleted;\n        }\n        return this;\n    };\n    /* return an array of store items/todos */\n    Store.prototype.getItems = function () {\n        return this.todos;\n    };\n    return Store;\n}());\n\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ })

/******/ });