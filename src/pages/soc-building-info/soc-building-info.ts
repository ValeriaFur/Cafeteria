import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocBuildingMap } from '../soc-building-map/soc-building-map';


@IonicPage()

@Component({
  selector: 'page-soc-building-info',
  templateUrl: 'soc-building-info.html',
})
export class SocBuildingInfo {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocBuildingInfo');
  }

  nextPage() {
    this.navCtrl.push(SocBuildingMap);
  }

}
