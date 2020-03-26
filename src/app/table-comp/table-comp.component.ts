import { Component, Input } from '@angular/core';

  @Component({
    selector: 'app-my-table',
    templateUrl: './table-comp.component.html',
    styleUrls: ['./table-comp.component.css'],
  })
  
export class TableComponent {
    @Input('dataSource') dataSource: [];
    @Input('displayedColumns') displayedColumns: string[];    
}