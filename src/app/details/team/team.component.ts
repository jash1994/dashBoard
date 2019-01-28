import { Component, OnInit, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReviewService } from 'src/app/review.service';
import { stringify } from '@angular/compiler/src/util';
import { MReview } from 'src/app/review';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  public allReviews = {};

  constructor( private reviewService: ReviewService) {}


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



}
