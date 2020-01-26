import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autoparts';
  public check = false;

  ok(){
    this.check = false;
  }
  ok1(){
    this.check = true;
  }
}
