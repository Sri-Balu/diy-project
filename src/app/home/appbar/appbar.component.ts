import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/local/localstorage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent {
  constructor(public router: Router, public localstorageService: LocalstorageService) {
  }

  logout(){
    this.localstorageService.isloggedin = false;
    localStorage.removeItem('loggedin');
    localStorage.removeItem('PhoneNumber');
    localStorage.removeItem('OTP');
    this.router.navigateByUrl('/')
  }

}
