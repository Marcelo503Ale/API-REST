import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmProductoComponent } from './pages/adm-producto/adm-producto.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    AdmProductoComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
  AdmProductoComponent
  ]
})
export class ProductosModule { }
