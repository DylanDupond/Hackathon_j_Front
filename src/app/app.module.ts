import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { Ng2SearchPipeModule } from 'ng2-search-filter';



//Angularfire imports
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthenticationService } from './services/authentication.service';

//Environnment import
import {environment} from "../environments/environment";

import { AppComponent } from './app.component';
import {FestivalService} from "./festival.service";
import { FestivalComponentComponent } from './festival-component/festival-component.component';
import { FormOperationDBComponent } from './form-operation-db/form-operation-db.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

@NgModule({
  declarations: [
    AppComponent,
    FestivalComponentComponent,
    FormOperationDBComponent
    HomeComponent,
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
    AngularFireDatabaseModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [FestivalService, AuthenticationService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
