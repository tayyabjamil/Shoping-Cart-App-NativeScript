import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from './components/textField/textField.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TextAreaComponent } from './components/textArea/textArea.component';
import { InputControlSelectorComponent } from './components/inputControlSelector/inputControlSelector.component';

@NgModule({
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ReactiveFormsModule
   
  ],
  declarations: [TextFieldComponent,TextAreaComponent,InputControlSelectorComponent ],
  exports:[TextFieldComponent,TextAreaComponent,InputControlSelectorComponent]
})
export class ThemeModule { }
