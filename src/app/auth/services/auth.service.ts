import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthService {
  fakeUsername: string = 'a';
  fakePassword: string = 'a';

  login(username: string, password: string): Observable<any> {
    if (username == this.fakeUsername && password == this.fakePassword) {
      localStorage.setItem('token', 'my-super-secret-token-from-server');
      return of(new HttpResponse({ status: 200 }));
    } else {
      return of(new HttpResponse({ status: 401 }));
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isUserLoggedIn(): Observable<boolean> {
    if (localStorage.getItem('token') != null) {
      return of(true);
    }
    return of(false);
  }
}
