import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component{

  title="Property Binding! / Interpolation";
  name="Peter";
  name2="Dulaj";
  chk_disable=false;

}
