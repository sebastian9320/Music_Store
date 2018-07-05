import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importar animaciones para angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Importar componentes que se utilizaran
import { AppComponent } from './app.component';
//import { HomeComponent } from './components/home/home.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

// Importar modulo de rutas con sus respectivos parametros
import { AppRoutingModule } from './app-routing.module';

// Modulo con componentes de angular material 
import { MaterialModule} from './material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent
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
    //modulo de animaciones
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
