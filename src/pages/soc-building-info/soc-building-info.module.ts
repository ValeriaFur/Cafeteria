import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SocBuildingInfo } from './soc-building-info';

@NgModule({
  declarations: [
    SocBuildingInfo,
  ],
  exports: [
    SocBuildingInfo
  ]
})
export class SocBuildingInfoModule {}
