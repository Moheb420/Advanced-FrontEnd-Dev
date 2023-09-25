import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  AbstractControl  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreditcardserviceService } from '../creditcardservice.service';

function cardNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const value = control.value;
  if (!value) {
    return { 'required': true };
  }

  if (!/^\d+$/.test(value)) {
    return { 'pattern': true };
  }

  if (value.length < 7 || value.length > 16) {
    return { 'length': true };
  }

  return null;
}

// Custom validator for cscCode field
function cscCodeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const value = control.value;
  if (!value) {
    return { 'required': true };
  }

  if (!/^\d+$/.test(value)) {
    return { 'pattern': true };
  }

  if (value.length !== 3) {
    return { 'length': true };
  }

  return null;
}

@Component({
  selector: 'app-creditcardadd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creditcardadd.component.html',
  styleUrls: ['./creditcardadd.component.css']
})
export class CreditcardaddComponent {
  cardForm: FormGroup;
  creditCards: any[] = []; 

  constructor(private fb: FormBuilder, private creditCardService: CreditcardserviceService) {
    this.cardForm = this.fb.group({
      cardNumber: [null, [Validators.required, cardNumberValidator]],
      cardholderName: [null, [Validators.required]],
      cscCode: [null, [Validators.required, cscCodeValidator]],
      expirationDateMonth: [null, [Validators.required, Validators.min(1), Validators.max(12)]],
      expirationDateYear: [null, [Validators.required]],
      issuer: [null],
    });
  }

  ngOnInit(): void {
    this.creditCardService.getCreditCards().subscribe((data) => {
      this.creditCards = data;
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      // Implement your form submission logic here
      console.log('Form submitted:', this.cardForm.value);
    } else {
      // Handle form validation errors
      console.error('Form is invalid.');
    }
  }
}
