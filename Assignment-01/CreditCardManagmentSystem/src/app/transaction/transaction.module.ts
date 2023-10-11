import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionoverviewComponent } from './transactionoverview/transactionoverview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionlistComponent } from '../transactionlist/transactionlist.component';
import { TransactionaddComponent } from './transactionadd/transactionadd.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    TransactionlistComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [TransactionlistComponent], // Export your component
})
export class TransactionModule { }
