import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/Services/main.service';

@Component({
  selector: 'app-trainercard',
  templateUrl: './trainercard.component.html',
  styleUrls: ['./trainercard.component.css']
})
export class TrainercardComponent {

  constructor(public main : MainService , private router  :Router){}
  @Input() Tobject : any ;
//@Output() Hala = new EventEmitter ();

  viewCourses(trainerId: number ) {
   this.main.getAllCoursesTC(trainerId);
   //this.router.navigate(['student/viewtrainercourses']);
   this.router.navigate(['student/viewtrainercourses'], { queryParams: { trainerId: trainerId } });
   // this.Hala.emit(this.Tobject.id);
      
  console.log('Trainer ID:', trainerId);

  }


 }
 
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Router } from '@angular/router';
 
// @Component({
//   selector: 'app-trainercard',
//   templateUrl: './trainercard.component.html',
//   styleUrls: ['./trainercard.component.css']
// })
// export class TrainercardComponent {
//   @Input() Tobject: any;
 
//   constructor(private router: Router) {}
 
//   viewCourses(id: number) {
//     this.router.navigate(['student/viewtrainercourses'], { queryParams: { trainerId: id } });
//   }
// }