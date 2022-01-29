import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  displayName = '';
  displayvote = '';
  count = 0;
  data = 5;

  getName(name:string){
    alert(name)
  }

  getNumber(number:number){
    alert(number)
  }

  getStatusMassage(massage:string){
    alert(massage)
  }

  getClg(val:any){
    console.warn(val)
  }

  upvaldata(upval:string){
    console.error(upval)
  }

  upvaldata2(upval:any){
    console.error(upval)
  }

  mouseOverData(datamouse:string){
   // alert("Niceee")
    console.warn("Nicceee")
  }

  getname(name:string){
    console.warn(name)
    this.displayName=name
  }

  counterplus(vote:string){
    this.count++;
    vote="upvoted";
    this.displayvote=vote;
  }

  counterminus(vote:string){
    this.count--;
    vote="Downvoted";
    this.displayvote=vote;
  }

  updateDta() {
    this.data=Math.floor(Math.random()*10);
    console.warn(this.data)
  }

  userDetails=[
    {name:'Dulaj',email:'dthiwanka@grabmail.club',password:'RSg-uVafSM-N36A'},
    {name:'Thiwanka',email:'Thiwanka@grabmail.club',password:'RTS-09-rrtes'},
    {name:'Jayawardana',email:'Jayawardana@grabmail.club',password:'OIOP-ihht-123'},
    {name:'TestName1',email:'TestName1@grabmail.club',password:'Test-pass-223'},
    {name:'TestName2',email:'TestName2@grabmail.club',password:'Test-pass-224'}
  ]

}
