import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { BasicoHogarComponent } from './componentes/productos/basico-hogar/basico-hogar.component';
import { PreciosBajosComponent } from './componentes/productos/precios-bajos/precios-bajos.component';
import { TiempoLimitadoComponent } from './componentes/productos/tiempo-limitado/tiempo-limitado.component';
import { King1ProductoComponent } from './componentes/productos/king1-producto/king1-producto.component';
import { King2PromocionComponent } from './componentes/productos/king2-promocion/king2-promocion.component';

//Servicios
import { ServicioProductoService } from './servicios/servicio-producto.service';
import { RecorreObjetoPipe } from './pipes/recorre-objeto.pipe';

const rutasApp:Routes = [
  {path: '', component: LoginComponent},  
  {path: 'listado-productos', component: ProductosComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductosComponent,    
    BasicoHogarComponent,
    PreciosBajosComponent,
    TiempoLimitadoComponent,
    King1ProductoComponent,
    King2PromocionComponent,
    RecorreObjetoPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutasApp),
    HttpClientModule
  ],
  providers: [ServicioProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
