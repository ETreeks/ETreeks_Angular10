import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trainercard',
  templateUrl: './trainercard.component.html',
  styleUrls: ['./trainercard.component.css']
})
export class TrainercardComponent {

  
  @Input() Tobject : any ;

@Output() Hala = new EventEmitter ();

  viewCourses() {
    debugger
this.Hala.emit();

  }
}
