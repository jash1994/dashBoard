import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { TabelComponent } from './details/tabel/tabel.component';
import { ChartComponent } from './details/chart/chart.component';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './details/team/team.component';
import { StartComponent } from './details/start/start.component';
import { NgbdModalBasicComponent } from './details/modal/modal-basic';
import { ReviewService } from './review.service';
import { MovieReviewComponent } from './details/movie-review/movie-review.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailsComponent,
    TabelComponent,
    ChartComponent,
    TeamComponent,
    StartComponent,
    NgbdModalBasicComponent,
    MovieReviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgbModule.forRoot(),
  ],
  providers: [ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
