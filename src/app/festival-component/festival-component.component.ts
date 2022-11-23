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
  fields : any;
  page:number=1;
  count:number=0;
  tableSize:number=9;
  constructor(private realTimeDatabase: FestivalService) {
    this.festivals =  realTimeDatabase.getFestival();
    this.GetData();
  }

  GetData(){
    this.realTimeDatabase.getFestival().subscribe(res => this.fields = res);
    console.log(this.fields);
  }

  OnDataChange(event:any){
    this.page = event;
    this.GetData();
  }

  ngOnInit(): void {
  }

}
