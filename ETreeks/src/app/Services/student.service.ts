import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ProfileStudentDTO } from 'src/Interface/profile-student-dto';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient , private toster:ToastrService) { }
  notif:any=[];
  courses:any=[];

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


// createReview(review: any): Observable<any> {
//   return this.http.post('https://localhost:7281/api/Review', review);
// }
createReview(body: any) {
  debugger
  const userId = Number(localStorage.getItem('Id'));
  body.guser_Id = userId; 

  this.http.post('https://localhost:7281/api/Review', body).subscribe(
    (resp) => {
      this.toster.success('Review Created Successfully');
      console.log("Review Created Successfully");
      window.location.reload(); 
    },
    err => {
      this.toster.error('An error occurred in the create Review process');
      console.log("An error occurred in the create Review process", err);
    }
  );
}


getAllCourses(): Observable<any[]> {
  return this.http.get<any[]>('https://localhost:7281/api/Course');
}
getallreservationstd(): Observable<any[]> {
  debugger
  return this.http.get<any[]>(`https://localhost:7281/api/Reservation`);
}


getTrainerSessionsById(trainerId: number): Observable<SessionDTO[]> {
  debugger
  return this.http.get<SessionDTO[]>(`https://localhost:7281/api/Student/GetTrainerSessionsByID/${trainerId}`);
}



private apiProfileUrl = 'https://localhost:7281/api/Student';
viewProfile(id: number): Observable<ProfileStudentDTO> {
  return this.http.get<ProfileStudentDTO>(`${this.apiProfileUrl}/${id}`);
}

updateProfile(profileStudentDto: ProfileStudentDTO): Observable<void> {
  return this.http.put<void>(`${this.apiProfileUrl}`, profileStudentDto);
}
} 



export interface SessionDTO {
  courseName: string;
  sessionName: string;
  startDate: Date;
  endDate: Date;
  
}
