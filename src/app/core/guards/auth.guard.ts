import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private auth: AuthService) {}
  isAuthenticated = false;
  canLoad(): boolean {
    return this.handleUserAuth();
  }

  canActivate(): boolean {
    return this.handleUserAuth();
  }

  handleUserAuth(): boolean {
    this.auth
      .isUserLoggedIn()
      .subscribe((logged) => (this.isAuthenticated = logged));
    if (!this.isAuthenticated) {
      this.router.navigate(['/login'], {
        queryParams: {
          authenticated: false,
        },
      });
    }
    return this.isAuthenticated;
  }
}
