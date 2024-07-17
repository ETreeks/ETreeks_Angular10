import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/Services/main.service';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-managecourses',
  templateUrl: './managecourses.component.html',
  styleUrls: ['./managecourses.component.css']
})
export class ManagecoursesComponent implements OnInit {
  constructor(public mc: MainService, public dialog: MatDialog , public A:AdminService) { }
  @ViewChild('deleteDailog') callDeleteDailog!: TemplateRef<any>;

  
  pData :any ;
  categories: any[] = [];
  trainers: any[] = [];

  updateForm:FormGroup =new FormGroup
  ({
    id : new FormControl('',),
    name: new FormControl('', [Validators.required]),
    imagename: new FormControl(''),
    // categoryid: new FormControl(''),
    price : new FormControl(''),
    category_Id: new FormControl(''),
    trainer_Id : new FormControl(''),
    passmark : new FormControl(''),
  })
  @ViewChild('updateDialog') callUpdateDailog!:TemplateRef<any>;
  openUpdateDailog(course :any)
  {
    console.log(course);
    this.dialog.open(this.callUpdateDailog);
    this.pData=course;
    console.log(this.pData);
    this.updateForm.controls['id'].setValue(this.pData.id);
  } 

  openCreateCourseDailog() {
    this.dialog.open(CreateCourseComponent);
  }

  ngOnInit(): void {
    this.mc.getAllCourses();

    this.mc.getAllCategories().subscribe((data: any[]) => {
      this.categories = data.map(category => ({
        id: category.id,
        name: category.categoryname
      }));
      console.log(this.categories); // Should show all three records
    }, err => {
      console.log("Error fetching categories", err);
    });
  
  
    this.A.displayAllTrainers().subscribe((data: any[]) => {
      this.trainers = data.map(tra => ({
        id: tra.id,
        name: tra.username
      }));
      console.log(this.trainers); // Should show all three records
    }, err => {
      console.log("Error fetching trainers", err);
    });

  }

  openDeleteDailog(id:number){
    const dailogResult=   this.dialog.open(this.callDeleteDailog);
    dailogResult.afterClosed().subscribe((result)=>{
     if(result !=undefined){
       if(result=='yes') 
         this.mc.DeleteCourse(id); 
       else 
       console.log('Thank you !');
     }
    })
     }

     Update()
     {
       this.mc.UpdateCourse(this.updateForm.value);
     }
     uploadImage(file:any)
     {
       // if(file.length ==0) 
       //   return 0 ;
   
       let fileToUpload = <File> file[0];
       const formData = new FormData ();
       formData.append('file',fileToUpload,fileToUpload.name);
       this.mc.uploadAttachmenet(formData);
   
     }
     

}

