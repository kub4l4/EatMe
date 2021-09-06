import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import {CategoriesResolverService} from "./_services/categories-resolver.service";


const routes : Routes = [

  {path : 'MyProducts', component : MyProductComponent, resolve : {products : ProductsResolverService}},
  {path : 'sidebar', component : LeftbarComponent},
  {path : 'MyProducts/add', component : CreateMyProduct, resolve : {categories : CategoriesResolverService}},
  {path : '', redirectTo : '/login', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'profile', component : ProfileComponent},
  {path : 'about', component : AboutComponent},
  {path : 'settings', component : SettingsComponent},
  {path : 'admin', component : BoardAdminComponent},
  {path : 'MyProducts/edit/:id', component : EditMyProductComponent, resolve : {productById : ProductResolverService}},


  // {
  //     path: 'user',
  //     loadChildren: () => import('./userOLD/user.module')
  //     .then(m => m.UserModule)
  // },

];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule {
}
