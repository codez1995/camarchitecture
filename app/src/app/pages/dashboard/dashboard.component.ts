import { Component, OnInit } from '@angular/core';
import { PageLayoutService } from 'src/app/modules/shared/services/page-layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public layoutService:PageLayoutService) {}

  ngOnInit(): void { 
    this.layoutService.get('Account').subscribe(data=>{
      console.log(data)
    })
  }

}
