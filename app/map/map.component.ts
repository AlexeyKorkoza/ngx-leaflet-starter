import {
    Component,
    OnInit
} from '@angular/core';

declare var L: any;
declare var Icon: any;

@Component({
    selector: 'map',
    templateUrl: 'app/map/map.component.html',
})

export class MapComponent implements OnInit {

    ngOnInit() {

        let map = L.map("map", {
            zoomControl: false,
            center: L.latLng(53.6834599, 23.8342648),
            zoom: 13,
            minZoom: 4,
            maxZoom: 19,
            layers: [L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
            })]
        });

        let LeafIcon = L.Icon.extend({
            options: {
                iconSize: [54, 54],
                iconAnchor: [16, 37],
                popupAnchor: [0, -30]
            }
        });

        L.control.zoom({position: "topright"}).addTo(map);
    }
}