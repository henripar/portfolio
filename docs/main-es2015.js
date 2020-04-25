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
/* harmony import */ var _projektit_projektit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projektit/projektit.component */ "./src/app/projektit/projektit.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lintukoto/lintukoto.component */ "./src/app/lintukoto/lintukoto.component.ts");
/* harmony import */ var _pictocker_pictocker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pictocker/pictocker.component */ "./src/app/pictocker/pictocker.component.ts");
/* harmony import */ var _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kurssit/kurssit.component */ "./src/app/kurssit/kurssit.component.ts");









const routes = [
    { path: "projektit", component: _projektit_projektit_component__WEBPACK_IMPORTED_MODULE_2__["ProjektitComponent"] },
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: "lintukoto", component: _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_4__["LintukotoComponent"] },
    { path: "", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: "picstocker", component: _pictocker_pictocker_component__WEBPACK_IMPORTED_MODULE_5__["PictockerComponent"] },
    { path: "kurssit", component: _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_6__["KurssitComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
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
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = "portfolio";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], *[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHksXG4qIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], null, null); })();


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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _projektit_projektit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projektit/projektit.component */ "./src/app/projektit/projektit.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lintukoto/lintukoto.component */ "./src/app/lintukoto/lintukoto.component.ts");
/* harmony import */ var _pictocker_pictocker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pictocker/pictocker.component */ "./src/app/pictocker/pictocker.component.ts");
/* harmony import */ var _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kurssit/kurssit.component */ "./src/app/kurssit/kurssit.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
        _projektit_projektit_component__WEBPACK_IMPORTED_MODULE_6__["ProjektitComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_8__["LintukotoComponent"],
        _pictocker_pictocker_component__WEBPACK_IMPORTED_MODULE_9__["PictockerComponent"],
        _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_10__["KurssitComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                    _projektit_projektit_component__WEBPACK_IMPORTED_MODULE_6__["ProjektitComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                    _lintukoto_lintukoto_component__WEBPACK_IMPORTED_MODULE_8__["LintukotoComponent"],
                    _pictocker_pictocker_component__WEBPACK_IMPORTED_MODULE_9__["PictockerComponent"],
                    _kurssit_kurssit_component__WEBPACK_IMPORTED_MODULE_10__["KurssitComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 0, consts: [[1, "main-container"], ["id", "social"], ["href", "https://github.com/henripar"], [1, "fab", "fa-github", "fa-2x"], ["href", "https://www.linkedin.com/in/henri-parviainen-b79044176/"], [1, "fab", "fa-linkedin-in", "fa-2x"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Henri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 27 vuotias tietojenk\u00E4sittelyn opiskelija Jyv\u00E4skyl\u00E4st\u00E4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Suuntautunut Web-sovelluskehitykseen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sosiaalinen media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-container[_ngcontent-%COMP%] {\n  background-color: black;\n  color: #00acc1;\n  height: 270px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100vw;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n}\n.main-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline;\n  padding-top: 4.5em;\n}\n#social[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  justify-content: center;\n  text-align: center;\n}\na[_ngcontent-%COMP%] {\n  display: inline-table;\n  width: 32px;\n  margin: 0.5em 1em;\n  color: whitesmoke;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #00acc1;\n}\n@media screen and (max-width: 650px) {\n  .main-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .main-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: block;\n    justify-content: center;\n    text-align: center;\n    padding-top: 1.5em;\n  }\n  #social[_ngcontent-%COMP%] {\n    padding-top: 1em;\n    margin-left: 0;\n    padding-bottom: 2em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogIzAwYWNjMTtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwdnc7XG59XG5oMSxcbmgyIHtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xufVxuLm1haW4tY29udGFpbmVyIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy10b3A6IDQuNWVtO1xufVxuXG4jc29jaWFsIHtcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmEge1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIHdpZHRoOiAzMnB4O1xuICBtYXJnaW46IDAuNWVtIDFlbTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICMwMGFjYzE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1haW4tY29udGFpbmVyIGRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxLjVlbTtcbiAgfVxuICAjc29jaWFsIHtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/kurssit/kurssit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/kurssit/kurssit.component.ts ***!
  \**********************************************/
/*! exports provided: KurssitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KurssitComponent", function() { return KurssitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/lintukoto"]; };
class KurssitComponent {
    constructor() { }
    ngOnInit() {
    }
}
KurssitComponent.ɵfac = function KurssitComponent_Factory(t) { return new (t || KurssitComponent)(); };
KurssitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KurssitComponent, selectors: [["app-kurssit"]], decls: 22, vars: 2, consts: [[1, "top-container"], ["href", "https://certificates.mooc.fi/validate/j6q9fb3i04"], [1, "image-container"], ["src", "../../assets/EOAIhero.png", "alt", "", 1, "project-img"], [1, "project-info"], ["src", "../../assets/helsinkiuni.png", "alt", "", 1, "tech-logo"], [1, "image-container", 3, "routerLink"], ["id", "lintukoto", "src", "../../assets/Angular-8.jpg", "alt", "", 1, "project-img"], ["id", "angu"], ["src", "../../assets/udemy.png", "alt", "", 1, "tech-logo"]], template: function KurssitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kurssit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Suoritettuja kursseja..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Elements of AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Helsingin yliopiston ja reaktorin j\u00E4rjest\u00E4m\u00E4 verkkokurssi teko\u00E4lyn perusteisiin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Angular 9 - The Complete quide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Maximillian Shwarzmullerin udemy kurssi angularin perusteisiin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["html body {\n  height: auto !important;\n  min-height: 100% !important;\n  background-image: linear-gradient(black, #263238) !important;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.project-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 212px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  display: inline-block;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  display: inline-table;\n  text-align: center;\n  width: 30%;\n  margin: 0 2em;\n  box-shadow: 0px 0px 222px 5px rgba(165, 165, 165, 0.4);\n  background-color: whitesmoke;\n  height: 100%;\n  border-radius: 29px;\n  cursor: pointer;\n}\n\n.image-container[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#2632383f, whitesmoke) !important;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  min-height: 100vh;\n}\n\n.project-info[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n  box-shadow: inset 0px 0px 10px black;\n  box-sizing: border-box;\n  border-bottom-right-radius: 27px;\n  border-bottom-left-radius: 27px;\n}\n\n.tech-logo[_ngcontent-%COMP%] {\n  height: 100px;\n  vertical-align: middle;\n  margin: 0.3em;\n}\n\n#lintukoto[_ngcontent-%COMP%] {\n  background-color: powderblue;\n}\n\n.project-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  text-overflow: ellipsis;\n}\n\n.project-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  display: block;\n  width: inherit;\n  white-space: nowrap;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n  margin: 0;\n  padding-top: 0.5em;\n  color: #00acc1;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-variant: all-small-caps;\n  margin-bottom: 1em;\n  color: #00acc1;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-variant-caps: normal;\n  margin-top: 0.7em;\n  margin-bottom: 0;\n  font-size: 24px;\n}\n\np[_ngcontent-%COMP%] {\n  max-width: 93%;\n  margin: 1em auto;\n}\n\na[_ngcontent-%COMP%] {\n  color: black;\n}\n\n@media screen and (max-width: 1180px) {\n  .image-container[_ngcontent-%COMP%] {\n    width: 65%;\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n}\n\n@media screen and (max-width: 492px) {\n  .image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 1em 0;\n  }\n  .project-info[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .project-img[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva3Vyc3NpdC9rdXJzc2l0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQiwwQkFBdUI7S0FBdkIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUVBQW1FO0FBQ3JFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2t1cnNzaXQva3Vyc3NpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiL2RlZXAvaHRtbCBib2R5IHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsYWNrLCAjMjYzMjM4KSAhaW1wb3J0YW50O1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucHJvamVjdC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMTJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmltYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDAgMmVtO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIyMnB4IDVweCByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5wcm9qZWN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzI2MzIzODNmLCB3aGl0ZXNtb2tlKSAhaW1wb3J0YW50O1xufVxuXG4udG9wLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5wcm9qZWN0LWluZm8ge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggYmxhY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyN3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyN3B4O1xufVxuXG4udGVjaC1sb2dvIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwLjNlbTtcbn1cbiNsaW50dWtvdG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwb3dkZXJibHVlO1xufVxuXG4ucHJvamVjdC1pbmZvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnByb2plY3QtaW5mbyBoMyB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbmgxIHtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgY29sb3I6ICMwMGFjYzE7XG59XG5oMiB7XG4gIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgY29sb3I6ICMwMGFjYzE7XG59XG5oMyB7XG4gIGZvbnQtdmFyaWFudC1jYXBzOiBub3JtYWw7XG4gIG1hcmdpbi10b3A6IDAuN2VtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5wIHtcbiAgbWF4LXdpZHRoOiA5MyU7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG5hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTgwcHgpIHtcbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTJweCkge1xuICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICB9XG4gIC5wcm9qZWN0LWluZm8ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAucHJvamVjdC1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KurssitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kurssit',
                templateUrl: './kurssit.component.html',
                styleUrls: ['./kurssit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/lintukoto/lintukoto.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lintukoto/lintukoto.component.ts ***!
  \**************************************************/
/*! exports provided: LintukotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LintukotoComponent", function() { return LintukotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



function LintukotoComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LintukotoComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LintukotoComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LintukotoComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LintukotoComponent {
    constructor() { }
    ngOnInit() { }
}
LintukotoComponent.ɵfac = function LintukotoComponent_Factory(t) { return new (t || LintukotoComponent)(); };
LintukotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LintukotoComponent, selectors: [["app-lintukoto"]], decls: 187, vars: 1, consts: [[1, "main-container"], ["href", "http://lintukoto.s3-website-us-east-1.amazonaws.com/"], [3, "interval"], ["ngbAutofocus", "", 2, "display", "none"], ["ngbSlide", ""], [1, "tech-images-holder"], ["src", "../../assets/angular.png", "alt", "", 1, "tech-logo"], ["src", "../../assets/nodejs-new-pantone-white.png", "alt", "", 1, "tech-logo"], ["id", "express"], ["src", "../../assets/MongoDark.png", "alt", "", 1, "tech-logo"], ["src", "../../assets/ngbootstrap.png", "alt", "ng-bootstrap logo", 1, "tech-logo2"], ["src", "../../assets/bootstrap-solid.svg", "alt", "bootstraplogo", 1, "tech-logo2"], ["src", "../../assets/mongoose2.png", "alt", "mongoose logo", 1, "tech-logo3"], ["src", "../../assets/Syncfusion_Logo_Image.png", "alt", "Syncfuison logo", 1, "tech-logo3", 2, "background-color", "whitesmoke"], [2, "width", "100%", "display", "block", "margin", "0 auto"], ["src", "../assets/angular.png", "alt", "Angular logo", 1, "otsikkologo"], [1, "angular"], [1, "osaamisdiv"], [1, "osaamislista"], [2, "font", "Roboto, sans-serif"], ["src", "../../assets/nodejs-new-pantone-white.png", "alt", "", 1, "otsikkologo"], ["src", "../../assets/MongoDark2.png", "alt", "MongoDB logo", 1, "otsikkologo2"], ["src", "../../assets/Git-Logo-White.png", "alt", "Git logo", 1, "otsikkologo"], ["width", "75%", "controls", "", 2, "margin-bottom", "1em"], ["src", "../../assets/sisaankirjautuminenaut.mp4", "type", "video/mp4"], ["width", "75%", "controls", ""], ["src", "../../assets/Muistiinpanonlisaysuokkauspoisto.mp4", "type", "video/mp4"], [2, "margin-bottom", "4em"], [1, "picsum-img-wrapper"], ["src", "../../assets/kirjautumissivushot.png", "alt", "Random first slide", 1, "big-cover-image"], ["src", "../../assets/kalenteri.png", "alt", "Random second slide", 1, "big-cover-image"], ["src", "../../assets/aktiiviset.png", "alt", "Random third slide", 1, "big-cover-image"], ["src", "../../assets/suoritetut.png", "alt", "Random third slide", 1, "big-cover-image"]], template: function LintukotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lintukoto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "http://lintukoto.s3-website-us-east-1.amazonaws.com/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "lol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LintukotoComponent_ng_template_8_Template, 4, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LintukotoComponent_ng_template_9_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LintukotoComponent_ng_template_10_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LintukotoComponent_ng_template_11_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Teknologiat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Yleist\u00E4 projektista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Lintukoto projektin tavoitteena oli luoda sovellus helpottamaan opiskelijoiden arkea tarjoamalla ty\u00F6kaluja ajanhallintaan. Fyysisten toteutettavien tavoitteiden lis\u00E4ksi projektin oppimistavoitteena oli oppia SCRUM k\u00E4yt\u00E4nteit\u00E4, sek\u00E4 projektin hallintaa ja ryhm\u00E4ty\u00F6taitoja. Lis\u00E4ksi omana oppimistavoitteenani oli syvent\u00E4\u00E4 osaamista Angular, MongoDB, NodeJS ja Express teknologioissa. Mielest\u00E4ni n\u00E4iss\u00E4 tavoitteissa onnistuttiin hyivn. T\u00E4m\u00E4 oli my\u00F6s meille kaikille ensimm\u00E4inen isompi web- projekti ja ensimm\u00E4inen projekti, jossa ty\u00F6skenteltiin mainituilla teknologioilla. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Oma rooli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Itse toimin projektissa p\u00E4\u00E4toimisena koodarina. Olin mm. mukana tekem\u00E4ss\u00E4 p\u00E4\u00E4t\u00F6ksi\u00E4 teknologia valintojen suhteen ja vastasin koko backendin toteutuksesta. Lis\u00E4ksi tein my\u00F6s frontendin niihin toimimintoihin, jotka vaativat yhteytt\u00E4 tietokantaan. Tein my\u00F6s projektin ensimm\u00E4iset pari viikkoa pelkk\u00E4\u00E4 front endi\u00E4. Seuraavassa listassa on muutamia toiminnallisuuksia, joita koodasin projektiin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sis\u00E4\u00E4nkirjautuminen, rekister\u00F6ityminen ja autenktikaatio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Kalenterimerkint\u00F6jen tallentuminen kantaan ja hakeminen kannsta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Muistiinpanojen tallentaminen, muokkaus, ja poisto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Teht\u00E4vien tallentaminen ja hakeminen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Tietokantarakenteen suunnittelu ja toteutus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sovelluksen julkaisu (AWS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Mit\u00E4 opin?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Ty\u00F6skentely produktiossa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Kuten aiemmin totesin, t\u00E4m\u00E4 on ensimm\u00E4inen produktio, jossa olen ty\u00F6skennellyt. Sain arvokasta kokemusta produktiossa ty\u00F6skentelyst\u00E4, jossa kaikki tiimin j\u00E4senet tekev\u00E4t yhdess\u00E4 t\u00F6it\u00E4 yhteisen p\u00E4\u00E4m\u00E4\u00E4r\u00E4n eteen. Opin tekemeen t\u00F6it\u00E4 yhdess\u00E4 erilaisten osaajien kanssa. Jokaisella tiimin j\u00E4senell\u00E4 oli omat vastuualueensa ja yhteisty\u00F6 oli toimivaa. My\u00F6s erilaiset SCRUM seremoniat tulivat tutuiksi ja ne todettiin hy\u00F6dyllisksi. K\u00E4ytt\u00E4mi\u00E4mme SCRUM k\u00E4yt\u00E4nteit\u00E4 olivat p\u00E4ivitt\u00E4iset daily scrumit, viikkopalaverit, planning dayt ja retrospektiivit. Mielest\u00E4ni scrum k\u00E4yt\u00E4nteist\u00E4 oli erityisesti hy\u00F6ty\u00E4 tavoitteiden asettamisessa, niiden seurannassa ja tavoitteista kiinni pit\u00E4misess\u00E4, sek\u00E4 virheista oppimisessa. Tavoitteiden ja teht\u00E4vien seurantaan k\u00E4ytimme my\u00F6s GitHubin ZenHub ty\u00F6kalua, jonka avulla pystyimme seuraamaan mit\u00E4 kukin tekee, ja miten projekti etenee. Koin ZenHubin k\u00E4yt\u00F6n vaivattomaksi ja eritt\u00E4in t\u00E4rke\u00E4ksi osaksi profuktiossa ty\u00F6skentely\u00E4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Et\u00E4ty\u00F6skentely");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Kesken projektin siirryimme maaliskuussa koronavirustilanteen vuoksi pysyv\u00E4sti et\u00E4t\u00F6ihin. Koin my\u00F6s t\u00E4m\u00E4n arvokkaana kokemuksena ja totesin my\u00F6s et\u00E4ty\u00F6n sopivan minulle eritt\u00E4in hyvin ja huomasin olevani et\u00E4t\u00F6iss\u00E4 jopa tehokkaampi kuin toimistolla, jossa jatkuvasti ymp\u00E4rill\u00E4 tapahtuva h\u00E4lin\u00E4 s\u00F6i osin keskittymist\u00E4ni. Et\u00E4t\u00F6iss\u00E4 siirsimme palaverit k\u00E4yt\u00E4v\u00E4ksi Microsoftin Teams palvelun videopuheluiden v\u00E4lityksell\u00E4. T\u00E4m\u00E4 osoittautui toimivaksi ratkaisuksi. Muita yhteydenpito keinoja olivat et\u00E4ty\u00F6aikana perinteiset puhelut, WhatsApp, s\u00E4hk\u00F6posti, GitHub, sek\u00E4 perustamamme Teams ryhm\u00E4, jossa oli mahdollista vapaasti keskustella. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Et\u00E4ty\u00F6skentelyss\u00E4 oli toki my\u00F6s omat haasteensa. Fyysisen l\u00E4sn\u00E4olon puute vaikutti tiimihenkeen ja s\u00F6i yhteenkuuluvuuden tunnetta. Lis\u00E4ksi osa tiimin j\u00E4senist\u00E4 koki et\u00E4t\u00F6iden tekemisess\u00E4 muita haasteita. Kaikki kuitenkin jaksoivat tehd\u00E4 ahkerasti t\u00F6it\u00E4 my\u00F6s et\u00E4n\u00E4 ja projektia saatiin hyvin eteenp\u00E4in. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Itseohjautuva oppiminen ja ongelmien ratkaiseminen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Kun projektiin l\u00E4hdettiin, olimme kaikki noviiseja web sovelluskehityksess\u00E4, ja osasimme vain perusteet angularista. Kokemus nodejs, express ja mongodb teknologioissa oli hyvin rajallista eli opittavaa oli paljon. T\u00E4m\u00E4 tarjosi mahdollissuden kehitt\u00E4\u00E4 omaa osaamistani ja oppia uutta. Osaamista tuli kehitetty\u00E4 aina sit\u00E4 mukaa kun projekti vaati jonkin uuden asian osaamista. Projektin alkuvaiheessa syv\u00E4nsin osaamista Angularissa, sek\u00E4 opettelin projektimme kalenteriin tarvittavaa SyncFusion Angular Scheduler komponentin integrointia ja k\u00E4ytt\u00F6\u00E4 Syncfusionin dokumentaatiosta. Sen j\u00E4lkeen otin itselle uutena asiana haltuun Express frameworkin ja MongoDB:n. Sen j\u00E4lkeen opettelin tietokannan hallintaan k\u00E4ytett\u00E4v\u00E4\u00E4 mongoose kirjastoa. Se on ns. ODM eli Object Data Modelling kirjasto, joka helpottaa MongoDB tietokannan hallintaa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Kehtysty\u00F6n aikana on tullut vastaan my\u00F6s monia ongelmia. Koen, ett\u00E4 oma ongelman ratkaisukyky on kehittynyt kev\u00E4\u00E4n aikana valtavasti, kun kokemusta on kertynyt lis\u00E4\u00E4. Onglemanratkaisuprosessi, jota olen k\u00E4ytt\u00E4nyt on muotoontunut jokseenkin seuraavanlaiseksi: 1. Yrit\u00E4 keksi\u00E4 ongelmaan itse ratkaisun miettim\u00E4ll\u00E4 erilaisia ratkaisuvaihtoehtoja, jotka voisivat ratkaista ongelman. 2. Jos en keksi mit\u00E4\u00E4n toimivaa ratkaisua itse, yrit\u00E4n googlata ongelmaan ratkaisun. 3. Jos ongelma on niin harvinaislaatuinen, ett\u00E4 googlesta ei l\u00F6ydy mit\u00E4\u00E4n ratkaisua, jota ongelmaan voi soveltaa, tarkistan l\u00F6tyyk\u00F6 onglemaan liittyv\u00E4n teknologian dokumentaatiosta apua. 4. Jos mik\u00E4\u00E4n yll\u00E4mainituista ei tuota tulosta, kysyn ongelmaan ratkaisua Stackoverflow foorumilta. 5. Viimeisen\u00E4 keinona voin kysy\u00E4 apua kurssin opettajilta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " T\u00E4m\u00E4 ongelmanratkaisumenetelm\u00E4 on todettu varsin tehokkaaksi ja kun kokemusta on tullut lis\u00E4\u00E4 ongelemat ovat ratkenneet nopeammin, ja entist\u00E4 useammin jo ensimm\u00E4isess\u00E4 vaiheessa. Yksi hyv\u00E4 keino ongelmanratkaisuun on my\u00F6s ollut ottaa pieni aikalis\u00E4 ja tehd\u00E4 hetken aikaa jotain aivan muuta. Kun palaan ongelman pariin huomaan, ett\u00E4 aivot ovat prosessoineet sit\u00E4 taustalla ja ratkaisu l\u00F6ytyykin hetkess\u00E4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Tuutorointi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Pidin my\u00F6s projektin aikana er\u00E4\u00E4lle ryhm\u00E4n j\u00E4senelle yksityisesti koodaus tuutorointia/opetusta. Koin sen positiivisena ja palkitsevana kokemuksena. Oli mukava huomata, ett\u00E4 voi olla jollekin avuksi ja samalla sai itse syvent\u00E4\u00E4 ja testata omaa osaamista. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Teknologiat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Syvennetty osaaminen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Routing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Servicet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Direktiivit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Angular Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Komponenttien v\u00E4linen kommunikointi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "HTML, CSS, Typescript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Uusi hankittu osaaminen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "HTTP pyynn\u00F6t");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Autentikaatio ja authGuard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Lomakkeiden validointi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Environment variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " express && ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Syvennetty osaaminen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Express perusteet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "MVC arkkitehtuuri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Hankittu uusi osaaminen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Autentikaatio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "JWT & bcrypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "CRUD toiminnot & tietokannan kanssa kommunikointi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Hankittu uusi osaaminen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "MongoDB perusteet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "mongoose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "MongoDB Atlas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Dokumenttien lis\u00E4ys, muokkaus ja poisto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Hankittu uusi osaaminen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Githubin k\u00E4ytt\u00F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "git terminaalikomennot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Zenhubin k\u00E4ytt\u00F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Mit\u00E4 parannettavaa j\u00E4i?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Tiedostojen rakenne ja nime\u00E4miset olisi voinut tehd\u00E4 selke\u00E4mm\u00E4ksi. Esim. CSS tiedostoissa ei t\u00E4ll\u00E4 hetkell\u00E4 ole juurikaan loogista rakennetta. Niihin asiat olisi voinut j\u00E4rjestell\u00E4 selke\u00E4mmin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Tarkempi katsaus tekemiini toiminnallisuuksiin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Autenktikaatio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "video", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "source", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Your browser does not support HTML5 video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Muistiinpanojen lis\u00E4ys, muokkaus & poisto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "video", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "source", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Your browser does not support HTML5 video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Reflektio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Voin todeta, ett\u00E4 projekti on ollut todella opettavainen kokemus. Olen saanut paljon lis\u00E4\u00E4 tietoa web-kehitys ty\u00F6st\u00E4 ja itsevarmuus ongelmien ratkaisemiseen on kasvanut. Koen, ett\u00E4 t\u00E4m\u00E4n projektin j\u00E4lkeen olen valmis ty\u00F6skentelem\u00E4\u00E4n koodarina web- tai mobiilisovellus- projekteissa. Se on suuri harppaus siihen tilanteeseen, jossa olin ennen kurssia, sill\u00E4 k\u00E4yt\u00E4nn\u00F6ss\u00E4 silloin osasin ainoastaan HTML, CSS ja javascriptin perusteet, sek\u00E4 angularin perusteet. Koen my\u00F6s, ett\u00E4 valmius oppia uusia teknologioita tulevaisuudessa on kehittynyt kurssin my\u00F6t\u00E4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Angularin perusteet ovat my\u00F6s vahvistuneet ja ne alkavat jo tulla selk\u00E4rangasta ilman, ett\u00E4 googlesta t\u00E4ytyy aina tarkistaa, ett\u00E4 miten jokin asia tehtiink\u00E4\u00E4n. My\u00F6s Express perusteet onnistuu hyvin ilman internetin apuja. Lis\u00E4ksi kehityst\u00E4 tapahtui tiedonhaussa ongelmatilanteissa. Projektin my\u00F6t\u00E4 on tullut parempi k\u00E4sitys siit\u00E4, mist\u00E4 kuhunkin ongelmaan kannattaa l\u00E4hte\u00E4 hakemaan apua. Joissain tapauksissa j\u00E4rkevint\u00E4 on tarkastella kyseisen teknologian dokumentaatiota, joskus taas on parempi etsi\u00E4 vastausta googlesta, Stackoverflowsta, Discord ryhmist\u00E4 jne. Suurin muutos t\u00E4ss\u00E4 asiassa verrattuna aiempaan on ymm\u00E4rrys siit\u00E4, ett\u00E4 Google ei v\u00E4ltt\u00E4m\u00E4tt\u00E4 aina ole paras paikka l\u00F6yt\u00E4\u00E4 ratkaisua ongelmaan (vaikka usein n\u00E4in onkin). T\u00E4m\u00E4 ymm\u00E4rrys auttaa nopeuttamaan eteenp\u00E4in p\u00E4\u00E4sy\u00E4 ongelmatilanteissa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Koin projekti luonteisen oppimistyylin tehokkaana ja palkitsevana tapana oppia uusia asioita. Joissain tapauksissa oppiminen saattoi j\u00E4\u00E4d\u00E4 pintapuoliseksi, mutta projektia tekem\u00E4ll\u00E4 sai kuitenkin hyvin kokonaiskuvaa siit\u00E4, mink\u00E4laisia asioita vaaditaan, jotta projekti saadaan maaliin asti. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Loppusanat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Kaiken kaikkiaan projekti oli hieno ja opettavainen kokemus ja tulen varmasti jatkossakin tekem\u00E4\u00E4n erilaisia web projekteja. T\u00E4m\u00E4 oli hyv\u00E4 ensimm\u00E4inen kosketus projektity\u00F6skentelyn pariin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Ty\u00F6tunteja kertyi itselle 4 kuukauden aikana yhteens\u00E4 391. (Tilanne 24.4.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 20000);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: ["html body {\n  height: auto !important;\n  min-height: 100% !important;\n  background-image: linear-gradient(black, #263238) !important;\n}\n  .carousel-control-next-icon {\n  color: blue !important;\n}\nngb-carousel[_ngcontent-%COMP%] {\n  margin-top: 0.8em;\n}\na[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #00acc1;\n  text-decoration: none;\n}\n  .carousel-indicators li {\n  background-color: black;\n}\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  color: #00acc1;\n}\nh2[_ngcontent-%COMP%] {\n  margin-top: 1.6em;\n  margin-bottom: 0.2em;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.main-container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 85%;\n  text-align: center;\n}\n.big-cover-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.picsum-img-wrapper[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n}\n[_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\n.tech-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 100px;\n  vertical-align: middle;\n  margin: 0 0.5em;\n}\n.tech-logo2[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 40px;\n  vertical-align: middle;\n  margin: 0 0.5em;\n}\n.tech-logo3[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 120px;\n  vertical-align: middle;\n  margin: 0 0.5em;\n}\n.tech-images-holder[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 97%;\n  margin: 0 auto;\n}\n#express[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  font-style: thin 100;\n  font-size: xx-large;\n  display: inline-block;\n  margin: 0 0.4em;\n}\nul[_ngcontent-%COMP%] {\n  display: block;\n  width: 60%;\n  text-align: left;\n  margin: 0 auto;\n}\nli[_ngcontent-%COMP%] {\n  list-style: disc;\n  color: #00acc1;\n  margin: 0 auto;\n  width: 100%;\n}\n.otsikkologo[_ngcontent-%COMP%] {\n  height: 50px;\n  padding-left: 0.3em;\n}\n.otsikkologo2[_ngcontent-%COMP%] {\n  height: 80px;\n}\n.angular[_ngcontent-%COMP%] {\n  width: 75%;\n  text-align: center;\n  margin: 1em auto;\n  display: flex;\n  text-align: center;\n}\n.osaamislista[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  padding: 0;\n}\n.osaamisdiv[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 2em;\n  margin: 1em auto;\n  border-radius: 25px;\n  box-shadow: inset 0 0 30px grey;\n}\n.osaamislista[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #1d7382; \n}\n[_ngcontent-%COMP%]::selection {\n  background: #1d7382; \n}\n[_ngcontent-%COMP%]::-moz-selection {\n  background: #1d7382; \n}\n@media (max-width: 845px) {\n  ul[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media (max-width: 415px) {\n  .picsum-img-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .big-cover-image[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .angular[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .osaamisdiv[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 88%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGludHVrb3RvL2xpbnR1a290by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw0REFBNEQ7QUFDOUQ7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBOztFQUVFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7QUFDQTs7OztFQUlFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsbUJBQW1CLEVBQUUsMEJBQTBCO0FBQ2pEO0FBRkE7RUFDRSxtQkFBbUIsRUFBRSwwQkFBMEI7QUFDakQ7QUFDQTtFQUNFLG1CQUFtQixFQUFFLG1CQUFtQjtBQUMxQztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGludHVrb3RvL2xpbnR1a290by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiL2RlZXAvIGh0bWwgYm9keSB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibGFjaywgIzI2MzIzOCkgIWltcG9ydGFudDtcbn1cbi9kZWVwLyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICBtYXJnaW4tdG9wOiAwLjhlbTtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMDBhY2MxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5oMSxcbnAge1xuICBjb2xvcjogIzAwYWNjMTtcbn1cbmgyIHtcbiAgbWFyZ2luLXRvcDogMS42ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuXG5oMSxcbmgyIHtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xufVxuaDIsXG5oMyxcbmg0LFxuaDUge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJpZy1jb3Zlci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGljc3VtLWltZy13cmFwcGVyIHtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbn1cblxuLnRlY2gtbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCAwLjVlbTtcbn1cblxuLnRlY2gtbG9nbzIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCAwLjVlbTtcbn1cbi50ZWNoLWxvZ28zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDAuNWVtO1xufVxuXG4udGVjaC1pbWFnZXMtaG9sZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDk3JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4jZXhwcmVzcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IHRoaW4gMTAwO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwLjRlbTtcbn1cbnVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxubGkge1xuICBsaXN0LXN0eWxlOiBkaXNjO1xuICBjb2xvcjogIzAwYWNjMTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuLm90c2lra29sb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuM2VtO1xufVxuXG4ub3RzaWtrb2xvZ28yIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uYW5ndWxhciB7XG4gIHdpZHRoOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3NhYW1pc2xpc3RhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbi5vc2FhbWlzZGl2IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAyZW07XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzMHB4IGdyZXk7XG59XG5cbi5vc2FhbWlzbGlzdGEgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzFkNzM4MjsgLyogV2ViS2l0L0JsaW5rIFNlbGFpbWV0ICovXG59XG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzFkNzM4MjsgLyogR2Vja28gU2VsYWltZXQgKi9cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg0NXB4KSB7XG4gIHVsIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJpZy1jb3Zlci1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5hbmd1bGFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5vc2FhbWlzZGl2IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4OCU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LintukotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-lintukoto",
                templateUrl: "./lintukoto.component.html",
                styleUrls: ["./lintukoto.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/profile"]; };
const _c1 = function () { return ["/projektit"]; };
const _c2 = function () { return ["/kurssit"]; };
class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 11, vars: 6, consts: [[1, "topnav"], [1, "nav-container"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "border-btm"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MIN\u00C4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " PORTFOLIO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " KURSSIT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["html[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n body {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.router-link-active[_ngcontent-%COMP%]   .border-btm[_ngcontent-%COMP%] {\n  border-bottom: 3px #00bcd4 solid !important;\n  transition: ease 0.5s;\n  border-width: 100%;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto;\n  width: 33%;\n  align-self: center;\n  justify-content: center;\n  position: relative;\n  display: inline-flex;\n}\n\n.topnav[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background-color: black;\n  margin: 0;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.border-btm[_ngcontent-%COMP%] {\n  border-bottom: 0px;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0;\n  float: left;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 15px;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .border-btm[_ngcontent-%COMP%] {\n  border-bottom: 3px #00bcd4 solid !important;\n  transition: ease 0.5s;\n  border-width: 100%;\n}\n\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBtYXJnaW46IDA7XG59XG5cbi9kZWVwL2JvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ucm91dGVyLWxpbmstYWN0aXZlIC5ib3JkZXItYnRtIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4ICMwMGJjZDQgc29saWQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xuICBib3JkZXItd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDMzJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnRvcG5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib3JkZXItYnRtIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xufVxuXG4udG9wbmF2IGEge1xuICBtYXJnaW46IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI2YyZjJmMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udG9wbmF2IGE6aG92ZXIgLmJvcmRlci1idG0ge1xuICBib3JkZXItYm90dG9tOiAzcHggIzAwYmNkNCBzb2xpZCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBlYXNlIDAuNXM7XG4gIGJvcmRlci13aWR0aDogMTAwJTtcbn1cblxuLnRvcG5hdiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pictocker/pictocker.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pictocker/pictocker.component.ts ***!
  \**************************************************/
/*! exports provided: PictockerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictockerComponent", function() { return PictockerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PictockerComponent {
    constructor() { }
    ngOnInit() {
    }
}
PictockerComponent.ɵfac = function PictockerComponent_Factory(t) { return new (t || PictockerComponent)(); };
PictockerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictockerComponent, selectors: [["app-pictocker"]], decls: 9, vars: 0, consts: [[1, "main-container"], ["id", "picstocker-logo", "src", "../../assets/logo3.png", "alt", ""], ["id", "linkki-div"], ["href", "http://www.picstocker.com", 1, "picstocker-link"], ["src", "../../assets/uusiPics.mp4", "width", "75%", "controls", ""], [1, "project-info"]], template: function PictockerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "www.picstocker.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Projekti on viel\u00E4 kesken..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html body {\n  height: auto !important;\n  min-height: 100% !important;\n  background-image: linear-gradient(black, #263238) !important;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 85%;\n  text-align: center;\n  min-height: 100vh;\n}\n\n.big-cover-image[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.picstocker-link[_ngcontent-%COMP%] {\n  display: inline;\n  text-align: center;\n}\n\n#linkki-div[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 200px;\n  margin-bottom: 1em;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  color: #00acc1;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 1.6em;\n  margin-bottom: 0.2em;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n}\n\na[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #00acc1;\n  text-decoration: none;\n}\n\n#picstocker-logo[_ngcontent-%COMP%] {\n  max-width: 240px;\n}\n\n@media (max-width: 415px) {\n  video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-container[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljdG9ja2VyL3BpY3RvY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGljdG9ja2VyL3BpY3RvY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiL2RlZXAvIGh0bWwgYm9keSB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChibGFjaywgIzI2MzIzOCkgIWltcG9ydGFudDtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmJpZy1jb3Zlci1pbWFnZSB7XG4gIHdpZHRoOiA4MCU7XG59XG4ucGljc3RvY2tlci1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbGlua2tpLWRpdiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuaDEsXG5oMixcbmgzLFxucCB7XG4gIGNvbG9yOiAjMDBhY2MxO1xufVxuaDIge1xuICBtYXJnaW4tdG9wOiAxLjZlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG59XG5cbmgxLFxuaDIge1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG59XG5hIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICMwMGFjYzE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI3BpY3N0b2NrZXItbG9nbyB7XG4gIG1heC13aWR0aDogMjQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PictockerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pictocker',
                templateUrl: './pictocker.component.html',
                styleUrls: ['./pictocker.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 29, vars: 0, consts: [[1, "main-container"], ["src", "../../assets/22.jpg", "alt", "", 1, "circle", "profilepic"], [2, "text-align", "center", "padding", "1em"], [1, "fas", "fa-graduation-cap", "fa-2x"], [1, "para"], [1, "fas", "fa-map-marker-alt", "fa-2x"], [1, "profile-row"], [1, "fas", "fa-laptop-code", "fa-2x"], [1, "fas", "fa-at", "fa-2x"], ["href", "https://github.com/henripar"], [1, "fab", "fa-github", "fa-2x", "social-icon"], ["href", "https://www.linkedin.com/in/henri-parviainen-b79044176"], [1, "fab", "fa-linkedin-in", "fa-2x", "small-gap", "social-icon"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Henri Parviainen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "< Web Developer >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " JAMK Tietojenk\u00E4sittely 2.vuoden opiskelija ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Jyv\u00E4skyl\u00E4, Suomi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " HTML // CSS // Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Angular // Express // Nodejs // MongoDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " henri.parviainen@icloud.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html body {\n  height: auto;\n  min-height: 100%;\n  background-image: linear-gradient(black, #263238);\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n  color: #00acc1;\n}\nh1[_ngcontent-%COMP%] {\n  padding-top: 0.6em;\n}\ndiv[_ngcontent-%COMP%] {\n  color: #00acc1;\n}\nimg[_ngcontent-%COMP%] {\n  width: 230px;\n}\n.circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.main-container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 2em;\n  min-height: 100vh;\n}\ni[_ngcontent-%COMP%] {\n  color: #00acc1;\n}\n.para[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: auto;\n  padding: 1em;\n  vertical-align: middle;\n  bottom: 0.5em;\n}\n.small-gap[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n}\n.social-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.profile-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 390px) {\n  .main-container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .fas[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.profilepic[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlEQUFpRDtBQUNuRDtBQUNBOzs7RUFHRSx3QkFBd0I7RUFDeEIsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi9kZWVwL2h0bWwgYm9keSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsYWNrLCAjMjYzMjM4KTtcbn1cbmgxLFxuaDIsXG5oMyB7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcbiAgY29sb3I6ICMwMGFjYzE7XG59XG5oMSB7XG4gIHBhZGRpbmctdG9wOiAwLjZlbTtcbn1cbmRpdiB7XG4gIGNvbG9yOiAjMDBhY2MxO1xufVxuaW1nIHtcbiAgd2lkdGg6IDIzMHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmkge1xuICBjb2xvcjogIzAwYWNjMTtcbn1cbi5wYXJhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3R0b206IDAuNWVtO1xufVxuXG4uc21hbGwtZ2FwIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG4uc29jaWFsLWljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5zb2NpYWwtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9maWxlLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5mYXMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4ucHJvZmlsZXBpYyB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/projektit/projektit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/projektit/projektit.component.ts ***!
  \**************************************************/
/*! exports provided: ProjektitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjektitComponent", function() { return ProjektitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/picstocker"]; };
const _c1 = function () { return ["/lintukoto"]; };
class ProjektitComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjektitComponent.ɵfac = function ProjektitComponent_Factory(t) { return new (t || ProjektitComponent)(); };
ProjektitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjektitComponent, selectors: [["app-projektit"]], decls: 27, vars: 4, consts: [[1, "top-container"], [1, "image-container", 3, "routerLink"], ["src", "../../assets/logo.png", "alt", "", 1, "project-img"], [1, "project-info"], ["src", "../../assets/angular.png", "alt", "", 1, "tech-logo"], ["src", "../../assets/nodejs.png", "alt", "", 1, "tech-logo"], ["src", "../../assets/express.png", "alt", "", 1, "tech-logo"], ["src", "../../assets/mongodb.png", "alt", "", 1, "tech-logo"], ["id", "lintukoto", "src", "../../assets/LOGO_ilman_taustaa.png", "alt", "", 1, "project-img"]], template: function ProjektitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projektit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projekteja, joissa olen ollut mukana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Picstocker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Web sovellus, jossa k\u00E4ytt\u00E4j\u00E4t voivat lis\u00E4t\u00E4 kuvia, joita muut voivat ladata. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lintukoto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Opiskelijoiden ajanhallintaa ja el\u00E4m\u00E4nhallintaa tukeva web-sovellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["html body {\n  height: auto !important;\n  min-height: 100% !important;\n  background-image: linear-gradient(black, #263238) !important;\n}\n\n[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.project-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 212px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  box-shadow: inset 0px 0px 25px black;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  display: inline-table;\n  text-align: center;\n  width: 30%;\n  margin: 0 2em;\n  box-shadow: 0px 0px 222px 5px rgba(165, 165, 165, 0.4);\n  background-color: whitesmoke;\n  height: 100%;\n  border-radius: 29px;\n  cursor: pointer;\n}\n\n.image-container[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%] {\n  background-image: linear-gradient(#2632383f, whitesmoke) !important;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  min-height: 100vh;\n}\n\n.project-info[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n  box-shadow: inset 0px 0px 10px black;\n  box-sizing: border-box;\n  border-bottom-right-radius: 27px;\n  border-bottom-left-radius: 27px;\n}\n\n.tech-logo[_ngcontent-%COMP%] {\n  width: 70px;\n  vertical-align: middle;\n  margin: 0.3em;\n}\n\n#lintukoto[_ngcontent-%COMP%] {\n  background-color: powderblue;\n}\n\n.project-info[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n  margin: 0;\n  padding-top: 0.5em;\n  color: #00acc1;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-variant: all-small-caps;\n  margin-bottom: 1em;\n  color: #00acc1;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-variant-caps: normal;\n  margin-top: 0.7em;\n  margin-bottom: 0;\n}\n\np[_ngcontent-%COMP%] {\n  max-width: 93%;\n  margin: 1em auto;\n}\n\n@media screen and (max-width: 1180px) {\n  .image-container[_ngcontent-%COMP%] {\n    width: 65%;\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n}\n\n@media screen and (max-width: 492px) {\n  .image-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 1em 0;\n  }\n  .project-info[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .project-img[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  h2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVrdGl0L3Byb2pla3RpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsMEJBQXVCO0tBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixzREFBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWt0aXQvcHJvamVrdGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvZGVlcC9odG1sIGJvZHkge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmxhY2ssICMyNjMyMzgpICFpbXBvcnRhbnQ7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxMnB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDI1cHggYmxhY2s7XG59XG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMCAyZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjIycHggNXB4IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC40KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLnByb2plY3QtaW5mbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMjYzMjM4M2YsIHdoaXRlc21va2UpICFpbXBvcnRhbnQ7XG59XG5cbi50b3AtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLnByb2plY3QtaW5mbyB7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCBibGFjaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI3cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI3cHg7XG59XG5cbi50ZWNoLWxvZ28ge1xuICB3aWR0aDogNzBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwLjNlbTtcbn1cbiNsaW50dWtvdG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwb3dkZXJibHVlO1xufVxuXG4ucHJvamVjdC1pbmZvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgY29sb3I6ICMwMGFjYzE7XG59XG5oMiB7XG4gIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgY29sb3I6ICMwMGFjYzE7XG59XG5oMyB7XG4gIGZvbnQtdmFyaWFudC1jYXBzOiBub3JtYWw7XG4gIG1hcmdpbi10b3A6IDAuN2VtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxucCB7XG4gIG1heC13aWR0aDogOTMlO1xuICBtYXJnaW46IDFlbSBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTgwcHgpIHtcbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTJweCkge1xuICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICB9XG4gIC5wcm9qZWN0LWluZm8ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAucHJvamVjdC1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjektitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projektit',
                templateUrl: './projektit.component.html',
                styleUrls: ['./projektit.component.css']
            }]
    }], function () { return []; }, null); })();


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

module.exports = __webpack_require__(/*! /Users/henriparviainen/sites/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map