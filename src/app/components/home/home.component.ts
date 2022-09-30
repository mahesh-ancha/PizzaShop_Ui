import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { explore } from 'src/app/models/explore.model';
import { Pizza } from 'src/app/models/pizza.model';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url:any="";
Pizza:explore []=[];
  service: any;
  constructor(private route:ActivatedRoute,private OrderDetailsService:OrderDetailsService,private router:Router) { }

  ngOnInit(): void {
    this.foodData=this.service.pizzaDetails;
    this.OrderDetailsService.getAllPizzas()
    .subscribe({
      next:(Pizza: explore[])=>
      {
        this.Pizza=Pizza;
      },
      error:(response: any)=>
      {
        console.log(response);
      }
    })

    
  }
foodData=[
    {'id':1,
    'pizzaname':'Mushroom',
    'pizzaDetails':'Mushroom Pepper pizza',
    'price':200,
    'pizzaImg':'/assets/img/mushroom_pepper.jpg'
    }
  
  ]  
  

}
