import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TypeComponent } from './type/type.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  { path: 'assets', component: AssetsComponent },
  { path: 'employee', component: EmployeeListComponent },
  { path: "type", component: TypeComponent },
  { path: 'employee/add', component: EmployeeAddComponent },
  { path: 'employee/details/:id', component: EmployeeDetailsComponent },
  { path: 'employee/edit/:id', component: EmployeeEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
