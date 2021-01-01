import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent {

  arreglo = [{value:21, name:'a'},{value:20, name:'b'},{value:19, name:'c'},{value:18, name:'d'},{value:17, name:'e'},{value:16, name:'f'}];
  obj = {CampoUno:1, CampoDos:2, CampoTres:3, CampoCuatro:4, CampoCinco:5, CampoSeis:6};
  resultadoP1 = {};
  resultadoP2 = [];
  
  
  resultadoFuncion(){

    this.arreglo.forEach((item)=>{
      this.resultadoP1[item.name] = [item.value];
  })
  console.log( 'resultado: ',  this.resultadoP1 );

}

resultadoFuncion2(){

  this.resultadoP2 = Object.entries(this.obj);
  console.log('resultado: ', this.resultadoP2);
}

  constructor() { }


}
