import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionoverviewComponent } from './transactionoverview/transactionoverview.component';
import { TransactionaddComponent } from './transactionadd/transactionadd.component';



@NgModule({
  declarations: [
    TransactionoverviewComponent,
    TransactionaddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
