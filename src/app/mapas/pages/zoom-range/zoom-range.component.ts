import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{
      width: 100%;
      height: 100%
    }
    .row{
      background-color: white;
      z-index: 99999;
      position: fixed;
      bottom: 50px;
      left:50px;
      padding: 10px;
      border-radius: 5px;

    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {
@ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number =10 

  constructor() { /*console.log('constructor-',this.divMapa)*/}

  ngAfterViewInit(): void {
    console.log('AfterViewinit-',this.divMapa);
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -100.87453064961822,21.46533511524833 ],
      zoom: this.zoomLevel
  });
  }
  zoomIn(){
 this.mapa.zoomIn();
 console.log(this.mapa.getZoom());
 this.zoomLevel= this.mapa.getZoom();
  }
  zoomOut(){
   this.mapa.zoomOut();
   console.log(this.mapa.getZoom());
   this.zoomLevel= this.mapa.getZoom();
   // console.log('zoomOut-',this.divMapa);
  }

}
