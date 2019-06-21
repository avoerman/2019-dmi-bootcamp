import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MlbService } from "../mlb.service";
import { LineScore, MlbBoxScore } from "../mlb-score.model";

@Component({
  selector: "app-mlb-box-score",
  templateUrl: "./mlb-box-score.component.html",
  styleUrls: ["./mlb-box-score.component.scss"]
})
export class MlbBoxScoreComponent implements OnInit {
  id: string;
  boxScore: MlbBoxScore;
  homeLine: string[];
  awayLine: string[];

  constructor(private route: ActivatedRoute, private mlbService: MlbService) {}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p["id"];

      this.mlbService.getMlbBoxScore(this.id).subscribe(res => {
        this.boxScore = res;
        this.homeLine = this.getLineScore(res.score[0].lineScores);
        this.awayLine = this.getLineScore(res.score[1].lineScores);
      });
    });
  }

  private getLineScore(lineScores: LineScore[]): string[] {
    return Array.from({ length: 9 }).map((u, i) =>
      lineScores[i] ? lineScores[i].value.toString() : ""
    );
  }
}
