import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { BasicoHogarComponent } from './componentes/productos/basico-hogar/basico-hogar.component';
import { PreciosBajosComponent } from './componentes/productos/precios-bajos/precios-bajos.component';
import { TiempoLimitadoComponent } from './componentes/productos/tiempo-limitado/tiempo-limitado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductosComponent,    
    BasicoHogarComponent,
    PreciosBajosComponent,
    TiempoLimitadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
