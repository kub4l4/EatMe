import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftbarComponent } from './Components/leftbar/leftbar.component';
import { CreateMyProduct } from './Components/products/myProduct/create-myProduct.component';
import { ProductListResolver } from './Components/products/product-list-resolver.service';
import { ProductListComponent } from './Components/products/product-list.component';
import { ProductThumbailComponent } from './Components/products/product-thumbail.component';
import { ProductService } from './Components/products/shared/product.service';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LeftbarComponent,
    ProductListComponent,
    ProductThumbailComponent,
    CreateMyProduct
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    ProductListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
