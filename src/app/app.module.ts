import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { OTPpageComponent } from './login/otppage/otppage.component';
import { AppbarComponent } from './home/appbar/appbar.component';
import { MenuComponent } from './home/menu/menu.component';
import { OrgdetailsComponent } from './home/orgdetails/orgdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    OTPpageComponent,
    AppbarComponent,
    MenuComponent,
    OrgdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
