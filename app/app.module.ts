import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { OrderListComponent } from "./orders/order-list.component";
import { orderFilterPipe } from "./orders/order-filter.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    StarComponent,
    ProductListComponent,
    ProductFilterPipe,
    OrderListComponent,
    orderFilterPipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


