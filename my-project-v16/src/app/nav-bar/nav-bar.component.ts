import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  currentUserRole: any = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUserRole().subscribe(role => {
      this.currentUserRole = role;
    });
  }
  logout() {
    // Call the logout method from the AuthService
    this.authService.logout();
  }

}
