import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(public MM:MainService){}
  ngOnInit(): void {
    this.MM.getAllAcceptedCourses();
  }
}
