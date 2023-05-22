import { Component } from '@angular/core';
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

}
