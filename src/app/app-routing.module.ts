    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
     
    // Importar Componentes que seran  enlazados a cada ruta    
    import { HomeComponent } from './components/home.component' ;
    import { LoginComponent } from './components/login.component';
    import { PerfilComponent } from './components/perfil.component';
    import { ErrorComponent } from './components/error.component';
    import { RegistroComponent } from './components/registro.component';
    import { UpdateUsuarioComponent } from './components/update_usuario.component';
    import { DiscosComponent } from './components/discos.component';
    import { CreateDiscoComponent } from './components/create_disco.component';
    import { DetailDiscoComponent } from './components/detail_disco.component';
    import { UpdateDiscoComponent } from './components/update_disco.component';
    import { MainNavComponent } from './main-nav/main-nav.component';  

    // Importar el Guard para permitir y denegar acceso a determinadas rutas
    import { LoginGuard } from './guards/login.guard';

    // Rutas de acceso a cada componente y guard para acceso a cada una
    const appRoutes: Routes = [
      { path: '', component: DiscosComponent },
      { path: 'home', component: DiscosComponent },
      { path: 'login', component: LoginComponent },
      { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuard]},
      { path: 'update-usuario', component: UpdateUsuarioComponent, canActivate: [LoginGuard]},
      { path: 'registro', component: RegistroComponent },
      { path: 'create-disco', component: CreateDiscoComponent, canActivate: [LoginGuard]},
      { path: 'detail-disco/:id', component: DetailDiscoComponent},
      { path: 'update-disco/:id', component: UpdateDiscoComponent, canActivate: [LoginGuard]},
      { path: 'error', component: ErrorComponent },
      { path: 'init', component: MainNavComponent},
      { path: '**', component: ErrorComponent }
    ];
    
    // Decorador NgModule 
    @NgModule({
      imports: [
        // Importar modulo y las rutas como parametro de este
        RouterModule.forRoot(
          appRoutes 
        )
      ],
      exports: [
        // Exportar el modulo de rutas para utilizarlo externamente
        RouterModule
      ]
    })
    export class AppRoutingModule {}