import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JsonDataService } from '../_services/jsonData.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../_models/add-employee/add-employee.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialModule } from "../_material/material.module";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

export interface Employee {
  name: string;
  email: string;
  status: string;
  department: string;
  jobTitle: string;
  reportingTo:string;
}

interface Departments {
  value: string;
}

interface Status {
  value: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  standalone: true,
  styleUrls: ['./people.component.scss'],
  imports : [ScrollingModule,MaterialModule,CommonModule,FormsModule]
})
export class PeopleComponent implements OnInit {
  activeTab: string = 'list';
  displayedColumns: string[] = ['name', 'email', 'status', 'department','jobTitle','reportingTo'];
  employees: Employee[] = [];
  dataSource:any = [];
  status : Status[] = [
    {value: 'Active'},
    {value: 'In-Active'}
  ]
  departments: Departments[] = [
    {value: 'IT'},
    {value: 'QA'},
    {value: 'Project Management'},
    {value: 'Design'},
    {value: 'Support/Helpdesk'},
    {value: 'HR'},
    {value: 'Sales/Marketing'},
    {value: 'Finance/Accounting'}
  ];
  selectedDepartment: any;
  selectedStatus:any;
  rowHeight = 48;


  constructor(private jsonDataService: JsonDataService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.jsonDataService.getEmployeeList().subscribe((res) => { 
      this.employees = res
      this.dataSource = this.employees;
    })
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

  onDepartmentSelection() {
   // Get a copy of the original data
  let filteredData = [...this.employees];

  // Apply filter based on selected department
  if (this.selectedDepartment === 'ALL') {
    filteredData = [...this.employees];
  } else {
    filteredData = filteredData.filter((element: any) => {
      return element.department === this.selectedDepartment;
    });
  }

  // Update the data source
  this.dataSource = new MatTableDataSource(filteredData);
  }

  onStatusSelection() {
    // Get a copy of the original data
   let filteredData = [...this.employees];
 
   // Apply filter based on selected department
   if (this.selectedStatus === 'ALL') {
     filteredData = [...this.employees];
   } else {
     filteredData = filteredData.filter((element: any) => {
       return element.status === this.selectedStatus;
     });
   }
 
   // Update the data source
   this.dataSource = new MatTableDataSource(filteredData);
   }

   addEmployee() {
    this.dialog.open(AddEmployeeComponent, {
      width: '850px', // Adjust width as needed
      // You can add more configurations here
    });
   }
}
