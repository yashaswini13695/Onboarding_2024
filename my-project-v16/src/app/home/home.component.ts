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
    this.authService.getCurrentUserRole().subscribe(role => {
    this.currentUserRole = role;
   })
  }

  ngOnInit() {
    this.jsonDataService.getEmployeeList().subscribe((res) => {
      // @ts-ignore
      this.userDetails = res.filter(ele => ele.email === this.currentUserRole)
    })
  }
}
