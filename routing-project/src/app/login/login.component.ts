import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SharedService } from '../sharedservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empId:number;
  constructor(private activateRouter:ActivatedRoute,
    private sharedService:SharedService,private router:Router) { 
    this.activateRouter.params.
    subscribe(param=>this.empId=param.id);
  }

  ngOnInit() {

  }
  validate(userRef:any){
    console.log(userRef);
    console.log("Id is "+this.empId);
    this.sharedService.setId(this.empId);
    this.router.navigate(['home']);
  }
}
