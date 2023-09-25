import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardlistComponent } from './creditcardlist.component';

describe('CreditcardlistComponent', () => {
  let component: CreditcardlistComponent;
  let fixture: ComponentFixture<CreditcardlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditcardlistComponent]
    });
    fixture = TestBed.createComponent(CreditcardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
