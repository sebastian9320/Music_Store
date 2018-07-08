    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
 
    import { HomeComponent } from './components/home.component' ;
    import { LoginComponent } from './components/login.component';
    import { PerfilComponent } from './components/perfil.component';
    import { LogoutComponent } from './components/logout.component';
    import { ErrorComponent } from './components/error.component';
    import { RegistroComponent } from './components/registro.component';
    import { DiscosComponent } from './components/discos.component';
    import { CreateDiscoComponent } from './components/create_disco.component';
    import { UpdateDiscoComponent } from './components/update_disco.component';  

    import { LoginGuard } from './guards/login.guard';

    const appRoutes: Routes = [
      { path: '', component: DiscosComponent },
      { path: 'home', component: DiscosComponent },
      { path: 'login', component: LoginComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'logout', component: LogoutComponent, canActivate: [LoginGuard]},
      { path: 'registro', component: RegistroComponent },
      { path: 'create-disco', component: CreateDiscoComponent, canActivate: [LoginGuard]},
      { path: 'update-disco/:id', component: UpdateDiscoComponent, canActivate: [LoginGuard]},
      { path: 'error', component: ErrorComponent },
      { path: '**', component: ErrorComponent }
    ];
     
    @NgModule({
      imports: [
        RouterModule.forRoot(
          appRoutes 
        )
      ],
      exports: [
        RouterModule
      ]
    })
    export class AppRoutingModule {}