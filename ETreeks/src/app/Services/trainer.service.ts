import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileTrainerDTO } from 'src/app/dtos/profile-trainer.dto'; // Adjust path as needed


@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private baseUrl: string = 'https://localhost:7281/api/Trainer';
  displayImage: any;


  constructor(private http:HttpClient) { }
  courseSession :any=[];


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
  getAllReservations2(): Observable<Reservation[]> {
    const trainerId = Number(localStorage.getItem('Id'));
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


viewProfile(trainerId: number): Observable<ProfileTrainerDTO> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this.http.get<ProfileTrainerDTO>(`${this.baseUrl}/${trainerId}`, { headers });
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


<<<<<<< HEAD
updateProfile(profile: ProfileTrainerDTO): Observable<void> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this.http.put<void>(this.baseUrl, profile, { headers });
=======

//---------------------------------------------------
getAllCourseSession(){
  this.http.get('https://localhost:7281/api/CourseSession').subscribe(res=>{
    this.courseSession= res; 

  }, 
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.message);

})
}

DeleteCourseSession(id:number){
  this.http.delete(`https://localhost:7281/api/CourseSession/${id}`).subscribe((res)=>{
    console.log("Deleted");
    
  },err=>{
    console.log("Error");
    
  })
  window.location.reload(); 

}

createCourseSession(body:any){
this.http.post('https://localhost:7281/api/CourseSession',body).subscribe((resp)=>{
  console.log('Created');
  
},err=>{
  console.log('Error');
  
})
window.location.reload(); 

}

updateCourseSession(body:any){
this.http.put('https://localhost:7281/api/CourseSession',body).subscribe((reap)=>{
  console.log('Updated');
  
},err=>{
  console.log('Error');
  
})

}
>>>>>>> b9e0c5b423aaf8127d7988c65d3e492ef28084a6
}

updateUser(profile: ProfileTrainerDTO) {
  profile.imagename = this.displayImage;
  this.http.put('https://localhost:7281/api/Trainer', profile).subscribe(
    (resp: any) => {
      alert('DONE');
    },
    err => {
      console.log(err.status);
    }
  );
}

getTrainer(trainerId: number): Observable<any> {
  const url = `https://localhost:7281/api/trainer/${trainerId}`;
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  return this.http.get<any>(url, { headers });
}

uploadFile(file: FormData) {
  this.http.post('https://localhost:7281/api/Trainer/uploadImage/', file).subscribe(
    (resp: any) => {
      this.displayImage = resp.imagename;
      console.log(resp);
    },
    err => {
      alert('Upload Image failed');
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
    trainer_Id:number;
  }
  export interface Guser {
    id: number;
    fname: string;
    lname: string;
  }