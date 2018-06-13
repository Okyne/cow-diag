import { Injectable } from '@angular/core';

import { Diagnostic } from '../../models/diagnostic';

@Injectable()
export class Diagnostics {

  constructor() { }

  add(diagnostic: Diagnostic) {
  }

  delete(diagnostic: Diagnostic) {
  }

  initialize(diagnostic: Diagnostic) {
    return diagnostic
  }
  query(params?: any) {
    //return this.api.get('/items', params);
  }

}
