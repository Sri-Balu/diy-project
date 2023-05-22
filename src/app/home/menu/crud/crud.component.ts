import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  sections: { title: string, imageUrl: string }[] = [
    { title: 'CREATE', imageUrl: 'https://th.bing.com/th/id/OIP.nVzqoQ6VYDocfYJgo8CE9AHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { title: 'READE', imageUrl: 'https://th.bing.com/th/id/OIP.8mi5rw2ldKv2pllgG4zPMQHaFj?pid=ImgDet&w=207&h=155&c=7&dpr=1.3' },
    { title: 'UPDATE', imageUrl: 'https://th.bing.com/th/id/OIP.lHCEcFqCxO2_rmLY2A7ppwHaHa?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { title: 'DELETE', imageUrl: 'https://th.bing.com/th/id/OIP.EMBBAWsz7sF5RkMftpRsqwHaFF?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }
  ];
}
