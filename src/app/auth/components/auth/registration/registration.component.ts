import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../utils/passwordValidators';
import { AuthService } from 'app/auth/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  standalone: false,
  
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
onSubmit() {
throw new Error('Method not implemented.');
}

  registerForm:FormGroup;
  constructor(private formBuilder: FormBuilder ,private authService : AuthService,private router:Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: passwordMatchValidator // to apply custom validator
    });
  }
  registerSubmit() {
    if (this.registerForm.valid) {
      console.log('Success: ' + JSON.stringify(this.registerForm.value));
  
      this.authService.registerUser(this.registerForm.value).subscribe(
        (res) => {  // Properly defining 'res' here
          console.log(res);
          localStorage.setItem('token', res.token); 
          this.router.navigate(['/dashboard']); 
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log(this.registerForm.errors);
      this.printErrors();
    }
  }
  

  printErrors() {
    const controls = this.registerForm.controls;
  
    // Loop through each form control
    for (const controllerName in controls) {
      const control = controls[controllerName];
  
      // Check if the control is invalid and touched
      if (control.invalid && control.touched) {
        const errors = control.errors;
  
        if (errors) {
          console.log(`${controllerName} has the following errors:`);
  
          // Loop through each error and print it
          for (const error in errors) {
            console.log(`- ${error}: ${JSON.stringify(errors[error])}`);
          }
        }
      }
    }
  }
  

}
