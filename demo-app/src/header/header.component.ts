import {Component} from '@angular/core';

@Component({
   selector:'header',
   template:`Info {{headerTitle}}` 
})
export class HeaderComponent {
    headerTitle:string="This is Header information";
}