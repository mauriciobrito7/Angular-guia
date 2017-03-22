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
//service
import { TicketService } from './services/ticket.service';
import { ClientesService } from './services/clientes.service';


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
  providers: [TicketService, ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

