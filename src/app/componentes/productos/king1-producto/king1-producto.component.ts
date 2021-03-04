import { Component, OnInit } from '@angular/core';
import { ServicioProductoService } from '../../../servicios/servicio-producto.service';

@Component({
  selector: 'app-king1-producto',
  templateUrl: './king1-producto.component.html',
  styleUrls: ['./king1-producto.component.css']
})
export class King1ProductoComponent implements OnInit {
  url: string;
  categorias: object;
  productos: object;

  constructor(private _servicio: ServicioProductoService) {
    this.url = 'http://www.mocky.io/v2/5ed0b4443500005b00ff9e02';
    
  }

  ngOnInit(): void {
  /*
    this._servicio.getApi(this.url)
      .subscribe((res: any) => {
        this.categorias = res.categories;
        //console.log(this.categorias);
      });

    this._servicio.getApi(this.url)
      .subscribe((res: any) => {
        this.productos = res.products;
        //console.log(this.productos);
      });
*/
  }

}
