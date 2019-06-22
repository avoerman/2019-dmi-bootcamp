import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WwcBoxScore, WwcScore } from './wwc-score.model';

@Injectable({
  providedIn: 'root'
})
export class WwcService {
  constructor(private http: HttpClient) {}

  getScores(): Observable<WwcScore[]> {
    return this.http.get<WwcScore[]>('http://localhost:3000/scores/wwc/');
  }

  getBoxScore(id: string) {
    return this.http.get<WwcBoxScore>(`http://localhost:3000/scores/wwc/${id}`);
  }
}
