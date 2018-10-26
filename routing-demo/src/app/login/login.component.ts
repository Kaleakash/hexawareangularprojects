import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  validate(formRef:any){
    let user = formRef.user;
    let pass = formRef.pass;
    if(user=="Raju" && pass=="123"){
      console.log("Successfully Login")
      this.router.navigate(['/success']);
    }else {
      console.log("Failure try once again")
      this.router.navigate(['/failure']);
    }
  }
}
