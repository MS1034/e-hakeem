import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqComponent } from './mcq-component/mcq.component';
const routes: Routes = [{ path: 'AI', component: McqComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
