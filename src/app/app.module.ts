import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AssetsComponent } from './assets/assets.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TypeComponent } from './type/type.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AssetCreateComponent } from './assets/asset-create/asset-create.component';
import { AssetEditComponent } from './assets/asset-edit/asset-edit.component';
import { AssetDetailsComponent } from './assets/asset-details/asset-details.component';
import { TypeDetailComponent } from './type/type-detail/type-detail.component';
import { TypeUpdateComponent } from './type/type-update/type-update.component';
import { NoviTipComponent } from './novi-tip/novi-tip.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './login/login.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthExpiredInterceptor } from './interceptors/auth-expired.inteceptor';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    TypeComponent,
    EmployeeDetailsComponent,
    AssetCreateComponent,
    AssetEditComponent,
    AssetDetailsComponent,
    TypeDetailComponent,
    TypeUpdateComponent,
    NoviTipComponent,
    LoginComponent,
    ForbiddenPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthExpiredInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
