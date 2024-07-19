import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-coursecardstd',
  templateUrl: './coursecardstd.component.html',
  styleUrls: ['./coursecardstd.component.css']
})
export class CoursecardstdComponent implements OnInit {
  
  constructor( public s:StudentService){}
  @Input() course: any; 

  userId: number = 4 ; // Dynamic 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Book(courseId: number, userId: number): void {
    
    this.s.CreateBooking(courseId, userId);
  }
}
