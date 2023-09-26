import { Component } from '@angular/core';
import { TransactionserviceService } from '../../transactionservice.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms'; 
import { Transaction } from '../../transactions.model'; 

@Component({
  selector: 'app-transactionadd',
  templateUrl: './transactionadd.component.html',
  styleUrls: ['./transactionadd.component.css']
})
export class TransactionaddComponent {
  transactionForm: FormGroup;
  currentDate: number = Date.now();

  constructor(
    private transactionserviceService: TransactionserviceService,
    private fb: FormBuilder
  ) {
    this.transactionForm = this.fb.group({
      credit_card: [null, Validators.required],
      amount: [null, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      currency: [null, Validators.required],
      comment: [''],
      date: [this.currentDate, Validators.required],
    });
  }

  // Add a transaction
  addNewTransaction(): void {
    if (this.transactionForm.valid) {
      const newTransaction: Transaction = this.transactionForm.value;
      this.transactionserviceService.addTransaction(newTransaction);
      console.log(newTransaction)
      this.transactionForm.reset();
    }
    else 
    {
      console.log("false")
    }
  }
  
  // Function to generate a unique UID
  getCreditCards(): string[] {
    return ['Card 1', 'Card 2', 'Card 3'];
  }
  
}
