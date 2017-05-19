import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocBuilding } from '../soc-building/soc-building';
import { Campaigns } from '../campaigns/campaigns';
import {About} from '../about/about';
import { EstHomepage } from '../est-homepage/est-homepage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {}

  nextPage(){
  	this.navCtrl.push(SocBuilding);
  }

  nextPageCampaigns(){
    this.navCtrl.push(Campaigns);
  }

  nextPageAbout(){
    this.navCtrl.push(About);
  }

  estPage() {
    this.navCtrl.push(EstHomepage);
  }

}
