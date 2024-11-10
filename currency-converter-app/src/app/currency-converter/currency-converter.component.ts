import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../services/exchange-rate.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'] // Use CSS or SCSS as you prefer
})
export class CurrencyConverterComponent implements OnInit {
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  currencies: string[] = ['USD', 'EUR', 'GBP', 'JPY'];
  convertedAmount: number | null = null;

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {}

  convertCurrency(): void {
    this.exchangeRateService.getExchangeRate(this.fromCurrency, this.toCurrency).subscribe((rate) => {
      this.convertedAmount = this.amount * rate;
    });
  }
}