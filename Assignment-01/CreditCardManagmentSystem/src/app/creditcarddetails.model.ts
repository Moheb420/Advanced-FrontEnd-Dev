// creditcard.model.ts
export interface CreditCardDetails {
    card_number: number;
    cardholder_name: string;
    csc_code: number;
    expiration_date_month: number;
    expiration_date_year: number;
    issuer: string;
  }
  