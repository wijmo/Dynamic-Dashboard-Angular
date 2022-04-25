import { Component, HostBinding } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
})
export class BlankComponent extends BaseComponent {
  constructor() {
    super();
  }

  @HostBinding('class') class = 'tile';
  @HostBinding('attr.draggable') draggable = true;
}
