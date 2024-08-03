import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-registrationrequest',
  templateUrl: './registrationrequest.component.html',
  styleUrls: ['./registrationrequest.component.css']
})
export class RegistrationrequestComponent implements OnInit {
  constructor(public admin2:AdminService){ 
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
