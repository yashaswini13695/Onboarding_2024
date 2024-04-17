import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from 'src/app/_material/material.module';
import { JsonDataService } from 'src/app/_services/jsonData.service';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

@Component({
  selector: 'app-leaves',
  standalone: true,
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
  imports:[MaterialModule,CommonModule,ReactiveFormsModule,FormsModule,MatDatepickerModule,MatNativeDateModule,MatRippleModule]
})
export class LeavesComponent implements OnInit {
  dataSource:any = [];
  leavesList:any
  displayedColumns: string[] = ['dateRequested', 'leaveType','startDate','endDate','status','duration','reason','approver','comments','action'];

  requestingDate: string = this.getCurrentDate(); // Initialize with current date
  startDate!: string;
  endDate!: string;
  leaveType!: string;
  reason!: string;
  approver!: string;
  leaveTypes: string[] = ['Vacation', 'Sick Leave', 'Maternity Leave', 'Paternity Leave'];

  //to disable past dates from calender in start date
  @Input() min: any;
  yesterday = new Date();

  constructor(private jsonDataService: JsonDataService,private dialog: MatDialog) { 
    this.yesterday.setDate(this.yesterday.getDate() - 0);
  }

  ngOnInit(): void {
    // this.jsonDataService.getEmployeeList().subscribe((res) => { 
    //   this.leavesList = res
    //   this.dataSource = new MatTableDataSource(this.leavesList);
    // })
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    let month: string | number = today.getMonth() + 1;
    let day: string | number = today.getDate();

    // Add leading zeros if needed
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  }

  submitRequest(form:any): void {
    if (form.valid) {
      // Here you can send the form data to your backend or handle it accordingly
      console.log('Form submitted:', form.value);
      // Reset form
      form.reset();
    }
  }
}
