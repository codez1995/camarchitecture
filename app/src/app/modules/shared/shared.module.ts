import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {StepsModule} from 'primeng/steps';
import { StepsComponent } from './components/steps/steps.component';


@NgModule({
  declarations: [BreadcrumbComponent,StepsComponent],
  imports: [
    CommonModule,
    StepsModule,
    BreadcrumbModule
  ],
  exports:[BreadcrumbComponent,StepsComponent]
})
export class SharedModule { }
