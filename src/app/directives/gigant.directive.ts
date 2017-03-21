 import{ Directive, ElementRef, Input, HostListener} from '@angular/core';

 @Directive({selector:'[gigant]'})
 export class GigantDirective{
     //Colocamos el método de acceso para hacer referencia que el atributo pertenece a la clase
     constructor(private el: ElementRef){
     }
     @Input() tamano: string;

     @HostListener('mouseenter') onmouseEnter(){
        this.Aumentar(this.tamano);
     }
     @HostListener('mouseleave') onmouseLeave(){
        this.Aumentar(null);
     }
     private Aumentar(tamano:string){
         //usamos la palabra reservada this para referirnos al atributo propio de la clase
        this.el.nativeElement.style.fontSize = tamano;
     }
 }
