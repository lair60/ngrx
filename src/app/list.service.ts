import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class CountriesService {
    constructor (private http: HttpClient) {}
    
    getRegions(param: String) {     
        return of({name: 'Europe' },{name: 'Asia'});        
    }

    getCountries(param: String) {
        if (param===""){
            return of();
        }else{
            return this.http.get('https://restcountries.com/v3.1/region/' + param);
        }      
    }
  }






