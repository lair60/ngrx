import * as fromReducer from './app/fetch.reducer';
import * as fromActions from './app/fetch.actions';
import {DataService } from './app/data.effects';
import { CountriesService } from './app/list.service';
import { Actions, ofType } from '@ngrx/effects';

describe('Fetch Regions', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialRegions } = fromReducer;
      const action = {};
      const state = fromReducer.listRegions(undefined, action);

      expect(state).toBe(initialRegions);
    });
  });
  // I nest all tests under the reducer's name 
  // for readability in the terminal
});

describe('Fetch Countries', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialCountries } = fromReducer;
      const action = {};
      const state = fromReducer.listCountries(undefined, action);

      expect(state).toBe(initialCountries);
    });
  });
  // I nest all tests under the reducer's name 
  // for readability in the terminal
});
/*

describe('LOAD_PIZZAS action', () => {
  it('should set loading to true', () => {
    const actions = new Actions(
      ofType(fromActions.getRegions,fromActions.getCountries)      
    );
    const effects = new DataService(fromActions.getCountries, CountriesService);

    const { initialCountries } = fromReducer;
    const action = fromActions.getCountries({param: "Europe"});
    const state = fromReducer.listCountries(initialCountries, action);

    expect(state.length>0).toEqual(true);
    // untouched props, good to add regardless
    //expect(state.loaded).toEqual(false);
    //expect(state.entities).toEqual({});
  });
});
*/