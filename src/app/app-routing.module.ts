import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'contactos', component: ContactosComponent },
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'productos', component: ProductosComponent},
  {path: ' ', component: LoginComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
  
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

