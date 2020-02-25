(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marcas-marcas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/marcas/marcas.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marcas/marcas.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{titulo}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngIf=\"marcas?.length == 0\" class=\"alert alert-info\">\n      No hay registros en la base de datos!\n    </div>\n    <ion-item\n      *ngFor=\"let marcas of marcas\"\n      [routerLink]=\"['/marcas/detalle', marcas.id]\"\n    >\n    <ion-avatar slot=\"start\">\n      <img *ngIf=\"marcas?.foto\"\n      src=\"http://midata24.com/spring-boot-backend-electronic.apirest-0.0.1/api/uploads/img/{{marcas.foto}}\" alt=\"{{marcas.foto}}\" \n      >\n      <img *ngIf=\"!marcas?.foto\"\n      src=\"http://midata24.com/spring-boot-backend-electronic.apirest-0.0.1/images/no-usuario.png\" alt=\"Sin foto\" \n     >  \n    </ion-avatar>\n    <ion-label>\n        {{marcas.nombre}}\n    </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"danger\" [routerLink]=\"['/marcas/detalle']\">\n        <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-fab>\n  </ion-content>\n\n\n\n\n");

/***/ }),

/***/ "./src/app/marcas/marcas-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/marcas/marcas-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MarcasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcasPageRoutingModule", function() { return MarcasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _marcas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marcas.page */ "./src/app/marcas/marcas.page.ts");




const routes = [
    {
        path: '',
        component: _marcas_page__WEBPACK_IMPORTED_MODULE_3__["MarcasPage"]
    },
    {
        path: 'detalle',
        loadChildren: () => __webpack_require__.e(/*! import() | marcas-detalle-detalle-module */ "common").then(__webpack_require__.bind(null, /*! ./marcas/detalle/detalle.module */ "./src/app/marcas/marcas/detalle/detalle.module.ts")).then(m => m.DetallePageModule)
    }
];
let MarcasPageRoutingModule = class MarcasPageRoutingModule {
};
MarcasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarcasPageRoutingModule);



/***/ }),

/***/ "./src/app/marcas/marcas.module.ts":
/*!*****************************************!*\
  !*** ./src/app/marcas/marcas.module.ts ***!
  \*****************************************/
/*! exports provided: MarcasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcasPageModule", function() { return MarcasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _marcas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marcas-routing.module */ "./src/app/marcas/marcas-routing.module.ts");
/* harmony import */ var _marcas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marcas.page */ "./src/app/marcas/marcas.page.ts");







let MarcasPageModule = class MarcasPageModule {
};
MarcasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _marcas_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarcasPageRoutingModule"]
        ],
        declarations: [_marcas_page__WEBPACK_IMPORTED_MODULE_6__["MarcasPage"]]
    })
], MarcasPageModule);



/***/ }),

/***/ "./src/app/marcas/marcas.page.scss":
/*!*****************************************!*\
  !*** ./src/app/marcas/marcas.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmNhcy9tYXJjYXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/marcas/marcas.page.ts":
/*!***************************************!*\
  !*** ./src/app/marcas/marcas.page.ts ***!
  \***************************************/
/*! exports provided: MarcasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarcasPage", function() { return MarcasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _marcas_marcas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marcas/marcas.service */ "./src/app/marcas/marcas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MarcasPage = class MarcasPage {
    constructor(marcasService, activatedRoute) {
        this.marcasService = marcasService;
        this.activatedRoute = activatedRoute;
        this.titulo = "Inicio";
    }
    ngOnInit() {
        this.marcasService.getMarcas().subscribe(marcas => (this.marcas = marcas));
    }
    ionViewWillEnter() {
        //this.marcasService.getMarcas().subscribe(marcas => (this.marcas = marcas));
        console.log("entre al willenter: ");
    }
    ionViewDidEnter() {
        //this.marcasService.getMarcas().subscribe(marcas => (this.marcas = marcas));
        this.listadoMarcas();
        console.log("ionViewDidEnter");
    }
    listadoMarcas() {
        this.marcasService.getMarcas().subscribe(marcas => (this.marcas = marcas));
    }
};
MarcasPage.ctorParameters = () => [
    { type: _marcas_marcas_service__WEBPACK_IMPORTED_MODULE_2__["MarcasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
MarcasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-marcas",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marcas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/marcas/marcas.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marcas.page.scss */ "./src/app/marcas/marcas.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_marcas_marcas_service__WEBPACK_IMPORTED_MODULE_2__["MarcasService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], MarcasPage);



/***/ })

}]);
//# sourceMappingURL=marcas-marcas-module.js.map