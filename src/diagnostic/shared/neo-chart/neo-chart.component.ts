import { Component, Input, OnInit } from '@angular/core';

import { Diagnostic } from '../../shared/diagnostic.model';
import { DiagnosticService } from '../../shared/diagnostic.service';

@Component({
  selector: 'neo-chart',
  template: `<angular-d3-donut [id]="donutChartId" [data]="donutChartData" [width]="svgWidth" [height]="svgHeight"
            outerRadius="25" innerRadius="10"></angular-d3-donut>`
})
export class NeoChartComponent implements OnInit {
  @Input() diagnostic: Diagnostic;
  @Input() format: any;
  @Input() hasLabel: boolean;

  svgWidth: number;
  svgHeight: number;
  donutChartId: any;
  donutChartData: any[];

  constructor(public diagnosticService: DiagnosticService) {}

  ngOnInit(): void {
    this.svgWidth = this.svgHeight = this.format == 'large' ? 250 : 50;
    this.donutChartId = 'chart_' + this.diagnostic.id
    this.donutChartData = this.diagnosticService.getChartData([])(this.diagnostic);
  }
}
