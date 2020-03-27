import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CountriesService } from './list.service';
import {
    getRegions,
    getCountries,
    fetchDataDone
  } from './fetch.actions';
@Injectable()
export class DataService {
    @Effect()
    getData$ = this.actions$.pipe(
      ofType(getRegions,getCountries),
      switchMap(action => {
        if (action.type === getRegions.type){
            return this.countriesService.getRegions(action.param).pipe(
                map((response) => fetchDataDone({data: response})),
                catchError(error => "")
              );
        }else{
            return this.countriesService.getCountries(action.param).pipe(
                map((response) => fetchDataDone({data: response})),
                catchError(error => "")
              );
        }          
      })
    );

    
 
  constructor(
    private actions$: Actions,
    private countriesService: CountriesService
  ) {}
}