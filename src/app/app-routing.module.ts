    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
     
    //import { HomeComponent } from './components/home/home.component' ;
    import { HomeComponent } from './components/home/home.component' ;
    import { LoginComponent } from './components/login/login.component';
    import { ErrorComponent } from './components/error/error.component';
     
    const appRoutes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
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