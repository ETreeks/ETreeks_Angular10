import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/Services/main.service';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-managecategories',
  templateUrl: './managecategories.component.html',
  styleUrls: ['./managecategories.component.css']
})
export class ManagecategoriesComponent implements OnInit {

  constructor(public managecat : MainService ,public dialog: MatDialog){ 
  }
  pData :any ;
  @ViewChild('deleteDailog') callDeleteDailog!:TemplateRef<any>; 
  @ViewChild('updateDialog') callUpdateDailog!:TemplateRef<any>;


  updateForm:FormGroup =new FormGroup
  ({
    id : new FormControl('',),
    categoryname: new FormControl('', [Validators.required]),
    imagename: new FormControl(''),
  })
  openDeleteCatDailog(id:number){
 const dailogResult=this.dialog.open(this.callDeleteDailog);
 dailogResult.afterClosed().subscribe((result)=>{
  if(result !=undefined){
    if(result=='yes') 
      this.managecat.DeleteCategory(id); 
    else 
    console.log('Thank you !');
  }
 })
  }

  ngOnInit(): void {
   this.managecat.GetAllCategories();
  }
  openCreateCatDailog()
  {
    this.dialog.open(CreateCategoryComponent);
  }

  openUpdateDailog(course :any)
  {
    console.log(course);
    this.dialog.open(this.callUpdateDailog);
    this.pData=course;
    console.log(this.pData);
    this.updateForm.controls['id'].setValue(this.pData.id);
  } 
  Update()
  {
    this.managecat.UpdateCategory(this.updateForm.value);
  }
  uploadImage(file:any)
  {
    // if(file.length ==0) 
    //   return 0 ;

    let fileToUpload = <File> file[0];
    const formData = new FormData ();
    formData.append('file',fileToUpload,fileToUpload.name);
    this.managecat.uploadAttachmenetCat(formData);

  }
}
