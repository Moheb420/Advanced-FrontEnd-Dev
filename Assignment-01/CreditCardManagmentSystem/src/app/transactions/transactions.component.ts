import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../transactions.model';
import { ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../transactionservice.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  cardNumber: number = 0;
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  cardNumberFilter: number | undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private transactionService: TransactionserviceService
  ) {}

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe((data) => {
      this.transactions = data;
    }); 
  }

  filterTransactions(): void {
    if (this.cardNumberFilter !== undefined) {
      this.transactionService
        .filterTransactionsByCardNumber(this.cardNumberFilter)
        .subscribe((filteredTransactions) => {
          this.transactions = filteredTransactions;
        });
    } else {
      alert("Card number is not valid")
    }
  }
  
  
}
