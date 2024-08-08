import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/Services/student.service';
import { ProfileStudentDTO } from 'src/Interface/profile-student-dto';

@Component({
  selector: 'app-viewprofilestd',
  templateUrl: './viewprofilestd.component.html',
  styleUrls: ['./viewprofilestd.component.css']
})
export class ViewprofilestdComponent implements OnInit {
  profile: ProfileStudentDTO | null = null;
  userId: number | null = null;

  constructor(private studentService: StudentService ,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadUserIdFromLocalStorage();
    this.loadProfile();
  }

  loadUserIdFromLocalStorage(): void {
    const userIdFromStorage = localStorage.getItem('Id');
    if (userIdFromStorage) {
      this.userId = Number(userIdFromStorage);
    } else {
      console.warn('userId not found in local storage');
    }
  }

  loadProfile(): void {
    if (this.userId !== null) {
      this.studentService.viewProfile(this.userId).subscribe(
        (data: ProfileStudentDTO) => {
          this.profile = data;
        },
        error => {
          console.error('Error loading data', error);
        }
      );
    } else {
      console.error('userId is not available');
    }
  }

  updateProfile(): void {
    if (this.profile && this.userId !== null) {
      this.studentService.updateProfile(this.profile).subscribe(
        response => {
          console.log('Profile updated successfully');
          this.toastr.success(' Your profile updated successfully');
          
        },
        error => {
          console.error('Error updating profile', error);
          this.toastr.error('Error updating your profile');
        }
      );
    }
  }

}
