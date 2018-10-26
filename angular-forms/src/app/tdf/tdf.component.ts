import { Component, OnInit } from '@angular/core';
import {CommonService} from '../commonservice';
import { LoginService } from 'src/app/loginservice';

import { Employee } from '../Employee';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  msg:string="";
  
  employees:Employee[];

  constructor(private loginService:LoginService) {

    /*this.loginService.retrieveTableFormat().
    subscribe(data=>this.employees=data,
      error=>console.log(error),
      ()=>console.log("done!"));*/
   }
  
  ngOnInit() {
  }
  validate(objRef:any):void {
    /*console.log("Event Generated....");
    console.log(objRef);
    let name = objRef.user;
    let pass = objRef.pass;
    if(name=="Raj" && pass=="123"){
      this.msg="Successfully Login!"
      console.log("Successfully Login")
    }else {
      this.msg="Failure try once again!"
      console.log("Failure try once again!")
    }*/
    /*
    let obj = new CommonService();
    if(obj.checkUser(objRef)){
          this.msg="Successfully Login...";
    }else {
          this.msg="Failure try once again"
    }
   

    if(this.loginService.checkLogin(objRef)){
      this.msg="Successfully Login...";
    }else {
      this.msg="Failure try once again";
    } */
  }

  callService():void {
    //this.loginService.loadData();
  }

  retrieveInTable(){
    /*this.loginService.retrieveTableFormat().
    subscribe(data=>this.employees=data,
      error=>console.log(error),
      ()=>console.log("done!"));*/
  }
}

