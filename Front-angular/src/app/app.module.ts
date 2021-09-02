import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LeftbarComponent } from './Components/leftbar/leftbar.component';
import { CreateMyProduct } from './Components/products/myProduct/create-myProduct.component';
import { ProductListResolver } from './Components/products/myProduct/myProduct-list-resolver.service';
import { ProductListComponent } from './Components/products//myProduct/myProduct-list.component';
import { ProductThumbailComponent } from './Components/products/myProduct/myProduct-thumbail.component';
import { ProductService } from './Components/products/shared/product.service';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routes';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    NavbarComponent,
    ProductListComponent,
    ProductThumbailComponent,
    CreateMyProduct,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    AboutComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    ProductListResolver,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
