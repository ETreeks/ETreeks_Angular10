import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  constructor(public m:MainService , public A :AdminService){}
  
  
  categories: any[] = [];
  trainers: any[] = [];

  createcourseForm:FormGroup = new FormGroup({ 
    name:new FormControl('',[Validators.required]),
    imagename:new FormControl(''),
    price:new FormControl(''),
    passmark:new FormControl(''),
    category_Id:new FormControl(''),
    trainer_Id:new FormControl(''),
   
}  
)
ngOnInit(): void {
  this.m.getAllCategories().subscribe((data: any[]) => {
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

uploadImage(file:any)
{
  // if(file.length ==0) 
  //   return 0 ;

  let fileToUpload = <File> file[0];
  const formData = new FormData ();
  formData.append('file',fileToUpload,fileToUpload.name);
  this.m.uploadAttachmenet(formData);

}
}
