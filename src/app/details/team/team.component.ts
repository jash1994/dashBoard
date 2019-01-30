import { Component, OnInit, Injectable} from '@angular/core';
import { ReviewService } from 'src/app/review.service';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  public allReviews = {};
  good = true;
  bad = true;
  personReview = [];
  showSpinner = false;

  constructor( private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviewService.getReviews()
    .subscribe(
      data =>  {
        this.allReviews = data.reviews;
        // console.log(data.reviews[0].review, 'reviews');
      },
      error => {
        alert('ERROR');
      });
  }


  onSubmit(newreview: any) {
    this.showSpinner = true;
    this.good = false;
    this.bad = false;
    this.reviewService.postReview(newreview)
    .subscribe(
      (response) => this.showSpinner = false,
      // console.log(response),
      (error) => console.log(error),
    );
    this.good = true;
    this.bad = true;

    if (newreview ===  'good') {
      this.bad = false;
    }
    if (newreview === 'bad') {
      this.good = false;
    }

    this.personReview.push(newreview);

    // this.reviewService.loadSpinner();

  }


}
