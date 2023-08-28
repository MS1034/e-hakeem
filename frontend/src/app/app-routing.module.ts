import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqComponent } from './mcq-component/mcq.component';
import { AIPrescriptionComponent } from './aiprescription/aiprescription.component';
import { DiagnosisPageComponent } from './diagnosis-page/diagnosis-page.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'diagnosis', component: DiagnosisPageComponent },
  { path: 'ai/:id', component: McqComponent },
  { path: 'ai-prescription/:id', component: AIPrescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
