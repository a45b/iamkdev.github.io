import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

 
  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement, 'font-size','2em'
    );
    this.renderer.setStyle(
      this.element.nativeElement, 'color','yellow'
    );
    this.renderer.addClass(this.element.nativeElement, 'ok')    

    const h1 = this.renderer.createElement('h1');
    const text = this.renderer.createText('Click here to add h1');    
    this.renderer.appendChild(h1, text);

    this.renderer.appendChild(this.element.nativeElement, h1);

  }

  @HostListener('mouseover')
  over() { 
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }

  @HostListener('mouseout')
  out() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'yellow');
  }
  
  @HostBinding('attr.title') 
  get value() : string {
    return 'oodsnfsd'
  }     
  
  @HostBinding('class.valid') 
  get valid() {   
    return true;
  } 

  //view lifecycle events
  // ngAfterContentInit(){
  //   console.log('appBold ngAfterContentInit');
  //   this.elm.nativeElement.style.fontSize = '2em';
  // }
  // ngAfterContentChecked(){
  //   console.log('appBold ngAfterContentChecked');
  //   this.elm.nativeElement.style.color = 'blue';
  // }
  // ngAfterViewInit(){    
  //   console.log('appBold ngAfterViewInit');    
  //   this.elm.nativeElement.style.fontWeight = 'bold';
  // }
  // ngAfterViewChecked(){
  //   console.log('appBold ngAfterViewChecked');
  //   this.elm.nativeElement.style.backgroundColor = 'yellow';
  // }
}
