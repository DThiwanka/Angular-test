import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootsrapcomp',
  templateUrl: './bootsrapcomp.component.html',
  styleUrls: ['./bootsrapcomp.component.css']
})
export class BootsrapcompComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  name = 'World';
}
