import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAmountComponent } from './select-amount.component';

describe('SelectAmountComponent', () => {
  let component: SelectAmountComponent;
  let fixture: ComponentFixture<SelectAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
