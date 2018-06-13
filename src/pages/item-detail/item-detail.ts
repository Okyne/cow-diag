import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Diagnostic } from '../../models/diagnostic';
import { Diagnostics } from '../../providers';

@IonicPage({
  segment: 'diagnostic/:id'
})
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage implements OnInit {
  diagnostic: Diagnostic;

  constructor(public navCtrl: NavController, public navParams: NavParams, public diagnostics: Diagnostics) {}

  ngOnInit() {
    this.diagnostic = this.diagnostics.getDiagnostic(this.navParams.get('id'));
  }

  saveDiagnostic () {
    this.diagnostics.save(this.diagnostic)
    this.navCtrl.push('ListMasterPage')
  }

}
