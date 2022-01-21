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

}
