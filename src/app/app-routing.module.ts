import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TypeComponent } from './type/type.component';
import { AssetCreateComponent } from './assets/asset-create/asset-create.component';
import { AssetEditComponent } from './assets/asset-edit/asset-edit.component';
import { AssetDetailsComponent } from './assets/asset-details/asset-details.component';
const routes: Routes = [
  { path: 'assets', component: AssetsComponent },
  { path: 'employee', component: EmployeeListComponent },
  { path: "type", component: TypeComponent },
  { path: 'assets/create', component: AssetCreateComponent },
  { path: 'assets/edit/:id', component: AssetEditComponent },
  { path: 'assets/details/:id', component: AssetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
