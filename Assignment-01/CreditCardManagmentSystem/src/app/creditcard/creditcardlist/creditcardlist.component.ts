import { Component, OnInit } from '@angular/core';
import { Creditcardlist } from '../../creditcardlist.model';
import { Router } from '@angular/router'
import { CreditcardserviceService } from 'src/app/creditcardservice.service';


@Component({
  selector: 'app-creditcardlist',
  templateUrl: './creditcardlist.component.html',
  styleUrls: ['./creditcardlist.component.css']
})
export class CreditcardlistComponent implements OnInit {
  cardNumber: string = '';
  creditCards: Creditcardlist[] = [];
  

  constructor(
    private creditcardserviceService: CreditcardserviceService, 
    private router: Router
  ) {}

  onCardClick(card: Creditcardlist): void {
    this.router.navigate(['/creditcarddetailsscreen/:card_number']);
  }


  ngOnInit(): void {
    this.getCreditCards();
  }

  getCreditCards() {
    this.creditcardserviceService.getCreditCards().subscribe((cards: Creditcardlist[]) => {
      this.creditCards = cards;
      
    });
  }
}
