import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SocBuilding } from '../pages/soc-building/soc-building';
import { SocBuildingInfo } from '../pages/soc-building-info/soc-building-info';
import { SocBuildingMap } from '../pages/soc-building-map/soc-building-map';
import { Campaigns } from '../pages/campaigns/campaigns';
import {About} from '../pages/about/about';
import { EstHomepage } from '../pages/est-homepage/est-homepage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SocBuilding,
    SocBuildingInfo,
    SocBuildingMap,
    Campaigns,
    About,
    EstHomepage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SocBuilding,
    SocBuildingInfo,
    SocBuildingMap,
    Campaigns,
    About,
    EstHomepage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
