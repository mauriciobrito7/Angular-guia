 import{ Directive, ElementRef, Input} from '@angular/core';

 @Directive({selector:'[high]'})
 export class HighDirective{
     constructor(el: ElementRef){
         el.nativeElement.style.backgroundColor = 'yellow';
     }
 }
