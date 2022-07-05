import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/modules/core/components/base-page/base-page.component';
import { PageLayoutService } from 'src/app/modules/shared/services/page-layout.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent  implements OnInit {

  name: string='Account';
  constructor(public layoutService: PageLayoutService, changeDetectRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
       this.layoutService.get('Account').subscribe(data=>{
        console.log(data);
    })
  }
}
