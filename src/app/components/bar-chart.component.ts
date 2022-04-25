import { Component, HostBinding } from '@angular/core';
import { BaseComponent } from './base.component';
import { palette } from '../app.palette';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent extends BaseComponent {
  constructor() {
    super();
  }
  @HostBinding('class') class = 'tile';
  @HostBinding('attr.draggable') draggable = true;

  get palette() {
    return palette;
  }
}
