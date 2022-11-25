import {TicketState} from "./TicketState";

export interface Festival {
  id:number;
  datasetid : string;
  fields : object;
  geometry :object;
  record_timestamp : string;
  recordid : string;
  TicketNumber : number;
  Sales : TicketState;
  isSelected : boolean;
}
