import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v3.1'; 

  //private apiURLRegion: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams()
            .set('fields', 'name,capital,population,flags,cca2');
            
  }

  get httpParamsV2() {
    return new HttpParams()
            .set('fields', 'name,capital,population,flags,alpha2Code');
            
  }

  constructor(private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]> {
    const url: string = `${ this.apiURL }/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
      /*.pipe(
        catchError( err => of([]))
      );*/
  }

  buscarCapital( termino: string): Observable<Country[]> {
    const url: string = `${ this.apiURL }/capital/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
      /*.pipe(
        catchError( err => of([]))
      );*/
  }

  getPaisPorAlpha( id: string): Observable<Country> {
    const url: string = `${ this.apiURL }/alpha/${id}`;

    return this.http.get<Country>(url);
      /*.pipe(
        catchError( err => of([]))
      );*/
  }

  buscarRegion( region: string): Observable<Country[]> {

    const url: string = `${ this.apiURL }/region/${region}`;

    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      )
      /*.pipe(
        catchError( err => of([]))
      );*/
  }

}
