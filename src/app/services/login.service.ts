import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  logging(addloginrequest:login):Observable<login>{
   
    return this.http.post<login>(this.baseApiUrl+'/api/login',addloginrequest);
 
  }
}
