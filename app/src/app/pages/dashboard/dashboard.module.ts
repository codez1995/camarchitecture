import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DataModule } from 'src/app/modules/data/data.module';

const routes=[{
  path:'',
  component:DashboardComponent
}]
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
