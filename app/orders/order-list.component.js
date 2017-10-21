"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent() {
        this.orderTitle = "Order List";
        this.orderImageWidth = 50;
        this.orderImageWidthGrid = 100;
        this.orderListView = true;
        this.orderGridView = false;
        this.orders = [
            {
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
                "orderID": "ORD001",
                "productName": "Leaf Rake",
                "quantity": 100,
                "price": 19.95,
                "starRating": 3.5
            },
            {
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
                "orderID": "ORD002",
                "productName": "Hammer",
                "quantity": 200,
                "price": 8.9,
                "starRating": 4.8
            },
            {
                "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/26192/Bypass-Loppers.png",
                "orderID": "ORD003",
                "productName": "Bypass Lopper",
                "quantity": 150,
                "price": 10,
                "starRating": 4.3
            },
            {
                "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/280478/hatchet.png",
                "orderID": "ORD004",
                "productName": "Hatchet",
                "quantity": 150,
                "price": 11.2,
                "starRating": 4.9
            },
            {
                "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/2572/Machovka-Shovel-2.png",
                "orderID": "ORD005",
                "productName": "Digging Tool",
                "quantity": 189,
                "price": 9.0,
                "starRating": 4.7
            },
            {
                "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/246324/Snoeischaar.png",
                "orderID": "ORD006",
                "productName": "Pruning Tools",
                "quantity": 200,
                "price": 8.9,
                "starRating": 4.8
            }
        ];
    }
    OrderListComponent.prototype.orderList = function () {
        this.orderListView = true;
        this.orderGridView = false;
    };
    OrderListComponent.prototype.orderGrid = function () {
        this.orderListView = false;
        this.orderGridView = true;
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'order-list',
            templateUrl: 'app/orders/order-list.component.html',
            styles: ['app/orders/order-list.component.css']
        })
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map