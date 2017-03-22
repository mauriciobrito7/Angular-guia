 import{ Directive, ElementRef, Input, HostListener} from '@angular/core';

 @Directive({selector:'[gigant]'})
 export class GigantDirective{
     //Colocamos el método de acceso para hacer referencia que el atributo pertenece a la clase
     constructor(private el: ElementRef){
     }
     private colorDefectoTexto ='blue';

     @Input() tamano: string;
     //Colocamos la palabra reservada set para setear el valor
     @Input() set colorTexto(color: string){
         //decimos que si color es nulo pasamos el valor por defecto
         this.colorDefectoTexto = color || this.colorDefectoTexto;
     }
     @HostListener('mouseenter') onmouseEnter(){
        this.Aumentar(this.tamano, this.colorDefectoTexto);
        
     }
     @HostListener('mouseleave') onmouseLeave(){
        this.Aumentar(null, this.colorDefectoTexto);
     }
     private Aumentar(tamano:string, color: string){
         //usamos la palabra reservada this para referirnos al atributo propio de la clase
        this.el.nativeElement.style.fontSize = tamano;
        this.el.nativeElement.style.color = this.colorDefectoTexto;
     }
 }
