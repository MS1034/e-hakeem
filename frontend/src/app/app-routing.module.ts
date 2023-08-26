import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqComponent } from './mcq-component/mcq.component';
import { AIPrescriptionComponent } from './aiprescription/aiprescription.component';
const routes: Routes = [
  {path: '' , component: McqComponent},
  { path: 'AI/:id', component: McqComponent },
  { path: 'AI-Prescription/:id', component: AIPrescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
