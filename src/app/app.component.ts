import { Component, VERSION } from '@angular/core';
import '@dile/dile-menu-hamburger/dile-menu-hamburger.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  menuOpenned= false;

  openMenu(){
    this.menuOpenned=true;
  }
  closeMenu(){
    this.menuOpenned=false;
  }
  menuClosedHandler(){
    this.menuOpenned=false;
  }
  menuOpenedHandler(){
    this.menuOpenned=true;
  }

}
