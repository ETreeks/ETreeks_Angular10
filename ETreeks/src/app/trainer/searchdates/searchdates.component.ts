import { Component, OnInit } from '@angular/core';
import { TrainerService, TrainerSearch } from 'src/app/Services/trainer.service';

@Component({
  selector: 'app-searchdates',
  templateUrl: './searchdates.component.html',
  styleUrls: ['./searchdates.component.css']
})
export class SearchdatesComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';
  searchResults: TrainerSearch[] = [];

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {}

  onSearch(): void {
    this.trainerService.searchReservations(this.startDate, this.endDate).subscribe(
      (results: TrainerSearch[]) => {
        this.searchResults = results;
      },
      (error) => {
        console.error('Error fetching search results', error);
      }
    );
  }
}









