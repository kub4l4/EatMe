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
import { ProductResolverService } from "./_services/product-resolver.service";
import { BoardAdminUsersComponent } from "./Components/board-admin/all-users/all-users.component";
import { SearchProductComponent } from "./Components/products/search/search-product.component";
import { SearchResultProductComponent } from "./Components/products/search/search-result-product/search-result-product.component";
import { ProductPMResolverService } from "./_services/product-PM-resolver.service";
import { ProductsResolverService } from "./_services/products-resolver.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";


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
    BoardAdminUsersComponent,
    SearchProductComponent,
    SearchResultProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    ProductService,
    authInterceptorProviders,
    ProductsResolverService,
    ProductResolverService,
    ProductPMResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
