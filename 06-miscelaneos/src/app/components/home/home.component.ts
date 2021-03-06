import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <br /><br /><br />
    <p [appResaltado]="'orange'">Hola mundo</p>

    <app-ng-switch></app-ng-switch>
    <p>
      Hola mundo desde app.component
    </p>
  `,
  styles: [],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  constructor() {
    console.log("constructor");

  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  }
  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
