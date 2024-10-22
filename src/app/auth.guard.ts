import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isAuthenticated: boolean = false; // Simulate authentication status

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}
