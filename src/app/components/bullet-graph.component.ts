import { Component, HostBinding } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-bullet-graph',
  templateUrl: './bullet-graph.component.html',
})
export class BulletGraphComponent extends BaseComponent {
  constructor() {
    super();
  }
  @HostBinding('class') class = 'tile';
  @HostBinding('attr.draggable') draggable = true;
}
