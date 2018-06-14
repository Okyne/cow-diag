import { Component, Input, AfterContentInit, ElementRef } from '@angular/core';
import * as _ from 'underscore';
import Chart from 'chart.js';

import { Diagnostic } from '../../shared/diagnostic.model';
import { DiagnosticService } from '../../shared/diagnostic.service';

@Component({
  selector: 'neo-chart',
  template: `<div [style.width.px]="svgWidth" [style.height.px]="svgHeight" [class]="format ? 'large': ''">
      <canvas></canvas>
    </div>`
})
export class NeoChartComponent implements AfterContentInit {
  @Input() diagnostic: Diagnostic;
  @Input() format: any;

  chart: any;
  svgWidth: number;
  svgHeight: number;

  constructor(public element: ElementRef, public diagnosticService: DiagnosticService) {}

  ngAfterContentInit(): void {
    this.svgWidth = this.svgHeight = this.format == 'large' ? 250 : 50;
    this.chart = new Chart(this.element.nativeElement.querySelector('canvas'), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: _.map(this.diagnosticService.getChartData([])(this.diagnostic), 'value'),
          backgroundColor: [
            '#c30436',
            '#576065'
          ]
        }],
        labels: _.map(this.diagnosticService.getChartData([])(this.diagnostic), 'label')
      },
        options: {
          legend: {
            display: this.format ? true : false,
            position: 'bottom',
            labels: {
              fontColor: '#000'
            }
          },
          maintainAspectRatio : false
        }
    });
  }

  ngOnDestroy() {
    this.chart.destroy();
  }
}
