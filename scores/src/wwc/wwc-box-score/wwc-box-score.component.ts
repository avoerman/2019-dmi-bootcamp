import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WwcBoxScore } from '../wwc-score.model';
import { WwcService } from '../wwc.service';

@Component({
  selector: 'app-wwc-box-score',
  templateUrl: './wwc-box-score.component.html',
  styleUrls: ['./wwc-box-score.component.scss']
})
export class WwcBoxScoreComponent implements OnInit {
  id: string;
  boxScore: WwcBoxScore;

  constructor(private route: ActivatedRoute, private wwcService: WwcService) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];

      this.wwcService.getBoxScore(this.id).subscribe(res => {
        this.boxScore = res;
      });
    });
  }

  get homeScore() {
    return this.boxScore.homeScore;
  }

  get awayScore() {
    return this.boxScore.awayScore;
  }

}
