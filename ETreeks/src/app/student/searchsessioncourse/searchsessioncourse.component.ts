import { Component ,Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { SessionDTO } from 'src/app/Services/student.service';
@Component({
  selector: 'app-searchsessioncourse',
  templateUrl: './searchsessioncourse.component.html',
  styleUrls: ['./searchsessioncourse.component.css']
})
export class SearchsessioncourseComponent  implements OnInit {
  sessions: SessionDTO[] = [];
  username: string = '';
 
  constructor(private StudentService:StudentService ) { }
 
  ngOnInit(): void { }
 
  searchSessions(): void {
    this.StudentService.getTrainerSessionsByUsername(this.username).subscribe(
      (data: SessionDTO[]) => {
        this.sessions = data;
      },
      (error) => {
        console.error('Error fetching sessions', error);
      }
    );
  }
}

 
 
