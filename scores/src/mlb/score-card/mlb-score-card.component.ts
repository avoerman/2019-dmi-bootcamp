import { Component, Input, OnInit } from '@angular/core';
import { MlbScore } from '../mlb-score.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mlb-score-card',
  templateUrl: './mlb-score-card.component.html',
  styleUrls: ['./mlb-score-card.component.scss']
})
export class MlbScoreCardComponent implements OnInit {
  @Input()
  scoreItem: MlbScore;

  constructor(private router: Router) {}

  ngOnInit() {}

  get isScheduled() {
    return this.scoreItem.statusType === 'STATUS_SCHEDULED';
  }

  get isInProgress() {
    return this.scoreItem.statusType === 'STATUS_IN_PROGRESS';
  }

  get isFinal() {
    return this.scoreItem.statusType === 'STATUS_FINAL';
  }

  handleBoxClick(id) {
    this.router.navigateByUrl('/mlb/' + id);
  }
}
