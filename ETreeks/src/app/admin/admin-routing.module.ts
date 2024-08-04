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

import { ManagetestimonialsComponent } from './managetestimonials/managetestimonials.component';
import { ReportComponent } from './report/report.component';
import { ChartComponent } from './chart/chart.component';
<<<<<<< HEAD
//import { SearchtrainerComponent } from './searchtrainer/searchtrainer.component';
=======
import { GetProfileAdminComponent } from './get-profile-admin/get-profile-admin.component';
>>>>>>> c802a9e32e95d00a0d8653bfee441f13b68eb45b

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
    path:'testimonial',
    component:ManagetestimonialsComponent
  }
  ,
  {
    path:'report',
    component:ReportComponent
  } ,
  {
    path:'GPA',
    component:GetProfileAdminComponent
  } ,

  {
    path:'chart',
    component:ChartComponent
  }
  // ,
  // {
  //   path:'searchtrainer',
  //   component:SearchtrainerComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
