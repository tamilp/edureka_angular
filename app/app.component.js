"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = "Home Page";
        this.showProductList = true;
        this.showOrderList = false;
        this.btnclassProduct = "btn btn-success";
        this.btnclassOrder = "btn btn-primary";
    }
    AppComponent.prototype.showProduct = function () {
        this.showOrderList = false;
        this.showProductList = true;
        this.btnclassProduct = "btn btn-success";
        this.btnclassOrder = "btn btn-primary";
    };
    AppComponent.prototype.showOrder = function () {
        this.showProductList = false;
        this.showOrderList = true;
        this.btnclassProduct = "btn btn-primary";
        this.btnclassOrder = "btn btn-success";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            template: "<div>\n        <h1>{{pageTitle}}</h1>\n        <button type=\"button\" [class]=\"btnclassProduct\" (click)=\"showProduct()\">Product List</button>\n        <button type=\"button\" [class]=\"btnclassOrder\" (click)=\"showOrder()\">Order List</button>\n        <br><br>\n        <div *ngIf='showProductList'>\n            <pm-product></pm-product>\n        </div>\n        <div *ngIf='showOrderList'>\n            <order-list></order-list>\n        </div>\n    </div>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map