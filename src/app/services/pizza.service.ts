import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  
  getAllPizzas():Observable<Pizza[]>
  {
    return this.http.get<Pizza[]>(this.baseApiUrl+'/api/Pizza');
  }
  addPizza(addPizzaRequest:Pizza):Observable<Pizza>
  {
    addPizzaRequest.pizzaid='00000000-0000-0000-0000-000000000000';
    return this.http.post<Pizza>(this.baseApiUrl+'/api/Pizza',addPizzaRequest);
  }
}
