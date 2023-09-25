import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionoverviewComponent } from './transactionoverview.component';

describe('TransactionoverviewComponent', () => {
  let component: TransactionoverviewComponent;
  let fixture: ComponentFixture<TransactionoverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionoverviewComponent]
    });
    fixture = TestBed.createComponent(TransactionoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
