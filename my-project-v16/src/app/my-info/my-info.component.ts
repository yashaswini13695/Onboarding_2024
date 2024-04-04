import { Component } from '@angular/core';
import { MaterialModule } from '../_material/material.module';
import { PersonalInfoComponent } from '../my-info/personal-info/personal-info.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../_services/auth.service';
import { JsonDataService } from '../_services/jsonData.service';

@Component({
  selector: 'app-my-info',
  standalone: true,
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss'],
  imports:[MaterialModule,PersonalInfoComponent,CommonModule]
})
export class MyInfoComponent {
  userDetails:any
  tabs:any = ['Personal','Training','Documents','Notes','Leaves','Pay Info','Benefits'];
  currentUserRole: any;

  constructor(private authService: AuthService,private jsonDataService: JsonDataService) {this.authService.getCurrentUserRole().subscribe(role => {
    this.currentUserRole = role;
  });}
  
  ngOnInit() {
    this.jsonDataService.getEmployeeList().subscribe((res) => {
      // @ts-ignore
      this.userDetails = res.filter(ele => ele.email === this.currentUserRole)
    })
  }
}
