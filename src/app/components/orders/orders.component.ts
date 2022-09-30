import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  addOrderRequest:Orders=
  {
    orderid:'',
    category:'',
    pizzaname:'',
    price:0
  };

  constructor(private route:ActivatedRoute,private ordersService:OrderService,private router:Router) { }

ngOnInit(): void {

}
updateorders()
  {
    this.ordersService.updateorders(this.addOrderRequest.orderid,this.addOrderRequest)
    .subscribe({
      next:(order)=>
      {
        console.log("add item method called",order);
        this.router.navigate(['explore']);
      }
    })
  }

}
