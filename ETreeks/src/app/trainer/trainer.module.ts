import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerRoutingModule } from './trainer-routing.module';
import { SidebartrainerComponent } from './sidebartrainer/sidebartrainer.component';
import { ManagesessionsComponent } from './managesessions/managesessions.component';
import { ManagecourseComponent } from './managecourse/managecourse.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DeleteprofileComponent } from './deleteprofile/deleteprofile.component';
import { ManagereservationComponent } from './managereservation/managereservation.component';
import { SearchdatesComponent } from './searchdates/searchdates.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { CategorycardComponent } from './categorycard/categorycard.component';
import { DashboardtrainerComponent } from './dashboardtrainer/dashboardtrainer.component';
import { HometrainerComponent } from './hometrainer/hometrainer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SidebartrainerComponent,
    ManagesessionsComponent,
    ManagecourseComponent,
    CreatecourseComponent,
    ViewprofileComponent,
    EditprofileComponent,
    DeleteprofileComponent,
    ManagereservationComponent,
    SearchdatesComponent,
    ViewcategoryComponent,
    CategorycardComponent,
    DashboardtrainerComponent,
    HometrainerComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule,
    SharedModule
  ]
})
export class TrainerModule { }
