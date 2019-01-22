import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelComponent } from './details/tabel/tabel.component';
import { ChartComponent } from './details/chart/chart.component';
import { DetailsComponent } from './details/details.component';
import { TeamComponent } from './details/team/team.component';
import { StartComponent } from './details/start/start.component';
import { NgbdModalBasicComponent } from './details/modal/modal-basic';
import { MovieReviewComponent } from './details/movie-review/movie-review.component';


const routes: Routes = [
  // { path: '', redirectTo: 'tabel', pathMatch: 'full'},
  { path: '', component: StartComponent},
  { path: 'detail', component: DetailsComponent},
  { path: 'tabel', component: TabelComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'team', component: TeamComponent},
  { path: 'modal', component: NgbdModalBasicComponent},
  { path: 'review', component: MovieReviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
