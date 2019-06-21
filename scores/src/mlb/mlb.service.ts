import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MlbScore } from './mlb-score.model';


@Injectable({
  providedIn: 'root'
})
export class MlbService {

  constructor(private http: HttpClient) { }

  getMlbScores(): Observable<MlbScore[]> {
    return this.http.get<MlbScore[]>('http://localhost:3000/scores/mlb/');
  }
}
