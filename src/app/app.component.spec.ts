import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
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

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        WjInputModule,
        WjChartModule,
        WjGridModule,
        WjGaugeModule
      ],
      providers: [DynamicComponentService],
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
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
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
        ]
      }
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Dynamic Dashboard'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Dynamic Dashboard');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.header h1').textContent).toContain('Dynamic Dashboard');
  });
});
