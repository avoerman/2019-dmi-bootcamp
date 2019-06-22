import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WwcComponent } from './wwc.component';
import { WwcScoreCardComponent } from './wwc-score-card/wwc-score-card.component';
import { SharedModule } from '../shared/shared.module';
import { WwcBoxScoreComponent } from './wwc-box-score/wwc-box-score.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WwcComponent, WwcScoreCardComponent, WwcBoxScoreComponent],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class WwcModule {}
