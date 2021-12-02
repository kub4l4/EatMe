import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LeftbarComponent } from './Components/leftbar/leftbar.component';
import { CreateMyProduct } from './Components/products/create/create-myProduct.component';
import { MyProductComponent } from './Components/products/myProduct.component';
import { MyProductTableComponent } from './Components/products/myProduct-table.component';
import { ProductService } from './_services/product.service';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routes';
import { BoardAdminComponent } from './Components/board-admin/board-admin.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { RegisterComponent } from './Components/register/register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { EditMyProductComponent } from "./Components/products/edit/edit-myProduct.component";
import { ProductsResolverService } from "./_services/products-resolver.service";
import { ProductResolverService } from "./_services/product-resolver.service";
import { BoardAdminUsersComponent } from "./Components/board-admin/all-users/all-users.component";


@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    NavbarComponent,
    MyProductComponent,
    MyProductTableComponent,
    CreateMyProduct,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    AboutComponent,
    SettingsComponent,
    EditMyProductComponent,
    BoardAdminUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
    authInterceptorProviders,
    ProductsResolverService,
    ProductResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
