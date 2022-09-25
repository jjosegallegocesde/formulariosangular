import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario!:FormGroup;

  constructor(public fabricaFormulario:FormBuilder) { }

  ngOnInit(): void {

    this.formulario=this.initFormulario();
  }


  public analizarFormulario():void{
    console.log(this.formulario.value);
    
  }

  public initFormulario():FormGroup{

    return this.fabricaFormulario.group({

      nombre:['',[Validators.required,Validators.minLength(6)]],
      password:['',[Validators.required, Validators.minLength(6)]],
      

    })


    
  }


}
