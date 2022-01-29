import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-meterialset',
  templateUrl: './meterialset.component.html',
  styleUrls: ['./meterialset.component.css']
})
export class MeterialsetComponent{

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


  panelOpenState = false;

}
