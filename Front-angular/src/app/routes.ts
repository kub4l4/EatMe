import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeftbarComponent } from "./Components/leftbar/leftbar.component"
import { CreateMyProduct } from "./Components/products/myProduct/create-myProduct.component"
import { ProductListResolver } from "./Components/products/myProduct/myProduct-list-resolver.service"
import { ProductListComponent } from "./Components/products/myProduct/myProduct-list.component"


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes:Routes = [

    { path: 'MyProducts', component: ProductListComponent, resolve: {products: ProductListResolver}},
    { path: 'sidebar', component: LeftbarComponent},
    { path: 'MyProducts/add', component: CreateMyProduct},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },

    { path: 'admin', component: BoardAdminComponent },



    // { 
    //     path: 'user', 
    //     loadChildren: () => import('./userOLD/user.module')
    //     .then(m => m.UserModule)
    // },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }