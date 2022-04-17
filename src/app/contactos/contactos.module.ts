import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent } from './contactos.component';
import { HeaderModule } from '../header/header.module';




@NgModule({
  declarations: [ContactosComponent],
  imports: [CommonModule,HeaderModule,]
})
export class ContactosModule { }
