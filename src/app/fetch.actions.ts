import { createAction, props  } from '@ngrx/store';

export const getRegions = createAction('[List Component] getRegions', props<{param : string}>());
export const getCountries = createAction('[List Component] getCountries', props<{param : string}>());
export const fetchDataDone = createAction('[Random] Data call done', props<{ data: any }>());

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/