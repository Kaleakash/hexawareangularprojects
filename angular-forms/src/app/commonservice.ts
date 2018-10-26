
export class CommonService {

    checkUser(objRef:any):boolean {
        let name = objRef.user;
        let pass = objRef.pass;
        if(name=="Raj" && pass=="123"){
           return true;
          }else {
           return false;
          }
    }
}