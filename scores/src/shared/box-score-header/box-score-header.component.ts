import { Component, Input } from '@angular/core';
import { WwcBoxScore } from '../../wwc/wwc-score.model';

@Component({
  selector: 'app-box-score-header',
  templateUrl: './box-score-header.component.html',
  styleUrls: ['./box-score-header.component.scss']
})
export class BoxScoreHeaderComponent {
  @Input()
  boxScore: WwcBoxScore;

  get homeScore() {
    return this.boxScore.homeScore;
  }

  get awayScore() {
    return this.boxScore.awayScore;
  }
}
