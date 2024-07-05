// auth.service.ts
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

export interface User {
  firstName: string;
  lastName:string;
  // Add other properties as needed
}

export interface AuthResponse {
  token: string;
  user: User;
  // Add other properties if needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl!: string;
  private loggedIn: BehaviorSubject<boolean>;
  private currentUserRole = new BehaviorSubject<string | null>(this.getCurrentUsername());
  private userList!: any[];

  constructor(private router: Router, private http: HttpClient,private configService: ConfigService) {
    this.apiUrl = this.configService.getApiUrl();
    this.loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
    // this.getUserList().subscribe(data => this.userList = data);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    var credentials = {email, password}
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/auth/login`, credentials, { headers }).pipe(
      map((response: any) => response as AuthResponse),
      tap(response => {
        localStorage.setItem('authToken', response.token);
        this.setCurrentUser(response.user.firstName + '' + response.user.lastName);
        return this.loggedIn.asObservable();
      })
    );
    // Check if the user is in the user list JSON and if the password is correct
    // const user = this.userList.find(u => u.email === username && u.password === password);
    // if (user) {
    //   this.setCurrentUser(user.firstName + '' + user.lastName);
    //   return this.loggedIn.asObservable();
    // } else {
    //   this.loggedIn.next(false);
    //   return new Observable<boolean>(observer => observer.next(false));
    // }
  }

  logout() {
    localStorage.removeItem('authToken');
    // Clear localStorage and set loggedIn to false
    localStorage.removeItem('isLoggedIn');
    this.loggedIn.next(false);
    // Clear current user
    this.clearCurrentUser();
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
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

  // getUserList(): Observable<any> {
  //   return this.http.get<any>('../jsonData/userList.json').pipe(
  //     map((data) => data)
  //   );
  // }
}
