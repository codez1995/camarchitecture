import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseInputComponent } from './components/base-input/base-input.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { BaseElementComponent } from './components/base-element/base-element.component';



@NgModule({
  declarations: [
    BaseInputComponent,
    BasePageComponent,
    BaseElementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
