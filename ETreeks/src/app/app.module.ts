import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
//import { CoursesearchPipe } from './Pipes/coursesearch.pipe';
//import { CategorysearchPipe } from './Pipes/categorysearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
