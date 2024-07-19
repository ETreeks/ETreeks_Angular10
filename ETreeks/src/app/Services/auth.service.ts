import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  Login(userName:any , password:any)
  {

var body ={
username: userName.toString(),
password: password.toString()
}
const headerDirc ={
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

const requestOptions = {
  headers : new HttpHeaders(headerDirc)
}

console.log(body);
this.http.post('https://localhost:7281/api/Login',body,requestOptions).subscribe((resp :any) => {
  const responce ={
    token:resp.toString()
  }
  localStorage.setItem('token',responce.token)
  console.log("user login  correctly");
 }, err => {
   console.log("An error occurred in the login process");
 }
);



  }







}
