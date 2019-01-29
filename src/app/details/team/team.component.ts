import { Component, OnInit, Injectable} from '@angular/core';
import { ReviewService } from 'src/app/review.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  public allReviews = {};

  constructor( private reviewService: ReviewService) {}
  public newReview = [];

  ngOnInit() {
    this.reviewService.getReviews()
    .subscribe(
      data => {
        this.allReviews = data.reviews;
        console.log(data.reviews[0].review, 'reviews');
      },
      error => {
        alert('ERROR');
      });
  }

  onSubmit() {
    console.log( 'TextAreaComponent::newReview: ' + this.newReview);
  }


}
