import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/Services/student.service';
import { CreatereviewComponent } from '../createreview/createreview.component';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  constructor( public s:StudentService ,public dialog: MatDialog){}
  @Input() course: any;
 
  userId: number = 4 ; // Dynamic
  //userId = Number(localStorage.getItem('Id'));
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Book(courseId: number, userId: number): void {
 
    this.s.CreateBooking(courseId, userId);
  }
  openReviewDialog(): void {
    const courseId = this.course?.id;
    if (courseId !== undefined) {
      const dialogRef = this.dialog.open(CreatereviewComponent, {
        width: '250px',
        data: { courseId: courseId }
      });
 
    dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
    });
  } else {
    console.error('Course ID is undefined');
   }
  }
 
}
 
 