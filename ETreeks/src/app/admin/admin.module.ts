import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RegistrationrequestComponent } from './registrationrequest/registrationrequest.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewTrainerComponent } from './view-trainer/view-trainer.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ManagecoursesComponent } from './managecourses/managecourses.component';
import { ManagecategoriesComponent } from './managecategories/managecategories.component';
import { EdithomeComponent } from './edithome/edithome.component';
import { EditaboutComponent } from './editabout/editabout.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { SharedModule } from '../shared/shared.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { SearchdatesComponent } from './searchdates/searchdates.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ManagetestimonialsComponent } from './managetestimonials/managetestimonials.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    StatisticsComponent,
    RegistrationrequestComponent,
    ViewUsersComponent,
    ViewTrainerComponent,
    ViewStudentComponent,
    ManagecoursesComponent,
    ManagecategoriesComponent,
    EdithomeComponent,
    EditaboutComponent,
    ViewcontactComponent,
    CreateCategoryComponent,
    CreateCourseComponent,
    SearchdatesComponent,
    ManagetestimonialsComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
