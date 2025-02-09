import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {Map, Marker} from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  standalone: false,
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent {
  @Input() minilngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(){
    if(!this.divMap) throw 'El div mini-map no fue encontrado';
    if(!this.minilngLat) throw 'LngLat no puede ser nula';

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.minilngLat,
      zoom: 13,
      interactive: false
    });

    new Marker()
    .setLngLat(this.minilngLat)
    .addTo(map);
  }
}