import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DetailPage } from './detail';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DetailPage
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    TranslateModule.forChild(),
    SharedModule
  ],
  exports: [
    DetailPage
  ]
})
export class DetailPageModule { }
