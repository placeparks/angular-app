import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuySellModalComponent } from './buy-sell-modal/buy-sell-modal.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'buy-sell', component: BuySellModalComponent },
  // more routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
