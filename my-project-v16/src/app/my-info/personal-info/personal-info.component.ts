import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/_material/material.module';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  imports: [MaterialModule,FormsModule, ReactiveFormsModule]
})
export class PersonalInfoComponent implements OnInit{

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

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
