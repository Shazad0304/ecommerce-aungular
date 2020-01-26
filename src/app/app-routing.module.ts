import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { TackingComponent } from './tacking/tacking.component';


const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: "home",component: HomeComponent},
  {path: "shop", component: ShopCartComponent},
  {path: "checkout", component: CheckoutComponent},
  {path:"cart" ,component: CartComponent},
  {path: "confirm",component: ConfirmComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"tracking",component:TackingComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
