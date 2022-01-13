import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectName = 'Angular Project';
  fname = 'Dulaj';
  sname = 'Thiwanka';
  rating = 'Best';
  num = 200;

  getval(){
    return "Angular is One of the best web framework"
  }
}
