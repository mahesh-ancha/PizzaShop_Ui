import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  baseApiUrl:string=environment.baseApiUrl;
  pizzaDetails: any;
  getAllPizzas: any;
  constructor() { }
}
