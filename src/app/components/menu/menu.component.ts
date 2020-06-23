import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    url:string;
    date = new Date();

    constructor(private router: Router) {

    }

  ngOnInit(): void {
  }

  getUrl()
  {
      this.url = this.router.url;
      console.log(this.url);
  }

}
