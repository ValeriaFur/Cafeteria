import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Campaigns } from './campaigns';

@NgModule({
  declarations: [
    Campaigns,
  ],
  exports: [
    Campaigns
  ]
})
export class CampaignsModule {}
