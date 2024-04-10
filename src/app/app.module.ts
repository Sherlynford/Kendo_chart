import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
