import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router'; // Correct import
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './auth/services/auth.service';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule 
  ],
  providers: [provideHttpClient(),AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
