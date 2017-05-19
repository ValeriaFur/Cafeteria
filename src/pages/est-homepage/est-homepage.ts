import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-est-homepage',
  templateUrl: 'est-homepage.html',
})
export class EstHomepage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstHomepage');
  }

  engPage(){
    this.navCtrl.push(HomePage);
  }

}
