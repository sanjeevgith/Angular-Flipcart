import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsCategoriesComponent } from './component/products-categories/products-categories.component';
import { AddtobuyComponent } from './component/addtobuy/addtobuy.component';
import { AddproductsComponent } from './component/admin/addproducts/addproducts.component';
import { PaymentComponent } from './component/payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddressComponent } from './component/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    NavbarComponent,
    ProductsCategoriesComponent,
    AddtobuyComponent,
    AddproductsComponent,
    PaymentComponent,
    AddressComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
