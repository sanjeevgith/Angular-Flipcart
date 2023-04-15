import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from '../addproducts/addproducts.component';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { EditadmindetailsComponent } from '../editadmindetails/editadmindetails.component';
import { UpdateorderComponent } from '../updateorder/updateorder.component';

const routes: Routes = [
  {
    path: '',
    component: AdmindashboardComponent,
    children: [
      {
        path: 'addproducts',
        component: AddproductsComponent,
      },
      {
        path: 'updateorder',
        component: UpdateorderComponent,
      },
      {
        path: 'editadmindetails',
        component: EditadmindetailsComponent,
      },
      {
        path: '',
        redirectTo: 'addproducts',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
