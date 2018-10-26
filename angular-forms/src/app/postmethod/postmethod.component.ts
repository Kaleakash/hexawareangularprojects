import { Component, OnInit } from '@angular/core';
import {LoginService} from '../loginservice';

@Component({
  selector: 'app-postmethod',
  templateUrl: './postmethod.component.html',
  styleUrls: ['./postmethod.component.css']
})
export class PostmethodComponent implements OnInit {

  constructor(private ls:LoginService) { }
  res:string="";
  ngOnInit() {
  }

  validate(empInfo:any){
      console.log(empInfo);
      console.log(empInfo.id)
      console.log(empInfo.name)
      console.log(empInfo.salary)
      //this.ls.storeEmpInfo(empInfo);
      this.ls.storeEmpInfo(empInfo).
      subscribe(result=>this.res=result);
  }

}
