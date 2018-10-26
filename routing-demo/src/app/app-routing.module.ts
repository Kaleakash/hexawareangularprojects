import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { FailureComponent } from 'src/app/failure/failure.component';
import { SuccessComponent } from 'src/app/success/success.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"contactus",component:ContactusComponent} ,
  {path:"aboutus",component:AboutusComponent},
  {path:"success",component:SuccessComponent},
  {path:"failure",component:FailureComponent},
  //{path:'',redirectTo:"login",pathMatch:"full"},
  {path:"**",component:NotfoundComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
