import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AsdfComponentComponent } from './asdf-component/asdf-component.component';
//input
import { InputComponent} from './input/input.component';
//pipes
import { ConversorPipe } from './pipes/conversor.pipe';
//directives

import { HighDirective } from './directives/highlight.directive'
import {GigantDirective} from './directives/gigant.directive'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    AsdfComponentComponent,
    HighDirective,
    GigantDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

