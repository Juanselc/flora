import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ContactosModule } from './contactos/contactos.module';
import { LoginModule } from './login/login.module';
import { ProductosModule } from './productos/productos.module';
import { RegistroModule } from './registro/registro.module';
import { HeaderModule } from './header/header.module';
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import  * as firebase from 'firebase/app';
import { FirebaseAppModule } from '@angular/fire/app';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
            HomeModule,ContactosModule,LoginModule,ProductosModule,
            RegistroModule,HeaderModule,AngularFireModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireDatabaseModule,AngularFireAuthModule,FirebaseAppModule,

          ],
            
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
