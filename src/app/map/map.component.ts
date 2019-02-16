import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    latitude = 33.6405;
    longitude = -117.838;
    mapType = 'satellite';
    zoom = 18;

    constructor() {
    }


    ngOnInit() {
    }
}
