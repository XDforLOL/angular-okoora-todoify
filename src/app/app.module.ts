import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AuthenticationService} from "./shared/services/authentication.service";
import {AppRoutingModule} from "./app-routing.module";
import { TodoComponent } from './todo/todo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const firebaseConfig = {
  apiKey: "AIzaSyCFJfsZa27Rk4LRRVyUhbhjgJVckRegXgU",
  authDomain: "angular-auth-okoora.firebaseapp.com",
  projectId: "angular-auth-okoora",
  storageBucket: "angular-auth-okoora.appspot.com",
  messagingSenderId: "364618925961",
  appId: "1:364618925961:web:110c07d01a4345968a4358"
};
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    SignInComponent,
    SignUpComponent,
    TodoComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  exports: [ItemComponent],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
