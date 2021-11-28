import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAmountComponent } from './current-amount.component';

describe('CurrentAmountComponent', () => {
  let component: CurrentAmountComponent;
  let fixture: ComponentFixture<CurrentAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
