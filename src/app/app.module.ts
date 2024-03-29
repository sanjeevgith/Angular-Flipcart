import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsCategoriesComponent } from './component/products-categories/products-categories.component';
import { AddtobuyComponent } from './component/addtobuy/addtobuy.component';
import { PaymentComponent } from './component/payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddressComponent } from './component/address/address.component';
import { CommonModule } from '@angular/common';
import { MyorderComponent } from './component/myorder/myorder.component';
import { AuthInterceptor } from './services/auth.intercepter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateorderComponent } from './component/admin/updateorder/updateorder.component';
import { EditadmindetailsComponent } from './component/admin/editadmindetails/editadmindetails.component';

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
    PaymentComponent,
    AddressComponent,
    MyorderComponent,
    UpdateorderComponent,
    EditadmindetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    CommonModule,
    NgxPaginationModule

    
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
