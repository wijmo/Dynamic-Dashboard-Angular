import { Component, HostBinding } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-radial-gauge',
  templateUrl: './radial-gauge.component.html',
})
export class RadialGaugeComponent extends BaseComponent {
  constructor() {
    super();
  }
  @HostBinding('class') class = 'tile';
  @HostBinding('attr.draggable') draggable = true;
}
