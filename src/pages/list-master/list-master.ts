import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Diagnostics } from '../../mocks/providers/diagnostics';
import { FormDiagnosticPage } from '../form-diagnostic/form-diagnostic'

@IonicPage({
  segment: 'list'
})
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentDiagnostics: any
  newDiagnostic: any

  constructor(public navCtrl: NavController, public diagnostics: Diagnostics) {
    this.currentDiagnostics = diagnostics.query();
    this.newDiagnostic = FormDiagnosticPage;
  }

  deleteDiagnostic(diagnostic) {
    this.currentDiagnostics = this.diagnostics.delete(diagnostic);
  }
}
