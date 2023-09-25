import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transactions.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {

  private transactionsUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) {}
  getTransactionsByCardNumber(cardNumber: number): Observable<Transaction[]> {
    // Fetch all transactions
    return this.http.get<Transaction[]>(this.transactionsUrl).pipe(
      map((transactions: Transaction[]) => {
        return transactions.filter(transaction => transaction.credit_card.card_number == cardNumber.toString());
      })
    );
  }
}
