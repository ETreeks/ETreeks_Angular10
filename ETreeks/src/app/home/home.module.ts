import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DefaultComponent } from './default/default.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SharedModule } from '../shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';



@NgModule({
  declarations: [
    DefaultComponent,
    AboutComponent,
    ContactComponent,
    TestimonialComponent,
    CourseCardComponent,
    CategoryCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
