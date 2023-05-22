import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/local/localstorage.service';

@Component({
  selector: 'app-masterhome',
  templateUrl: './masterhome.component.html',
  styleUrls: ['./masterhome.component.css']
})
export class MasterhomeComponent {
  constructor(public router: Router, public localstorageService: LocalstorageService){
    this.localstorageService.isloggedin = true;
    localStorage.setItem('islogged', 'true');

  }


}
