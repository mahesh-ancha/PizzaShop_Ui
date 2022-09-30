import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  addreviewrequest : Review={
    id:0,
    review:''
  }
  constructor(private route:ActivatedRoute,private reviewservice:ReviewService,private router:Router) { }

  ngOnInit(): void {
  }
  
  addReview()
  {
    this.reviewservice.reviews(this.addreviewrequest)
    .subscribe({
      next: (review)=>
      {
        console.log(review);
        this.router.navigate(['explore'])
      }
    })
  }

}
