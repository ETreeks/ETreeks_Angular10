import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-viewcoursestd',
  templateUrl: './viewcoursestd.component.html',
  styleUrls: ['./viewcoursestd.component.css']
})
export class ViewcoursestdComponent  implements OnInit{

  constructor(public m : MainService){}
  ngOnInit(): void {
    this.m.getAllCourses();
  }

}
