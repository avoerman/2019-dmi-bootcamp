import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlbComponent } from './mlb.component';
import { HttpClientModule } from '@angular/common/http';
import { ScoreCardComponent } from './score-card/score-card.component';
import { MlbBoxScoreComponent } from './mlb-box-score/mlb-box-score.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MlbComponent, ScoreCardComponent, MlbBoxScoreComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class MlbModule {}
