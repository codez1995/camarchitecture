import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  leftMenus:any;
  constructor(){
    this.leftMenus=[];
  }

  ngOnInit(): void {
    this.loadLeftMenus();
  }

  loadLeftMenus(){
    this.leftMenus.push({
      label:"Dashboard",
      icon:'home',
      items:[{
        name:"",
        icon:"",
        routerLink:""
      }]
    })
  }
}
