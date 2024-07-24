import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient , private router :Router) { }
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
  let  data:any = jwtDecode(responce.token)//object
  localStorage.setItem('user',JSON.stringify(data));
  debugger
  localStorage.setItem('Id', data.UserId); // Store the user_Id
debugger
  if(data.RoleId=="1")
  {
    this.router.navigate(['admin/dashboard']);
  }
  else if (data.RoleId=="2")
  {
    this.router.navigate(['trainer/dashboardt']);
  }
  else if (data.RoleId=="3")
    {
      this.router.navigate(['student']);
    }

  
  console.log("user login  correctly");
 }, err => {
   console.log("An error occurred in the login process");
 }
);}

}
