import { Component, OnInit } from '@angular/core';
import { SpotyService } from '../services/spoty.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent {

  datos:any[]=[]

  constructor(public servicio:SpotyService) { 


    this.servicio.buscarTopTracks()
    .subscribe(respuesta=>{
      console.log(respuesta);
      
    })


  }

  

}
