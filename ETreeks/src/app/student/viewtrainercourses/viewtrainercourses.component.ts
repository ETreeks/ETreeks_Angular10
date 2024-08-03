// import { Component, OnInit } from '@angular/core';
// import { MainService } from 'src/app/Services/main.service';

// @Component({
//   selector: 'app-viewtrainercourses',
//   templateUrl: './viewtrainercourses.component.html',
//   styleUrls: ['./viewtrainercourses.component.css']
// })
// export class ViewtrainercoursesComponent implements OnInit {


// constructor(public main : MainService){}


//   ngOnInit(): void {
//    this.main.getcoursesT();
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/Services/main.service';
 
@Component({
  selector: 'app-viewtrainercourses',
  templateUrl: './viewtrainercourses.component.html',
  styleUrls: ['./viewtrainercourses.component.css']
})
export class ViewtrainercoursesComponent implements OnInit {
  courses: any[] = [];
  trainerId!: number;
 
  constructor(
    public main: MainService,
    private route: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
    debugger
    this.route.queryParams.subscribe(params => {
      this.trainerId = params['trainerId'];
      if (this.trainerId) {
        this.loadCourses();
      }
    });
  }
 
  loadCourses(): void {
    this.main.getAllCoursesTC(this.trainerId);
  }
}