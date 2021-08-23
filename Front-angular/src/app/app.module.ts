import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftbarComponent } from './Components/leftbar/leftbar.component';
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
    ProductThumbailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    ProductListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
