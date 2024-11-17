import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../services/exchange-rate.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  fromCurrency: string = 'USD';    
  toCurrency: string = 'EUR';     
  amount: number = 1;              
  exchangeRate: number = 0;        
  convertedAmount: number = 0;    

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this.getExchangeRate();  
  }

  getExchangeRate(): void {
    this.exchangeRateService.getExchangeRate(this.fromCurrency, this.toCurrency)
      .subscribe(rate => {
        this.exchangeRate = rate;      
        this.convertAmount();          
      });
  }

  convertAmount(): void {
    this.convertedAmount = this.amount * this.exchangeRate;  // Convert amount
  }
}