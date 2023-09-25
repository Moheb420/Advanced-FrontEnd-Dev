import { Component, OnInit } from '@angular/core';
import { Creditcardlist } from '../../creditcardlist.model';
import { Router } from '@angular/router'
import { CardDataService } from 'src/app/carddata.service';
import { Creditcard } from '../../creditcard.model'; // Import from the new file

@Component({
  selector: 'app-creditcardlist',
  templateUrl: './creditcardlist.component.html',
  styleUrls: ['./creditcardlist.component.css']
})
export class CreditcardlistComponent implements OnInit {
  cardNumber: string = '';
  creditCards: Creditcardlist[] = [];
  

  constructor(
    private cardDataService: CardDataService, 
    private router: Router
  ) {}

  onCardClick(card: Creditcardlist): void {
    this.router.navigate(['/creditcarddetailsscreen/:card_number']);
  }


  ngOnInit(): void {
    this.getCreditCards();
  }

  getCreditCards() {
    this.cardDataService.getCreditCards().subscribe((cards: Creditcardlist[]) => {
      this.creditCards = cards;
      
    });
  }
}
