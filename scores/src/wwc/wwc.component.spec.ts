import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwcComponent } from './wwc.component';

describe('WwcComponent', () => {
  let component: WwcComponent;
  let fixture: ComponentFixture<WwcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
