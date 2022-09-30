import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orders } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  
  addOrders(addOrderRequest:Orders):Observable<Orders>
  {
    addOrderRequest.orderid='00000000-0000-0000-0000-000000000000';
    return this.http.post<Orders>(this.baseApiUrl+'/api/Orders',addOrderRequest);
  }
  getAllOrders():Observable<Orders[]>
  {
    return this.http.get<Orders[]>(this.baseApiUrl+'/api/Orders');
  }
  updateorders(orderid:string,updateorderRequest:Orders):Observable<Orders>
  {
    return this.http.put<Orders>(this.baseApiUrl+'/api/orders/'+orderid,updateorderRequest);
  }
}
