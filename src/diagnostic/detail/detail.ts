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
    this.diagnostic = this.diagnosticService.getDiagnostic(this.navParams.get('id'));
  }

  saveDiagnostic () {
    this.diagnosticService.save(this.diagnostic)
    this.navCtrl.push('ListPage')
  }

}
