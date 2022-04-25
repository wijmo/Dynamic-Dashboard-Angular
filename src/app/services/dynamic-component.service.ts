import { Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Inject } from '@angular/core';

import { BarChartComponent } from '../components/bar-chart.component';
import { GridComponent } from '../components/grid.component';
import { RadialGaugeComponent } from '../components/radial-gauge.component';
import { LinearGaugeComponent } from '../components/linear-gauge.component';
import { ColumnChartComponent } from '../components/column-chart.component';
import { LineChartComponent } from '../components/line-chart.component';
import { BubbleChartComponent } from '../components/bubble-chart.component';
import { BulletGraphComponent } from '../components/bullet-graph.component';
import { BlankComponent } from '../components/blank.component';

@Injectable()
export class DynamicComponentService {
    private componentFactoryResolver: ComponentFactoryResolver;

    constructor( @Inject(ComponentFactoryResolver) componentFactoryResolver: ComponentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }

    public createDynaComp(vCref: ViewContainerRef, tileType: string): ComponentRef<any> {
        let dynaCmp;
        if (tileType === 'Grid') {
            dynaCmp = GridComponent;
        } else if (tileType === 'Bar Chart') {
            dynaCmp = BarChartComponent;
        } else if (tileType === 'Radial Gauge') {
            dynaCmp = RadialGaugeComponent;
        } else if (tileType === 'Linear Gauge') {
            dynaCmp = LinearGaugeComponent;
        } else if (tileType === 'Column Chart') {
            dynaCmp = ColumnChartComponent;
        } else if (tileType === 'Line Chart') {
            dynaCmp = LineChartComponent;
        } else if (tileType === 'Bubble Chart') {
            dynaCmp = BubbleChartComponent;
        } else if (tileType === 'Bullet Graph') {
            dynaCmp = BulletGraphComponent;
        } else if (tileType === 'Blank') {
            dynaCmp = BlankComponent;
        }

        const factory = this.componentFactoryResolver.resolveComponentFactory(dynaCmp);
        const comp = vCref.createComponent(factory, 0);

        return comp;
    }

    public removeComp(vCref: ViewContainerRef, idx: number) {
        vCref.remove(idx);
    }

    public moveComp(vCref: ViewContainerRef, idx1: number, idx2: number) {
        const hostView = vCref.get(idx1);
        vCref.move(hostView, idx2);
    }
}
