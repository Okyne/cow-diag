import { NgModule } from '@angular/core';
import { DoughnutChartComponent } from 'angular-d3-charts';

import { NeoChartComponent } from './neo-chart/neo-chart.component';

@NgModule({
  imports: [],
  declarations: [
    DoughnutChartComponent,
    NeoChartComponent
  ],
  exports: [
    NeoChartComponent
  ]
})
export class SharedModule {}
