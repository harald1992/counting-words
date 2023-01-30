(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/game/game.component */ "./src/app/pages/game/game.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_words_form_words_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/words-form/words-form.component */ "./src/app/pages/words-form/words-form.component.ts");







const routes = [
    {
        path: "",
        component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
    },
    {
        path: "form",
        component: _pages_words_form_words_form_component__WEBPACK_IMPORTED_MODULE_4__["WordsFormComponent"],
    },
    {
        path: "game",
        component: _pages_game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/routing.service */ "./src/app/services/routing.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");






class AppComponent {
    constructor(routingService) {
        this.title = 'counting-words';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "page-wrap"], [1, "content"], [1, "content-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_routing_service__WEBPACK_IMPORTED_MODULE_1__["RoutingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_words_form_words_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/words-form/words-form.component */ "./src/app/pages/words-form/words-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/game/game.component */ "./src/app/pages/game/game.component.ts");
/* harmony import */ var _components_moving_sentence_block_moving_sentence_block_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/moving-sentence-block/moving-sentence-block.component */ "./src/app/components/moving-sentence-block/moving-sentence-block.component.ts");
/* harmony import */ var _directives_factory_host_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/factory-host.directive */ "./src/app/directives/factory-host.directive.ts");
/* harmony import */ var _pages_words_form_analysis_report_table_analysis_report_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/words-form/analysis-report-table/analysis-report-table.component */ "./src/app/pages/words-form/analysis-report-table/analysis-report-table.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _pages_words_form_words_form_component__WEBPACK_IMPORTED_MODULE_7__["WordsFormComponent"],
        _pages_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"],
        _components_moving_sentence_block_moving_sentence_block_component__WEBPACK_IMPORTED_MODULE_10__["MovingSentenceBlockComponent"],
        _directives_factory_host_directive__WEBPACK_IMPORTED_MODULE_11__["FactoryHostDirective"],
        _pages_words_form_analysis_report_table_analysis_report_table_component__WEBPACK_IMPORTED_MODULE_12__["AnalysisReportTableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _pages_words_form_words_form_component__WEBPACK_IMPORTED_MODULE_7__["WordsFormComponent"],
                    _pages_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"],
                    _components_moving_sentence_block_moving_sentence_block_component__WEBPACK_IMPORTED_MODULE_10__["MovingSentenceBlockComponent"],
                    _directives_factory_host_directive__WEBPACK_IMPORTED_MODULE_11__["FactoryHostDirective"],
                    _pages_words_form_analysis_report_table_analysis_report_table_component__WEBPACK_IMPORTED_MODULE_12__["AnalysisReportTableComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 Harald Hiemstra 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [["routerLink", ""], ["src", "assets/counting_words.png", "height", "150px", "alt", "Counting Words Logo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.page-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  color: black;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 1.5;\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: lightskyblue;\n  border-bottom: 1px black solid;\n}\nmain.content[_ngcontent-%COMP%] {\n  background-color: silver;\n  flex: 1 0 auto;\n  overflow: hidden;\n  padding: 32px 16px;\n}\nmain.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 959px;\n  background-color: white;\n  padding: 48px;\n  box-shadow: 0 2px 2px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n@media (max-width: 959px) {\n  main.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n    padding: 32px;\n  }\n}\n@media (max-width: 719px) {\n  main.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: lightskyblue;\n  border-top: 1px black solid;\n  padding: 8px;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 32px;\n}\nbutton[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 8px 16px;\n  border: 1p solid black;\n  background-color: lightskyblue;\n}\nbutton[_ngcontent-%COMP%]:hover:enabled {\n  background-color: #b8e2fc;\n}\na[_ngcontent-%COMP%] {\n  color: #054f7d;\n}\nimg[_ngcontent-%COMP%] {\n  height: 150px;\n}\n@media (max-width: 959px) {\n  img[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n}\n@media (max-width: 719px) {\n  img[_ngcontent-%COMP%] {\n    height: 75px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFLQSxXQUFBO0FBZ0JBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ2xCRjtBRHFCQTs7RUFFRSxZQUFBO0FDbEJGO0FEb0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNqQkY7QURvQkE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDakJGO0FEb0JBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDakJGO0FEb0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ2pCRjtBRG9CQTtFQUNFLDhCQTVEYztFQTZEZCw4QkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHdCQS9EaUI7RUFnRWpCLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakJGO0FEbUJFO0VBQ0UsY0FBQTtFQUNBLGdCQWxFVztFQW1FWCx1QkF4RVU7RUF5RVYsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRDdDRTtFQXVEQTtJQVVJLGFBQUE7RUNoQko7QUFDRjtBRHhERTtFQTZEQTtJQWNJLFlBQUE7RUNmSjtBQUNGO0FEbUJBO0VBQ0UsU0FBQTtFQUNBLDhCQTNGYztFQTRGZCwyQkFBQTtFQUNBLFlBQUE7QUNoQkY7QURrQkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDaEJKO0FEb0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkF6R2M7QUN3RmhCO0FEbUJFO0VBQ0UseUJBQUE7QUNqQko7QURxQkE7RUFDRSxjQUFBO0FDbEJGO0FBOUZBO0VBQ0UsYUFBQTtBQWlHRjtBRHBGRTtFQ2RGO0lBSUksYUFBQTtFQWtHRjtBQUNGO0FEL0ZFO0VDUkY7SUFRSSxZQUFBO0VBbUdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWYXJpYWJsZXMgKi9cclxuJGNvbG9yLXByaW1hcnk6IGxpZ2h0c2t5Ymx1ZTtcclxuJGNvbG9yLWxpZ2h0OiB3aGl0ZTtcclxuJGNvbG9yLWJhY2tncm91bmQ6IHNpbHZlcjtcclxuXHJcbi8qIExheW91dCAqL1xyXG4kbGF5b3V0LXNtYWxsOiA3MTlweDsgLy8gQnJlYWtwb2ludC5IYW5kc2V0LCBCcmVha3BvaW50LlRhYmxldChTbWFsbClcclxuJGxheW91dC1sYXJnZTogOTU5cHg7XHJcblxyXG5AbWl4aW4gbW9iaWxlIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogI3skbGF5b3V0LXNtYWxsfSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogI3skbGF5b3V0LWxhcmdlfSkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wYWdlLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xyXG59XHJcblxyXG5tYWluLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iYWNrZ3JvdW5kO1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMzJweCAxNnB4O1xyXG5cclxuICA+IC5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogJGxheW91dC1sYXJnZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodDtcclxuICAgIHBhZGRpbmc6IDQ4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgQGluY2x1ZGUgdGFibGV0KCkge1xyXG4gICAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1vYmlsZSgpIHtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcclxuICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gIC5jb3B5cmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXI6IDFwIHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG5cclxuICAmOmhvdmVyOmVuYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xyXG4gIH1cclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgNTApO1xyXG59XHJcbiIsIi8qIFZhcmlhYmxlcyAqL1xuLyogTGF5b3V0ICovXG4qIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2Utd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XG59XG5cbm1haW4uY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcbiAgZmxleDogMSAwIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDMycHggMTZweDtcbn1cbm1haW4uY29udGVudCA+IC5jb250ZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDk1OXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTlweCkge1xuICBtYWluLmNvbnRlbnQgPiAuY29udGVudC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MTlweCkge1xuICBtYWluLmNvbnRlbnQgPiAuY29udGVudC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmZvb3RlciAuY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyOiAxcCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xufVxuYnV0dG9uOmhvdmVyOmVuYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhlMmZjO1xufVxuXG5hIHtcbiAgY29sb3I6ICMwNTRmN2Q7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzE5cHgpIHtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/moving-sentence-block/moving-sentence-block.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/moving-sentence-block/moving-sentence-block.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MovingSentenceBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingSentenceBlockComponent", function() { return MovingSentenceBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { right: a0 }; };
class MovingSentenceBlockComponent {
    constructor() {
        this.sentenceClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startMoving = false;
        // number between 10 and 90 for x-axis location
        const randomNumber = Math.floor(Math.random() * 80 + 10).toString();
        this.position = randomNumber + "%";
    }
    ngOnInit() {
        setTimeout(() => {
            this.startMoving = true;
        }, 50);
        this.timeToFall = setTimeout(() => {
            // if the word has a positive score value, give minus points when it falls.
            const value = this.data.value > 0 ? -this.data.value : 0;
            this.sentenceClicked.emit(value);
        }, 10050);
    }
    onSentenceClicked() {
        this.sentenceClicked.emit(this.data.value);
    }
    ngOnDestroy() {
        clearTimeout(this.timeToFall);
    }
}
MovingSentenceBlockComponent.ɵfac = function MovingSentenceBlockComponent_Factory(t) { return new (t || MovingSentenceBlockComponent)(); };
MovingSentenceBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovingSentenceBlockComponent, selectors: [["app-moving-sentence-block"]], inputs: { data: "data" }, outputs: { sentenceClicked: "sentenceClicked" }, decls: 3, vars: 6, consts: [[1, "sentence-block", 3, "ngStyle", "click"]], template: function MovingSentenceBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovingSentenceBlockComponent_Template_div_click_0_listener() { return ctx.onSentenceClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("destination", ctx.startMoving);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.position));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.sentence);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".sentence-block[_ngcontent-%COMP%] {\n  padding: 32px;\n  border-radius: 100%;\n  border: solid 1px black;\n  min-width: 50px;\n  max-width: 300px;\n  min-height: 100px;\n  position: absolute;\n  top: 0%;\n  right: 0%;\n  transition: transform 10s ease-in;\n  z-index: -1;\n  cursor: pointer;\n}\n.sentence-block[_ngcontent-%COMP%]:hover {\n  background-color: gray;\n}\n.sentence-block.destination[_ngcontent-%COMP%] {\n  transform: translate(0, 100vh);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3Zpbmctc2VudGVuY2UtYmxvY2svbW92aW5nLXNlbnRlbmNlLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7QUFFRTtFQUNFLDhCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmluZy1zZW50ZW5jZS1ibG9jay9tb3Zpbmctc2VudGVuY2UtYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VudGVuY2UtYmxvY2sge1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICByaWdodDogMCU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwcyBlYXNlLWluO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIH1cclxuXHJcbiAgJi5kZXN0aW5hdGlvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDB2aCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovingSentenceBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-moving-sentence-block",
                templateUrl: "./moving-sentence-block.component.html",
                styleUrls: ["./moving-sentence-block.component.scss"],
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sentenceClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/counting-words/lib/counting-words.ts":
/*!******************************************************!*\
  !*** ./src/app/counting-words/lib/counting-words.ts ***!
  \******************************************************/
/*! exports provided: WordFrequency, WordFrequencyAnalyzer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordFrequency", function() { return WordFrequency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordFrequencyAnalyzer", function() { return WordFrequencyAnalyzer; });
class WordFrequency {
    constructor(word) {
        this.frequency = 1;
        this.word = word;
    }
    getWord() {
        return this.word;
    }
    getFrequency() {
        return this.frequency;
    }
    incrementFrequency() {
        this.frequency++;
    }
}
class WordFrequencyAnalyzer {
    constructor() { }
    /* Exctracts all words from the input text and returns it in an unsorted array of WordFrequency objects. */
    getAllWordsFromText(text) {
        text = text.toLowerCase();
        const listOfWords = [];
        const wordRegex = /([A-Za-z])\w*/g;
        const words = text.match(wordRegex);
        words === null || words === void 0 ? void 0 : words.forEach((wordText) => {
            const alreadyExistingWord = listOfWords.find((e) => e.getWord() === wordText);
            if (alreadyExistingWord) {
                alreadyExistingWord.incrementFrequency();
            }
            else {
                listOfWords.push(new WordFrequency(wordText));
            }
        });
        return listOfWords;
    }
    /* Returns the highest frequency a word appears in the text. */
    calculateHighestFrequency(text) {
        let highestFrequency = 0;
        const listOfWords = this.getAllWordsFromText(text);
        listOfWords === null || listOfWords === void 0 ? void 0 : listOfWords.forEach((word) => {
            const frequency = word.getFrequency();
            if (frequency > highestFrequency) {
                highestFrequency = frequency;
            }
        });
        return highestFrequency;
    }
    /* Return the frequency the specific word appears in the text. */
    calculateFrequencyForWord(text, word) {
        const listOfWords = this.getAllWordsFromText(text);
        const wordInList = listOfWords.find((e) => e.getWord() === word);
        return (wordInList === null || wordInList === void 0 ? void 0 : wordInList.getFrequency()) || 0;
    }
    /* Returns the N most frequent words in an sorted array of WordFrequency objects */
    calculateMostFrequentNWords(text, n) {
        const listOfWords = this.getAllWordsFromText(text);
        listOfWords.sort((a, b) => {
            return a.getFrequency() === b.getFrequency()
                ? a.getWord().localeCompare(b.getWord())
                : b.getFrequency() - a.getFrequency();
        });
        return listOfWords.slice(0, n);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (WordFrequencyAnalyzer);


/***/ }),

/***/ "./src/app/directives/factory-host.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/factory-host.directive.ts ***!
  \******************************************************/
/*! exports provided: FactoryHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryHostDirective", function() { return FactoryHostDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
// tslint:disable: directive-selector


class FactoryHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
FactoryHostDirective.ɵfac = function FactoryHostDirective_Factory(t) { return new (t || FactoryHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
FactoryHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FactoryHostDirective, selectors: [["", "factoryHost", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FactoryHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[factoryHost]",
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/game/game.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/game/game.component.ts ***!
  \**********************************************/
/*! exports provided: SentenceItem, GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceItem", function() { return SentenceItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_components_moving_sentence_block_moving_sentence_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/moving-sentence-block/moving-sentence-block.component */ "./src/app/components/moving-sentence-block/moving-sentence-block.component.ts");
/* harmony import */ var src_app_counting_words_lib_counting_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/counting-words/lib/counting-words */ "./src/app/counting-words/lib/counting-words.ts");
/* harmony import */ var src_app_directives_factory_host_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/factory-host.directive */ "./src/app/directives/factory-host.directive.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_sentence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sentence.service */ "./src/app/services/sentence.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function GameComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your last score was : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.lastScore);
} }
function GameComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Objective: Click all words that contain the word ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \"", ctx_r1.wordObjective, "\" as one of the 3 most occurring words.\"");
} }
function GameComponent_ng_template_30_Template(rf, ctx) { }
class SentenceItem {
    constructor(component, data) {
        this.component = component;
        this.data = data;
    }
}
class GameComponent {
    constructor(sentenceService, componentFactoryResolver) {
        this.sentenceService = sentenceService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.words = [];
        this.wordAnalyzer = new src_app_counting_words_lib_counting_words__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.lastScore = 0;
        this.wordObjective = "";
        this.gameInProgress = false;
        this.score = 0;
        this.timeDurationS = 0;
    }
    createSentence() {
        return this.sentenceService.getRandomSentence(15);
    }
    /* Creates a new falling sentence block */
    createComponent(sentence = "", value = 0) {
        const newComponent = new SentenceItem(src_app_components_moving_sentence_block_moving_sentence_block_component__WEBPACK_IMPORTED_MODULE_1__["MovingSentenceBlockComponent"], {
            sentence,
            value,
        });
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(newComponent.component);
        const viewContainerRef = this.factoryHost.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        // give the compnent a sentence and it's score
        componentRef.instance.data = newComponent.data;
        componentRef.instance.sentenceClicked
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe((value) => {
            // destroy the clicked sentence component, edit score and complete this Subscription via take(1)
            this.score += value;
            componentRef.destroy();
        });
    }
    startGame(gameLengthMs = 30000) {
        this.wordObjective = this.sentenceService.getRandomWord();
        this.gameInProgress = true;
        this.score = 0;
        this.timeDurationS = gameLengthMs / 1000;
        this.gameDurationTimer = setInterval(() => {
            this.timeDurationS = this.timeDurationS - 1;
        }, 1000);
        this.spawnSentenceInterval = setInterval(() => {
            const sentence = this.createSentence();
            /* check if on of the 3 most frequent words is the objective.
             If the objective word is in the top 3, give a positive score if cought.*/
            let isWordObjectiveTheMostUsed = false;
            const mostFrequentThreeWords = this.wordAnalyzer.calculateMostFrequentNWords(sentence, 3);
            mostFrequentThreeWords.forEach((item) => {
                if (this.wordObjective === item.getWord()) {
                    isWordObjectiveTheMostUsed = true;
                }
            });
            const value = isWordObjectiveTheMostUsed ? 1 : -1;
            this.createComponent(sentence, value);
        }, 900);
        this.endGameTimer = setTimeout(() => {
            this.endGame();
        }, gameLengthMs);
    }
    clearBoard() {
        const viewContainerRef = this.factoryHost.viewContainerRef;
        viewContainerRef.clear();
    }
    endGame() {
        this.lastScore = this.score;
        clearInterval(this.gameDurationTimer);
        clearInterval(this.spawnSentenceInterval);
        clearTimeout(this.endGameTimer);
        this.clearBoard();
        this.score = 0;
        this.gameInProgress = false;
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sentence_service__WEBPACK_IMPORTED_MODULE_5__["SentenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], viewQuery: function GameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](src_app_directives_factory_host_directive__WEBPACK_IMPORTED_MODULE_3__["FactoryHostDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.factoryHost = _t.first);
    } }, decls: 31, vars: 6, consts: [[1, "gameboard"], [1, "game-form"], ["routerLink", ""], [1, "column-division"], [1, "form"], ["type", "button", 3, "click"], [1, "scoreboard"], [4, "ngIf"], ["factoryHost", ""]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back to homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Catching words game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The objective is to click all falling sentences containing specific words before they end the bottom of the page. The sentence must have the objective word as the most frequent occurring word in it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " If the sentence has two words tied for most occurring, only the one that's first in alphabetic order, will be counting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "If you click the wrong sentence, you will get minus points.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_15_listener() { return ctx.startGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Start Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_17_listener() { return ctx.endGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "End Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GameComponent_p_20_Template, 4, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GameComponent_p_21_Template, 4, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Time Remaining : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " seconds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, GameComponent_ng_template_30_Template, 0, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("gameInProgress", ctx.gameInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lastScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wordObjective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timeDurationS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("score = ", ctx.score, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], src_app_directives_factory_host_directive__WEBPACK_IMPORTED_MODULE_3__["FactoryHostDirective"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.page-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  color: black;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 1.5;\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: lightskyblue;\n  border-bottom: 1px black solid;\n}\nmain.content[_ngcontent-%COMP%] {\n  background-color: silver;\n  flex: 1 0 auto;\n  overflow: hidden;\n  padding: 32px 16px;\n}\nmain.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 959px;\n  background-color: white;\n  padding: 48px;\n  box-shadow: 0 2px 2px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n@media (max-width: 959px) {\n  main.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n    padding: 32px;\n  }\n}\n@media (max-width: 719px) {\n  main.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: lightskyblue;\n  border-top: 1px black solid;\n  padding: 8px;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 32px;\n}\nbutton[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 8px 16px;\n  border: 1p solid black;\n  background-color: lightskyblue;\n}\nbutton[_ngcontent-%COMP%]:hover:enabled {\n  background-color: #b8e2fc;\n}\na[_ngcontent-%COMP%] {\n  color: #054f7d;\n}\n.gameboard[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\n.gameboard[_ngcontent-%COMP%]    > .game-form[_ngcontent-%COMP%] {\n  z-index: 99;\n  background-color: white;\n  border: 1px solid black;\n  padding: 8px;\n}\n.gameboard[_ngcontent-%COMP%]    > .game-form[_ngcontent-%COMP%]   .column-division[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n@media (max-width: 719px) {\n  .gameboard[_ngcontent-%COMP%]    > .game-form[_ngcontent-%COMP%]   .column-division[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.gameboard[_ngcontent-%COMP%]    > .game-form[_ngcontent-%COMP%]   .column-division[_ngcontent-%COMP%]    > .form[_ngcontent-%COMP%], .gameboard[_ngcontent-%COMP%]    > .game-form[_ngcontent-%COMP%]   .column-division[_ngcontent-%COMP%]   .scoreboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 8px;\n}\n@media (max-width: 719px) {\n  .gameboard[_ngcontent-%COMP%]    > .game-form[_ngcontent-%COMP%]   .column-division[_ngcontent-%COMP%]    > .form[_ngcontent-%COMP%], .gameboard[_ngcontent-%COMP%]    > .game-form[_ngcontent-%COMP%]   .column-division[_ngcontent-%COMP%]   .scoreboard[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n}\n.gameboard[_ngcontent-%COMP%]    > .game-form[_ngcontent-%COMP%]   .column-division[_ngcontent-%COMP%]    > .form[_ngcontent-%COMP%] {\n  flex: 1 0 25%;\n  justify-content: space-around;\n}\n.gameboard[_ngcontent-%COMP%]    > .game-form[_ngcontent-%COMP%]   .column-division[_ngcontent-%COMP%]    > .scoreboard[_ngcontent-%COMP%] {\n  flex: 1 0 75%;\n}\n.gameboard.gameInProgress[_ngcontent-%COMP%] {\n  background-color: lightblue;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  overflow: hidden;\n}\n.gameboard.gameInProgress[_ngcontent-%COMP%]::after {\n  content: \"\";\n  border: 5px solid black;\n  position: absolute;\n  top: 100%;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFLQSxXQUFBO0FBZ0JBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ2xCRjtBRHFCQTs7RUFFRSxZQUFBO0FDbEJGO0FEb0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNqQkY7QURvQkE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDakJGO0FEb0JBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDakJGO0FEb0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ2pCRjtBRG9CQTtFQUNFLDhCQTVEYztFQTZEZCw4QkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHdCQS9EaUI7RUFnRWpCLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakJGO0FEbUJFO0VBQ0UsY0FBQTtFQUNBLGdCQWxFVztFQW1FWCx1QkF4RVU7RUF5RVYsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRDdDRTtFQXVEQTtJQVVJLGFBQUE7RUNoQko7QUFDRjtBRHhERTtFQTZEQTtJQWNJLFlBQUE7RUNmSjtBQUNGO0FEbUJBO0VBQ0UsU0FBQTtFQUNBLDhCQTNGYztFQTRGZCwyQkFBQTtFQUNBLFlBQUE7QUNoQkY7QURrQkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDaEJKO0FEb0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkF6R2M7QUN3RmhCO0FEbUJFO0VBQ0UseUJBQUE7QUNqQko7QURxQkE7RUFDRSxjQUFBO0FDbEJGO0FBOUZBO0VBQ0UsZ0JBQUE7QUFpR0Y7QUEvRkU7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFpR0o7QUEvRkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQWlHTjtBRHJHRTtFQ0NFO0lBS0ksc0JBQUE7RUFtR047QUFDRjtBQWpHTTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBbUdSO0FEaEhFO0VDU0k7O0lBT0ksYUFBQTtFQXFHUjtBQUNGO0FBbEdNO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBb0dSO0FBbEdNO0VBQ0UsYUFBQTtBQW9HUjtBQS9GRTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBaUdKO0FBL0ZJO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQWlHTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFZhcmlhYmxlcyAqL1xyXG4kY29sb3ItcHJpbWFyeTogbGlnaHRza3libHVlO1xyXG4kY29sb3ItbGlnaHQ6IHdoaXRlO1xyXG4kY29sb3ItYmFja2dyb3VuZDogc2lsdmVyO1xyXG5cclxuLyogTGF5b3V0ICovXHJcbiRsYXlvdXQtc21hbGw6IDcxOXB4OyAvLyBCcmVha3BvaW50LkhhbmRzZXQsIEJyZWFrcG9pbnQuVGFibGV0KFNtYWxsKVxyXG4kbGF5b3V0LWxhcmdlOiA5NTlweDtcclxuXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRsYXlvdXQtc21hbGx9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRsYXlvdXQtbGFyZ2V9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnBhZ2Utd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XHJcbn1cclxuXHJcbm1haW4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJhY2tncm91bmQ7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAzMnB4IDE2cHg7XHJcblxyXG4gID4gLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAkbGF5b3V0LWxhcmdlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0O1xyXG4gICAgcGFkZGluZzogNDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICBAaW5jbHVkZSB0YWJsZXQoKSB7XHJcbiAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbW9iaWxlKCkge1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlcjogMXAgc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcblxyXG4gICY6aG92ZXI6ZW5hYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogZGFya2VuKCRjb2xvci1wcmltYXJ5LCA1MCk7XHJcbn1cclxuIiwiLyogVmFyaWFibGVzICovXG4vKiBMYXlvdXQgKi9cbioge1xuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcbn1cblxubWFpbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xuICBmbGV4OiAxIDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMzJweCAxNnB4O1xufVxubWFpbi5jb250ZW50ID4gLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogOTU5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0OHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIG1haW4uY29udGVudCA+IC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcxOXB4KSB7XG4gIG1haW4uY29udGVudCA+IC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG59XG5cbi5mb290ZXIge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xuICBwYWRkaW5nOiA4cHg7XG59XG4uZm9vdGVyIC5jb3B5cmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IDFwIHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG59XG5idXR0b246aG92ZXI6ZW5hYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGUyZmM7XG59XG5cbmEge1xuICBjb2xvcjogIzA1NGY3ZDtcbn1cblxuLmdhbWVib2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG59XG4uZ2FtZWJvYXJkID4gLmdhbWUtZm9ybSB7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5nYW1lYm9hcmQgPiAuZ2FtZS1mb3JtIC5jb2x1bW4tZGl2aXNpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzE5cHgpIHtcbiAgLmdhbWVib2FyZCA+IC5nYW1lLWZvcm0gLmNvbHVtbi1kaXZpc2lvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmdhbWVib2FyZCA+IC5nYW1lLWZvcm0gLmNvbHVtbi1kaXZpc2lvbiA+IC5mb3JtLFxuLmdhbWVib2FyZCA+IC5nYW1lLWZvcm0gLmNvbHVtbi1kaXZpc2lvbiAuc2NvcmVib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMCA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzE5cHgpIHtcbiAgLmdhbWVib2FyZCA+IC5nYW1lLWZvcm0gLmNvbHVtbi1kaXZpc2lvbiA+IC5mb3JtLFxuLmdhbWVib2FyZCA+IC5nYW1lLWZvcm0gLmNvbHVtbi1kaXZpc2lvbiAuc2NvcmVib2FyZCB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxufVxuLmdhbWVib2FyZCA+IC5nYW1lLWZvcm0gLmNvbHVtbi1kaXZpc2lvbiA+IC5mb3JtIHtcbiAgZmxleDogMSAwIDI1JTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZ2FtZWJvYXJkID4gLmdhbWUtZm9ybSAuY29sdW1uLWRpdmlzaW9uID4gLnNjb3JlYm9hcmQge1xuICBmbGV4OiAxIDAgNzUlO1xufVxuLmdhbWVib2FyZC5nYW1lSW5Qcm9ncmVzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5nYW1lYm9hcmQuZ2FtZUluUHJvZ3Jlc3M6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICB3aWR0aDogMTAwdnc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-game",
                templateUrl: "./game.component.html",
                styleUrls: ["./game.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_sentence_service__WEBPACK_IMPORTED_MODULE_5__["SentenceService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { factoryHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_directives_factory_host_directive__WEBPACK_IMPORTED_MODULE_3__["FactoryHostDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 7, vars: 0, consts: [[1, "homepage-container"], ["routerLink", "form"], ["src", "assets/boring.jpg", "width", "100%", "alt", ""], ["routerLink", "game"], ["src", "assets/game.jpg", "width", "100%", "alt", ""]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.page-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  color: black;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 1.5;\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: lightskyblue;\n  border-bottom: 1px black solid;\n}\nmain.content[_ngcontent-%COMP%] {\n  background-color: silver;\n  flex: 1 0 auto;\n  overflow: hidden;\n  padding: 32px 16px;\n}\nmain.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 959px;\n  background-color: white;\n  padding: 48px;\n  box-shadow: 0 2px 2px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n@media (max-width: 959px) {\n  main.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n    padding: 32px;\n  }\n}\n@media (max-width: 719px) {\n  main.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: lightskyblue;\n  border-top: 1px black solid;\n  padding: 8px;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 32px;\n}\nbutton[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 8px 16px;\n  border: 1p solid black;\n  background-color: lightskyblue;\n}\nbutton[_ngcontent-%COMP%]:hover:enabled {\n  background-color: #b8e2fc;\n}\na[_ngcontent-%COMP%] {\n  color: #054f7d;\n}\n.homepage-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  display: flex;\n}\n@media (max-width: 719px) {\n  .homepage-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.homepage-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  flex: 1 0 50%;\n  position: relative;\n}\n.homepage-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 100ms ease-out;\n  padding: 5%;\n  opacity: 0.7;\n}\n.homepage-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  padding: 0;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUtBLFdBQUE7QUFnQkE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FDbEJGO0FEcUJBOztFQUVFLFlBQUE7QUNsQkY7QURvQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ2pCRjtBRG9CQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNqQkY7QURvQkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNqQkY7QURvQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDakJGO0FEb0JBO0VBQ0UsOEJBNURjO0VBNkRkLDhCQUFBO0FDakJGO0FEb0JBO0VBQ0Usd0JBL0RpQjtFQWdFakIsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNqQkY7QURtQkU7RUFDRSxjQUFBO0VBQ0EsZ0JBbEVXO0VBbUVYLHVCQXhFVTtFQXlFVixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDakJKO0FEN0NFO0VBdURBO0lBVUksYUFBQTtFQ2hCSjtBQUNGO0FEeERFO0VBNkRBO0lBY0ksWUFBQTtFQ2ZKO0FBQ0Y7QURtQkE7RUFDRSxTQUFBO0VBQ0EsOEJBM0ZjO0VBNEZkLDJCQUFBO0VBQ0EsWUFBQTtBQ2hCRjtBRGtCRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNoQko7QURvQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQXpHYztBQ3dGaEI7QURtQkU7RUFDRSx5QkFBQTtBQ2pCSjtBRHFCQTtFQUNFLGNBQUE7QUNsQkY7QUE3RkE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFnR0Y7QUQzRkU7RUNQRjtJQUtJLHNCQUFBO0VBaUdGO0FBQ0Y7QUFoR0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFrR0o7QUFoR0k7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBa0dOO0FBaEdNO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFrR1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFZhcmlhYmxlcyAqL1xyXG4kY29sb3ItcHJpbWFyeTogbGlnaHRza3libHVlO1xyXG4kY29sb3ItbGlnaHQ6IHdoaXRlO1xyXG4kY29sb3ItYmFja2dyb3VuZDogc2lsdmVyO1xyXG5cclxuLyogTGF5b3V0ICovXHJcbiRsYXlvdXQtc21hbGw6IDcxOXB4OyAvLyBCcmVha3BvaW50LkhhbmRzZXQsIEJyZWFrcG9pbnQuVGFibGV0KFNtYWxsKVxyXG4kbGF5b3V0LWxhcmdlOiA5NTlweDtcclxuXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRsYXlvdXQtc21hbGx9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRsYXlvdXQtbGFyZ2V9KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnBhZ2Utd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XHJcbn1cclxuXHJcbm1haW4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJhY2tncm91bmQ7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAzMnB4IDE2cHg7XHJcblxyXG4gID4gLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAkbGF5b3V0LWxhcmdlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0O1xyXG4gICAgcGFkZGluZzogNDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICBAaW5jbHVkZSB0YWJsZXQoKSB7XHJcbiAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbW9iaWxlKCkge1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlcjogMXAgc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcblxyXG4gICY6aG92ZXI6ZW5hYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogZGFya2VuKCRjb2xvci1wcmltYXJ5LCA1MCk7XHJcbn1cclxuIiwiLyogVmFyaWFibGVzICovXG4vKiBMYXlvdXQgKi9cbioge1xuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcbn1cblxubWFpbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xuICBmbGV4OiAxIDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMzJweCAxNnB4O1xufVxubWFpbi5jb250ZW50ID4gLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogOTU5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0OHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIG1haW4uY29udGVudCA+IC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcxOXB4KSB7XG4gIG1haW4uY29udGVudCA+IC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG59XG5cbi5mb290ZXIge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xuICBwYWRkaW5nOiA4cHg7XG59XG4uZm9vdGVyIC5jb3B5cmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IDFwIHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG59XG5idXR0b246aG92ZXI6ZW5hYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGUyZmM7XG59XG5cbmEge1xuICBjb2xvcjogIzA1NGY3ZDtcbn1cblxuLmhvbWVwYWdlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcxOXB4KSB7XG4gIC5ob21lcGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5ob21lcGFnZS1jb250YWluZXIgYSB7XG4gIGZsZXg6IDEgMCA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lcGFnZS1jb250YWluZXIgYSBpbWcge1xuICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlLW91dDtcbiAgcGFkZGluZzogNSU7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5ob21lcGFnZS1jb250YWluZXIgYSBpbWc6aG92ZXIge1xuICBwYWRkaW5nOiAwO1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/words-form/analysis-report-table/analysis-report-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/words-form/analysis-report-table/analysis-report-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AnalysisReportTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisReportTableComponent", function() { return AnalysisReportTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AnalysisReportTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.getWord());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.getFrequency());
} }
class AnalysisReportTableComponent {
    constructor() {
        this.list = [];
    }
    ngOnInit() { }
}
AnalysisReportTableComponent.ɵfac = function AnalysisReportTableComponent_Factory(t) { return new (t || AnalysisReportTableComponent)(); };
AnalysisReportTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalysisReportTableComponent, selectors: [["app-analysis-report-table"]], inputs: { list: "list" }, decls: 6, vars: 1, consts: [[1, "analysis-report-table"], [4, "ngFor", "ngForOf"]], template: function AnalysisReportTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnalysisReportTableComponent_tr_5_Template, 5, 2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.page-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  color: black;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 1.5;\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: lightskyblue;\n  border-bottom: 1px black solid;\n}\nmain.content[_ngcontent-%COMP%] {\n  background-color: silver;\n  flex: 1 0 auto;\n  overflow: hidden;\n  padding: 32px 16px;\n}\nmain.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 959px;\n  background-color: white;\n  padding: 48px;\n  box-shadow: 0 2px 2px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n}\n@media (max-width: 959px) {\n  main.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n    padding: 32px;\n  }\n}\n@media (max-width: 719px) {\n  main.content[_ngcontent-%COMP%]    > .content-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: lightskyblue;\n  border-top: 1px black solid;\n  padding: 8px;\n}\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 32px;\n}\nbutton[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 8px 16px;\n  border: 1p solid black;\n  background-color: lightskyblue;\n}\nbutton[_ngcontent-%COMP%]:hover:enabled {\n  background-color: #b8e2fc;\n}\na[_ngcontent-%COMP%] {\n  color: #054f7d;\n}\ntable.analysis-report-table[_ngcontent-%COMP%] {\n  max-width: 300px;\n  width: 100%;\n  border-collapse: collapse;\n}\ntable.analysis-report-table[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], table.analysis-report-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  width: 50%;\n  border: 1px solid black;\n  text-align: left;\n  padding: 8px;\n}\ntable.analysis-report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: lightskyblue;\n}\ntable.analysis-report-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: silver;\n}\ntable.analysis-report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvd29yZHMtZm9ybS9hbmFseXNpcy1yZXBvcnQtdGFibGUvYW5hbHlzaXMtcmVwb3J0LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFLQSxXQUFBO0FBZ0JBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ2xCRjtBRHFCQTs7RUFFRSxZQUFBO0FDbEJGO0FEb0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNqQkY7QURvQkE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FDakJGO0FEb0JBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDakJGO0FEb0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ2pCRjtBRG9CQTtFQUNFLDhCQTVEYztFQTZEZCw4QkFBQTtBQ2pCRjtBRG9CQTtFQUNFLHdCQS9EaUI7RUFnRWpCLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakJGO0FEbUJFO0VBQ0UsY0FBQTtFQUNBLGdCQWxFVztFQW1FWCx1QkF4RVU7RUF5RVYsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRDdDRTtFQXVEQTtJQVVJLGFBQUE7RUNoQko7QUFDRjtBRHhERTtFQTZEQTtJQWNJLFlBQUE7RUNmSjtBQUNGO0FEbUJBO0VBQ0UsU0FBQTtFQUNBLDhCQTNGYztFQTRGZCwyQkFBQTtFQUNBLFlBQUE7QUNoQkY7QURrQkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDaEJKO0FEb0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkF6R2M7QUN3RmhCO0FEbUJFO0VBQ0UseUJBQUE7QUNqQko7QURxQkE7RUFDRSxjQUFBO0FDbEJGO0FBOUZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFpR0Y7QUEvRkU7O0VBRUUsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaUdKO0FBOUZFO0VBQ0UsOEJEZlk7QUMrR2hCO0FBN0ZFO0VBQ0Usd0JEakJlO0FDZ0huQjtBQTVGRTtFQUNFLHVCQUFBO0FBOEZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd29yZHMtZm9ybS9hbmFseXNpcy1yZXBvcnQtdGFibGUvYW5hbHlzaXMtcmVwb3J0LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVmFyaWFibGVzICovXHJcbiRjb2xvci1wcmltYXJ5OiBsaWdodHNreWJsdWU7XHJcbiRjb2xvci1saWdodDogd2hpdGU7XHJcbiRjb2xvci1iYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcblxyXG4vKiBMYXlvdXQgKi9cclxuJGxheW91dC1zbWFsbDogNzE5cHg7IC8vIEJyZWFrcG9pbnQuSGFuZHNldCwgQnJlYWtwb2ludC5UYWJsZXQoU21hbGwpXHJcbiRsYXlvdXQtbGFyZ2U6IDk1OXB4O1xyXG5cclxuQG1peGluIG1vYmlsZSB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JGxheW91dC1zbWFsbH0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JGxheW91dC1sYXJnZX0pIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ucGFnZS13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcclxufVxyXG5cclxubWFpbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmFja2dyb3VuZDtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDMycHggMTZweDtcclxuXHJcbiAgPiAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6ICRsYXlvdXQtbGFyZ2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQ7XHJcbiAgICBwYWRkaW5nOiA0OHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIEBpbmNsdWRlIHRhYmxldCgpIHtcclxuICAgICAgcGFkZGluZzogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUoKSB7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxuICAuY29weXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyOiAxcCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuXHJcbiAgJjpob3ZlcjplbmFibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcclxuICB9XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDUwKTtcclxufVxyXG4iLCIvKiBWYXJpYWJsZXMgKi9cbi8qIExheW91dCAqL1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDA7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xufVxuXG5tYWluLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAzMnB4IDE2cHg7XG59XG5tYWluLmNvbnRlbnQgPiAuY29udGVudC1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA5NTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDQ4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgbWFpbi5jb250ZW50ID4gLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzE5cHgpIHtcbiAgbWFpbi5jb250ZW50ID4gLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogMXAgc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbn1cbmJ1dHRvbjpob3ZlcjplbmFibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZTJmYztcbn1cblxuYSB7XG4gIGNvbG9yOiAjMDU0ZjdkO1xufVxuXG50YWJsZS5hbmFseXNpcy1yZXBvcnQtdGFibGUge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbnRhYmxlLmFuYWx5c2lzLXJlcG9ydC10YWJsZSA+IHRoLFxudGFibGUuYW5hbHlzaXMtcmVwb3J0LXRhYmxlIHRyIHtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cbnRhYmxlLmFuYWx5c2lzLXJlcG9ydC10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbn1cbnRhYmxlLmFuYWx5c2lzLXJlcG9ydC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XG59XG50YWJsZS5hbmFseXNpcy1yZXBvcnQtdGFibGUgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalysisReportTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-analysis-report-table",
                templateUrl: "./analysis-report-table.component.html",
                styleUrls: ["./analysis-report-table.component.scss"],
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/words-form/words-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/words-form/words-form.component.ts ***!
  \**********************************************************/
/*! exports provided: WordsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsFormComponent", function() { return WordsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _counting_words_lib_counting_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../counting-words/lib/counting-words */ "./src/app/counting-words/lib/counting-words.ts");
/* harmony import */ var _services_sentence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sentence.service */ "./src/app/services/sentence.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _analysis_report_table_analysis_report_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analysis-report-table/analysis-report-table.component */ "./src/app/pages/words-form/analysis-report-table/analysis-report-table.component.ts");









function WordsFormComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WordsFormComponent_ng_container_28_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The highest frequency in the text is ", ctx_r2.highestFrequency, ". ");
} }
function WordsFormComponent_ng_container_28_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Furthermore, the word \"", ctx_r3.word.value, "\" is used ", ctx_r3.frequencyForWord, " times. ");
} }
function WordsFormComponent_ng_container_28_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" This table shows the ", ctx_r4.mostFrequentNWordAmount.value, " most frequent words in the text. ");
} }
function WordsFormComponent_ng_container_28_app_analysis_report_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-analysis-report-table", 11);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx_r5.mostFrequentNWords);
} }
function WordsFormComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Based on the supplied text and filled in fields these are the results:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WordsFormComponent_ng_container_28_p_6_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WordsFormComponent_ng_container_28_p_7_Template, 2, 2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WordsFormComponent_ng_container_28_p_9_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WordsFormComponent_ng_container_28_app_analysis_report_table_10_Template, 1, 1, "app-analysis-report-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.highestFrequency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.frequencyForWord);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mostFrequentNWords.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mostFrequentNWords.length);
} }
class WordsFormComponent {
    constructor(sentenceService) {
        this.sentenceService = sentenceService;
        this.wordAnalyzer = new _counting_words_lib_counting_words__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.reportUnorderedList = [];
        this.highestFrequency = 0;
        this.frequencyForWord = 0;
        this.mostFrequentNWords = [];
        this.textForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            textContent: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            word: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            mostFrequentNWordAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
        });
    }
    getUnorderedList() {
        if (this.textContent.status === "VALID") {
            this.reportUnorderedList = this.wordAnalyzer.getAllWordsFromText(this.textContent.value);
        }
    }
    getHighestFrequency() {
        if (this.textContent.status === "VALID") {
            this.highestFrequency = this.wordAnalyzer.calculateHighestFrequency(this.textContent.value);
        }
    }
    getFrequencyForWord() {
        if (this.textContent.status === "VALID") {
            this.frequencyForWord = this.wordAnalyzer.calculateFrequencyForWord(this.textContent.value, this.word.value);
        }
    }
    getMostFrequentNWords() {
        if (this.textContent.status === "VALID") {
            this.mostFrequentNWords = this.wordAnalyzer.calculateMostFrequentNWords(this.textContent.value, this.mostFrequentNWordAmount.value);
        }
    }
    onFormSubmit() {
        if (this.textContent.status === "VALID") {
            this.getUnorderedList();
            this.getHighestFrequency();
            this.getFrequencyForWord();
            this.getMostFrequentNWords();
        }
    }
    get textContent() {
        return this.textForm.controls.textContent;
    }
    get word() {
        return this.textForm.controls.word;
    }
    get mostFrequentNWordAmount() {
        return this.textForm.controls.mostFrequentNWordAmount;
    }
    hasError(control) {
        return control.invalid && (control.dirty || control.touched);
    }
    generateSentence() {
        const sentence = this.sentenceService.getRandomSentence();
        this.textContent.setValue(sentence);
    }
}
WordsFormComponent.ɵfac = function WordsFormComponent_Factory(t) { return new (t || WordsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sentence_service__WEBPACK_IMPORTED_MODULE_3__["SentenceService"])); };
WordsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WordsFormComponent, selectors: [["app-words-form"]], decls: 29, vars: 3, consts: [["routerLink", ""], [1, "word-form", 3, "formGroup", "ngSubmit"], [1, "form-section"], [1, "textContent"], ["formControlName", "textContent", "rows", "4", "cols", "50"], [4, "ngIf"], ["type", "button", 3, "click"], ["type", "text", "formControlName", "word", "placeholder", "lake"], ["type", "number", "formControlName", "mostFrequentNWordAmount", "placeholder", "5"], ["type", "submit"], [3, "list", 4, "ngIf"], [3, "list"]], template: function WordsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WordsFormComponent_Template_form_ngSubmit_2_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Word Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Here you can analyse a text by pasting the text inside the textbox. There are several options to choose to generate different analysis reports. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Type of paste the text you want to analyze here: * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WordsFormComponent_span_13_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WordsFormComponent_Template_button_click_14_listener() { return ctx.generateSentence(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Generate random sentence ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Fill in the word you want to receive the frequency of. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " How many of the most frequent words would you like to see? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Complete analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WordsFormComponent_ng_container_28_Template, 11, 4, "ng-container", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.textForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError(ctx.textContent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.highestFrequency);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _analysis_report_table_analysis_report_table_component__WEBPACK_IMPORTED_MODULE_6__["AnalysisReportTableComponent"]], styles: ["form.word-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nform.word-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  padding: 8px 0;\n  border-bottom: 1px solid black;\n}\nform.word-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0;\n}\nform.word-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd29yZHMtZm9ybS93b3Jkcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNOO0FBQU07RUFDRSxnQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd29yZHMtZm9ybS93b3Jkcy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybS53b3JkLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLmZvcm0tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICA+IGlucHV0IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-words-form",
                templateUrl: "./words-form.component.html",
                styleUrls: ["./words-form.component.scss"],
            }]
    }], function () { return [{ type: _services_sentence_service__WEBPACK_IMPORTED_MODULE_3__["SentenceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/routing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/routing.service.ts ***!
  \*********************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class RoutingService {
    constructor(router) {
        this.router = router;
        this.otherFunction();
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe((event) => {
            console.log(event);
        });
    }
    otherFunction() {
        console.log('routingService constructor');
    }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/sentence.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sentence.service.ts ***!
  \**********************************************/
/*! exports provided: SentenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceService", function() { return SentenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_sentence_dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sentence-dictionary */ "./src/app/utils/sentence-dictionary.ts");



class SentenceService {
    constructor() { }
    getRandomWord() {
        const getKeys = Object.keys(_utils_sentence_dictionary__WEBPACK_IMPORTED_MODULE_1__["EXAMPLE_SENTENCES_MAP"]).map(Number);
        const maxKey = Math.max(...getKeys);
        const randomNumber = Math.floor(Math.random() * (maxKey + 1));
        return _utils_sentence_dictionary__WEBPACK_IMPORTED_MODULE_1__["EXAMPLE_SENTENCES_MAP"].hasOwnProperty(randomNumber)
            ? _utils_sentence_dictionary__WEBPACK_IMPORTED_MODULE_1__["EXAMPLE_SENTENCES_MAP"][randomNumber]
            : "";
    }
    getRandomSentence(maxSentenceLength = 100) {
        let sentence = "";
        const sentenceLength = Math.floor(Math.random() * maxSentenceLength) + 1;
        for (let i = 0; i < sentenceLength; i++) {
            const word = this.getRandomWord();
            if (i === 0) {
                sentence += word.charAt(0).toUpperCase() + word.slice(1);
            }
            else if (i === sentenceLength - 1) {
                sentence += ".";
            }
            else if (i < sentenceLength) {
                sentence += " " + word;
            }
        }
        return sentence;
    }
}
SentenceService.ɵfac = function SentenceService_Factory(t) { return new (t || SentenceService)(); };
SentenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SentenceService, factory: SentenceService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SentenceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/utils/sentence-dictionary.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/sentence-dictionary.ts ***!
  \**********************************************/
/*! exports provided: EXAMPLE_SENTENCES_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLE_SENTENCES_MAP", function() { return EXAMPLE_SENTENCES_MAP; });
const EXAMPLE_SENTENCES_MAP = {
    0: "I",
    1: "do",
    2: "me",
    3: "lake",
    4: "lorem",
    5: "sentence",
    6: "random",
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\HHIEMSTR\Programming\counting-words\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map