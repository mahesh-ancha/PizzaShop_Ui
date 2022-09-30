import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { register } from '../models/register.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  registers(registerrequest:register):Observable<register>{
   
    return this.http.post<register>(this.baseApiUrl+'/api /register',registerrequest);
 
  }}
