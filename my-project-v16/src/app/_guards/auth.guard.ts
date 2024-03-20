// auth.guard.ts
import { Injectable, inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';
import { AuthService } from '../_services/auth.service'
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route,state) => {
  const router = inject(Router);
  const service = inject(AuthService);

  if(service.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']); // Redirect to login page if not authenticated
    return false;
  }
}