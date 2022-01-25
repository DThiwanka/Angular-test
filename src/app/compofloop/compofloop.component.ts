import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compofloop',
  templateUrl: './compofloop.component.html',
  styleUrls: ['./compofloop.component.css']
})
export class CompofloopComponent {

  users = ['Dulaj','Thiwanka','Jayawardana','TestUser']
  admins = ['suchi','mzeesh','weegshaha']
  managers = ['thirdadmin','secondadmin','firstadmin']

  userDetails=[
    {name:'Dulaj',email:"dthiwanka@gmail.com",phnumber:'+94712093732'},
    {name:'Thiwanka',email:"Thiwanka@gmail.com",phnumber:'+778854123'},
    {name:'Jayawardana',email:"Jayawardana@gmail.com",phnumber:'+7748559686'},
    {name:'TestUser',email:"TestUser@gmail.com",phnumber:'+11111111'},
  ];

  CustomerDetails=[
    {c_name:'Cus_Dulaj',address:"102 Twilight Ln",country:'North Carolina',accounts:['facebook','twitter','Instagram']},
    {c_name:'Cus_Thiwanka',address:"4637 Sylvan Dr",country:'Michigan(MI)',accounts:['Youtube','linkedin','Whatsapp']},
    {c_name:'Cus_Jayawardana',address:"11154 Seton Pl",country:'Illinois(IL)',accounts:['viber','pintrest','telegram']},
    {c_name:'Cus_TestCustomer',address:"Test Address",country:'TestCountry',accounts:['Tiktok','snapchat','Flickr']},
  ];

}
