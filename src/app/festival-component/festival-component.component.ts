import { Component} from '@angular/core';
import {FestivalService} from "../festival.service";
import {Festival} from "../Festival";

@Component({
  selector: 'app-festival-component',
  templateUrl: './festival-component.component.html',
  styleUrls: ['./festival-component.component.css']
})
export class FestivalComponentComponent{

  festivals: any;
  page:number=1;
  count:number=0;
  tableSize:number=9;
  searchText:any;
  currentSelected : Festival | undefined;
  constructor(private realTimeDatabase: FestivalService) {}

 ngOnInit():void{
    this.GetData();
  }
  GetData(){
    this.realTimeDatabase.getFestival().subscribe((res) => {this.festivals = res;})
  }

  OnDataChange(event:any){
    this.page = event;
    this.GetData();
  }

  //Festival selection
  selectFestival(fest :Festival){
    if (!this.currentSelected === undefined)
    { // @ts-ignore
      this.currentSelected.isSelected =false;
      fest.isSelected = true;
      this.currentSelected = fest;
    }
    else {
      fest.isSelected = true;
      this.currentSelected = fest;
    }

  }
}
