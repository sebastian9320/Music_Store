    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
 
    import { HomeComponent } from './components/home.component' ;
    import { LoginComponent } from './components/login.component';
    import { ErrorComponent } from './components/error.component';
    import { RegistroComponent } from './components/registro.component';
    import { DiscosComponent } from './components/discos.component';
    import { CreateDiscoComponent} from './components/create_disco.component';



    const appRoutes: Routes = [
      { path: '', component: DiscosComponent },
      { path: 'home', component: DiscosComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'create-disco', component: CreateDiscoComponent },
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