import { Component } from '@angular/core';
import { CityService } from './cities.service';
import 'rxjs/add/operator/debounceTime';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchTerm$: Observable<string> = new Subject<string>();
  countriesWithCities: any;
  allCountries: string[] = [];
  countries: string[] = [];
  cities: string[] = [];

  selectedCountry: string;
  selectedCity: string;

  constructor(private cityService: CityService) { }

  ngOnInit() {

    this.getCities();
    this.subscribeToTextChange();
  }

  private getCities() {
    this.cityService.getCities()
      .subscribe(countriesWithCities => {
        this.countriesWithCities = countriesWithCities;
        this.allCountries = Object.keys(countriesWithCities);
        this.countries = Object.keys(countriesWithCities);
      });
  }

  private subscribeToTextChange() {
    this.searchTerm$
      .debounceTime(100)
      .subscribe(term => this.filterCities(term));
  }

  private filterCities(name: string) {
    this.clearForm();
    this.countries = this.allCountries.filter(country =>
      country.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  private onCountryChange(country: string) {
    if (country != null && country.length > 0) {
      this.selectedCountry = country;
      this.cities = this.countriesWithCities[country];
    }
  }

  clearForm() {
    this.selectedCountry = "";
    this.selectedCity = "";
    this.cities.length = 0;

  }
}
