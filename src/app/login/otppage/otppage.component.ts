import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otppage',
  templateUrl: './otppage.component.html',
  styleUrls: ['./otppage.component.css']
})
export class OTPpageComponent {
  showRetryMessage: boolean;
  retryCountdown: number;

  constructor(private router: Router) {
    this.showRetryMessage = false;
    this.retryCountdown = 5; // Set the initial countdown time in seconds
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
}
