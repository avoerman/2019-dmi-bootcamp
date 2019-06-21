import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mlb-box-score',
  templateUrl: './mlb-box-score.component.html',
  styleUrls: ['./mlb-box-score.component.scss']
})
export class MlbBoxScoreComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id']
    });
  }
}
