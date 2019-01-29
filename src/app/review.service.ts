import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, } from '@angular/common/http';
import { MReview } from './review';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';



@Injectable()
export class ReviewService {


  constructor( private http: HttpClient) {}

  getReviews(): Observable<MReview> {
  return this.http.get<MReview>('http://deeplearning.maguresoftwares.com/movie_rv/mspl_ml/get_previous_reviews');
  }

  // postReview() {
  //   return this.http.post('http://deeplearning.maguresoftwares.com/movie_rv/mspl_ml/classify_movie_review =' )
  // }
}

