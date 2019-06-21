import { Component, Input, OnInit } from '@angular/core';
import { MlbScore } from '../mlb-score.model';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  @Input()
  scoreItem: MlbScore;

  constructor() { }

  ngOnInit() {
  }

  get isScheduled() {
    return this.scoreItem.statusType === 'STATUS_SCHEDULED';
  }

  get isInProgress() {
    return this.scoreItem.statusType === 'STATUS_IN_PROGRESS';
  }
}
