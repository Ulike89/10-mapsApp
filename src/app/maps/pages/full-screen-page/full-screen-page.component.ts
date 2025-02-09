import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl';

@Component({
  standalone: false,
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if(!this.divMap) 
      throw 'El elemento divMap HTML no fue encontrado'

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-99.05221383898868, 19.455383058544797], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
  }
}