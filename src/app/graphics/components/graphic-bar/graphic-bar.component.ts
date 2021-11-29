import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styleUrls: ['./graphic-bar.component.scss'],
})
export class GraphicBarComponent implements OnInit {
  @Input()
  public horizontal: boolean = false;

  @Input()
  public barChartLabels: Label[] = [
    // '2017',
    // '2018',
    // '2019',
    // '2020',
    // '2021',
    // '2022',
    // '2023',
  ];

  @Input()
  public barChartType: ChartType = 'bar';

  @Input()
  public barChartData: ChartDataSets[] = [
    // {
    //   data: [65, 59, 80, 81, 56, 55, 40],
    //   label: 'Series A',
    //   backgroundColor: '#6EB5F5',
    //   hoverBackgroundColor: '#C0ADD9',
    // },
    // {
    //   data: [28, 48, 40, 19, 86, 27, 90],
    //   label: 'Series B',
    //   backgroundColor: '#8EDB97',
    //   hoverBackgroundColor: '#C2D8D4',
    // },
    // {
    //   data: [8, 33, 70, 59, 66, 80, 100],
    //   label: 'My name',
    //   backgroundColor: '#F2E291',
    //   hoverBackgroundColor: '#ADD9D1',
    // },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLegend = true;

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }
}
