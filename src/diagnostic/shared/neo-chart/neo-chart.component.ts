import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { Diagnostic } from '../../shared/diagnostic.model';
import { DiagnosticService } from '../../shared/diagnostic.service';

@Component({
  selector: 'neo-chart',
  template: `<div [class]="(format ? 'large' : '') + 'neo-chart-container'">
    <canvas baseChart
            [data]="donutChartData"
            [labels]="donutChartLabels"
            [chartType]="donutChartType"></canvas>
  </div>`
})
export class NeoChartComponent implements OnInit {
  @Input() diagnostic: Diagnostic;
  @Input() format: any;

  svgWidth: number;
  svgHeight: number;
  donutChartData: any[];
  donutChartLabels: any[];
  donutChartType: string;

  constructor(public diagnosticService: DiagnosticService) {}

  ngOnInit(): void {
    this.svgWidth = this.svgHeight = this.format == 'large' ? 250 : 50;
    this.donutChartData = _.map(this.diagnosticService.getChartData([])(this.diagnostic), 'value');
    this.donutChartLabels = _.map(this.diagnosticService.getChartData([])(this.diagnostic), 'label');
    this.donutChartType = 'doughnut';
  }
}
