import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { NeoChartComponent } from './neo-chart/neo-chart.component';

@NgModule({
  imports: [
    ChartsModule
  ],
  declarations: [
    NeoChartComponent
  ],
  exports: [
    NeoChartComponent
  ]
})
export class SharedModule {}
