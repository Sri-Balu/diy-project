import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(public router: Router) {


  }

  otppage(){
    this.router.navigateByUrl('/otppage');
  }

}
