// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentUserRole: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    // Implement your authentication logic here
    // For demonstration, let's assume admin and employee credentials
    if (username === 'admin' && password === 'admin') {
      this.setCurrentUser('admin');
      return this.loggedIn.asObservable();
    } else if (username === 'employee' && password === 'employee') {
      this.setCurrentUser('employee');
      return this.loggedIn.asObservable();
    } else {
      return new Observable<boolean>(observer => observer.next(false));
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.currentUserRole.next('');
    this.router.navigate(['/login']);
  }

  private setCurrentUser(role: string) {
    this.loggedIn.next(true);
    this.currentUserRole.next(role);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getCurrentUserRole(): Observable<string> {
    return this.currentUserRole.asObservable();
  }
}
