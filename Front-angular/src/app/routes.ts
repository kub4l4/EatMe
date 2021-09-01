import {Routes} from "@angular/router"
import { LeftbarComponent } from "./Components/leftbar/leftbar.component"
import { CreateMyProduct } from "./Components/products/myProduct/create-myProduct.component"
import { ProductListResolver } from "./Components/products/myProduct/myProduct-list-resolver.service"
import { ProductListComponent } from "./Components/products/myProduct/myProduct-list.component"

export const appRoutes:Routes = [

    {path: 'MyProducts', component: ProductListComponent, resolve: {products: ProductListResolver}},

    {path: 'sidebar', component: LeftbarComponent},
    {path: 'MyProducts/add', component: CreateMyProduct},
    {path: '', redirectTo: '/MyProducts', pathMatch: 'full'},
    { 
        path: 'user', 
        loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule)
    },

]