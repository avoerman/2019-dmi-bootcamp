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

  get scheduled() {
    return this.scoreItem.status === 'STATUS_SCHEDULED';
  }
}
