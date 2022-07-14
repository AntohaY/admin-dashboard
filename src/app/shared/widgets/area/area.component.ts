import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions!: {};
  @Input() data = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Placeholder data'
      },
      subtitle: {
          text: 'Demo'
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: this.data
    };

    HC_exporting(Highcharts);
  }

}
