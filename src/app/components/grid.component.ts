import { Component, HostBinding } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent extends BaseComponent {
  constructor() {
    super();
  }
  @HostBinding('class') class = 'tile';
  @HostBinding('attr.draggable') draggable = true;
}
