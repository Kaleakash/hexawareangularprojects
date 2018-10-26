import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TdfComponent } from './tdf/tdf.component';
import {FormsModule} from '@angular/forms';
import {LoginService} from './loginservice';

import { HttpClientModule } from 
'@angular/common/http';
import { PostmethodComponent } from './postmethod/postmethod.component';
import { DeletemethodComponent } from './deletemethod/deletemethod.component';
import { PutmethodComponent } from './putmethod/putmethod.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TdfComponent,
    PostmethodComponent,
    DeletemethodComponent,
    PutmethodComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
