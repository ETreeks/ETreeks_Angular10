import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  private aboutSubject = new BehaviorSubject<any[]>([]);
  about$ = this.aboutSubject.asObservable();


  numtrainers:object = [];
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
  //hits api
  getAllRegisteredTrainers()
  {
this.http.get('https://localhost:7281/api/Admin/GetCountTrainers').subscribe(res=>
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
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
      }
    );
  }

  DisplayAllTrainers() {
    debugger
    this.http.get('https://localhost:7281/api/Admin/DisplayAllTrainers').subscribe(
      res => {
        this.viewT = res;
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
      }
    );
  }
  displayAllTrainers(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7281/api/Admin/DisplayAllTrainers');
  }
  

  DisplayAllStudents() {
    this.http.get('https://localhost:7281/api/Admin/DisplayAllStudents').subscribe(
      res => {
        this.viewS = res;
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
      }
    );
  }


  DisplayAllContacts() {
    this.http.get('https://localhost:7281/api/Contact').subscribe(
      res => {
        this.viewcontactobj = res;
      },
      err => {
        console.log("error");
        console.log(err.status);
        console.log(err.message);
      }
    );
  }
  DeleteContact(id:number)
{
this.http.delete('https://localhost:7281/api/Contact/'+id).subscribe((res:any)=>{
console.log('Deleted');

},err=>{
console.log('Error');
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









}

