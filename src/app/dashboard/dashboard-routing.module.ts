import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { Constants } from '../modules/constants/constants.module';

//  Components
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ConfigureComponent } from './configure/configure.component';
import { CustomersComponent } from './customers/customers.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';

const constants = Constants;

const routes: Routes = [
  {
    path: constants.ROUTERS.HOME,
    component: LayoutComponent,
    data: { title: 'Dashboard | Home' },
    children: [
      {
        path: Constants.ROUTERS.HOME,
        redirectTo: constants.ROUTERS.PRODUCTS,
      },
      {
        path: constants.ROUTERS.PRODUCTS,
        component: ProductsComponent,
        data: { title: 'Dashboard | Products' },
      },
      {
        path: constants.ROUTERS.ADD_NEW_PRODUCT,
        component: AddNewProductComponent,
        data: { title: 'Dashboard | Add new product' },
      },
      {
        path: constants.ROUTERS.EDIT_PRODUCT,
        component: EditProductComponent,
        data: { title: 'Dashboard | Edit product' },
      },
      {
        path: constants.ROUTERS.ORDERS,
        component: OrdersComponent,
        data: { title: 'Dashboard | Orders' },
      },
      {
        path: constants.ROUTERS.CONFIGURE,
        component: ConfigureComponent,
        data: { title: 'Dashboard | Configure' },
      },
      {
        path: constants.ROUTERS.ADMINS,
        component: UsersComponent,
        data: { title: 'Dashboard | Administrators' },
      },
      {
        path: constants.ROUTERS.CUSTOMERS,
        component: CustomersComponent,
        data: { title: 'Dashboard | Customers' },
      },
      {
        path: constants.ROUTERS.MESSAGES,
        component: FeedbacksComponent,
        data: { title: 'Dashboard | Messages' },
      },
      {
        path: constants.ROUTERS.FEEDBACKS,
        component: MessagesComponent,
        data: { title: 'Dashboard | Feedbacks' },
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
