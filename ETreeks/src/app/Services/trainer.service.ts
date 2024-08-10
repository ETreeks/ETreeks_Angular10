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
completed :any=[];
getallreservationT2()
{
  const trainerId = Number(localStorage.getItem('Id'));
  this.http.get<any[]>(`https://localhost:7281/api/Trainer/GetAllReservationT2/`+trainerId).subscribe(res=>
{
this.completed=res; 
},
err=>{
console.log("error");
console.log(err.status);
console.log(err.manage);
})
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
getAllUsers2(): Observable<any[]> {
  return this.http.get<any[]>(`https://localhost:7281/api/admin/DisplayAllUsers`);
}
completedYes(id: number) {
  this.http.put('https://localhost:7281/api/Trainer/Completed/' + id, {}).subscribe(
    (res: any) => {
      console.log('Yes');
      window.location.reload();
    },
    err => {
      console.log('Error', err);
    }
  );
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