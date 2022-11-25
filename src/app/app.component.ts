import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {Festival} from "./Festival";
import {FestivalService} from "./festival.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon_web';

  constructor (public router: Router){}
}
