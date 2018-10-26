import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees:Employee[]=[
    new Employee(1,"Raj",24),
    new Employee(2,"Ravi",26),
    new Employee(3,"Rajesh",28),
    new Employee(4,"Ramu",29),
    new Employee(5,"Rakesh",23),
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  openLogin(empRef:any){
    console.log(empRef);
    this.router.navigate(['login',empRef.id]);
  }
}
