import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/Services/student.service';
import { CreatereviewComponent } from '../createreview/createreview.component';
import {  AdminService } from 'src/app/Services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  @Input() course: any;
  userId = Number(localStorage.getItem('Id'));
  reservations: any[] = [];

  constructor(
    public s: StudentService, 
    public dialog: MatDialog, 
    public admin: AdminService,
    private toastr: ToastrService
  ) {}
  @ViewChild('openRDialog') callReviewDailog!:TemplateRef<any>; 
  ngOnInit(): void {
    this.getReservationsByUserId();
  }

  getReservationsByUserId(): void {
    this.s.getallreservationstd().subscribe(
      res => {
        this.reservations = res.filter(reservation => reservation.gusers_Id === this.userId);
        this.toastr.success('Retrieved reservations successfully');
      },
      err => {
        console.error('Error fetching reservations:', err);
        this.toastr.error('Something went wrong');
      }
    );
  }



     openCreateRDailog( id : number)
     {
     
       //this.dialog.open(CreatereviewComponent);
       this.dialog.open(CreatereviewComponent, {
        data: { id: id }
      });
     }
  
}
 
 