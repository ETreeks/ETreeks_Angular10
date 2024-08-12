import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { ImageService } from 'src/app/Services/image-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{

  imageSrc: string | null = null;

  constructor(public admin:AdminService ,public imageService: ImageService){ 
  }
  ngOnInit(): void {
    this.admin.getAllRegisteredTrainers();
    this.admin.getAllRegisteredStudents();
    this.admin.GetCountAcceptedTrainers();
    this.admin.getCountPendingTrainers();
    this.imageService.currentImage.subscribe(
      image => this.imageSrc = image
    );

  }

  
}
