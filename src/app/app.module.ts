import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { HomeComponent } from './home/home.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductOverviewComponent,
    HomeComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
