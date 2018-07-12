import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos para creacion, validacion e interaccion con los formularios
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// Importar animaciones para angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importar ngx masonry para animacion de tarjetas
import { NgxMasonryModule } from 'ngx-masonry';

// Importar ngx infinity scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Importar componentes que se utilizaran
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { PerfilComponent } from './components/perfil.component';
import { UpdateUsuarioComponent } from './components/update_usuario.component';
import { ErrorComponent } from './components/error.component';
import { RegistroComponent } from './components/registro.component';
import { DiscosComponent } from './components/discos.component';
import { CreateDiscoComponent } from './components/create_disco.component';
import { DetailDiscoComponent } from './components/detail_disco.component';
import { UpdateDiscoComponent } from './components/update_disco.component';
//
import { DeleteDialogComponent } from './components/delete_dialog.component';

// Importar modulo de rutas para nevegacion entre componentes
import { AppRoutingModule } from './app-routing.module';

// Importar Guard para proteccion de rutas y acceso a estas
import { LoginGuard } from './guards/login.guard';

// Modulo con componentes de angular material 
import { MaterialModule} from './material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

// Importar modulo httpclient para solicitudes mediante http 
import { HttpClientModule } from '@angular/common/http';


// Decorador ng module
@NgModule({


  // Declaracion del conjunto de componentes que se requieren
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    PerfilComponent,
    UpdateUsuarioComponent,
    HomeComponent,
    ErrorComponent,
    RegistroComponent,
    DiscosComponent,
    CreateDiscoComponent,
    DetailDiscoComponent,
    UpdateDiscoComponent,
    DeleteDialogComponent 
  ],

  // Importacion de modulos
  imports: [
    BrowserModule,

    // Modulo de rutas
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
    InfiniteScrollModule,
    // Modulo http para peticiones
    HttpClientModule,

    // Modulos para formularios
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  entryComponents: [DeleteDialogComponent],
  // Importar login guard para control de rutas y acceso 
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
