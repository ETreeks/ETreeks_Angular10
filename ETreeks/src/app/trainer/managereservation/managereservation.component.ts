// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-managereservation',
//   templateUrl: './managereservation.component.html',
//   styleUrls: ['./managereservation.component.css']
// })
// export class ManagereservationComponent {

// }
import { Component , OnInit} from '@angular/core';
import { TrainerService ,Reservation ,Course, Guser} from 'src/app/Services/trainer.service';
import { forkJoin } from 'rxjs';
 
@Component({
  selector: 'app-managereservation',
  templateUrl: './managereservation.component.html',
  styleUrls: ['./managereservation.component.css']
})
export class ManagereservationComponent {
 
  reservations: Reservation[] = [];
  courses: Course[] = [];
  gusers: Guser[] = [];
  trainerId: number = 10;
 
  constructor(private TrainerService: TrainerService) {}
 
  ngOnInit(): void {
    this.loadReservations();
 
  }
 
 
  loadReservations(): void {
    forkJoin([
      this.TrainerService.getAllReservations(),
      this.TrainerService.GetAllCourses(),
      this.TrainerService.getAllUsers()
    ]).subscribe(([reservations, courses, gusers]) => {
      this.reservations = reservations.filter(reservation => reservation.gusers_Id === this.trainerId);
      this.courses = courses;
      this.gusers = gusers;
 
      this.reservations.forEach(reservation => {
        reservation.courses = this.courses.find(course => course.id === reservation.course_Id) || { id: 0, name: 'Unknown' };
        reservation.gusers = this.gusers.find(user => user.id === reservation.gusers_Id) || { id: 0, fname: 'Unknown', lname: 'Unknown' };
      });
    }, error => {
      console.error('Error fetching reservations or related data', error);
    });
  }
 
  acceptReservation(id: number): void {
    this.TrainerService.acceptReservation(id).subscribe(
      () => {
        this.loadReservations();
      },
      error => {
        console.error('Error accepting reservation', error);
      }
    );
  }
 
  rejectReservation(id: number): void {
    this.TrainerService.rejectReservation(id).subscribe(
      () => {
        this.loadReservations();
      },
      error => {
        console.error('Error rejecting reservation', error);
      }
    );
  }
}