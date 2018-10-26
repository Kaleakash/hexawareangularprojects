import { Component } from '@angular/core';
import {Employee} from './employee';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html'
  
})
export class AppComponent {
  name:string="Raj";
  lname:string="Deep";
  fullname:string="Ajay Kumar";
  msg:string="";
  age:number=22;
  names:string[]=["Raj","Seeta","Reeta","Meeta","Veeta"];
  employees:Employee[];
  flag:boolean=false;
  //empName:Array<string>;
  constructor(){
    let emp1 = new Employee(1,"Raj",12000);
    let emp2 = new Employee(2,"Ravi",14000);
    let emp3 = new Employee(3,"Ram",15000);
    let emp4 = new Employee(4,"Ramesh",17000);
    this.employees=[emp1,emp2,emp3,emp4];
  }
  fun():void{
    console.log("event generated....");
    this.msg="event generated";
    this.flag=true;
  }
}






