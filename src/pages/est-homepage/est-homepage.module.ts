import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EstHomepage } from './est-homepage';

@NgModule({
  declarations: [
    EstHomepage,
  ],
  exports: [
    EstHomepage
  ]
})
export class EstHomepageModule {}
