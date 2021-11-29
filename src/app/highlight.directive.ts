import { ChangeDetectionStrategy } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) 
  {
    el.nativeElement.style.color="darkred";
  el.nativeElement.style.border="2px solid green";
    el.nativeElement.style.width="300px";
    el.nativeElement.style.padding="50px";
  el.nativeElement.style.margin="20px";
    
 }
    @HostListener('mouseenter') mouseenter(){
 this.changeColor("blue");
    }     @HostListener('mouseleave') mouseleave(){
       this.changeleave("green");     }     changeleave(color){
      this.el.nativeElement.style.color=color;
   }
    changeColor(color){       this.el.nativeElement.style.color=color;
    }
   
  change(arg0: string) {
    throw new Error('Method not implemented.');
  }
ngOnInit(){
  this.renderer.setStyle(this.el.nativeElement,'background-color','grey');
}
}
