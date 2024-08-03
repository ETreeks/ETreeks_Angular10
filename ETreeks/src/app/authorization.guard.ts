// import { CanActivateFn } from '@angular/router';

// export const authorizationGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const router = new Router()
  const toastr:ToastrService = inject(ToastrService); 
 console.log(state);
 
const token= localStorage.getItem('token'); 
if(token) //user 
{
  if(state.url.indexOf('admin')>0)
  {
    let user :any = localStorage.getItem('user'); 
    user= JSON.parse(user); 
    if(user.roleid=="1")
    {
      toastr.success('Welcome in admin dahsboard'); 
      return true; 
    }

    else //roleid!=1 
     {
      toastr.warning('this page for admin module !!'); 
      router.navigate(['security/login']); 
      return false ; 
    }
  }
  return false; //else if(state.url.indexOf('user')>0)

}

else 
{
  toastr.warning('please sing up '); 
  router.navigate(['security/register']); 
  return false ; 
}




};

