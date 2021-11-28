import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForALoanComponent } from './apply-for-a-loan.component';

describe('ApplyForALoanComponent', () => {
  let component: ApplyForALoanComponent;
  let fixture: ComponentFixture<ApplyForALoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForALoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForALoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
