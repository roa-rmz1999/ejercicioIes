import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { DashboardComponent } from './pages/dashboard.component';
import { routesPage } from './pages/pages.routes';
import { AuthGuard } from './services/auth.guard';
 

const routes: Routes =[

  { path: 'login', component: LoginComponent },
  { 
    path: '',
    component:DashboardComponent,
    children: routesPage,
    canActivate: [ AuthGuard ]
  },
  { path: '**', redirectTo:'' },
];

@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
