import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqComponent } from './mcq-component/mcq.component';
import { AIPrescriptionComponent } from './aiprescription/aiprescription.component';
import { DiagnosisPageComponent } from './diagnosis-page/diagnosis-page.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'diagnosis',
    component: DiagnosisPageComponent,
    data: {
      reuse: true,
    },
  },
  {
    path: 'ai/:pathId',
    component: McqComponent,
    data: {
      reuse: true,
    },
  },
  {
    path: 'ai-prescription/:id',
    component: AIPrescriptionComponent,
    data: {
      reuse: true,
    },
  },
  {
    path: 'ai/:pathId/:questionId',
    component: McqComponent,
    data: {
      reuse: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
