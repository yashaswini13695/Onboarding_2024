import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { JsonDataService } from '../_services/jsonData.service';

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
  styleUrls: ['./people.component.scss']
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


  constructor(private jsonDataService: JsonDataService) { }

  ngOnInit(): void {
    this.jsonDataService.getEmployeeList().subscribe((res) => { 
      this.employees = res
      this.dataSource = new MatTableDataSource(this.employees);
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
}
