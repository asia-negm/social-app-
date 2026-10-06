import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
    const _Router = inject(Router)
  const token = localStorage.getItem('socialToken') ;
if(token){
  return _Router.parseUrl('/feeds');
}else{
  return true;
}
};
