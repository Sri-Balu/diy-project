import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OTPpageComponent } from './login/otppage/otppage.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { MasterhomeComponent } from './home/masterhome/masterhome.component';
import { CRUDComponent } from './home/menu/crud/crud.component';
import { OrgdetailsComponent } from './home/menu/orgdetails/orgdetails.component';
import { WalletComponent } from './home/menu/wallet/wallet.component';
import { NotificationsComponent } from './home/menu/notifications/notifications.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LoadingComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'otp', component: OTPpageComponent},
  {path: 'masterhome', component: MasterhomeComponent},
  {path: 'crud', component: CRUDComponent},
  {path: 'dashboard', component: OrgdetailsComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'notifications', component: NotificationsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
