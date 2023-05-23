import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from 'src/app/login/loginpage/loginpage.component';
import { OTPpageComponent } from './login/otppage/otppage.component';
import { AppbarComponent } from './home/appbar/appbar.component';
import { MenuComponent } from './home/menu/menu.component';
import { OrgdetailsComponent } from './home/menu/orgdetails/orgdetails.component';
import { IonicModule } from '@ionic/angular';
import { CRUDComponent } from './home/menu/crud/crud.component';
import { WalletComponent } from './home/menu/wallet/wallet.component';
import { LoadingComponent } from './loading/loading.component';
import { NotificationsComponent } from './home/menu/notifications/notifications.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MasterhomeComponent } from './home/masterhome/masterhome.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


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
    MasterhomeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    FormsModule,
    NgCircleProgressModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
