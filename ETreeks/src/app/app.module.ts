import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';
import { StudentModule } from './student/student.module';
import { RouterModule } from '@angular/router'; // Ensure this import is present

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    StudentModule,
    RouterModule // Ensure RouterModule is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
