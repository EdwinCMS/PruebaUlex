import { Component, OnInit } from '@angular/core';
import { ServicioProductoService } from '../../../servicios/servicio-producto.service';

@Component({
  selector: 'app-king2-promocion',
  templateUrl: './king2-promocion.component.html',
  styleUrls: ['./king2-promocion.component.css']
})
export class King2PromocionComponent implements OnInit {

  url: string;
  categorias: object;
  productos: object;
  url_img:string = "'https://assets.compramass.com/products/'+ ean + '-80@3x.jpg'";

  constructor(private _servicio: ServicioProductoService) {
    this.url = 'http://www.mocky.io/v2/5ed0b4443500005b00ff9e02';
    
  }

  ngOnInit(): void {
    
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

  }

}
