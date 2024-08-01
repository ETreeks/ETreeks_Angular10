import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-createreview',
  templateUrl: './createreview.component.html',
  styleUrls: ['./createreview.component.css']
})
export class CreatereviewComponent implements OnInit {
  reviewMessage: string = '';
 
  constructor(public studentService: StudentService){}
  createReviewForm:FormGroup = new FormGroup({ 
    message:new FormControl('',[Validators.required]),
    guser_Id:new FormControl(''),
    course_Id:new FormControl(''),
  })

 
  ngOnInit(): void {
  
  }

}