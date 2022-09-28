import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  carts:cart[]=[];
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {

    this.cartservice.getCartItems()
    
    .subscribe({

      next: (carts) => {
        this.carts = carts;

      },
      error:(response) => {console.log(response);}
      
    })
  }

  }


