import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbobardComponent } from './dashbobard/dashbobard.component';

const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashbobardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
