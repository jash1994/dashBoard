import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/review.service';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {

  public bakers = [];
  // public batter = [];


  constructor( private empService: EmployeeServiceService) { }

  ngOnInit() {
    this.empService.getEmployees()
    .subscribe( data => {
      const res = data;
      this.bakers = res;
      console.log(this.bakers, '1');
    });



    // .subscribe( data => {
    //   const res = data[0];
    //   this.bakers.push(data[0]);
    //   this.batters.push(res['batters']);
    //   this.topping.push(res['topping']);

    //   console.log(this.bakers, 'main array');
    //   console.log(this.batters, 'batters of 0');
    //   console.log(this.batters[0].batter[0], 'first value of batter');
    //   console.log(this.topping, 'topping of 0');


    //   this.bakerstwo.push(data[1]);
    // });
  }


}
