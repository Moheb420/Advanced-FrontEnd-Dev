import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { CreditcardlistComponent } from '../app/creditcard/creditcardlist/creditcardlist.component';
import { CreditcarddetailsscreenComponent } from './creditcarddetailsscreen/creditcarddetailsscreen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreditcardaddComponent } from './creditcard/creditcardadd/creditcardadd.component';
import { CreditcardModule } from './creditcard/creditcard.module';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { TransactionModule } from './transaction/transaction.module';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    HomeComponent,
    NavigationbarComponent,
    CreditcardlistComponent,
    CreditcarddetailsscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreditcardModule,
    TransactionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
