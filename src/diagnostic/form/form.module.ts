import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FormPage } from './form';

@NgModule({
  declarations: [
    FormPage,
  ],
  imports: [
    IonicPageModule.forChild(FormPage),
    TranslateModule.forChild()
  ],
  exports: [
    FormPage
  ]
})
export class FormPageModule { }
