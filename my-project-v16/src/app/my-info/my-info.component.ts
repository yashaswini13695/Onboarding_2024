import { Component } from '@angular/core';
import { MaterialModule } from '../_material/material.module';
import { PersonalInfoComponent } from '../my-info/personal-info/personal-info.component';
import { DocumentsInfoComponent } from '../my-info/documents-info/documents-info.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../_services/auth.service';
import { JsonDataService } from '../_services/jsonData.service';

@Component({
  selector: 'app-my-info',
  standalone: true,
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss'],
  imports:[MaterialModule,PersonalInfoComponent,DocumentsInfoComponent,CommonModule]
})
export class MyInfoComponent {
  userDetails:any
  tabs:any = ['Personal','Documents','Notes','Leaves','Pay Info','Benefits'];
  currentUserRole: any;

  constructor(private authService: AuthService,private jsonDataService: JsonDataService) {this.authService.getCurrentUserRole().subscribe(role => {
    this.currentUserRole = role;
  });}
  
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
