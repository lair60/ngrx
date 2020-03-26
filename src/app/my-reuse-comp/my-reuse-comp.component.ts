import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-comp1',
  templateUrl: './my-reuse-comp.component.html',
  styleUrls: ['./my-reuse-comp.component.css'],
})

export class MyComponent1 {
  @Input('label') label: string;
  @Input('items') items: Observable<Array<Object>>;
  previousValue : string = "";
  @Output() itemSelected = new EventEmitter<Object>();
  onChange(event) {
    if(event.isUserInput && (this.previousValue !== event.source.value.name)) {
      this.previousValue = event.source.value.name;
      this.itemSelected.emit( event ? event.source : "");           
    }
  }
}