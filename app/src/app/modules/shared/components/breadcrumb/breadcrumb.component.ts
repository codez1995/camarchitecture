import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
   items: MenuItem[];
   home: MenuItem;
  constructor() { 
    this.home = {icon: 'pi pi-home'};
    this.items = [
      {label:'Dashboard'}
  ];
  }

  ngOnInit(): void {

  }

}
