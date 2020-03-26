import { Component} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getRegions, getCountries } from './fetch.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {

  labelRegion: string = "Region"; 
  labelCountries: string = "Country";
  showTable : boolean = false;
  itemsRegions :   Observable<Array<{name: string}>>;
  itemsCountries :   Observable<Array<{name: string}>>;
  constructor(private store: Store<{ regions: {name: string;}[] , countries: {name: string;}[]}>) {
    this.itemsRegions = store.pipe(select('regions'));
    this.itemsCountries = store.pipe(select('countries'));
  }

  onSelected(itemSelected: any) {    
    this.getCountries(itemSelected.value.name);    
    this.dataSource = [];
    this.showTable= false;
  }

  onCountrySelected(countrySelected: any) {        
    if (countrySelected.value.name!==""){
      this.dataSource = [countrySelected.value];
      this.showTable= true;
    }else{
      this.dataSource = [];
      this.showTable= false;
    }    
  }

  getRegions(sName : string) {    
    this.store.dispatch(getRegions({param: sName}));    
  }

  getCountries(sName : string) {
    this.store.dispatch(getCountries({param: sName}));
  }

  displayedColumns: string[] = ['name', 'capital', 'population', 'currencies', 'flag'];
  dataSource = [];  
}








/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/