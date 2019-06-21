import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreCardComponent } from './score-card/score-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScoreCardComponent],
  exports: [ScoreCardComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
