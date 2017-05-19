import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-soc-building-map',
  templateUrl: 'soc-building-map.html',
})

export class SocBuildingMap {
  @ViewChild('map') mapElement;
	map: any;
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}

	ionViewDidLoad(){
    	this.loadMap();
  }

  loadMap(){
    let latLng = new google.maps.LatLng(59.396945, 24.670000);
  	let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    })
	}
}
