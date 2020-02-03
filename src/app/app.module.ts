import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoginComponent } from './login/login.component';
import { TackingComponent } from './tacking/tacking.component';
import { ContactComponent } from './contact/contact.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { SaveproductsService } from './saveproducts.service';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage'
import { AuthguardService } from './authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopCartComponent,
    CheckoutComponent,
    CartComponent,
    ConfirmComponent,
    LoginComponent,
    TackingComponent,
    ContactComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //must
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule

  ],
  providers: [SaveproductsService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
