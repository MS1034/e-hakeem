import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McqComponent } from './mcq-component/mcq.component';
import { AIPrescriptionComponent } from './aiprescription/aiprescription.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DiagnosisPageComponent } from './diagnosis-page/diagnosis-page.component';
import { HealthConditionInputComponent } from './health-condition-input/health-condition-input.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    McqComponent,
    AIPrescriptionComponent,
    DiagnosisPageComponent,
    HealthConditionInputComponent,
    HomePageComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
