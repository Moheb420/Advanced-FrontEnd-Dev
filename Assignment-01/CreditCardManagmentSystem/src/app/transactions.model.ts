import { Validators } from '@angular/forms';

export interface Transaction {
    uid: string;
    credit_card: {
      card_number: string;
      csc_code: number;
      cardholder_name: string;
      expiration_date_month: number;
      expiration_date_year: number;
      issuer: string;
    };
    amount: number;
    comment: string;
    date: number;
    currency: string;
  }
  

