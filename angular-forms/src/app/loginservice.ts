
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import {Employee} from './Employee';
import { Text } from "@angular/compiler";

@Injectable()
export class LoginService{
    
    constructor(private httpClient:HttpClient){}

    checkLogin(objRef:any):boolean {
        let name = objRef.user;
        let pass = objRef.pass;
        if(name=="Raj" && pass=="123"){
           return true;
          }else {
           return false;
          }
    }
    
    loadData():void {
        /*this.httpClient.
        get("https://jsonplaceholder.typicode.com/todos").
        subscribe(
        data=>console.log(data),
        error=>console.log(error),
        ()=>console.log("Done!"));
          */  
        this.httpClient.get("http://localhost:8080/MyRest/webapi/obj/getEmps").
        subscribe(
        data=>console.log(data),
            error=>console.log(error),
        ()=>console.log("Done!"));
    }

/*retrieveTableFormat():Observable<Employee[]> {
return this.httpClient.
get("http://localhost:8080/MyRest/webapi/obj/getEmps");
}*/
/*
storeEmpInfo(empInfo:any):void {
let url =
`http://localhost:8080/MyRest/
webapi/obj/postWithParamParam/"+
empInfo.id+"/"+empInfo.name+"/"+empInfo.salary`;
this.httpClient.post(url,{}).
subscribe(
    result=>console.log(result),
    error=>console.log(error),
    ()=>console.log("Done!"));
}
*/

storeEmpInfo(empInfo:any):Observable<string> {
let url =
"http://localhost:8080/MyRest/webapi/obj/postWithParamParam/"+empInfo.id+"/"+empInfo.name+"/"+empInfo.salary;
return this.httpClient.
post(url,{},{responseType:'text'});
    }
}