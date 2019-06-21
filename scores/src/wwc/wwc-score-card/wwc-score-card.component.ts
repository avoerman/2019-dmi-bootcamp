import { Component, Input, OnInit } from '@angular/core';
import { WwcScore } from '../wwc-score.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wwc-score-card',
  templateUrl: './wwc-score-card.component.html',
  styleUrls: ['./wwc-score-card.component.scss']
})
export class WwcScoreCardComponent implements OnInit {
  @Input()
  scoreItem: WwcScore;

  constructor(private router: Router) {}

  ngOnInit() {}

  handleBoxClick(id) {
    this.router.navigateByUrl('/wwc/' + id);
  }
}
