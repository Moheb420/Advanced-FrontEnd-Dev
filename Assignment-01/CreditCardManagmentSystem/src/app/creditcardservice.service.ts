import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCardDetails } from './creditcarddetails.model';
import {Observable, of} from 'rxjs'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreditcardserviceService {

  private creditCards: CreditCardDetails[] = [];
  urlCards = 'http://localhost:3000/cards'; 

  constructor(private http: HttpClient){} 

  getCreditCards(){
    return this.http.get<any[]>(this.urlCards); // Use the imported Creditcard type
  }

  getCreditCardDetails(cardNumber: number): Observable<CreditCardDetails | null> {
    // Find the credit card by cardNumber or return null if not found
    const creditCard = this.creditCards.find((card) => card.card_number === cardNumber);
    return new Observable((observer) => {
      observer.next(creditCard || null);
      observer.complete();
    });
  }

  addCreditCard(creditCard: CreditCardDetails): Observable<CreditCardDetails> {
    return this.http.post<CreditCardDetails>(this.urlCards, creditCard);
  }

  removeCreditCard(cardNumber: number): Observable<boolean> {
    const removeUrl = `${this.urlCards}/${cardNumber}`;

    return this.http.delete(removeUrl).pipe(
      map(() => true), // Assuming a successful deletion
      catchError(() => of(false)) 
    );
  }

  getCardDetailsByNumber(cardNumber: number): Observable<any> {
    const cardDetailsUrl = `${this.urlCards}/${cardNumber}`;
    console.log(cardDetailsUrl);
    return this.http.get<any>(cardDetailsUrl);
  }
}
