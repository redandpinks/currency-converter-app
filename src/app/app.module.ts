import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component'; // Import CurrencyConverterComponent
import { ExchangeRateService } from './services/exchange-rate.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent  // Declare CurrencyConverterComponent here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ExchangeRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }