import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,AuthRoutingModule
  ],
  providers:[provideHttpClient(),AuthService],
})
export class AuthModule { }


