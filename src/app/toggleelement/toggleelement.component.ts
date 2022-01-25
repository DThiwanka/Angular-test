import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleelement',
  templateUrl: './toggleelement.component.html',
  styleUrls: ['./toggleelement.component.css']
})
export class ToggleelementComponent {

  dispaly=true;

  toggle(){
    this.dispaly=!this.dispaly;
    console.warn("Toggle Button Clicked")
  }

}
