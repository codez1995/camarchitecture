import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data:any
  cols: { field: string; header: string; }[];

  constructor() { 
    this.data = [
      {
        "id": "1000",
        "name": "Test1",
        "email": "test1@gmail.com",
        "phone": 2456789087,
        "ssn": 65,
      },
      {
        "id": "1002",
        "name": "Test2",
        "email": "test2@gmail.com",
        "phone": 6578909876,
        "ssn": 34,
      }
    ]
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone Number' },
      { field: 'ssn', header: 'SSN' }
    ];
  }

  ngOnInit(): void {
  }

}
