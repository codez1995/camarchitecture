import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DataModule } from 'src/app/modules/data/data.module';
import { LayoutModule } from 'src/app/modules/layout/layout.module';

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
    LayoutModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
