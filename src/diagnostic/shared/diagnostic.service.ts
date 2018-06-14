import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'underscore';

import { Diagnostic } from '../shared/diagnostic.model';

@Injectable()
export class DiagnosticService {
  diagnostics: Diagnostic[] = [];

  constructor(public translateService: TranslateService) {
    let diagnostics = [
      {
        id: 1,
        count: 50,
        cows: [260, 209, 326, 128, 213, 285, 376, 222, 249, 329, 311, 127, 239, 343, 203, 228, 239, 318, 148, 186, 122, 297, 186, 192, 235, 329, 253, 207, 223, 336, 179, 287, 358, 312, 248, 150, 342, 142, 294, 289, 160, 257, 347, 346, 259, 379, 287, 350, 378, 262],
        date: '2018/06/01',
        ideal: 320,
        max: 380,
        min: 120,
      },
      {
        id: 2,
        count: 75,
        cows: [221, 312, 254, 270, 101, 351, 283, 293, 148, 306, 54, 109, 328, 79, 96, 223, 280, 377, 196, 234, 86, 52, 124, 225, 337, 185, 291, 192, 212, 119, 224, 217, 354, 240, 102, 353, 332, 216, 260, 105, 293, 211, 358, 143, 363, 340, 51, 223, 358, 153, 238, 253, 180, 116, 340, 363, 126, 109, 210, 136, 133, 169, 201, 386, 223, 124, 307, 283, 76, 55, 386, 355, 252, 248, 324],
        date: '2018/06/08',
        ideal: 215,
        max: 389,
        min: 50,
      },
      {
        id: 3,
        count: 99,
        cows: [219, 238, 152, 195, 224, 450, 255, 104, 283, 293, 317, 134, 74, 334, 381, 207, 111, 407, 99, 258, 208, 258, 481, 74, 175, 240, 171, 373, 488, 91, 404, 187, 373, 437, 225, 457, 141, 465, 446, 343, 210, 284, 57, 105, 492, 295, 227, 440, 178, 482, 327, 331, 140, 170, 352, 271, 173, 420, 381, 121, 485, 174, 129, 212, 182, 300, 350, 110, 66, 326, 375, 377, 428, 232, 205, 52, 316, 448, 218, 328, 100, 298, 136, 442, 270, 451, 368, 457, 288, 100, 489, 319, 150, 219, 456, 412, 446, 442, 146],
        date: '2018/06/12',
        ideal: 245,
        max: 500,
        min: 50,
      }
    ];

    for (let diagnostic of diagnostics) {
      this.diagnostics.push(new Diagnostic(diagnostic.id, diagnostic.count, diagnostic.min, diagnostic.max, diagnostic.ideal, diagnostic.cows));
    }
  }

  delete(diagnostic: Diagnostic) {
    this.diagnostics = _.reject(this.diagnostics, function(d) {
      if (d.id == diagnostic.id) return d;
    });
    return this.diagnostics;
  }

  generateCows(diagnostic: Diagnostic) {
    for (let i = 0; i < diagnostic.count; i++) {
      diagnostic.cows.push(Math.floor(Math.random()*(diagnostic.max - diagnostic.min + 1) + diagnostic.min));
    }
    return diagnostic;
  }

  getChartData(chartData) {
    chartData = chartData || [];
    let labelOver, labelUnder;
    this.translateService.get('DIAGNOSTIC_SERVICE_LABEL_OVER').subscribe(
      label => {
        labelOver = label;
      }
    )
    this.translateService.get('DIAGNOSTIC_SERVICE_LABEL_UNDER').subscribe(
      label => {
        labelUnder = label;
      }
    )
    return function (diagnostic: Diagnostic) {
      let overweighted = _.filter(diagnostic.cows, function(weight) {
          if (weight > diagnostic.ideal) return weight;
        }).length;
      chartData.push({
        label: labelOver + diagnostic.ideal + ' kg',
        value: overweighted,
      })
      chartData.push({
        label: labelUnder + diagnostic.ideal + ' kg',
        value: diagnostic.cows.length - overweighted,
      })
      return chartData;
    }
  }

  getDiagnostic(diagnostic: Diagnostic) {
    let id = diagnostic && diagnostic.id || diagnostic;
    return _.findWhere(this.diagnostics, {id: id});
  }

  getDiagnostics(params?: any) {
    if (!params) {
      return this.diagnostics;
    }

    return this.diagnostics.filter((diagnostic) => {
      for (let key in params) {
        let field = diagnostic[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return diagnostic;
        } else if (field == params[key]) {
          return diagnostic;
        }
      }
      return null;
    });
  }

  getNextId() {
    return _.max(this.diagnostics, function(diagnostic) {
      return diagnostic.id;
    }).id ++;
  }

  initializeDiagnostic() {
    return new Diagnostic(this.getNextId(), null, null, null, null, null);
  }

  save(diagnostic: Diagnostic) {
    this.diagnostics.push(diagnostic);
    return diagnostic;
  }
}
