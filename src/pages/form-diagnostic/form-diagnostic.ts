import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'underscore';

import { Diagnostics } from '../../mocks/providers/diagnostics';

@IonicPage({
  segment: 'form'
})
@Component({
  selector: 'form-diagnostic',
  templateUrl: 'form-diagnostic.html'
})
export class FormDiagnosticPage {

  newDiagnostic: any

  constructor(private diagnostics: Diagnostics, public alertCtrl: AlertController, public navCtrl: NavController, public translateService: TranslateService) {
    this.newDiagnostic = this.diagnostics.initialize()
  }

  createDiagnostic () {
    if (_.contains(this.newDiagnostic, null)) {
      let alertTitle, alertSubtitle
      this.translateService.get('FORM_DIAGNOSTIC_WARNING_TITLE').subscribe(
        title => {
          alertTitle = title;
        }
      )
      this.translateService.get('FORM_DIAGNOSTIC_WARNING_SUBTITLE').subscribe(
        subtitle => {
          alertSubtitle = subtitle;
        }
      )
      this.alertCtrl.create({
        title: alertTitle,
        subTitle: alertSubtitle,
        buttons: ['OK']
      }).present();
      return false
    }
    this.diagnostics.save(this.newDiagnostic)
    this.navCtrl.push('ItemDetailPage', {
      id: this.newDiagnostic.id
    });
  }

}
