import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/local/localstorage.service';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  recaptchaVerifier: any = firebase.auth.RecaptchaVerifier;
  localStorageService: any;
  isChecked: boolean = false;
  isCheckboxChecked: boolean = false;


  constructor(
    public router: Router,
    public localstorageService: LocalstorageService,
    public afAuth: AngularFireAuth,
    public authService: AuthService
  ) {
    if (
      localStorage.getItem('islogged') === 'true' &&
      localstorageService.isloggedin
    ) {
      this.router.navigateByUrl('/masterhome');
    } else {
      localStorage.setItem('isCheckboxChecked', 'false');
      localStorage.setItem('PhoneNumber', '+911234567890');
    }
  }

  checkBox() {
    this.isChecked = !this.isChecked;

    if (this.isChecked) {
      localStorage.setItem('isCheckboxChecked', 'true');
      this.isCheckboxChecked = true;
    } else {
      localStorage.setItem('isCheckboxChecked', 'false');
      this.isCheckboxChecked = false;
    }
  }

  navotp() {
    let num = (document.getElementById('phoneNumber') as HTMLInputElement).value.toString();;

    if (num.length > 6 && num.length < 14 && this.isChecked) {
      let applicationVerifier = new this.recaptchaVerifier;
      this.authService.login(num, applicationVerifier).then((data: any) => {
        this.authService.confirmationResult = data;
        this.router.navigateByUrl('/otp');
      }).catch();
      console.log('confirm login');
      this.router.navigate(['/otp']);
    } else {
      Swal.fire(
        'Invalid Phone Number',
        'Please check your phone number',
        'error'
      );
      console.log('Phone numbers do not match');
    }
  }
}
