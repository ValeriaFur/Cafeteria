import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SocBuilding } from './soc-building';

@NgModule({
  declarations: [
    SocBuilding,
  ],
  exports: [
    SocBuilding
  ]
})
export class SocBuildingModule {}
