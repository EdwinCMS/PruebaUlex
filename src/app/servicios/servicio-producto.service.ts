import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioProductoService {
    
  categorias: object;
  productos: object;

  constructor(private http: HttpClient) {     
  }

  getApi(url:string){
    return this.http.get(url);
  }




}
