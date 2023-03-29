import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactUsComponent } from './contactus/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';

const routes: Routes = [
  { path: 'sidenav', component: SidenavComponent },
  { path: 'home', component: HomeComponent },
  { path: 'address', component: AddressComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add', component: AddComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
