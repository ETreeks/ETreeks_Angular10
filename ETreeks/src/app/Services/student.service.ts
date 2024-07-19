import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }


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
}
