import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocBuildingInfo } from '../soc-building-info/soc-building-info';


@IonicPage()

@Component({
  selector: 'page-soc-building',
  templateUrl: 'soc-building.html',
})
export class SocBuilding {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nextPage() {
  	this.navCtrl.push(SocBuildingInfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocBuilding');
  }

}
