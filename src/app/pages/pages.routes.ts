import { Routes } from "@angular/router";
import { ComponenteUnoComponent } from "./componente-uno/componente-uno.component";
import { InicioComponent } from "./inicio/inicio.component";

export const routesPage: Routes =[
    { path: 'inicio', component: InicioComponent },
    { path: 'componenteUno', component: ComponenteUnoComponent },
    { path: '**', redirectTo: 'inicio' }
  
  ];