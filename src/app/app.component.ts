import { Component } from '@angular/core';
import { InputComponent} from './input/input.component';
import { TicketService } from './services/ticket.service';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tickets:any;
  lista = [];
  constructor(private ticketService: TicketService, private clienteService : ClientesService){
    this.tickets = ticketService.getTicket();
    this.lista = this.clienteService.getClientes();
  }

  title = 'app works!';
  votos = [
    {title: 'opción 1'},
    {title: 'opción 2'},
    {title: 'opción 3'},
    {title: 'opción 4'},  
  ]

  clientes = ["Juan", "Pedro"];
  nombre = "Mauricio";
  numero1: number = 0;
  numero2: number = 0;
  cliente :string = "Mauricio";

  mostrar = true;
  deuda = 100;
  ciudad = "Puerto Ordaz"

  pais="";

  usuarios = [
    {id:1, nombre:'Mauricio', apellido:'Salazar'},
    {id:2, nombre:'Raúl', apellido:'Salazar'},
    {id:3, nombre:'Rosa', apellido:'Salazar'},
    {id:4, nombre:'Pedro', apellido:'Salazar'}
  ];

  agregar():void{
    let usuario = {id:5, nombre:'Gabriela', apellido:'Espejo'}
    this.usuarios.push(usuario);
  }

  eliminar(item){
    let index = this.usuarios.indexOf(item);
    this.usuarios.splice(index,1);
  }

  color = true;
  borde = true;

  setClases(){
    let clases = {
        ColorTexto : this.color,
        Borde : this.borde
    }
    return clases;
  }

  activarClases(){
    this.color = !this.color;
  }

  sumar(){
    let resultado = 0;
    resultado = this.numero1 + this.numero2;
    console.log(resultado);
  }

  cantidad = 5;
  factor = 1;

}
