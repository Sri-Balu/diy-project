import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OTPpageComponent } from './login/otppage/otppage.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { MasterhomeComponent } from './home/masterhome/masterhome.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LoadingComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'otp', component: OTPpageComponent},
  {path: 'masterhome', component: MasterhomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
