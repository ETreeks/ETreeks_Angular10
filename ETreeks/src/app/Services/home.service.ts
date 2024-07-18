import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }



  createContact(body:any)
  {
    debugger
    this.http.post('https://localhost:7281/api/Contact',body).subscribe((resp) => {
       console.log("user contact  correctly");
      }, err => {
        console.log("An error occurred in the contact process");
      }
    );
  }
  
}
