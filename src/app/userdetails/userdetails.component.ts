import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  title="User Details Component";

  @Input() item:{name:any,email:any,password:any}={name:'',email:'',password:''};

}
