import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data:any
  @Input()cols: any;
  @Input()rows: any;
  @Input()colActions:any;
  formattedNumber: any;

  constructor() { 
    // this.data = [
    //   {
    //     "id": "1000",
    //     "name": "Test1",
    //     "email": "test1@gmail.com",
    //     "phone": 2456789087,
    //     "netWorth":4,
    //     "ssn": 65,
    //   },
    //   {
    //     "id": "1001",
    //     "name": "Test2",
    //     "email": "test2@gmail.com",
    //     "phone": 6578909876,
    //     "netWorth":4,
    //     "ssn": 34,
    //   },
    //   {
    //     "id": "1002",
    //     "name": "Test3",
    //     "email": "test3@gmail.com",
    //     "phone": 7865678943,
    //     "netWorth":6,
    //     "ssn": 67,
    //   },
    //   {
    //     "id": "1003",
    //     "name": "Test4",
    //     "email": "test4@gmail.com",
    //     "phone": 5674567896,
    //     "netWorth":0,
    //     "ssn": 45,
    //   },
    //   {
    //     "id": "1004",
    //     "name": "Test5",
    //     "email": "test5@gmail.com",
    //     "phone": 8765678543,
    //     "netWorth":0,
    //     "ssn": 98,
    //   },
    //   {
    //     "id": "1005",
    //     "name": "Test6",
    //     "email": "test6@gmail.com",
    //     "phone": 5647896543,
    //     "netWorth":0,
    //     "ssn": 65,
    //   },
    //   {
    //     "id": "1006",
    //     "name": "Test7",
    //     "email": "test7@gmail.com",
    //     "phone": 6434564323,
    //     "netWorth":0,
    //     "ssn": 65,
    //   },
    //   {
    //     "id": "1007",
    //     "name": "Test8",
    //     "email": "test8@gmail.com",
    //     "phone": 4354345654,
    //     "netWorth":0,
    //     "ssn": 87,
    //   },
    //   {
    //     "id": "1008",
    //     "name": "Test9",
    //     "email": "test9@gmail.com",
    //     "phone": 897654567,
    //     "netWorth":0,
    //     "ssn": 90,
    //   },
    //   {
    //     "id": "1009",
    //     "name": "Test10",
    //     "email": "test10@gmail.com",
    //     "phone": 897654567,
    //     "netWorth":0,
    //     "ssn": 6,
    //   },
    // ]
    // this.cols = [
    //   { field: 'id', header: 'Id' },
    //   { field: 'name', header: 'Name' },
    //   { field: 'email', header: 'Email' },
    //   { field: 'phone', header: 'Phone Number' },
    //   { field: 'netWorth', header: 'NetWorth' },
    //   { field: 'ssn', header: 'SSN' },
    //   { field: 'action', header: 'Action' },
    // ];
  }

  ngOnInit(): void {
    console.log(this.cols,this.rows)
  }

}
