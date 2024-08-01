import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  notif:any=[];

  CreateBooking(courseId: number, userId: number): void {
    debugger
    var body ={
      Course_Id: courseId.toString(),
      Gusers_Id: userId.toString()
      }
      const headerDirc ={
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      const requestOptions = {
        headers : new HttpHeaders(headerDirc)
      }
    //const bookingData = { userId, courseId };
    this.http.post('https://localhost:7281/api/Student', body,requestOptions).subscribe(
      (resp) => {
        console.log("Booking Created Successfully");
      },
      err => {
        console.log("An error occurred in the booking process", err);
      }
    );
    window.location.reload();
  }

  getTrainerSessionsByUsername(username: string): Observable<SessionDTO[]> {
    debugger
    return this.http.get<SessionDTO[]>(`https://localhost:7281/api/Student/GetTrainerSessionsByUsername/${username}`);
  }
  getNotifications(userId: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7281/api/Student/notifications/${userId}`);
    
  }
getNotifications2(id:number)
{
debugger
this.http.get('https://localhost:7281/api/Student/notifications/'+id).subscribe((res:any)=>{
this.notif=res; 
console.log('get');



},err=>{
console.log('Error');})
}
} 



export interface SessionDTO {
  courseName: string;
  sessionName: string;
  startDate: Date;
  endDate: Date;
}
