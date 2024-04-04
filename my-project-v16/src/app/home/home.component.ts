import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { JsonDataService } from '../_services/jsonData.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  currentUserRole: any;
  userDetails:any;

  constructor(private authService: AuthService,private jsonDataService: JsonDataService) {    
  }

  ngOnInit() {
    this.authService.getCurrentUserDetails().subscribe(response => {
      if (response !== null) {
        this.userDetails = JSON.parse(response);
        console.log('Current User Details', this.userDetails);
      } else {
        // Handle the case where the user details are not available in localStorage
        console.log('User details not found in localStorage');
      }
    });
  }
}
