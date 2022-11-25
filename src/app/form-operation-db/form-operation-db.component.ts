import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {FestivalService} from "../festival.service";


@Component({
  selector: 'app-form-operation-db',
  templateUrl: './form-operation-db.component.html',
  styleUrls: ['./form-operation-db.component.css']
})
export class FormOperationDBComponent{
  update = false;
  create=false;
  toUpdate : any;
  tab : any;
  tab2:any;
  indexId :number =0;
  indexIsSelec :number =0;
  indexFields : number=0;
  indexGeometry:number=0;
  constructor(private service : FestivalService) {
  }


  ngOnInit(){
    let existGeom=false;
    let cpt=0;
    //Récupération du de l'objet Festival
    this.toUpdate = this.service.toChange;
    //Transformation de l'objet en tableau pour itérer avec un ngFor
    this.tab =Object.keys(this.toUpdate).map((cle) => {
      //Objet dans un objet qui nécessite une manip en plus
      if(cle== 'fields'){
        this.indexFields = cpt;
        //Récupération de l'objet fields dans l'objet Festival -> en array
        this.tab2 = this.toUpdate[cle];
        this.tab2=Object.keys(this.tab2).map((cle2)=> {
         return[(cle2),this.tab2[cle2]]
        });
      }
      if (cle =='geometry'){
        existGeom = true;
        this.indexGeometry=cpt;
      }
      if (cle== 'id'){
        this.indexId=cpt;
      }
      if(cle == 'isSelected'){
        this.indexIsSelec = cpt;
      }
      cpt++;
        return [(cle), this.toUpdate[cle]];
    });
    //Retrait du champs isSelected permettant de marquer un Festuval comme select
    this.tab.splice(this.indexId,1);
    this.tab.splice(this.indexIsSelec-1,1);
    //Concaténation du 1ere niveau de l'objet Festival et du second Niveau Fields en 1 array
    this.tab2=this.tab.concat(this.tab2);
    //Suppression des redondances des champs fields et geometry du 1er niveau remplacé par la
    //concatenation
   this.tab2.splice(this.indexFields,1);
   if (existGeom) {
     this.tab2.splice(this.indexGeometry-1, 1);
   }
  }

  onSubmitUpdate(myform: NgForm) {
    this.service.updateData(myform.value,this.toUpdate.id);
  }
  onSubmitCreate(myform : NgForm){
    this.service.writeData(myform.value);
  }

}
