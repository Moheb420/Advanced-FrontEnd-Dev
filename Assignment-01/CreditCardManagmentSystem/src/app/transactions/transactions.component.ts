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

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private transactionService: TransactionserviceService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cardNumber = +params['card_number'];
      this.transactionService.getTransactionsByCardNumber(this.cardNumber).subscribe((transactions) => {
        this.transactions = transactions;
      });
    });
  }
}
