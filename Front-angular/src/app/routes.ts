import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeftbarComponent } from "./Components/leftbar/leftbar.component"
import { CreateMyProduct } from "./Components/products/create/create-myProduct.component"
import { MyProductComponent } from "./Components/products/myProduct.component"

import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { BoardAdminComponent } from './Components/board-admin/board-admin.component';
import { AboutComponent } from './Components/about/about.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { EditMyProductComponent } from "./Components/products/edit/edit-myProduct.component";
import { ProductsResolverService } from "./_services/products-resolver.service";
import { ProductResolverService } from "./_services/product-resolver.service";
import { SearchProductComponent } from "./Components/products/search/search-product.component";
import { ProductPMResolverService } from "./_services/product-PM-resolver.service";
import { SearchProductItemComponent } from "./Components/products/search/search-result-product/search-product-item.component";


const routes: Routes = [

  {path: 'MyProducts', component: MyProductComponent, resolve: {userProducts: ProductsResolverService}},
  {path: 'sidebar', component: LeftbarComponent},
  {path: 'MyProducts/add', component: CreateMyProduct},
  {path: 'MyProducts/search', component: SearchProductComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'about', component: AboutComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'admin', component: BoardAdminComponent},
  {
    path: 'MyProducts/search/:id',
    component: SearchProductItemComponent,
    resolve: {productById: ProductPMResolverService}
  },
  {path: 'MyProducts/edit/:id', component: EditMyProductComponent, resolve: {userProductById: ProductResolverService}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
