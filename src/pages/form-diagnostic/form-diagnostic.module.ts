import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FormDiagnosticPage } from './form-diagnostic';

@NgModule({
  declarations: [
    FormDiagnosticPage,
  ],
  imports: [
    IonicPageModule.forChild(FormDiagnosticPage),
    TranslateModule.forChild()
  ],
  exports: [
    FormDiagnosticPage
  ]
})
export class FormDiagnosticPageModule { }
