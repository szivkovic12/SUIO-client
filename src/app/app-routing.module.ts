import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TypeComponent } from './type/type.component';

import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

import { TypeDetailComponent } from './type/type-detail/type-detail.component'
import { AssetCreateComponent } from './assets/asset-create/asset-create.component';
import { AssetEditComponent } from './assets/asset-edit/asset-edit.component';
import { AssetDetailsComponent } from './assets/asset-details/asset-details.component';
import { TypeUpdateComponent } from './type/type-update/type-update.component';
import { NoviTipComponent } from './novi-tip/novi-tip.component';

const routes: Routes = [
  { path: 'assets', component: AssetsComponent },
  { path: 'employee', component: EmployeeListComponent },
  { path: "type", component: TypeComponent },
  { path: 'employee/add', component: EmployeeAddComponent },
  { path: 'employee/details/:id', component: EmployeeDetailsComponent },
  { path: 'employee/edit/:id', component: EmployeeEditComponent },
  { path: "type/:id", component: TypeDetailComponent },
  { path: 'assets/create', component: AssetCreateComponent },
  { path: 'assets/edit/:id', component: AssetEditComponent },
  { path: 'assets/details/:id', component: AssetDetailsComponent },
  { path: "type/update/:id", component: TypeUpdateComponent},
  { path: "tip/novi", component: NoviTipComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
