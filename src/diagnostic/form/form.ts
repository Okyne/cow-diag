import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'underscore';

import { DiagnosticService } from '../shared/diagnostic.service';

@IonicPage({
  segment: 'form'
})
@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {

  newDiagnostic: any

  constructor(private diagnosticService: DiagnosticService, public alertCtrl: AlertController, public navCtrl: NavController, public translateService: TranslateService) {
    this.newDiagnostic = this.diagnosticService.initializeDiagnostic()
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
    this.navCtrl.push('DetailPage', {
      id: this.newDiagnostic.id,
      diagnostic: this.newDiagnostic
    });
  }

}
