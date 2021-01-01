import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';
import { DashboardComponent } from './dashboard.component';
import { routesPage } from './pages.routes';

const rutasHijas: Routes = [

  {
    path: 'componenteUno',
    component: ComponenteUnoComponent,
    children: routesPage,
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutasHijas )
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
