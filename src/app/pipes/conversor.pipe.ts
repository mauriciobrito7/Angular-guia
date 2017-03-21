import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversorPipe'})
export class ConversorPipe implements PipeTransform{
    transform(value: number, exponent:string):number{
        let exp = parseFloat(exponent);
        //Decimos que ponga un valor por defecto de exp si exp isNaN, es decir si pasamos un string lo que va hacer es poner un valor por defecto que seria 1 sino que tome el valor de exp
        return value * (isNaN(exp) ? 1 : exp);
    }
}
