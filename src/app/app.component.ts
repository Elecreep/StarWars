import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'starWars';
  battle: boolean = false;

  konami() : void
  {
     this.battle = true;
     console.log("Yeah boi");
  }
}
