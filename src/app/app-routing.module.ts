import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  { path: 'assets', component: AssetsComponent },
  { path: 'employee', component: EmployeeListComponent },
  { path: "type", component: TypeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
