import { Component ,Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
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
  trainers: any[] = []; // Array to hold trainers
  selectedTrainerId: number | null = null; // Store the selected trainer ID
 
  constructor(public StudentService:StudentService ,public home : HomeService ) { }
 
  ngOnInit(): void {
    this.fetchTrainers();
  }

  fetchTrainers(): void {
    this.home.DisplayAllAcceptedTrainers2().subscribe(
      (data: any[]) => {
        this.trainers = data;
      },
      (error) => {
        console.error('Error fetching trainers', error);
      }
    );
  }

 
  // searchSessions(): void {
  //   this.StudentService.getTrainerSessionsByUsername(this.username).subscribe(
  //     (data: SessionDTO[]) => {
  //       this.sessions = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching sessions', error);
  //     }
  //   );
  // }
  searchSessions(): void {
    debugger
    if (this.selectedTrainerId !== null) {
      this.StudentService.getTrainerSessionsById(this.selectedTrainerId).subscribe(
        (data: SessionDTO[]) => {
          this.sessions = data;
        },
        (error) => {
          console.error('Error fetching sessions', error);
        }
      );
    }
  }
}

 
 
