import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss'],
})
export class DonaComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Others',
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100, 150]];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#E6D4C3', '#D5F0CC', '#C3CAD9'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
