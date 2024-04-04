// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean>;
  private currentUserRole = new BehaviorSubject<string | null>(this.getCurrentUsername());
  private currentUserDetails = new BehaviorSubject<string | null>(this.getCurrentDetails());
  private userList!: any[];

  constructor(private router: Router, private http: HttpClient) { 
    this.loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
    this.getUserList().subscribe(data => this.userList = data);
  }

  login(username: string, password: string): Observable<boolean> {
    // Check if the user is in the user list JSON and if the password is correct
    const user = this.userList.find(u => u.email === username && u.password === password);
    if (user) {
      this.setCurrentUser(user.email);
      this.setCurrentUserDetails(user);
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

  private setCurrentUser(username: string) {
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedIn.next(true);
    localStorage.setItem('currentUser', username);
    // Update the currentUser BehaviorSubject
    this.currentUserRole.next(username);
  }

  setCurrentUserDetails(user: object) {
    const userDetailsString = JSON.stringify(user);
    localStorage.setItem('userDetails', userDetailsString)
    this.currentUserDetails.next(JSON.stringify(user));
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getCurrentUserRole(): Observable<string | null> {
    return this.currentUserRole.asObservable();
  }

  getCurrentUserDetails(): Observable<string | null> {
    return this.currentUserDetails.asObservable();
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated based on localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  private getCurrentUsername(): string | null {
    // Get the current user from localStorage
    return localStorage.getItem('currentUser');
  }

  private getCurrentDetails(): string | null {
    // Get the current user from localStorage
    return localStorage.getItem('userDetails');
  }

  getUserList(): Observable<any> {
    return this.http.get<any>('../jsonData/userList.json').pipe(
      map((data) => data)
    );
  }
}
