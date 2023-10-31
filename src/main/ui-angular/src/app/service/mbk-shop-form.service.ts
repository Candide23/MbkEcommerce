import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Country } from '../common/country';
import { State } from '../common/state';

@Injectable({
  providedIn: 'root'
})
export class MbkShopFormService {

  private countriesUrl = 'http://localhost:8080/api/countries';
  private statesUrl = 'http://localhost:8080/api/states';

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<Country[]> {

    return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
      map(response => response._embedded.countries)
    );
  }


  getStates(theCountryCode: string): Observable<State[]> {

    //search url
    const searchStatesUrl = `${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`;
    return this.httpClient.get<GetResponseStates>(searchStatesUrl).pipe(
      map(response => response._embedded.states)
    );
  }

  getCreditCardMonths(startMonth: number):Observable<number[]>{

    let data: number[] = [];

    //build an array for "Month" dropdown list
    // - start at current month and loop until

    for(let theMonth = startMonth; theMonth <= 12; theMonth++){
      data.push(theMonth);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {

    let data: number[] =[];

    const statYear: number = new Date().getFullYear();
    const endYear: number = statYear + 10;

    for(let theYear = statYear; theYear <= endYear; theYear++){
      data.push(theYear);
    }

    return of(data);
  }


}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  }
}

interface GetResponseStates {
  _embedded: {
    states: State[];
  }

}
