import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/local/localstorage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-orgdetails',
  templateUrl: './orgdetails.component.html',
  styleUrls: ['./orgdetails.component.css']
})
export class OrgdetailsComponent {
  showUnderConstructionAlert(name: string): void {
    Swal.fire(`${name} Under Construction`, '', 'info');
  }
  constructor(public router: Router, public localstorageService: LocalstorageService){
    if(localStorage.getItem('islogged') != "true" && localstorageService.isloggedin != true) {
      localstorageService.isloggedin = false;
      localStorage.setItem('islogged', "false");
      this.router.navigateByUrl("/");
    }

  }

}
