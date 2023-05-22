import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/local/localstorage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-otppage',
  templateUrl: './otppage.component.html',
  styleUrls: ['./otppage.component.css']
})
export class OTPpageComponent {
  showRetryMessage: boolean;
  retryCountdown: number;

  constructor(private router: Router, public localstorageService: LocalstorageService) {
    if(localStorage.getItem('loggedin') == "true" && localstorageService.isloggedin == true) {
      this.router.navigate(['/masterhome']);
    }
    this.showRetryMessage = false;
    this.retryCountdown = 5; // Set the initial countdown time in seconds
    localStorage.setItem('OTP', '123456');
 

  }

  handleRetryButtonClick(): void {
    // Trigger the OTP resend functionality
    // Start the countdown
    this.startCountdown();
  }

  startCountdown(): void {
    this.showRetryMessage = true;

    const countdownInterval = setInterval(() => {
      this.retryCountdown--;
      if (this.retryCountdown <= 0) {
        clearInterval(countdownInterval);
        this.showRetryMessage = false;
      }
    }, 1000); // Update the countdown every second (1000ms)
  }
  navdash(){
    const enteredotp = (<HTMLInputElement>document.getElementById('inputotp')).value;
    const storedotp = localStorage.getItem('OTP');
    if (enteredotp === storedotp) {
      this.localstorageService.isloggedin = true;
      localStorage.setItem('loggedin', "true");
      this.router.navigate(['/masterhome']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid OTP',
        text: 'Please enter a valid OTP.',
      });
      console.log('incorrect OTP');
    }
  }
}
