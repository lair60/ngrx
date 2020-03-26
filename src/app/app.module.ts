import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { listRegions , listCountries } from './fetch.reducer';
import { MyComponent1 } from './my-reuse-comp/my-reuse-comp.component';
import { EffectsModule } from '@ngrx/effects';
import { DataService } from './data.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table-comp/table-comp.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AppComponent , MyComponent1,TableComponent],
  imports: [    
    MatTableModule,    
    NgSelectModule,
    BrowserAnimationsModule,
    MatSelectModule,
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([DataService]),
    StoreModule.forRoot({ 
      regions : listRegions,
      countries : listCountries
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/