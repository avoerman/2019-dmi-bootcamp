import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwcBoxScoreComponent } from './wwc-box-score.component';

describe('WwcBoxScoreComponent', () => {
  let component: WwcBoxScoreComponent;
  let fixture: ComponentFixture<WwcBoxScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwcBoxScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwcBoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
