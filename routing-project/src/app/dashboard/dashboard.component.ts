import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/sharedservice';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empId:number;
  constructor(private sharedSerive:SharedService) { }

  ngOnInit() {
    this.empId=this.sharedSerive.getId();
  }

}
