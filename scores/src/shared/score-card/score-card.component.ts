import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  @Input()
  scoreItem: any;

  @Output()
  buttonClicked: EventEmitter<void> = new EventEmitter();

  @Input()
  showButton = true;

  @Input()
  buttonText: string;

  constructor() {}

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
}
