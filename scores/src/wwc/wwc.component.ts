import { Component } from '@angular/core';
import { WwcService } from './wwc.service';

@Component({
  selector: 'app-wwc',
  templateUrl: './wwc.component.html',
  styleUrls: ['./wwc.component.scss']
})
export class WwcComponent {
  scores = this.wwcService.getScores();

  constructor(private wwcService: WwcService) {}
}
