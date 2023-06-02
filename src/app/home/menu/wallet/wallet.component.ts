import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/local/localstorage.service';
import { StringService } from 'src/app/string.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  template: `
  <div>
    <p>{{ amount1 }} - {{ fullName1 }}</p>
    <p>{{ amount2 }} - {{ fullName2 }}</p>
  </div>`,
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  amount1 = 100;
  amount2 = 500;
  fullName1!: string;
  fullName2!: string;

  


  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public router: Router, public localstorageService: LocalstorageService,private stringService: StringService) {
    if (localStorage.getItem('islogged') != "true" && localstorageService.isloggedin != true) {
      localstorageService.isloggedin = false;
      localStorage.setItem('islogged', "false");
      this.router.navigateByUrl("/");
    }
    this.fullName1 = this.stringService.convertNumberToString(this.amount1);
    this.fullName2 = this.stringService.convertNumberToString(this.amount2);

    };
  }



