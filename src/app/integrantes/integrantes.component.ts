import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent  {

  nombreSolo:string="GUSTAVO"
  nombres:Persona[]=[

    {"nombre":"https://firebasestorage.googleapis.com/v0/b/frontcomfamajjg.appspot.com/o/foto1.jpg?alt=media&token=b14d006c-4eac-4f86-b5cc-66adc3448518","edad":33}
  
  ]
  filtro:string[]=[]

  constructor() {}

  quitarNombre():void{
    this.nombres.pop()
  }

   
  

}
