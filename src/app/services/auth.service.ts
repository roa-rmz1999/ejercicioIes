import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public rol: string ='';
  public usuarioHeader:string ='';

  constructor( public auth: AngularFireAuth,
               private firestore: AngularFirestore  ) { }

  initAuthListener(){
    this.auth.authState.subscribe( fuser =>{
      console.log( fuser );
      console.log( fuser?.uid );
      console.log( fuser?.email);

      this.usuarioHeader = fuser?.email;

      if(fuser?.email === 'dist03@gmail.com'){
        this.rol = 'Distribuidor';
      }else if(fuser?.email === 'vali01@gmail.com'){
        this.rol = 'Validador';
      }else if(fuser?.email === 'sucu01@gmail.com'){
        this.rol = 'Sucursal';
      }
      console.log(this.rol);
    }
    )
  }

  crearUsuario( usuario:string, password: string, rol: string ){
     var email:string = usuario + '@gmail.com'; 
      return this.auth.createUserWithEmailAndPassword( email, password )
      .then( ({ user }) => {
          const newUser = new Usuario( user.uid, usuario, rol );
              return this.firestore.doc(`${ user.uid }/usuario`)
              .set( {...newUser} );
      });
  }

  loginUsuario(usuario: string, password:string){
    
      var email:string = usuario + '@gmail.com'
    return this.auth.signInWithEmailAndPassword( email, password );
  }

  logout(){
    this.rol = '';
    return this.auth.signOut();
  }

  isAuth(){
      return this.auth.authState.pipe(
          map( fbUser => fbUser != null )
      );
  }

}
