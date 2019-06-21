import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WwcComponent } from './wwc.component';
import { WwcScoreCardComponent } from './wwc-score-card/wwc-score-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WwcComponent, WwcScoreCardComponent],
  imports: [CommonModule, SharedModule]
})
export class WwcModule {}
