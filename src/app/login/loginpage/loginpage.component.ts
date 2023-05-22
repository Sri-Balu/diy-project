import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/local/localstorage.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  constructor(public router: Router, public localstorageService: LocalstorageService){
    localStorage.setItem('PhoneNumber', '1234567890');


  }
  navotp(){
    const enteredPhoneNumber = (<HTMLInputElement>document.getElementById('phoneNumber')).value;
    const storedPhoneNumber = localStorage.getItem('PhoneNumber');
    if (enteredPhoneNumber === storedPhoneNumber) {
      this.router.navigate(['/otp']);
    } else {
      console.log('Phone numbers do not match');
    }
  }
}


