import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseInputComponent } from './components/base-input/base-input.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { BaseElementComponent } from './components/base-element/base-element.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    BaseInputComponent,
    BaseElementComponent,
    TopNavComponent,  
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TopNavComponent,  
    SidebarComponent
  ]
})
export class CoreModule { }
