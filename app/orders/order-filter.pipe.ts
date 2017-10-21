import {Pipe, PipeTransform} from '@angular/core'
import {IOrder} from "./order";

@Pipe({
    name: 'orderFilter'
})

export class orderFilterPipe implements PipeTransform{
    transform(value:IOrder[], filterby:string):IOrder[]{
        filterby = filterby ? filterby.toLocaleLowerCase() : null;
        return filterby? value.filter((order:IOrder) => 
        order.productName.toLocaleLowerCase().indexOf(filterby)!== -1):value;
    }
}