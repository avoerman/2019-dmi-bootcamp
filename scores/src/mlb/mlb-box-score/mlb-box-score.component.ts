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
        this.homeLine = this.getLineScore(this.home.lineScores);
        this.awayLine = this.getLineScore(this.away.lineScores);
      });
    });
  }

  private getLineScore(lineScores: LineScore[]): string[] {
    return Array.from({ length: 9 }).map((u, i) =>
      lineScores[i] ? lineScores[i].value.toString() : ""
    );
  }

  get home() {
    return (
      this.boxScore && this.boxScore.score.find(s => s.homeAway === "home")
    );
  }

  get away() {
    return (
      this.boxScore && this.boxScore.score.find(s => s.homeAway === "away")
    );
  }
}
