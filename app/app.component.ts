import {Component} from '@angular/core';

@Component({
    selector:'pm-app',
    template:`<div>
        <h1>{{pageTitle}}</h1>
        <button type="button" [class]="btnclassProduct" (click)="showProduct()">Product List</button>
        <button type="button" [class]="btnclassOrder" (click)="showOrder()">Order List</button>
        <br><br>
        <div *ngIf='showProductList'>
            <pm-product></pm-product>
        </div>
        <div *ngIf='showOrderList'>
            <order-list></order-list>
        </div>
    </div>`
})


export class AppComponent{
    pageTitle:string="Home Page"
    showProductList:boolean= true;
    showOrderList:boolean= false
    btnclassProduct:string= "btn btn-success";
    btnclassOrder:string= "btn btn-primary";

    showProduct(){
        this.showOrderList = false;
        this.showProductList = true;
        this.btnclassProduct= "btn btn-success";
        this.btnclassOrder= "btn btn-primary";
    }

    showOrder(){
        this.showProductList = false;
        this.showOrderList = true;
        this.btnclassProduct= "btn btn-primary";
        this.btnclassOrder= "btn btn-success";
    }
}