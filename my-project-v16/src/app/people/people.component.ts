import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Employee {
  name: string;
  email: string;
  status: string;
  department: string;
  jobTitle: string;
  reportingTo:string;
}

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  activeTab: string = 'list'; 

  displayedColumns: string[] = ['name', 'email', 'status', 'department','jobTitle','reportingTo'];
  employees: Employee[] = [
    { name: 'Mike', status: 'Active', department: 'IT', email:"mike@onboarding.com",jobTitle:"Reporting Manager",reportingTo:""},
    { name: 'John Doe', status: 'Active', department: 'IT', email:"john@onboarding.com",jobTitle:"Senior Dev",reportingTo:"Mike Johnson"},
    { name: 'Jane Smith', status: 'Active', department: 'IT',email:"jane@onboarding.com",jobTitle:"Junior Dev",reportingTo:"Mike Johnson"},
    { name: 'Mike Johnson', status: 'Active', department: 'IT',email:"johnson@onboarding.com",jobTitle:"Senior Manager",reportingTo:"Mike"},
    { name: 'Emily Brown', status: 'Active', department: 'QA',email:"emily@onboarding.com",jobTitle:"Senior QA Engineer",reportingTo:"Mike"},
    { name: 'David Wilson', status: 'Active', department: 'QA', email:"david@onboarding.com",jobTitle:"QA Engineer",reportingTo:"Emily Brown"},
  ];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  dataSource = new MatTableDataSource(this.employees);

  constructor() { }

  ngOnInit(): void {
  }

  activateTab(event:any,tab: string):void {
    event.preventDefault(); // Prevent default action
    this.activeTab = tab; // Update activeTab based on clicked tab
  }

  onChange(foodValue:any) {
    console.log(foodValue)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
