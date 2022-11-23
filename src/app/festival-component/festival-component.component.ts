import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FestivalService} from "../festival.service";
import {Festival} from "../Festival";

@Component({
  selector: 'app-festival-component',
  templateUrl: './festival-component.component.html',
  styleUrls: ['./festival-component.component.css']
})
export class FestivalComponentComponent implements OnInit {

  festivals: Observable<any>;

  constructor(private realTimeDatabase: FestivalService) {
    this.festivals =  realTimeDatabase.getFestival();
  }

  ngOnInit(): void {
  }

}
