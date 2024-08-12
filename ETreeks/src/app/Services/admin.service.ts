import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { GuserDto } from 'src/Interface/guser.dto';
import { UpdateProfileAdminDto } from 'src/Interface/update-profile-admin.dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient , private toster: ToastrService)  { }

  private aboutSubject = new BehaviorSubject<any[]>([]);
  about$ = this.aboutSubject.asObservable();


  //numtrainers:object = [];
  numtrainers: any[] = [];
  numstudents:object = [];
  numallusers:object = [];
  numadmin:object = [];
  countPendingTrainers:object = [];
  countAcceptedTrainers:object = [];
  CountCategories:object = [];
  CountCourses:object = [];
  obj:any = [];
  CIEC:any=[];
  stdpert:any=[];
  studentsPerTrainer: any = [];
  CountPendingReservation:object = [];
  CountAcceptedReservation:object=[];
  AllUsers:any =[];

  viewT : any =[];
  viewS : any = [];


  registrationrequest :any = [];

  viewcontactobj : any = [];

  gethome : any=[];
  testimonial:any=[];
 
  //hits api
  getAllRegisteredTrainers()
  {
this.http.get<any[]>('https://localhost:7281/api/Admin/GetCountTrainers').subscribe(res=>
{
  this.numtrainers = res;
 
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
 
  })
  }



  getAllRegisteredStudents()
  {
this.http.get('https://localhost:7281/api/Admin/GetCountStudents').subscribe(res=>
{
  this.numstudents = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }

  
  getAllUsers()
  {
this.http.get('https://localhost:7281/api/Admin/GetCountUsers').subscribe(res=>
{
  this.numallusers = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }


  getCountAdmin()
  {
this.http.get('https://localhost:7281/api/Admin/GetCountAdmin').subscribe(res=>
{
  this.numadmin = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }


  getCountPendingTrainers()
  {
this.http.get('https://localhost:7281/api/Admin/GetCountPendingTrainers').subscribe(res=>
{
  this.countPendingTrainers = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }

  GetCountAcceptedTrainers()
  {
this.http.get('https://localhost:7281/api/Admin/GetCountAcceptedTrainers').subscribe(res=>
{
  this.countAcceptedTrainers = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }

  GetCountCategories()
  {
this.http.get('https://localhost:7281/api/Admin/GetCountCategories').subscribe(res=>
{
  this.CountCategories = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }

  GetCountCourses()
  {
this.http.get('https://localhost:7281/api/Admin/GetCountCourses').subscribe(res=>
{
  this.CountCourses = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }

  TotalStudentInEachCourse()
  {
this.http.get('https://localhost:7281/api/Admin/TotalStudentInEachCourse').subscribe(res=>
{
  this.obj = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }



  TotalCoursesInEachCategory()
  {
this.http.get('https://localhost:7281/api/Admin/TotalCoursesInEachCategory').subscribe(res=>
{
  this.CIEC = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }

  TotalStudentsPerTrainer()
  {
this.http.get('https://localhost:7281/api/Admin/TotalStudentsPerTrainer').subscribe(res=>
{
  this.stdpert = res;
},
err=>{
  console.log("error");
  console.log(err.status);
  console.log(err.manage);
  })
  }




  getStudentsPerTrainer() {
    this.http.get('https://localhost:7281/api/Admin/GetStudentsPerTrainer').subscribe(
      res => {
        this.studentsPerTrainer = res;
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
      }
    );
  }

  GetCountPendingReservation() {
    this.http.get('https://localhost:7281/api/Admin/GetCountPendingReservation').subscribe(
      res => {
        this.CountPendingReservation = res;
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
      }
    );
  }

  GetCountAcceptedReservation() {
    this.http.get('https://localhost:7281/api/Admin/GetCountAcceptedReservation').subscribe(
      res => {
        this.CountAcceptedReservation = res;
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
      }
    );
  }

  GetAllPendingTrainer() {
    this.http.get('https://localhost:7281/api/Admin/GetAllPendingTrainer').subscribe(
      res => {
        this.registrationrequest = res;
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
      }
    );
  }


  DisplayAllUsers() {
    this.http.get('https://localhost:7281/api/Admin/DisplayAllUsers').subscribe(
      res => {
        this.AllUsers = res;
        this.toster.success('retrieve All Users successfully');
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
        this.toster.error('something wrong');
      }
    );
  }

  DisplayAllTrainers() {
    debugger
    this.http.get('https://localhost:7281/api/Admin/DisplayAllTrainers').subscribe(
      res => {
        this.viewT = res;
        this.toster.success('Retrieve All Trainers successfully');
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
        this.toster.error('something wrong');
      }
    );
  }
  displayAllTrainers(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7281/api/Admin/DisplayAllTrainers');
  }
  DisplayAllStudents2(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7281/api/Admin/DisplayAllStudents');
  }

  DisplayAllStudents() {
    this.http.get('https://localhost:7281/api/Admin/DisplayAllStudents').subscribe(
      res => {
        this.viewS = res;
        this.toster.success('Retrieve  All Students successfully');
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
        this.toster.error('something wrong');
      }
    );
  }


  DisplayAllContacts() {
    this.http.get('https://localhost:7281/api/Contact').subscribe(
      res => {
        this.viewcontactobj = res;
        this.toster.success('retrieve All Contacts successfully');
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
        this.toster.error('something wrong');
      }
    );
  }
  DeleteContact(id:number)
{
this.http.delete('https://localhost:7281/api/Contact/'+id).subscribe((res:any)=>{
console.log('Deleted');
this.toster.success('Deleted successfully');
window.location.reload();

},err=>{
console.log('Error');
this.toster.error('something wrong');
})
}

// GetHome()
// {
//   this.http.get('https://localhost:7281/api/Home/GetById/21').subscribe(res=>
//   {
//     this.gethome = res;
//   },
//   err=>{
//     console.log("error");
//     console.log(err.status);
//     console.log(err.manage);
//     })
//     }

GetHome(): Observable<any> {
  return this.http.get('https://localhost:7281/api/Home/GetById/21');
}
// GetHome(): Observable<any> {
//   return new Observable(observer => {
//     this.http.get('https://localhost:7281/api/Home/GetById/21').subscribe(
//       data => {
//         this.toster.success('Home data retrieved successfully');
//         observer.next(data);
//         observer.complete();
//       },
//       error => {
//         this.toster.error('Something went wrong');
//         observer.error(error);
//       }
//     );
//   });
// }



UpdateHome(body: any) {
  this.http.put('https://localhost:7281/api/Home', body).subscribe(
    (resp) => {
      console.log("Home Updated Successfully");
    },
    err => {
      console.log("An error occurred in the home update process", err);
    }
  );
}

GetAbout(): Observable<any> {
  return this.http.get('https://localhost:7281/api/About/2');
}

UpdateAbout(body: any) {
  this.http.put('https://localhost:7281/api/About', body).subscribe(
    (resp) => {
      console.log("About Updated Successfully");
    },
    err => {
      console.log("An error occurred in the about update process", err);
    }
  );
}
getAboutData() {
  this.http.get<any[]>('https://localhost:7281/api/about').subscribe(
    res => {
      this.aboutSubject.next(res);
      console.log(res);
    },
    err => {
      console.log("error");
      console.log(err.status);
      console.log(err.message);
    }
  );
}



getAllTestimonial()
{
this.http.get('https://localhost:7281/api/Testimonial').subscribe(res=>
{
this.testimonial=res; 
},
err=>{
console.log("error");
console.log(err.status);
console.log(err.manage);
})
}

DeleteTestimonial(id:number)
{
this.http.delete('https://localhost:7281/api/Testimonial/'+id).subscribe((res:any)=>{
console.log('Deleted');

window.location.reload();

},err=>{
console.log('Error');
})
}


AcceptTest(id: number) {
  this.http.put('https://localhost:7281/api/Admin/AcceptT/' + id, {}).subscribe(
    (res: any) => {
      console.log('Accepted');
      window.location.reload();
    },
    err => {
      console.log('Error', err);
    }
  );
}


AcceptCourse(id: number) {
  debugger
  this.http.put('https://localhost:7281/api/Admin/AcceptC/' + id, {}).subscribe(
    (res: any) => {
      console.log('Accepted');
      window.location.reload();
    },
    err => {
      console.log('Error', err);
    }
  );
}

getallreservation(): Observable<AdminSearch[]> {
  debugger
  return this.http.get<AdminSearch[]>(`https://localhost:7281/api/admin/GetAllReservation`);
}



private apiProfileUrl = 'https://localhost:7281/api/Admin';
updateProfileAdmin(profile: UpdateProfileAdminDto): Observable<any> {
  return this.http.put(`${this.apiProfileUrl}/update-profile-admin`, profile);
}



getProfileAdmin(userId: number): Observable<GuserDto> {
  return this.http.get<GuserDto>(`${this.apiProfileUrl}/get-profile-admin/${userId}`);
}

private acceptProfileUrl = 'https://localhost:7281/api/Admin';
acceptProfileAdmin(userId: number, newRegistrationStatus: string): Observable<void> {
  const url = `${this.acceptProfileUrl}/accept-profile-admin?userId=${userId}&newRegistrationStatus=${newRegistrationStatus}`;
  return this.http.post<void>(url, {});
}


displayImage:any;

uploadAttachmenet(image:FormData){
  this.http.post('https://localhost:7281/api/Admin/uploadImage',image).subscribe((resp:any)=>{
    this.displayImage= resp.imagename;
  },err=>{
    console.log('error');
    
  })

}


private apiUrl = 'https://localhost:7281/api/Admin'; 


uploadProfileImage(imageData: FormData): Observable<GuserDto> {
  return this.http.post<GuserDto>(`${this.apiUrl}/UploadImage`, imageData);
}
}

export interface AdminSearch {
  fullName: string;
  courseName: string;
  categoryname: string;
  reservationdate: Date;
  }

