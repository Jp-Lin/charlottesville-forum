import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { MarketListComponent } from './market/market-list/market-list.component';
import { MarketEntryComponent } from './market/market-entry/market-entry.component';
import { RentingListComponent } from './renting/renting-list/renting-list.component';
import { RentingEntryComponent } from './renting/renting-entry/renting-entry.component';
import { RidesListComponent } from './rides/rides-list/rides-list.component';
import { RidesEntryComponent } from './rides/rides-entry/rides-entry.component';
import { RidesComponent } from './rides/rides.component';
import { RentingComponent } from './renting/renting.component';
import { MarketComponent } from './market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MarketComponent,
    MarketListComponent,
    MarketEntryComponent,
    RentingComponent,
    RentingListComponent,
    RentingEntryComponent,
    RidesComponent,
    RidesListComponent,
    RidesEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
