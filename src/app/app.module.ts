import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductRowComponent } from './product-row/product-row.component';

import { ProductsService } from './services/products/products.service';
import { SingleProductViewComponent } from './single-product-view/single-product-view.component';
import { HeaderComponent } from './header/header.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import {AuthService} from './services/auth/auth.service';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {AppRoutingModule} from './app-routing.module';
import { ProfilViewComponent } from './profil-view/profil-view.component';
import { EditProductViewComponent } from './edit-product-view/edit-product-view.component';
import { NewProductViewComponent } from './new-product-view/new-product-view.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductRowComponent,
    SingleProductViewComponent,
    HeaderComponent,
    ErrorViewComponent,
    AuthViewComponent,
    ProfilViewComponent,
    EditProductViewComponent,
    NewProductViewComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
