import { Component, OnInit } from '@angular/core';
import { AdminSearch, AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reservations: AdminSearch[] = []; 

  constructor(public admin: AdminService) {}

  ngOnInit(): void {
    this.admin.getallreservation().subscribe(
      data => {
        this.reservations = data; // Store the retrieved data
      },
      error => {
        console.error('Error retrieving reservations', error);
      }
    );
  }

}
