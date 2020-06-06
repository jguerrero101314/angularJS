function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/fotos/fotos.component */
    "./src/app/components/fotos/fotos.component.ts");
    /* harmony import */


    var _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/carga/carga.component */
    "./src/app/components/carga/carga.component.ts");

    var routes = [{
      path: 'fotos',
      component: _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_2__["FotosComponent"]
    }, {
      path: 'carga',
      component: _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_3__["CargaComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'fotos'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'fotosFirebase';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 15,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item", "active"], ["routerLink", "fotos", 1, "nav-link"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "carga", 1, "nav-link"], [1, "conatiner", "main-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FotosFirebase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fotos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cargar fotos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/fotos/fotos.component */
    "./src/app/components/fotos/fotos.component.ts");
    /* harmony import */


    var _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/carga/carga.component */
    "./src/app/components/carga/carga.component.ts");
    /* harmony import */


    var _providers_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./providers/carga-imagenes.service */
    "./src/app/providers/carga-imagenes.service.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./directives/ng-drop-files.directive */
    "./src/app/directives/ng-drop-files.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_providers_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_6__["CargaImagenesService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_4__["FotosComponent"], _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_5__["CargaComponent"], _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_9__["NgDropFilesDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_4__["FotosComponent"], _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_5__["CargaComponent"], _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_9__["NgDropFilesDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig)],
          providers: [_providers_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_6__["CargaImagenesService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/carga/carga.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/carga/carga.component.ts ***!
    \*****************************************************/

  /*! exports provided: CargaComponent */

  /***/
  function srcAppComponentsCargaCargaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CargaComponent", function () {
      return CargaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _providers_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../providers/carga-imagenes.service */
    "./src/app/providers/carga-imagenes.service.ts");
    /* harmony import */


    var _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directives/ng-drop-files.directive */
    "./src/app/directives/ng-drop-files.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "text-green": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "width": a0
      };
    };

    function CargaComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var archivo_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, archivo_r3.progreso >= 100));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](archivo_r3.nombreArchivo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, archivo_r3.archivo.size / 1024 / 1024, ".2-2"), " MB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, archivo_r3.progreso + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", archivo_r3.progreso, " %");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "file-over": a0
      };
    };

    var CargaComponent =
    /*#__PURE__*/
    function () {
      function CargaComponent(_cargaImagenes) {
        _classCallCheck(this, CargaComponent);

        this._cargaImagenes = _cargaImagenes;
        this.estaSobreElemento = false;
        this.archivos = [];
      }

      _createClass(CargaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cargarImagenes",
        value: function cargarImagenes() {
          this._cargaImagenes.cargarImagenesFirebase(this.archivos);
        }
      }, {
        key: "limpiarArchivos",
        value: function limpiarArchivos() {
          this.archivos = [];
        }
      }]);

      return CargaComponent;
    }();

    CargaComponent.ɵfac = function CargaComponent_Factory(t) {
      return new (t || CargaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_1__["CargaImagenesService"]));
    };

    CargaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CargaComponent,
      selectors: [["app-carga"]],
      decls: 26,
      vars: 6,
      consts: [[1, "row"], [1, "col-md-4"], ["appNgDropFiles", "", 1, "well", "drop-zone", 3, "archivos", "ngClass", "mouseSobre"], ["src", "assets/drop-images.png"], [1, "col-md-7"], [1, "btn", "btn-success", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "click"], [1, "table"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "progress"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"]],
      template: function CargaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seleccione archivos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseSobre", function CargaComponent_Template_div_mouseSobre_4_listener($event) {
            return ctx.estaSobreElemento = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Deje caer aqu\xED los archivos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cargar archivos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CargaComponent_Template_button_click_11_listener() {
            return ctx.cargarImagenes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CargaComponent_Template_button_click_13_listener() {
            return ctx.limpiarArchivos();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Limpiar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nombre archivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tama\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Progreso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CargaComponent_tr_25_Template, 10, 12, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("archivos", ctx.archivos)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx.estaSobreElemento));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.archivos.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.archivos);
        }
      },
      directives: [_directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_2__["NgDropFilesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CargaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carga',
          templateUrl: './carga.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _providers_carga_imagenes_service__WEBPACK_IMPORTED_MODULE_1__["CargaImagenesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/fotos/fotos.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/fotos/fotos.component.ts ***!
    \*****************************************************/

  /*! exports provided: FotosComponent */

  /***/
  function srcAppComponentsFotosFotosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FotosComponent", function () {
      return FotosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FotosComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.nombre);
      }
    }

    var FotosComponent =
    /*#__PURE__*/
    function () {
      function FotosComponent(afs) {
        _classCallCheck(this, FotosComponent);

        this.afs = afs;
        this.itemsCollection = afs.collection("img");
        this.items = this.itemsCollection.valueChanges();
      }

      _createClass(FotosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FotosComponent;
    }();

    FotosComponent.ɵfac = function FotosComponent_Factory(t) {
      return new (t || FotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    FotosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FotosComponent,
      selectors: [["app-fotos"]],
      decls: 3,
      vars: 3,
      consts: [[1, "card-columns"], ["class", "card col-12", 4, "ngFor", "ngForOf"], [1, "card", "col-12"], [1, "card-img-top", "img-fluid", 3, "src"], [1, "card-body"], [1, "card-title"]],
      template: function FotosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FotosComponent_div_1_Template, 5, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.items));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm90b3MvZm90b3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FotosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-fotos",
          templateUrl: "./fotos.component.html",
          styleUrls: ["./fotos.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/ng-drop-files.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/directives/ng-drop-files.directive.ts ***!
    \*******************************************************/

  /*! exports provided: NgDropFilesDirective */

  /***/
  function srcAppDirectivesNgDropFilesDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgDropFilesDirective", function () {
      return NgDropFilesDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_file_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/file-item */
    "./src/app/models/file-item.ts");

    var NgDropFilesDirective =
    /*#__PURE__*/
    function () {
      function NgDropFilesDirective() {
        _classCallCheck(this, NgDropFilesDirective);

        this.archivos = [];
        this.mouseSobre = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NgDropFilesDirective, [{
        key: "onDragEnter",
        value: function onDragEnter(event) {
          this.mouseSobre.emit(true);

          this._prevenirDetener(event);
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          this.mouseSobre.emit(false);
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          var transferencia = this._getTransferencia(event);

          if (!transferencia) {
            return;
          }

          this._extraerArchivos(transferencia.files);

          this._prevenirDetener(event);

          this.mouseSobre.emit(false);
        }
      }, {
        key: "_getTransferencia",
        value: function _getTransferencia(event) {
          return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
        }
      }, {
        key: "_extraerArchivos",
        value: function _extraerArchivos(archivosLista) {
          // console.log( archivosLista );
          // tslint:disable-next-line:forin
          for (var propiedad in Object.getOwnPropertyNames(archivosLista)) {
            var archivoTemporal = archivosLista[propiedad];

            if (this._archivoPuedeSerCargado(archivoTemporal)) {
              var nuevoArchivo = new _models_file_item__WEBPACK_IMPORTED_MODULE_1__["FileItem"](archivoTemporal);
              this.archivos.push(nuevoArchivo);
            }
          }
        } // Validaciones

      }, {
        key: "_archivoPuedeSerCargado",
        value: function _archivoPuedeSerCargado(archivo) {
          if (!this._archivoYaFueDroppeado(archivo.name) && this._esImagen(archivo.type)) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "_prevenirDetener",
        value: function _prevenirDetener(event) {
          event.preventDefault();
          event.stopPropagation();
        }
      }, {
        key: "_archivoYaFueDroppeado",
        value: function _archivoYaFueDroppeado(nombreArchivo) {
          var _iterator = _createForOfIteratorHelper(this.archivos),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var archivo = _step.value;

              if (archivo.nombreArchivo === nombreArchivo) {
                console.log('El archivo ' + nombreArchivo + ' ya esta agregado');
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return false;
        }
      }, {
        key: "_esImagen",
        value: function _esImagen(tipoArchivo) {
          return tipoArchivo === '' || tipoArchivo === undefined ? false : tipoArchivo.startsWith('image');
        }
      }]);

      return NgDropFilesDirective;
    }();

    NgDropFilesDirective.ɵfac = function NgDropFilesDirective_Factory(t) {
      return new (t || NgDropFilesDirective)();
    };

    NgDropFilesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgDropFilesDirective,
      selectors: [["", "appNgDropFiles", ""]],
      hostBindings: function NgDropFilesDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function NgDropFilesDirective_dragover_HostBindingHandler($event) {
            return ctx.onDragEnter($event);
          })("dragleave", function NgDropFilesDirective_dragleave_HostBindingHandler($event) {
            return ctx.onDragLeave($event);
          })("drop", function NgDropFilesDirective_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        archivos: "archivos"
      },
      outputs: {
        mouseSobre: "mouseSobre"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropFilesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[appNgDropFiles]"
        }]
      }], function () {
        return [];
      }, {
        archivos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mouseSobre: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragover', ['$event']]
        }],
        onDragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['dragleave', ['$event']]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['drop', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/models/file-item.ts":
  /*!*************************************!*\
    !*** ./src/app/models/file-item.ts ***!
    \*************************************/

  /*! exports provided: FileItem */

  /***/
  function srcAppModelsFileItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileItem", function () {
      return FileItem;
    });

    var FileItem = function FileItem(archivo) {
      _classCallCheck(this, FileItem);

      this.archivo = archivo;
      this.nombreArchivo = archivo.name;
      this.estaSubiendo = false;
      this.progreso = 0;
    };
    /***/

  },

  /***/
  "./src/app/providers/carga-imagenes.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/providers/carga-imagenes.service.ts ***!
    \*****************************************************/

  /*! exports provided: CargaImagenesService */

  /***/
  function srcAppProvidersCargaImagenesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CargaImagenesService", function () {
      return CargaImagenesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/storage */
    "./node_modules/firebase/storage/dist/index.esm.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var CargaImagenesService =
    /*#__PURE__*/
    function () {
      function CargaImagenesService(db) {
        _classCallCheck(this, CargaImagenesService);

        this.db = db;
        this.CARPETA_IMAGENES = "img";
      }

      _createClass(CargaImagenesService, [{
        key: "cargarImagenesFirebase",
        value: function cargarImagenesFirebase(imagenes) {
          var _this = this;

          var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_1__["storage"]().ref();

          var _iterator2 = _createForOfIteratorHelper(imagenes),
              _step2;

          try {
            var _loop = function _loop() {
              var item = _step2.value;
              item.estaSubiendo = true;

              if (item.progreso >= 100) {
                return "continue";
              }

              var uploadTask = storageRef.child("".concat(_this.CARPETA_IMAGENES, "/").concat(item.nombreArchivo)).put(item.archivo);
              uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_1__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                return item.progreso = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              }, function (error) {
                return console.log("Error al subir" + error);
              }, function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (value) {
                  item.url = value;
                  item.estaSubiendo = false;

                  _this.guardarImagen({
                    nombre: item.nombreArchivo,
                    url: item.url
                  });

                  console.log("Imagen almacenada correctamente");
                  console.log(item);
                });
              });
            };

            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "guardarImagen",
        value: function guardarImagen(imagen) {
          this.db.collection("/".concat(this.CARPETA_IMAGENES)).add(imagen);
        }
      }]);

      return CargaImagenesService;
    }();

    CargaImagenesService.ɵfac = function CargaImagenesService_Factory(t) {
      return new (t || CargaImagenesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]));
    };

    CargaImagenesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CargaImagenesService,
      factory: CargaImagenesService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CargaImagenesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      firebaseConfig: {
        apiKey: 'AIzaSyCSePL5VeHt_1NrtsLZjj14cyMztU0UjCE',
        authDomain: 'fir-fotos-a9953.firebaseapp.com',
        databaseURL: 'https://fir-fotos-a9953.firebaseio.com',
        projectId: 'fir-fotos-a9953',
        storageBucket: 'fir-fotos-a9953.appspot.com',
        messagingSenderId: '739447810656',
        appId: '1:739447810656:web:a3d9f885925cd1ed6e7105',
        measurementId: 'G-09XX0ZGEK0'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\proyectos\angularJS\15-fotosFirebase\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map