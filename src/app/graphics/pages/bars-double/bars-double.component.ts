import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-bars-double',
  templateUrl: './bars-double.component.html',
  styleUrls: ['./bars-double.component.scss'],
})
export class BarsDoubleComponent implements OnInit {
  supplierData: ChartDataSets[] = [
    { data: [100, 200, 300, 400, 500], label: 'Seller A' },
    { data: [50, 250, 30, 450, 200], label: 'Seller B' },
  ];

  supplierLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];

  productData: ChartDataSets[] = [
    {
      data: [200, 300, 400, 300, 120],
      label: 'Cars',
      backgroundColor: 'blue',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
