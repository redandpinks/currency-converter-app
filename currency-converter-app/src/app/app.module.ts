import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component'; // Import component

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent // Add component here
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Import to make HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }