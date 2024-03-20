// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean>;
  private currentUserRole = new BehaviorSubject<string | null>(this.getCurrentUsername());

  constructor(private router: Router) { 
    this.loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
  }

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
      this.loggedIn.next(false);
      return new Observable<boolean>(observer => observer.next(false));
    }
  }

  logout() {
    // Clear localStorage and set loggedIn to false
    localStorage.removeItem('isLoggedIn');
    this.loggedIn.next(false);
    // Clear current user
    this.clearCurrentUser();
    this.router.navigate(['/login']);
  }

  private clearCurrentUser(): void {
    // Remove current user from localStorage
    localStorage.removeItem('currentUser');
    // Update the currentUser BehaviorSubject
    this.currentUserRole.next(null);
  }

  private setCurrentUser(role: string) {
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedIn.next(true);
    localStorage.setItem('currentUser', role);
    // Update the currentUser BehaviorSubject
    this.currentUserRole.next(role);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getCurrentUserRole(): Observable<string | null> {
    return this.currentUserRole.asObservable();
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated based on localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  private getCurrentUsername(): string | null {
    // Get the current user from localStorage
    return localStorage.getItem('currentUser');
  }
}
