import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcarddetailsscreenComponent } from './creditcarddetailsscreen.component';

describe('CreditcarddetailsscreenComponent', () => {
  let component: CreditcarddetailsscreenComponent;
  let fixture: ComponentFixture<CreditcarddetailsscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditcarddetailsscreenComponent]
    });
    fixture = TestBed.createComponent(CreditcarddetailsscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
