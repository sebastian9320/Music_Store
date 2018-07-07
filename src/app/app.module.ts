import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos para creacion, validacion e interaccion con los formularios
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// Importar animaciones para angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importar ngx masonry para animacion de tarjetas
import { NgxMasonryModule } from 'ngx-masonry';

// Importar componentes que se utilizaran
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { ErrorComponent } from './components/error.component';
import { RegistroComponent } from './components/registro.component';
import { DiscosComponent } from './components/discos.component';
import { CreateDiscoComponent } from './components/create_disco.component';

// Importar modulo de rutas con sus respectivos parametros
import { AppRoutingModule } from './app-routing.module';

// Modulo con componentes de angular material 
import { MaterialModule} from './material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

// Importar modulo httpclient para solicitudes mediante http 
import { HttpClientModule } from '@angular/common/http';

@NgModule({


  // declaracion del conjunto de componentes que se requieren
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    RegistroComponent,
    DiscosComponent,
    CreateDiscoComponent 
  ],

  // Importacion de modulos
  imports: [
    BrowserModule,

    // modulo de rutas
    AppRoutingModule,

    // Modulos de navbar angular material
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
    // Modulo de animaciones
    BrowserAnimationsModule,
    NgxMasonryModule,
    // Modulo http para peticiones
    HttpClientModule,

    // Modulos para formularios
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
