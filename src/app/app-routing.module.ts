import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtobuyComponent } from './component/addtobuy/addtobuy.component';
import { AddtocartComponent } from './component/addtocart/addtocart.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsCategoriesComponent } from './component/products-categories/products-categories.component';
import { ProductsComponent } from './component/products/products.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'productcategories',
    component:ProductsCategoriesComponent
  },
  {
    path:'addtocart',
    component:AddtocartComponent
  },
  {
    path:'addtobuy',
    component:AddtobuyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
