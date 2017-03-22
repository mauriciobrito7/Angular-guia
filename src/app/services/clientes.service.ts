import { Injectable } from '@angular/core';
/* 
   Para crear un servicio debemos importar Injectable  desde @angular/core 
   Injectable es el decorador que nos permite crear una clase inyectable el mismo que será inyectado en otros componentes. Luego debemos crear una clase las misma que será de forma normal como se ha venido realizando, pero con la diferencia que en el nombre termine con la sintaxis Service para reconocer que es un servicio, dentro de la clase podemos trabajarla de forma normal creando métodos, propiedades y atributos que sean necesario para el servicio. En este caso hemos creado un método que nos va a devolver una lista de clientes
*/
@Injectable()
export class ClientesService{
    getClientes(): string[]{
        return [
            'Maria',
            'Mauricio',
            'Fernando',
            'Cristobal',
            'Roberto'
        ];
    }
}