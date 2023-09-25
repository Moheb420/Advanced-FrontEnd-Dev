import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Creditcard } from './creditcard.model';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  private creditCards: Creditcard[] = [];
  private urlCards = 'http://localhost:3000/cards'; 

  constructor(private http: HttpClient) {
    this.getCreditCards().subscribe((data) => {
      this.creditCards = data; // Populate creditCards with the fetched data
    });
  }

  getCreditCards() {
    return this.http.get<any[]>(this.urlCards);
  }

  getCardDetailsByNumber(cardNumber: number): Observable<any> {
    const cardDetailsUrl = `${this.urlCards}/${cardNumber}`;
    console.log(cardDetailsUrl);
    return this.http.get<any>(cardDetailsUrl);
  }

  // removeCreditCard(cardNumber: number): Observable<boolean> {
  //   const index = this.creditCards.findIndex((card) => parseInt(card.card_number) === cardNumber);

  //   if (index !== -1) {
  //     this.creditCards.splice(index, 1);
  //     return new Observable((observer) => {
  //       observer.next(true);
  //       observer.complete();
  //     });
  //   }
  //   return new Observable((observer) => {
  //     observer.next(false);
  //     observer.complete();
  //   });
  // }

  removeCreditCard(cardNumber: number): Observable<boolean> {
    const removeUrl = `${this.urlCards}/${cardNumber}`;

    return this.http.delete(removeUrl).pipe(
      map(() => true), // Assuming a successful deletion
      catchError(() => of(false)) // Handle errors
    );
  }
}