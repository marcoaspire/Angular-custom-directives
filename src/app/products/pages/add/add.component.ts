import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent{
  myForm: FormGroup = this.fb.group({
    name: ['',Validators.required]
  });
  color:string='red';
  text1:string='Error4';


  constructor(private fb:FormBuilder) { }

  error(field:string){
    return this.myForm.get(field)?.invalid || false;
  }

  changeColor(){

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.color= color;
  }

  changeMessage(){

    this.text1= Math.random().toString();
    console.log(this.text1);
  }
}
