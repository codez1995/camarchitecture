import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RadioComponent } from './components/radio/radio.component';
import { LabelComponent } from './components/label/label.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { ListComponent } from './components/list/list.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {AutoCompleteModule} from 'primeng/autocomplete';
@NgModule({
  declarations: [
    TextInputComponent,
    CheckboxComponent,
    ButtonComponent,
    DropdownComponent,
    CalendarComponent,
    RadioComponent,
    LabelComponent,
    ToggleButtonComponent,
    ListComponent,
    AutoCompleteComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    AutoCompleteModule
  ]
})
export class FormControlsModule { }
