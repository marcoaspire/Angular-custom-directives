
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ErrorMsg]'
})
export class ErrMsgDirective implements OnInit{

  private _color:string= 'red';
  private _message:string= 'This field is required';


  htmlElement: ElementRef<HTMLElement>;
  @Input() set color( value:string) {
    //this.htmlElement.nativeElement.style.color=value;
    this.setColor();
    this._color=value;
  }
  // @Input() msg:string= 'Error';
  @Input() set msg(value:string){
    //this.htmlElement.nativeElement.innerText=value;
    this.setMessage();
    this._message=value;

  }


  @Input() set valid(value:boolean){
    if (value)
    {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
    else{
      this.htmlElement.nativeElement.classList.add('hidden');
    }

  }

  constructor(private el:ElementRef) {
    this.htmlElement=el;
  }
  ngOnInit(): void {
    this.setStyle();
    this.setMessage();
    this.setColor();


  }

  setStyle(){
    this.htmlElement.nativeElement.classList.add('form-text');

  }

  setColor():void{
    this.htmlElement.nativeElement.style.color=this._color;

  }

  setMessage():void{
    this.htmlElement.nativeElement.innerText=this._message;
  }

}
