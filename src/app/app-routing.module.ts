import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: 'assets', component: AssetsComponent },
  { path: 'employee', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
