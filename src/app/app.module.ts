import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BuySellModalComponent } from './buy-sell-modal/buy-sell-modal.component';
import { Web3Service } from './services/web3.service';

@NgModule({
  declarations: [
    AppComponent,
    BuySellModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]), // add this line for RouterModule
  ],
  providers: [Web3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
