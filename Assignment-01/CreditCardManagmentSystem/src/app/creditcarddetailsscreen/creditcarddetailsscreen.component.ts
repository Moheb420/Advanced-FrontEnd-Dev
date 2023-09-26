import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCardDetails } from '../../app/creditcarddetails.model';
import { Transaction } from '../transactions.model';
import { CreditcardserviceService } from '../creditcardservice.service';


@Component({
  selector: 'app-creditcarddetailsscreen',
  templateUrl: './creditcarddetailsscreen.component.html',
  styleUrls: ['./creditcarddetailsscreen.component.css']
})
export class CreditcarddetailsscreenComponent implements OnInit {

  cardNumber: string = '';
  CreditCarddetails: CreditCardDetails [] = [];
  transactions: Transaction[] = [];

  constructor(
    private route: ActivatedRoute,
    private creditcardserviceService: CreditcardserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cardNumber = params['card_number'].toString();
      this.creditcardserviceService.getCardDetailsByNumber(parseInt(this.cardNumber)).subscribe((card) => {
        this.CreditCarddetails = [card];
      });
    });
  }
  removeCreditCard() {
    this.creditcardserviceService.removeCreditCard(parseInt(this.cardNumber)).subscribe((success) => {
      if (success) {
        // Redirect to the home
        this.router.navigate(['']);
      } else {
        window.Error("Cannot remove the card")
        console.log(false)
      }
    });
  }

}
