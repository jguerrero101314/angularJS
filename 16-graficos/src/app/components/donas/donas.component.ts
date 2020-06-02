import { Component } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: "app-donas",
  templateUrl: "./donas.component.html",
  styles: [],
})
export class DonasComponent {
  aleatorios: MultiDataSet[];
  // Doughnut
  public doughnutChartLabels: Label[] = [
    "Tamales",
    "Tortillas",
    "Chorizos",
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = "doughnut";

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
  public numerosRandom() {
    this.doughnutChartData = [
      [Math.random() * 100, Math.random() * 100, Math.random() * 100],
      [Math.random() * 100, Math.random() * 100, Math.random() * 100],
      [Math.random() * 100, Math.random() * 100, Math.random() * 100]
    ];
  }
}
