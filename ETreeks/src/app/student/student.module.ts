import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomestudentComponent } from './homestudent/homestudent.component';
import { SharedModule } from '../shared/shared.module';
import { ViewcategorystdComponent } from './viewcategorystd/viewcategorystd.component';
import { ViewcoursestdComponent } from './viewcoursestd/viewcoursestd.component';
import { ViewteacherstdComponent } from './viewteacherstd/viewteacherstd.component';
import { HistorystdComponent } from './historystd/historystd.component';
import { TestimonialstdComponent } from './testimonialstd/testimonialstd.component';
import { ViewprofilestdComponent } from './viewprofilestd/viewprofilestd.component';
import { EditprofilestdComponent } from './editprofilestd/editprofilestd.component';
import { DeleteprofilestdComponent } from './deleteprofilestd/deleteprofilestd.component';
import { CategorycardstdComponent } from './categorycardstd/categorycardstd.component';
import { CoursecardstdComponent } from './coursecardstd/coursecardstd.component';
import { SearchsessioncourseComponent } from './searchsessioncourse/searchsessioncourse.component';


@NgModule({
  declarations: [
    HomestudentComponent,
    ViewcategorystdComponent,
    ViewcoursestdComponent,
    ViewteacherstdComponent,
    HistorystdComponent,
    TestimonialstdComponent,
    ViewprofilestdComponent,
    EditprofilestdComponent,
    DeleteprofilestdComponent,
    CategorycardstdComponent,
    CoursecardstdComponent,
    SearchsessioncourseComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
