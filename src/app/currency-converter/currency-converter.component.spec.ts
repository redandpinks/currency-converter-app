import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../services/exchange-rate.service'; // Import the service

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  amount: number = 0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  result: number | null = null;

  // List of available currencies
  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR'];

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    // Initialize any data if needed
  }

  convertCurrency(): void {
    this.exchangeRateService.getExchangeRate(this.fromCurrency, this.toCurrency).subscribe(rate => {
      this.result = this.amount * rate;
    });
  }
}
