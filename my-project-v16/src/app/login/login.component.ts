import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  login() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(success => {
      if (success) {
        this.router.navigateByUrl('/home');
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
