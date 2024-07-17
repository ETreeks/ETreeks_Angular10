import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { SearchdatesComponent } from './searchdates/searchdates.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'statistics',
    component:StatisticsComponent
  },
  {
    path:'registrationrequest',
    component:RegistrationrequestComponent
  },
  {
    path:'allusers',
    component:ViewUsersComponent
  },
  {
    path:'alltrainer',
    component:ViewTrainerComponent
  },
  {
    path:'allstudent',
    component:ViewStudentComponent
  },
  {
    path:'managecourses',
    component:ManagecoursesComponent
  },
  {
    path:'managecategories',
    component:ManagecategoriesComponent
  },
  {
    path:'edithome',
    component:EdithomeComponent
  },
  {
    path:'editabout',
    component:EditaboutComponent
  },
  {
    path:'viewcontact',
    component:ViewcontactComponent
  },
  {
    path:'SearchDate',
    component:SearchdatesComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
