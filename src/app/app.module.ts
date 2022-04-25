import '../license';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponentService } from './services/dynamic-component.service';
import { BarChartComponent } from './components/bar-chart.component';
import { GridComponent } from './components/grid.component';
import { RadialGaugeComponent } from './components/radial-gauge.component';
import { LinearGaugeComponent } from './components/linear-gauge.component';
import { ColumnChartComponent } from './components/column-chart.component';
import { LineChartComponent } from './components/line-chart.component';
import { BubbleChartComponent } from './components/bubble-chart.component';
import { BulletGraphComponent } from './components/bullet-graph.component';
import { BlankComponent } from './components/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    GridComponent,
    RadialGaugeComponent,
    LinearGaugeComponent,
    ColumnChartComponent,
    LineChartComponent,
    BubbleChartComponent,
    BulletGraphComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjInputModule,
    WjChartModule,
    WjGridModule,
    WjGaugeModule
  ],
  providers: [DynamicComponentService],
  entryComponents: [
    BarChartComponent,
    GridComponent,
    RadialGaugeComponent,
    LinearGaugeComponent,
    ColumnChartComponent,
    LineChartComponent,
    BubbleChartComponent,
    BulletGraphComponent,
    BlankComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
