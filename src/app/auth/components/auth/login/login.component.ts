import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Clear any existing token when accessing login page
    localStorage.removeItem('token');
  }

  loginSubmit() {
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value).subscribe(
        (res) => {
          console.log('Login successful:', res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }
}
