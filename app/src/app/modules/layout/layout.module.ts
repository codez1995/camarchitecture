import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';



@NgModule({
  declarations: [
    LayoutContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LayoutContentComponent]
})
export class LayoutModule { }
