import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {Festival} from "./Festival";
import { getDatabase, ref, set } from "firebase/database";




@Injectable({
  providedIn: 'root'
})
export class FestivalService {
  toChange : any;
  private db = getDatabase();
  dbSize:number=7281;
  constructor(private realtimeDatabase: AngularFireDatabase) {
  }

  //Festival reception
  getFestival(): Observable<any> {
     return this.realtimeDatabase.list<Festival>('/festivals').valueChanges();
  }


    updateData(elmUpdate : any,_id:number){
      let fiel = {
        adresse_e_mail: elmUpdate.adresse_e_mail,
        annee_de_creation_du_festival:elmUpdate.annee_de_creation_du_festival,
        code_insee_commune:elmUpdate.code_insee_commune,
        code_insee_epci_collage_en_valeur:elmUpdate.code_insee_epci_collage_en_valeur,
        code_postal_de_la_commune_principale_de_deroulement:elmUpdate.code_postal_de_la_commune_principale_de_deroulement,
        commune_principale_de_deroulement:elmUpdate.commune_principale_de_deroulement,
        decennie_de_creation_du_festival:elmUpdate.decennie_de_creation_du_festival,
        departement_principal_de_deroulement:elmUpdate.departement_principal_de_deroulement,
        discipline_dominante:elmUpdate.discipline_dominante,
        geolocalisation:elmUpdate.geolocalisation,
        identifiant:elmUpdate.identifiant,
        libelle_epci_collage_en_valeur:elmUpdate.libelle_epci_collage_en_valeur,
        nom_du_festival:elmUpdate.nom_du_festival,
        periode_principale_de_deroulement_du_festival:elmUpdate.periode_principale_de_deroulement_du_festival,
        region_principale_de_deroulement:elmUpdate.region_principale_de_deroulement,
        site_internet_du_festival:elmUpdate.site_internet_du_festival
      };
      set(ref(this.db,'/festivals/' + _id),{
        datasetid:elmUpdate.datasetid,
        fields:fiel,
        record_timestamp:elmUpdate.record_timestamp,
        recordid:elmUpdate.recordid,
        TicketNumber:elmUpdate.TicketNumber,
        Sales:elmUpdate.Sales
      });
    }
  writeData(elmUpdate : any) {
    let fiel = {
      adresse_e_mail: elmUpdate.adresse_e_mail,
      annee_de_creation_du_festival:elmUpdate.annee_de_creation_du_festival,
      code_insee_commune:elmUpdate.code_insee_commune,
      code_insee_epci_collage_en_valeur:elmUpdate.code_insee_epci_collage_en_valeur,
      code_postal_de_la_commune_principale_de_deroulement:elmUpdate.code_postal_de_la_commune_principale_de_deroulement,
      commune_principale_de_deroulement:elmUpdate.commune_principale_de_deroulement,
      decennie_de_creation_du_festival:elmUpdate.decennie_de_creation_du_festival,
      departement_principal_de_deroulement:elmUpdate.departement_principal_de_deroulement,
      discipline_dominante:elmUpdate.discipline_dominante,
      geolocalisation:elmUpdate.geolocalisation,
      identifiant:elmUpdate.identifiant,
      libelle_epci_collage_en_valeur:elmUpdate.libelle_epci_collage_en_valeur,
      nom_du_festival:elmUpdate.nom_du_festival,
      periode_principale_de_deroulement_du_festival:elmUpdate.periode_principale_de_deroulement_du_festival,
      region_principale_de_deroulement:elmUpdate.region_principale_de_deroulement,
      site_internet_du_festival:elmUpdate.site_internet_du_festival
    };
    set(ref(this.db, '/festivals' + this.dbSize), {
      datasetid:elmUpdate.datasetid,
      fields:fiel,
      record_timestamp:elmUpdate.record_timestamp,
      recordid:elmUpdate.recordid,
      TicketNumber:elmUpdate.TicketNumber,
      Sales:elmUpdate.Sales
    });
    this.dbSize++;
  }

}
