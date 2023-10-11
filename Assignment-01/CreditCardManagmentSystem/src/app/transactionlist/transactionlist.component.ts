import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../transactions.model';
import { TransactionserviceService } from '../transactionservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit {

  transactions: Transaction[] = [];
  cardNumber: string = '';
  transactionForm: FormGroup;

  constructor(
    private transactionserviceService: TransactionserviceService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.transactionForm = this.formBuilder.group({
      amount: ['', [Validators.required, this.validateNumber]],
      currency: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cardNumber = params['card_number'].toString();
      console.log(this.cardNumber)
      this.transactionserviceService.getTransactionsByCardNumber(parseInt(this.cardNumber)).subscribe((transactions) => {
        this.transactions = transactions;
      });
    });
  }

  validateNumber(control: any) {
    const value = control.value;
    if (value === null || value === undefined || isNaN(value)) {
      return { notANumber: true };
    }
    return null;
  }

  removeTransaction(transaction: Transaction): void {
    this.transactionserviceService.removeTransaction(transaction).subscribe(() => {
      this.transactions = this.transactions.filter((t) => t.uid !== transaction.uid);
    });
  }
}
