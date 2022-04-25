import { Component, HostBinding } from '@angular/core';
import { BaseComponent } from './base.component';
import { palette } from '../app.palette';

@Component({
  selector: 'app-linear-gauge',
  templateUrl: './linear-gauge.component.html',
})
export class LinearGaugeComponent extends BaseComponent {
  constructor() {
    super();
  }
  @HostBinding('class') class = 'tile';
  @HostBinding('attr.draggable') draggable = true;

  get palette1() {
    return palette[0];
  }

  get palette2() {
    return palette[1];
  }

  get palette3() {
    return palette[2];
  }
}
