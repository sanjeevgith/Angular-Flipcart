import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './component/address/address.component';
import { AddtobuyComponent } from './component/addtobuy/addtobuy.component';
import { AddproductsComponent } from './component/admin/addproducts/addproducts.component';
import { LoginComponent } from './component/login/login.component';
import { MyorderComponent } from './component/myorder/myorder.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ProductsCategoriesComponent } from './component/products-categories/products-categories.component';
import { ProductsComponent } from './component/products/products.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'productcategories',
    component: ProductsCategoriesComponent
  },
  {
    path:'productcategories/:searchdata',
    component:ProductsCategoriesComponent
  },
  {
    path: 'addtobuy',
    component: AddtobuyComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'addproducts',
  //   component: AddproductsComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myorder',
    component: MyorderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'address',
    component: AddressComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admindashboard',
    loadChildren: () =>
      import(`./component/admin/admin/admin.module`).then((m) => m.AdminModule),
      canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
