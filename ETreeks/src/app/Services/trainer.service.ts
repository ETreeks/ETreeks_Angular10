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
  
  getallreservationT(): Observable<TrainerSearch[]> {
    debugger
    const trainerId = Number(localStorage.getItem('Id'));
    return this.http.get<TrainerSearch[]>(`https://localhost:7281/api/Trainer/GetAllReservationT/`+trainerId);
  }
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`https://localhost:7281/api/reservation`);
  }
  
  acceptReservation(id: number): Observable<any> {
    return this.http.post(`https://localhost:7281/api/Trainer/accept/${id}`, {});
  }
 
rejectReservation(id: number): Observable<any> {
  return this.http.post(`https://localhost:7281/api/Trainer/reject/${id}`, {});
}
GetAllCourses(): Observable<Course[]> {
  return this.http.get<Course[]>(`https://localhost:7281/api/course`);
}
 
getAllUsers(): Observable<Guser[]> {
  return this.http.get<Guser[]>(`https://localhost:7281/api/admin/DisplayAllUsers`);
}

}


export interface TrainerSearch {
  fullName: string;
  courseName: string;
  categoryname: string;
  reservationdate: Date;
}

export interface Reservation {
  gusers: Guser;
  courses: Course;
  id: number;
  reservationstatus: string;
  reservationdate: Date;
  gusers_Id: number;
  course_Id: number;
  finalmark: number;
  completed: string;
  }
   
  export interface Course {
    id: number;
    name: string;
  }
   
  export interface Guser {
    id: number;
    fname: string;
    lname: string;
  }