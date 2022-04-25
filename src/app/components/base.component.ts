import * as wjcCore from '@grapecity/wijmo';
import { Component } from '@angular/core';

import { getData } from '../app.data';

@Component({
    selector: 'app-dyna',
    template: '',
})
export class BaseComponent {
    dynaCom = '';
    data: wjcCore.CollectionView;

    constructor() {
        this.data = new wjcCore.CollectionView(getData());
    }
}
