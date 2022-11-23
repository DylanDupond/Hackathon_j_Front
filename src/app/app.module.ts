import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

//Angularfire imports
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

//Environnment import
import {environment} from "../environments/environment";

import { AppComponent } from './app.component';
import {FestivalService} from "./festival.service";
import { FestivalComponentComponent } from './festival-component/festival-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FestivalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [FestivalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
