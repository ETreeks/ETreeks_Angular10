
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CertificateService {
 
  constructor(private http: HttpClient) { }

  getAllReservations(): Observable<any[]> {
    debugger
    return this.http.get<any[]>(`https://localhost:7281/api/reservation`);
  }
  getReservationsbyid(id: number): Observable<any[]> {
    debugger
    return this.http.get<any[]>(`https://localhost:7281/api/reservation/GetById/`+id);
  }
 
  GetAllCourses(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:7281/api/course`);
  }
 
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:7281/api/admin/DisplayAllUsers`);
  }
}