import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly API ="http://localhost:3000/api/onboarding/";
  currentUserRole: any;
  userList:any = [];

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.authService.getCurrentUserRole().subscribe(role => {
      this.currentUserRole = role;
    });

    this.getUserList();
  }

  getUserList() {
    this.http.get(this.API +'getUserList').subscribe(result => {
      this.userList = result;
    })
  }
}
