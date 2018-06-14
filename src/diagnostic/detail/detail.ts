import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Diagnostic } from '../shared/diagnostic.model';
import { DiagnosticService } from '../shared/diagnostic.service';

@IonicPage({
  segment: 'diagnostic/:id'
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage implements OnInit {
  diagnostic: Diagnostic;

  constructor(public navCtrl: NavController, public navParams: NavParams, public diagnosticService: DiagnosticService) {}

  ngOnInit() {
    this.diagnostic = this.navParams.get('diagnostic') ? this.navParams.get('diagnostic') : this.diagnosticService.getDiagnostic(this.navParams.get('id'));
    if (this.diagnostic && !this.diagnostic.cows.length) this.diagnosticService.generateCows(this.diagnostic);
  }

  isStored() {
    return this.diagnosticService.getDiagnostic(this.diagnostic)
  }

  saveDiagnostic () {
    this.diagnosticService.save(this.diagnostic)
    this.navCtrl.push('ListPage')
  }

}
