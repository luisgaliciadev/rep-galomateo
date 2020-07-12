import { Component, OnInit, Input } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graphics-polar',
  templateUrl: './graphics-polar.component.html',
  styles: [
  ]
})
export class GraphicsPolarComponent implements OnInit {

  // public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  // public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  // public polarAreaLegend = true;

  @Input('Labels') polarAreaChartLabels: Label[] = [];
  @Input('Data') polarAreaChartData: SingleDataSet = [];
  @Input('Legend') polarAreaLegend = true;
  @Input('Type') polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit(): void {
  }

}
