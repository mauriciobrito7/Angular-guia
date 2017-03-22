//va a tener un Injectable 
import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock'

@Injectable()
export class TicketService{

    miVaribleTicketGlobal = "soy una variable global";

    getTicket(){
        return TICKETS;
    }

    getVariableLocal():string{
        return this.miVaribleTicketGlobal;
    }

}
