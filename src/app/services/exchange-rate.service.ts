import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importing map from rxjs to transform the data

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private apiUrl: string = 'https://api.exchangerate-api.com/v4/latest/'; // API URL

  constructor(private http: HttpClient) {}

  // Method to fetch exchange rate
  getExchangeRate(fromCurrency: string, toCurrency: string): Observable<number> {
    return this.http.get<any>(`${this.apiUrl}${fromCurrency}`).pipe(
      map(data => data.rates[toCurrency]) // Extract the specific rate from the response
    );
  }
}