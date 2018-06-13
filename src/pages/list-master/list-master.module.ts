import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterPage } from './list-master';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListMasterPage
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild(),
    SharedModule
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule {


}
