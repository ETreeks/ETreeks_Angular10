import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-trainer',
  templateUrl: './view-trainer.component.html',
  styleUrls: ['./view-trainer.component.css']
})
export class ViewTrainerComponent implements  OnInit {
  constructor(public admin3:AdminService){ 
  }
  
  ngOnInit(): void {
    this.admin3.DisplayAllTrainers();
  }

}
