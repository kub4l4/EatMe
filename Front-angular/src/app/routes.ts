import {Routes} from "@angular/router"
import { LeftbarComponent } from "./Components/leftbar/leftbar.component"
import { ProductListResolver } from "./Components/products/product-list-resolver.service"
import { ProductListComponent } from "./Components/products/product-list.component"

export const appRoutes:Routes = [

    {path: 'MyProducts', component: ProductListComponent},
   // {path: 'MyProducts', component: ProductListComponent, resolve: {events: ProductListResolver}},

    {path: 'sidebar', component: LeftbarComponent},
    {path: '', redirectTo: '/MyProducts', pathMatch: 'full'}
]