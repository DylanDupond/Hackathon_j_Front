import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

//Angularfire imports
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

//Environnment import
import {environment} from "../environments/environment";

import { AppComponent } from './app.component';
import {FestivalService} from "./festival.service";
import { FestivalComponentComponent } from './festival-component/festival-component.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';


@NgModule({
  declarations: [
    AppComponent,
    FestivalComponentComponent,
    HomeComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth (()=>getAuth()),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [FestivalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
