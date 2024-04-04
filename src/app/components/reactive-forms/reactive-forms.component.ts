import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  


  myForm = this.formBuilder.group({
    
    name: this.formBuilder.control(''),
    lastName: this.formBuilder.control(''),
    //email:[''],
    email: this.formBuilder.control('', [
      
      Validators.required,
      Validators.pattern('[\\w-\\.]+@[\\w-\\.]+\\.[a-zA-Z]{2,4}'),
      
      
    ]),
  });

  constructor(private formBuilder: FormBuilder){
    //this.myForm = this.formBuilder.group({
      //name: this.formBuilder.control(''),
      //name:[''],
      //lastName: this.formBuilder.control(''),
      //email:[''],
      //email: this.formBuilder.control('')
    //});
  
    
      // Define tus campos de formulario aquí
    
  }
  onSubmit(): void {
    alert('Usuario creado'+ JSON.stringify(this.myForm.value))
  }
  
}
