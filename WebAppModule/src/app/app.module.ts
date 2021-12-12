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
import { ProductPMResolverService } from "./_services/product-PM-resolver.service";
import { ProductsResolverService } from "./_services/products-resolver.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { DialogAddProductComponent } from "./Components/products/search/form-add/dialog-add-product.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { SearchProductItemComponent } from "./Components/products/search/search-result-product/search-product-item.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";


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
    SearchProductItemComponent,
    DialogAddProductComponent,
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
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonToggleModule
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
