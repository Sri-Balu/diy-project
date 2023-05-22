import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OTPpageComponent } from './login/otppage/otppage.component';

const routes: Routes = [
  {path: '/otppage', component:OTPpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
