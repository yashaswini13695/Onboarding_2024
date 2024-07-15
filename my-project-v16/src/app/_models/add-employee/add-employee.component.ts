import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from 'src/app/_material/material.module';
import { CommonModule } from '@angular/common';
import { PeopleService } from '../../_services/people.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  imports:[MaterialModule,CommonModule,ReactiveFormsModule,FormsModule,MatDatepickerModule]
})
export class AddEmployeeComponent implements OnInit {
  userForm!: FormGroup;
  roles: string[] = ['Role1', 'Role2', 'Role3']; // Add your roles here
  departments: string[] = ['Department1', 'Department2', 'Department3']; // Add your departments here
  userImage!: File;
  employees:any = [];

  constructor(private peopleService: PeopleService,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder,
    ) { 
    }
  
    ngOnInit(): void {
      this.userForm = this.fb.group({
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['', Validators.required],
        personalEmail: ['', [Validators.required, Validators.email]],
        email: ['', [Validators.required, Validators.email]],
        contactNumber: ['', Validators.required],
        dob: [''],
        dateOfJoining: [''],
        role: ['', Validators.required],
        reportingTo: [''],
        jobTitle: ['', Validators.required],
        department: ['', Validators.required],
        employmentType : ['',Validators.required],
        emergencyContact : ['', Validators.required],

      });

      this.getEmployeeList();
    }

    getEmployeeList() {
      this.peopleService.getEmployeeList().subscribe((res) => { 
        this.employees = res
       
      })
    }
  
    onSubmit() {
      if (this.userForm.valid) {
        // Send form data to backend or perform desired action
        console.log(this.userForm.value);
        console.log('User Image:', this.userImage);
      }
    }
  
    onFileSelected(event: any) {
      this.userImage = event.target.files[0];
    }

    closeDialog() {
      this.dialogRef.close();
    }

}
