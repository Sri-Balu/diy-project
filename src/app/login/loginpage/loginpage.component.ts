import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/local/localstorage.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  localStorage: any;
  isChecked: boolean = false;
  constructor(public router: Router, public localstorageService: LocalstorageService) {
    if (localStorage.getItem('islogged') == "true" && localstorageService.isloggedin == true) {
      this.router.navigateByUrl("/masterhome");
    } else{
      localStorage.setItem('isCheckboxChecked', 'false');
      localStorage.setItem('PhoneNumber', '+911234567890');
    }




  }

  checkBox(){
      this.isChecked = !this.isChecked;
  
    // if (this.isChecked) {
    //   this.localStorage.isCheckboxChecked = "true";
    //   this.isChecked = true;
    // } else {
    //   this.localStorage.isCheckboxChecked = "false";
    //   this.isChecked = false;
    // }
  }
  navotp() {
    const enteredPhoneNumber = (<HTMLInputElement>document.getElementById('phoneNumber')).value;
    const storedPhoneNumber = localStorage.getItem('PhoneNumber');
  
    if (enteredPhoneNumber === storedPhoneNumber &&  this.isChecked) {
      this.router.navigate(['/otp']);
    } else {
      Swal.fire('Invalid Phone Number', 'Please check your phone number', 'error');
      console.log('Phone numbers do not match');
    }
  }
}


