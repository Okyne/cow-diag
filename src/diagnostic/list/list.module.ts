import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListPage } from './list';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListPage
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
    TranslateModule.forChild(),
    SharedModule
  ],
  exports: [
    ListPage
  ]
})
export class ListPageModule {


}
