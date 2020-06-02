import { Component } from "@angular/core";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-radar",
  templateUrl: "./radar.component.html",
  styles: [],
})
export class RadarComponent {
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [
    "Tamales",
    "Tortillas",
    "Hojaldres",
    "Chorizo",
    "Huevos",
    "Leche",
    "Empanadas",
  ];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: "Wolverine" },
    { data: [28, 48, 40, 19, 96, 27, 100], label: "Magneto" },
  ];
  public radarChartType: ChartType = "radar";
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
}
