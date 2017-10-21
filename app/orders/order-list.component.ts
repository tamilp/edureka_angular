import {Component} from '@angular/core';
import { IOrder } from "./order";

@Component({
    selector: 'order-list',
    templateUrl: 'app/orders/order-list.component.html',
    styles: ['app/orders/order-list.component.css']
})

export class OrderListComponent{
    orderTitle: string = "Order List";
    orderImageWidth: number = 50;
    orderImageWidthGrid: number = 100;
    orderListView:boolean = true;
    orderGridView:boolean = false;
    orders:IOrder[]=[
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
    ]

    orderList(){
        this.orderListView = true;
        this.orderGridView = false;
    }

    orderGrid(){
        this.orderListView = false;
        this.orderGridView = true;
    }

}