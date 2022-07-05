import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/modules/core/components/base-page/base-page.component';
import { PageLayoutService } from 'src/app/modules/shared/services/page-layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BasePageComponent implements OnInit, AfterViewInit {

  name: string = 'Dashboard';
  clientData: any = [];
  clientColumns: any;
  formattedNumber: any;
  phoneNumber: any;
  colActions: any;


  constructor(layoutService: PageLayoutService, changeDetectRef: ChangeDetectorRef) {
    super(layoutService, changeDetectRef);
  }

  getClients() {
    if (this.componentData) {
      this.layoutService.getClients().subscribe(data => {
        this.clientData = data;
        this.clientColumns = this.componentData[0]?.extra[0].columns;
        this.colActions = this.componentData[0]?.extra[0].actions
        this.clientData.forEach((data: any) => {
          if (data.phoneNumber) {
            data.phoneNumber = this.formatPhoneNumber(data.phoneNumber);
          }
          if (data.ssn) {
            data.ssn = this.formatSSN(data.ssn);
          }

        });
        if (this.componentData[0]?.extra[0].actions) {
          this.clientColumns.push({ label: "Action", field: "action" })
        }
      })
    }

  }

  ngAfterViewInit(): void {
    this.getClients()
  }

  formatPhoneNumber(phoneNumberString: any) {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      this.phoneNumber = match[1] + '-' + match[2] + '-' + match[3];
    }
    return this.phoneNumber
  }
  formatSSN(a: string) {
    if (a.includes('-')) return;
    var fSSN = '';
    fSSN += a.substr(0, 3);
    fSSN += '-' + a.substr(3, 2);
    fSSN += '-' + a.substr(5, 4);
    return fSSN;
  }
}
