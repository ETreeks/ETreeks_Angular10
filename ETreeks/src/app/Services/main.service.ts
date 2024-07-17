import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
  courses:any=[];
  categories:any =[];
  displayImage:any;


//hits api
getAllCourses()
{
this.http.get('https://localhost:7281/api/Course').subscribe(res=>
{
this.courses=res; 
},
err=>{
console.log("error");
console.log(err.status);
console.log(err.manage);
})
}

DeleteCourse(id:number)
{
  debugger
this.http.delete('https://localhost:7281/api/Course/'+id).subscribe((res:any)=>{
console.log('Deleted');

},err=>{
console.log('Error');
})
}

//mangecategory.ts
GetAllCategories()
{
this.http.get<any[]>('https://localhost:7281/api/Category/GetAllCategories').subscribe(res=>
{
this.categories=res; 
console.log(this.categories);
},
err=>{
console.log("error");
console.log(err.status);
console.log(err.manage);
})
}
//
getAllCategories(): Observable<any[]> {
  return this.http.get<any[]>('https://localhost:7281/api/category/GetAllCategories');
}


DeleteCategory(id:number)
{
  debugger
this.http.delete('https://localhost:7281/api/Category/DeleteCategory/'+id).subscribe((res:any)=>{
console.log('Deleted');

},err=>{
console.log('Error');
})
window.location.reload();
}




CreateCategory(body: any) {
  debugger
  body.imagename=this.displayImage;
  this.http.post('https://localhost:7281/api/Category/CreateCategory', body).subscribe(
    (resp) => {
      console.log("Category Created Successfully");
    },
    err => {
      console.log("An error occurred in the create category process", err);
    }
  );
  window.location.reload();
}

CreateCourse(body: any) {
  debugger
  body.imagename=this.displayImage;
  this.http.post('https://localhost:7281/api/Course', body).subscribe(
    (resp) => {
      console.log("Course Created Successfully");
    },
    err => {
      console.log("An error occurred in the create course process", err);
    }
  );
  window.location.reload();
}



uploadAttachmenet(images:FormData)
{
  debugger
this.http.post('https://localhost:7281/api/Course/UploadImage',images).subscribe((reap:any)=>{
this.displayImage = reap.imagename;
console.log(this.displayImage);
},err=>{
console.log("error");
})
}

UpdateCourse(body: any)
{
  debugger
  body.imagename=this.displayImage;
    this.http.put('https://localhost:7281/api/Course', body).subscribe(
      (resp) => {
        console.log("Course Updated Successfully");
      },
      err => {
        console.log("An error occurred in the update Course process", err);
      }
    );
    window.location.reload();
}


UpdateCategory(body: any)
{
  debugger
  body.imagename=this.displayImage;
    this.http.put('https://localhost:7281/api/Category/UpdateCategory', body).subscribe(
      (resp) => {
        console.log("Category Updated Successfully");
      },
      err => {
        console.log("An error occurred in the update Category process", err);
      }
    );
    window.location.reload();
}

uploadAttachmenetCat(images:FormData)
{
  debugger
this.http.post('https://localhost:7281/api/Category/UploadCatImage',images).subscribe((reap:any)=>{
this.displayImage = reap.imagename;
console.log(this.displayImage);
},err=>{
console.log("error");
})
}

}
