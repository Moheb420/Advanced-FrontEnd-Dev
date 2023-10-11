import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../../transactions.model';
import { ActivatedRoute } from '@angular/router';
import { TransactionserviceService } from '../../transactionservice.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-transactionoverview',
  templateUrl: './transactionoverview.component.html',
  styleUrls: ['./transactionoverview.component.css']
})
  export class TransactionoverviewComponent implements OnInit {

    cardNumber: number = 0;
    transactions: Transaction[] = [];
    filteredTransactions: Transaction[] = [];
    cardNumberFilter: number | undefined;
  
    constructor(
      private router: Router,
      private http: HttpClient,
      private route: ActivatedRoute,
      private transactionService: TransactionserviceService
    ) {}
  
    ngOnInit(): void {
      this.transactionService.getAllTransactions().subscribe((data) => {
        this.transactions = data;
      }); 
    }
  
    addTransaction() {
      // Navigate to the "transactionadd" route
      this.router.navigate(['/transactionadd']);
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
