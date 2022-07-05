import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DataModule } from 'src/app/modules/data/data.module';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';

const routes = [{
  path: '',
  component: AccountsComponent,
  children:[{
    path:'personal',
    component:PersonalDetailsComponent
  }]
},
]
@NgModule({
  declarations: [
    AccountsComponent,
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AccountsComponent
  ]
})
export class AccountsModule { }
