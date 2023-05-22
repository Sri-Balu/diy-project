import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../local/localstorage.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  ngOnInit(): void {

  }

  loading:boolean = true;
  @Input() progress = 0;
  constructor(public router: Router, public localstorageService: LocalstorageService){
    if(this.localstorageService.isloggedin && localStorage.getItem('islogged')=='true'){
      this.router.navigateByUrl('/masterhome');

    } else {
      localStorage.setItem('islogged', 'false')
      this.router.navigateByUrl('/login');

    }


  }
}
