import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { AssetsComponent } from './assets/assets.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TypeComponent } from './type/type.component';
import { AssetCreateComponent } from './assets/asset-create/asset-create.component';
import { AssetEditComponent } from './assets/asset-edit/asset-edit.component';
import { AssetDetailsComponent } from './assets/asset-details/asset-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    TypeComponent,
    AssetCreateComponent,
    AssetEditComponent,
    AssetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
