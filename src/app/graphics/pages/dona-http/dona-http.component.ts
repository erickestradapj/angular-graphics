import { Component, OnInit } from '@angular/core';
import { GraphicsService } from '../../services/graphics.service';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.scss'],
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
    // 'Others',
  ];

  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 150]
  ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#E6D4C3', '#D5F0CC', '#C3CAD9', '#C3E3E6'],
    },
  ];

  constructor(private graphicsService: GraphicsService) {}

  ngOnInit(): void {
    // this.graphicsService.getUsersSocialNetworks().subscribe((data) => {
    //   console.log(data);
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values);
    // });

    this.graphicsService
      .getUsersSocialNetworksDataDona()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData = values;
      });
  }
}
