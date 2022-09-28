import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cart } from '../models/cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService{
  
  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient){ }

  getCartItems(): Observable<cart[]>
  {
    return this.http.get<cart[]>(this.baseApiUrl+'/api/cart')
  }}
