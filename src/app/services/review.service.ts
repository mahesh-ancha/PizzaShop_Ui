import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  reviews(reviewrequest:Review):Observable<Review>
  {
      return this.http.post<Review>(this.baseApiUrl+'/api/reviews',reviewrequest)
  }
}
