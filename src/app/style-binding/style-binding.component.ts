import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent  {


  title="Angular 12 tutorial #20";
  color="orange";
  bgColor = "black";
  updateColor() {
    this.color="skyblue";
    this.bgColor="white";
  }

  updateColor2() {
    this.color="orange";
    this.bgColor = "black";
  }
}
