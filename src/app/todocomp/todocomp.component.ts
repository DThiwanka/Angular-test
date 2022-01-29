import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todocomp',
  templateUrl: './todocomp.component.html',
  styleUrls: ['./todocomp.component.css']
})
export class TodocompComponent implements OnInit {

  value:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(value: string) {
    this.value.push({id:this.value.length+1,name:value})
    console.warn(this.value)
  }

  removeTask(id:number) {
    this.value=this.value.filter(value => value.id!==id)
    console.warn(id)

  }
}
