import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentUserRole: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUserRole().subscribe(role => {
      this.currentUserRole = role;
    });
  }
}
