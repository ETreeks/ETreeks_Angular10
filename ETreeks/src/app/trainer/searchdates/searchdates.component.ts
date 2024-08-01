import { Component, OnInit } from '@angular/core';
import { TrainerService, TrainerSearch } from 'src/app/Services/trainer.service';

@Component({
  selector: 'app-searchdates',
  templateUrl: './searchdates.component.html',
  styleUrls: ['./searchdates.component.css']
})
export class SearchdatesComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';
  reservations: TrainerSearch[] = [];
  filteredReservations: TrainerSearch[] = [];

  constructor(public t: TrainerService) {}

  ngOnInit(): void {
    this.t.getallreservationT().subscribe(
      data => {
        this.reservations = data;
        this.filteredReservations = [...this.reservations]; 
      },
      error => {
        console.error('Error retrieving reservations', error);
      }
    );
  }
  onSearch(): void {
    console.log(`Start Date: ${this.startDate}, End Date: ${this.endDate}`);
  
    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;
  
    this.filteredReservations = this.reservations.filter(reservation => {
      const reservationDate = new Date(reservation.reservationdate);
  
      console.log(`Reservation Date: ${reservationDate}`);
  
      if (!start && !end) {
        return true;
      }
  
      if (!start && end) {
        return reservationDate <= end;
      }
  
      if (start && !end) {
        return reservationDate >= start;
      }
  
      if (start && end) {
        return reservationDate >= start && reservationDate <= end;
      }
  
      return false;
    });
  }
  clearForm(): void {
    this.startDate = '';
    this.endDate = '';
    this.filteredReservations = [...this.reservations]; 
  }
}


















