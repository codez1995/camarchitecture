import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  items: any;
  activeIndex: number = 1;

  constructor() {
    this.items = []
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Personal Detail', routerLink: 'personal',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Account Detail', routerLink: 'accounts',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      { label: 'Completion' }
    ];
  }

}
