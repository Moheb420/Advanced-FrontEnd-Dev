// creditcardservice.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCardDetails } from './creditcarddetails.model';
import {Observable} from 'rxjs'

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
}
