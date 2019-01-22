import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/review.service';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {

  public movieReviews = [];


  constructor( private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews()
    .subscribe( data => this.movieReviews.push(data));
    console.log(this.movieReviews);
  }

}
