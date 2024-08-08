import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { MainService } from 'src/app/Services/main.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  courseId: any;
  courseDetails: any;
  @ViewChild('bookDailog') callBookDailog!: TemplateRef<any>;
  userId = Number(localStorage.getItem('Id'));
  categories: any[] = [];
  trainers: any[] = [];
  selectedCategoryName: string = '';
  selectedTrainerName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router2: Router,
    private mainService: MainService,
    public dialog: MatDialog,
    public s: StudentService,
    public admin:AdminService) { }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id')!;
    this.loadCourseDetails();
    this.loadCategories();
    this.loadTrainers(); 
  }

  loadCourseDetails(): void {
    this.mainService.getCourseDetails(this.courseId).subscribe(details => {
      this.courseDetails = details;
      if (this.categories.length > 0) {
        this.setSelectedCategoryName(this.courseDetails.category_Id);
      }
      if (this.trainers.length > 0) {
        this.setSelectedTrainerName(this.courseDetails.trainer_Id);
      }
    });
  }

  loadCategories(): void {
    this.mainService.getAllCategories().subscribe((data: any[]) => {
      this.categories = data.map(category => ({
        id: category.id,
        name: category.categoryname
      }));
      console.log(this.categories);
      if (this.courseDetails) {
        this.setSelectedCategoryName(this.courseDetails.category_Id);
      }
    }, err => {
      console.log("Error fetching categories", err);
    });
  }

  loadTrainers(): void {
    this.admin.displayAllTrainers().subscribe((data: any[]) => {
      this.trainers = data.map(tra => ({
        id10: tra.id,
        name10: tra.username
      }));
      console.log(this.trainers);
      if (this.courseDetails) {
        this.setSelectedTrainerName(this.courseDetails.trainer_Id); 
      }
    }, err => {
      console.log("Error fetching trainers", err);
    });
  }

  setSelectedCategoryName(catid: number): void {
    if (this.categories.length > 0) {
      const selectedCategory = this.categories.find(category => category.id === catid);
      this.selectedCategoryName = selectedCategory ? selectedCategory.name : 'Unknown';
    } else {
      this.selectedCategoryName = 'Unknown';
    }
  }

  setSelectedTrainerName(trainerId: number): void {
    if (this.trainers.length > 0) {
      const selectedTrainer = this.trainers.find(trainer => trainer.id10 === trainerId);
      this.selectedTrainerName = selectedTrainer ? selectedTrainer.name10 : 'Unknown';
    } else {
      this.selectedTrainerName = 'Unknown';
    }
  }

  Back() {
    this.router2.navigate(['student/viewcourse']);
  }

  // openBookDailog(courseId: number, userId: number) {
  //   const dailogResult = this.dialog.open(this.callBookDailog);
  //   dailogResult.afterClosed().subscribe((result) => {
  //     if (result !== undefined) {
  //       if (result === 'yes') {
  //         this.s.CreateBooking(courseId, userId);
  //       } else {
  //         console.log('Thank you !');
  //       }
  //     }
  //   });
  // }
  openBookDailog(price: number , courseId: number, ){
    this.router2.navigate([`/student/paymentform/${price}`], {
      queryParams: { courseId: courseId }
    });
  }
}
