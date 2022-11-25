import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /** update =false;
  create=false;*/
  title = 'hackathon_web';

  /**updateMode(){
    this.create=false
    this.update=true;
  }
  createMode(){
    this.create=true;
    this.update=false;
  }**/
}
