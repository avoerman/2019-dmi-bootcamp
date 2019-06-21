import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  @Output()
  buttonClicked: EventEmitter<void> = new EventEmitter();

  @Input()
  showButton = true;

  @Input()
  buttonText: string;

  constructor() {}

  ngOnInit() {}
}
