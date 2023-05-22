import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/local/localstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public router: Router, public localstorageService: LocalstorageService){}

  navcrud(){
    this.router.navigateByUrl('/crud')
  }
  navdashboard(){
    this.router.navigateByUrl('dashboard')
  }
  navwallet(){
    this.router.navigateByUrl('wallet')
  }
  navnotifications(){
    this.router.navigateByUrl('notifications')
  }

}
