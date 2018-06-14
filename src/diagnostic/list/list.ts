import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { DiagnosticService } from '../shared/diagnostic.service';

@IonicPage({
  segment: 'list'
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  currentDiagnostics: any

  constructor(public diagnosticService: DiagnosticService) {
    this.currentDiagnostics = diagnosticService.getDiagnostics();
  }

  deleteDiagnostic(diagnostic) {
    this.currentDiagnostics = this.diagnosticService.delete(diagnostic);
  }
}
