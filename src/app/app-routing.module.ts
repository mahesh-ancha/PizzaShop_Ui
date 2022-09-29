import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCartComponent } from './components/cart/add-cart/add-cart.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { ExploreComponent } from './components/explore/explore.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';

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
{  path : 'register',
   component: RegisterComponent
},
{  path : 'login',
component: LoginComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
