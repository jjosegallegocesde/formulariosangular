import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotyService {

  uri:string="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=US"

  token:string="Bearer BQBfw37SQTx8jXueyKBAFE64r9YAQWgvwo3u7cWOOJAs9_swG7tIZrcqGGuruTVZKq7nvR1y7TsIZxBHMuM52M1OD-UQ6zTDkyyclqapX6yJg8B2jDwjQWhci_RQ3XQnUp3oP_FafrqHZm8oVpVcjbkXb280Rr25gTBjechYRiMdXOTgd98"

 
 
  constructor(public servicio:HttpClient) { 
    console.log("arrancamos el servicio");
    
  }

  buscarTopTracks():Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.token
      })
    };
    

    return this.servicio.get(this.uri,httpOptions)
  }


}
