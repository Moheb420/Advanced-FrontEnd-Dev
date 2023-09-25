import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardDataService } from '../../app/carddata.service';
import { CreditCardDetails } from '../../app/creditcarddetails.model';
import { TransactionserviceService } from '../transactionservice.service';
import { Transaction } from '../transactions.model';


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
    private cardDataService: CardDataService,
    private router: Router,
    private transactionService: TransactionserviceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cardNumber = params['card_number'].toString();
      this.cardDataService.getCardDetailsByNumber(parseInt(this.cardNumber)).subscribe((card) => {
        this.CreditCarddetails = [card];
      });

        this.transactionService.getTransactionsByCardNumber(parseInt(this.cardNumber)).subscribe((transactions) => {
          this.transactions = transactions;
          console.log(transactions)
        });
    });
  }
  removeCreditCard() {
    this.cardDataService.removeCreditCard(parseInt(this.cardNumber)).subscribe((success) => {
      if (success) {
        // Redirect to the credit card list or another page
        this.router.navigate(['']);
      } else {
        window.Error("Cannot remove the card")
        console.log(false)
      }
    });
  }

}
