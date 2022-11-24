import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {Festival} from "./Festival";



@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  constructor(private realtimeDatabase: AngularFireDatabase) {
  }

  //Festival reception
  getFestival(): Observable<any> {
    return this.realtimeDatabase
      .list<Festival>('/')
      .valueChanges();
  }

}
