import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CurrencyConverterComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the title 'currency-converter-app'`, () => {
    expect(app.title).toEqual('currency-converter-app');
  });

  it('should render the title in the header', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to the currency-converter-app!');
  });
});