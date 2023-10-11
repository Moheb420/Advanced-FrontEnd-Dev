import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditcardlistComponent } from '../app/creditcard/creditcardlist/creditcardlist.component';
import { CreditcarddetailsscreenComponent } from './creditcarddetailsscreen/creditcarddetailsscreen.component';
import { CreditcardaddComponent } from './creditcard/creditcardadd/creditcardadd.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { TransactionaddComponent } from './transaction/transactionadd/transactionadd.component';
import { TransactionoverviewComponent } from './transaction/transactionoverview/transactionoverview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transactionoverview/:card_number', component: TransactionoverviewComponent },
  {path:'creditcardlist/:card_number', component:CreditcardlistComponent},
  {path:'creditcarddetailsscreen/:card_number', component:CreditcarddetailsscreenComponent},
  {path:'creditcardadd', component:CreditcardaddComponent},
  // {path:'transactions', component:TransactionsComponent},
  {path:'transactionlist/:card_number', component: TransactionlistComponent},
  {path:'transactionadd', component: TransactionaddComponent},
  {path:'transactionoverview', component:TransactionoverviewComponent}
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
