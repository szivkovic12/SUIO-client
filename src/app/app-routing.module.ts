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
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AdminAuthGuardService } from './guards/admin-auth-guard.service';

const routes: Routes = [
 
  


  {path:'home', component:HomeComponent,
  
  children:[
    {
      path: '',  redirectTo: '/home', pathMatch: 'full'
    },
  { path: 'assets', component: AssetsComponent ,  canActivate: [AuthGuardService]},
  { path: 'employee', component: EmployeeListComponent,  canActivate: [AuthGuardService] },
  { path: 'assets', component: AssetsComponent,   canActivate: [AuthGuardService]},
  { path: "type", component: TypeComponent,   canActivate: [AuthGuardService]},
  { path: 'employee/add', component: EmployeeAddComponent, canActivate: [AdminAuthGuardService] },
  { path: 'employee/details/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'employee/edit/:id', component: EmployeeEditComponent, canActivate: [AdminAuthGuardService] },
  { path: "type/:id", component: TypeDetailComponent,   canActivate: [AuthGuardService]},
  { path: 'assets/create', component: AssetCreateComponent,   canActivate: [AuthGuardService]},
  { path: 'assets/edit/:id', component: AssetEditComponent,   canActivate: [AuthGuardService]},
  { path: 'assets/details/:id', component: AssetDetailsComponent,   canActivate: [AuthGuardService]},
  { path: "type/update/:id", component: TypeUpdateComponent,  canActivate: [AuthGuardService]},
  { path: "tip/novi", component: NoviTipComponent  , canActivate: [AuthGuardService]},
  
  ]},
 
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 