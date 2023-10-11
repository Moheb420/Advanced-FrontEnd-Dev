import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditcardaddComponent } from './creditcardadd/creditcardadd.component'; // Import your component
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CreditcardaddComponent], 
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreditcardaddComponent], 
})
export class CreditcardModule { }