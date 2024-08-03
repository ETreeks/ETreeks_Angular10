import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient , private toster :ToastrService) { }



  createContact(body:any)
  {
    debugger
    this.http.post('https://localhost:7281/api/Contact',body).subscribe((resp) => {
       console.log("user contact  correctly");
       this.toster.success('user contact  correctly');
        
      }, err => {
        console.log("An error occurred in the contact process");
        this.toster.error('An error occurred in the contact process');
        
      }
    );
  }
  





  
}
