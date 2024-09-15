import { inject } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "@tt/auth";

export const canActivateAuth = () => {
  const isLoggedIn = inject(AuthService).isAuth;

  if (isLoggedIn) {
    return true;
  }

  return inject(Router).createUrlTree(['/login']);
};
