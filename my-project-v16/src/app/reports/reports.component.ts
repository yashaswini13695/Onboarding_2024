import { Component,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    Highcharts.chart('bar-chart-container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Vertical Bar Chart'
      },
      xAxis: {
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
      },
      yAxis: {
        title: {
          text: 'Values'
        }
      },
      series: [{
        type: 'column', // Ensure the type is specified
        name: 'Data',
        data: [5, 10, 15, 20, 25] // Static data
      }]
    });
  }

}