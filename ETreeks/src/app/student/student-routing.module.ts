import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomestudentComponent } from './homestudent/homestudent.component';
import { ViewcategorystdComponent } from './viewcategorystd/viewcategorystd.component';
import { ViewcoursestdComponent } from './viewcoursestd/viewcoursestd.component';
import { ViewteacherstdComponent } from './viewteacherstd/viewteacherstd.component';
import { HistorystdComponent } from './historystd/historystd.component';
import { TestimonialstdComponent } from './testimonialstd/testimonialstd.component';
import { ViewprofilestdComponent } from './viewprofilestd/viewprofilestd.component';
import { EditprofilestdComponent } from './editprofilestd/editprofilestd.component';
import { DeleteprofilestdComponent } from './deleteprofilestd/deleteprofilestd.component';

const routes: Routes = [
  {
    path:'',
    component:HomestudentComponent
  }
  ,
  {
    path:'viewcategory',
    component:ViewcategorystdComponent
  },
  {
    path:'viewcourse',
    component:ViewcoursestdComponent
  },
  {
    path:'viewteacher',
    component:ViewteacherstdComponent
  },
  {
    path:'history',
    component:HistorystdComponent
  },
  {
    path:'testimonial',
    component:TestimonialstdComponent
  },
  {
    path:'viewprofile',
    component:ViewprofilestdComponent
  },
  {
    path:'editprofile',
    component:EditprofilestdComponent
  },
  {
    path:'deleteprofile',
    component:DeleteprofilestdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
