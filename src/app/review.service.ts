import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams, } from '@angular/common/http';
import { MReview } from './review';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';




@Injectable()
export class ReviewService {

  template = `<img class="custom-spinner-template" src="https://s3-us-west-2.amazonaws.com/www.breadware.com/spinner.gif">`;


  constructor( private http: HttpClient, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {}

  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //   }),
  // };
  //  params: any = new HttpParams().set('entered_review', 'i hate the movie');

  getReviews(): Observable<MReview> {
  return this.http.get<MReview>('http://deeplearning.maguresoftwares.com/movie_rv/mspl_ml/get_previous_reviews');
  }

  postReview(newReview) {
    const params = new HttpParams().set('entered_review', newReview);

    console.log(params, 'newR');
    // console.log('http://deeplearning.maguresoftwares.com/movie_rv/mspl_ml/classify_movie_review/?entered_review=' + 'review');
    return this.http.get('http://deeplearning.maguresoftwares.com/movie_rv/mspl_ml/classify_movie_review/', {params});

  }

  // loading spinner

  loadSpinner() {
    this.ng4LoadingSpinnerService.show();
    // To test threshold change delay in query string it accepts time in secs
    this.http.get('https://reqres.in/api/users?delay=2').subscribe((res: Response) => {
      this.ng4LoadingSpinnerService.hide();
    });
  }
}

