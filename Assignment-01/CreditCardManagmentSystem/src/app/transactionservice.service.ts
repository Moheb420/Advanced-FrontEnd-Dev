import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Transaction } from './transactions.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {

  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  public transactions$: Observable<Transaction[]> = this.transactionsSubject.asObservable();

  private transactionsData: Transaction[] = []; // Your TRANSACTION_DATA here

  private transactionsUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) {
    this.fetchTransactions();
  }

  private fetchTransactions(): void {
    this.http.get<Transaction[]>(this.transactionsUrl).subscribe((data) => {
      // Update the subject with the fetched data
      this.transactionsData = data;
      this.transactionsSubject.next(data);
    });
  }
  getTransactionsByCardNumber(cardNumber: number): Observable<Transaction[]> {
    // Fetch all transactions
    return this.http.get<Transaction[]>(this.transactionsUrl).pipe(
      map((transactions: Transaction[]) => {
        return transactions.filter(transaction => transaction.credit_card.card_number == cardNumber.toString());
      })
    );
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this.transactions$;
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    console.log("Transaction : ",transaction)
    return this.http.post<Transaction>(this.transactionsUrl, transaction);
  }

  filterTransactionsByCardNumber(cardNumber: number): Observable<Transaction[]> {
   console.log(cardNumber)
    const filteredTransactions = this.transactionsData.filter(
      (transaction) => transaction.credit_card.card_number == cardNumber.toString()
    );
    return new Observable<Transaction[]>((observer) => {
      console.log("service", filteredTransactions)
      observer.next(filteredTransactions);
      observer.complete();
    });
  }

  removeTransaction(transaction: Transaction): Observable<void> {
    const transactionId = transaction.uid;
    const removalUrl = `${this.transactionsUrl}/${transactionId}`;

    return this.http.delete(removalUrl).pipe(
      map(() => {
        console.log("Transaction removed successfully")
      })
    );
  }
}
