import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http:HttpClient) { }

  searchReservations(startDate: string, endDate: string): Observable<TrainerSearch[]> {
    debugger
    return this.http.get<TrainerSearch[]>(`https://localhost:7281/api/Trainer/Search/${startDate}/${endDate}`);
  }

}


export interface TrainerSearch {
  fullName: string;
  courseName: string;
  categoryname: string;
  reservationdate: Date;
}