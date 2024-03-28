import { NgModule } from '@angular/core';
import { VerticleBarGraphComponent } from './verticle-bar-graph/verticle-bar-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';
@NgModule({
    declarations: [
    VerticleBarGraphComponent,
    PieChartComponent,
    AreaChartComponent,
    HorizontalBarGraphComponent
  ], imports: []
})
export class ReportModule {}