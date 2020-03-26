import { createReducer, on } from '@ngrx/store';
import { getRegions, getCountries, fetchDataDone} from './fetch.actions';

export const initialRegions = [{name: 'Europe' },{name: 'Asia'}];
export const initialCountries = [];

const _listRegions = createReducer(initialRegions,
  on(getRegions, state => state)  
);

const _listCountries = createReducer(initialCountries,  
  on(getCountries, state => state),
  on(fetchDataDone, (state, {data}) => data)
);

export function listRegions(state, action) {
  return _listRegions(state, action);
}
export function listCountries(state, action) {
  return _listCountries(state, action);
}



/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/