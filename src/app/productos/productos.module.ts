import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [ProductosComponent],
  imports: [CommonModule,HeaderModule]
})
export class ProductosModule { }
