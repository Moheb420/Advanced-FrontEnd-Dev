import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionoverviewComponent } from './transactionoverview/transactionoverview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionlistComponent } from '../transactionlist/transactionlist.component';
import { TransactionaddComponent } from './transactionadd/transactionadd.component';



@NgModule({
  declarations: [
    TransactionoverviewComponent,
    TransactionlistComponent,
    TransactionaddComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TransactionlistComponent], // Export your component
})
export class TransactionModule { }
