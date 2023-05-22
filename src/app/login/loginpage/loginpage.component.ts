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
  isCheckboxChecked: boolean= true;
  constructor(public router: Router, public localstorageService: LocalstorageService){
    localStorage.setItem('PhoneNumber', '+911234567890');
    if(localStorage.getItem('loggedin') == "true" && localstorageService.isloggedin == true) {
      this.router.navigateByUrl("/masterhome");
    }


  }
  navotp(){
    const enteredPhoneNumber = (<HTMLInputElement>document.getElementById('phoneNumber')).value;
    const storedPhoneNumber = localStorage.getItem('PhoneNumber');
    if (enteredPhoneNumber === storedPhoneNumber && this.isCheckboxChecked==true) {
      this.router.navigate(['/otp']);
    } else {
      Swal.fire('Invalid Phone Number', 'Please check your phone number', 'error');
      console.log('Phone numbers do not match');
    }
  }
}


