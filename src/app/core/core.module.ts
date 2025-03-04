import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { FooterComponent } from './components/layout/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    FooterComponent
  ],
  exports:[HeaderComponent,LandingComponent,FooterComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
