import { Component } from '@angular/core';

@Component({
  selector: 'abc',
  //templateUrl: './app.component.html',
  template:`<div>
              <header></header>
              Welcome Inner HTML Page
              Name is {{name}}
            </div>
          `,
  //styleUrls: ['./app.component.css']
  styles:[`div{color:red}`]
})
export class AppComponent {
  title = 'demo-app';
  name:string="Akash";
  dis():string{
    return "welcome to Angular dis function";
  }
}
