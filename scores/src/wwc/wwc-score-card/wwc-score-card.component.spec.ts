import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwcScoreCardComponent } from './wwc-score-card.component';

describe('WwcScoreCardComponent', () => {
  let component: WwcScoreCardComponent;
  let fixture: ComponentFixture<WwcScoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwcScoreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwcScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
