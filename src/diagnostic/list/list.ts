import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { DiagnosticService } from '../shared/diagnostic.service';
import { FormPage } from '../form/form'

@IonicPage({
  segment: 'list'
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  currentDiagnostics: any
  newDiagnostic: any

  constructor(public navCtrl: NavController, public diagnosticService: DiagnosticService) {
    this.currentDiagnostics = diagnosticService.getDiagnostics();
    this.newDiagnostic = FormPage;
  }

  deleteDiagnostic(diagnostic) {
    this.currentDiagnostics = this.diagnosticService.delete(diagnostic);
  }
}
