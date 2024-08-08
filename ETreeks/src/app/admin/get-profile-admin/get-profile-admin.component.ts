import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';
import { GuserDto } from 'src/Interface/guser.dto';
import { UpdateProfileAdminDto } from 'src/Interface/update-profile-admin.dto';

@Component({
  selector: 'app-get-profile-admin',
  templateUrl: './get-profile-admin.component.html',
  styleUrls: ['./get-profile-admin.component.css']
})
export class GetProfileAdminComponent implements OnInit {
  profile: GuserDto | null = null;
  userId: number | null = null;

  constructor(private adminService: AdminService ,private toastr: ToastrService) { }

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
      this.adminService.getProfileAdmin(this.userId).subscribe(
        (data: GuserDto) => {
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
      const updatedProfile: UpdateProfileAdminDto = {
        userId: this.userId,
        newUsername: this.profile.username,
        newPassword: this.profile.password,
        newFname: this.profile.fname,
        newLname: this.profile.lname,
        newEmail: this.profile.email,
        newImageName: this.profile.imageName,
        newGender: this.profile.gender,
        newPhone: this.profile.phone
      };

      this.adminService.updateProfileAdmin(updatedProfile).subscribe(
        response => {
          console.log('Profile updated successfully');
          this.toastr.success(' Your profile updated successfully');
        },
        error => {
          console.error('Error updating profile', error);
          
        }
      );
    }
  }
}
