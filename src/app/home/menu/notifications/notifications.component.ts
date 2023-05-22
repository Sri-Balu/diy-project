import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/local/localstorage.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  constructor(public router: Router, public localstorageService: LocalstorageService){
    if(localStorage.getItem('islogged') != "true" && localstorageService.isloggedin != true) {
      localstorageService.isloggedin = false;
      localStorage.setItem('islogged', "false");
      this.router.navigateByUrl("/");
    }

  }
}
