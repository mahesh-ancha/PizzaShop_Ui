import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCartComponent } from './components/cart/add-cart/add-cart.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { ExploreComponent } from './components/explore/explore.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
{  path : 'cart',
   component: CartListComponent
}, 
{  path : 'cart/add',
   component: AddCartComponent
},  
{  path : 'orders',
   component: OrdersComponent
},
{  path : 'explore',
   component: ExploreComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
