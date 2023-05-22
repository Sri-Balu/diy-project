import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from 'src/app/login/loginpage/loginpage.component';
import { OTPpageComponent } from './login/otppage/otppage.component';
import { AppbarComponent } from './home/appbar/appbar.component';
import { MenuComponent } from './home/menu/menu.component';
import { OrgdetailsComponent } from './home/orgdetails/orgdetails.component';
import { IonicModule } from '@ionic/angular';
import { CRUDComponent } from './home/menu/crud/crud.component';
import { WalletComponent } from './home/menu/wallet/wallet.component';
import { NotificationsComponent } from './home/menu/notifications/notifications.component';
import { LoadingComponent } from './loading/loading.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MasterhomeComponent } from './home/masterhome/masterhome.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    OTPpageComponent,
    AppbarComponent,
    MenuComponent,
    OrgdetailsComponent,
    CRUDComponent,
    WalletComponent,
    NotificationsComponent,
    LoadingComponent,
    MasterhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    NgCircleProgressModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
