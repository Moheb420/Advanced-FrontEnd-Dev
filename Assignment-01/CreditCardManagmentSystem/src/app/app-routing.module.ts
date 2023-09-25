import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreditcardlistComponent } from '../app/creditcard/creditcardlist/creditcardlist.component';
import { CreditcarddetailsscreenComponent } from './creditcarddetailsscreen/creditcarddetailsscreen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transactions/:card_number', component: TransactionsComponent },
  {path:'creditcardlist/:card_number', component:CreditcardlistComponent},
  {path:'creditcarddetailsscreen/:card_number', component:CreditcarddetailsscreenComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
