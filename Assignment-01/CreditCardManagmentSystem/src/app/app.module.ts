import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { CreditcardlistComponent } from '../app/creditcard/creditcardlist/creditcardlist.component';
import { CreditcarddetailsscreenComponent } from './creditcarddetailsscreen/creditcarddetailsscreen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreditcardModule } from './creditcard/creditcard.module';
import { TransactionModule } from './transaction/transaction.module';
import { RouterModule } from '@angular/router';
import { TransactionoverviewComponent } from './transaction/transactionoverview/transactionoverview.component';
import { TransactionaddComponent } from './transaction/transactionadd/transactionadd.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationbarComponent,
    CreditcardlistComponent,
    CreditcarddetailsscreenComponent,
    TransactionoverviewComponent,
    TransactionaddComponent
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
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
