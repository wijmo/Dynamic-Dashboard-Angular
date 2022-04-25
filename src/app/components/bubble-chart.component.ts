import { Component, HostBinding } from '@angular/core';
import { BaseComponent } from './base.component';
import { palette } from '../app.palette';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
})
export class BubbleChartComponent extends BaseComponent {
  constructor() {
    super();
  }
  @HostBinding('class') class = 'tile';
  @HostBinding('attr.draggable') draggable = true;

  get palette() {
    return palette;
  }
}
