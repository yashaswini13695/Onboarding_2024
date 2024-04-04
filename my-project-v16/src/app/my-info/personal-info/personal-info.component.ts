import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/_material/material.module';
import { AuthService } from 'src/app/_services/auth.service';
import { JsonDataService } from 'src/app/_services/jsonData.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  imports: [MaterialModule,FormsModule, ReactiveFormsModule,CommonModule ]
})
export class PersonalInfoComponent implements OnInit{
  currentUserDetails:any = {};
  countryList:any = [];
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService: AuthService,private jsonDataService: JsonDataService) { 
    this.jsonDataService.getCountryList().subscribe(res => {
      this.countryList = res
    })
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      contactCode: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      pinCode: ['', Validators.required]
    });

    this.authService.getCurrentUserDetails().subscribe(response => {
      if (response !== null) {
        this.currentUserDetails = JSON.parse(response);
        console.log('Current User Details', this.currentUserDetails);
        if (this.currentUserDetails) {this.populateFormWithData(this.currentUserDetails);}
      } else {
        // Handle the case where the user details are not available in localStorage
        console.log('User details not found in localStorage');
      }
    });
  }

  populateFormWithData(currentUserDetails:any) {
      this.myForm.patchValue({
        firstName: this.currentUserDetails.firstName,
        middleName: this.currentUserDetails.middleName,
        lastName: this.currentUserDetails.lastName,
        contactCode: this.currentUserDetails.contactCode,
        contactNumber: this.currentUserDetails.contactNumber,
        email: this.currentUserDetails.email,
        country: this.currentUserDetails.country,
        address1: this.currentUserDetails.address1,
        address2: this.currentUserDetails.address2,
        city: this.currentUserDetails.city,
        pinCode: this.currentUserDetails.pinCode
        // Fill other fields accordingly based on your userData object
      });
    
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log('Form submitted successfully!');
      console.log('Form value:', this.myForm.value);
    } else {
      console.log('Form invalid. Please fill in all required fields.');
    }
  }

}
