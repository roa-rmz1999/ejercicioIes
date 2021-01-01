import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorLogeo: string;

  constructor( private fb: FormBuilder,
               private authS: AuthService,
               private router:Router ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
    });
  }

  logeo(){
    
    if( this.loginForm.invalid ){ return; }
    const{ usuario, contrasena } = this.loginForm.value;

    this.authS.loginUsuario(usuario, contrasena)
    .then( credenciales => {
      console.log( credenciales );
      this.router.navigate(['/']);
    })
    .catch( err => {
        this.errorLogeo = 'Contraseña o usuario Incorrectos';
    });
      
  }

  /*errorUsuario() {
    if (this.usuario.hasError('Requerido')) {
      return 'Tu debes de ingresar un usuario';
    }
  
    return this.usuario.hasError('usuario') ? 'No es un usuario valido' : '';
  }

  errorContrasena(){
    if(this.contrasena.hasError('Requerido')) {
      return 'Tu debes de ingresar un contrasena';
    }
    return this.contrasena.hasError('contrasena') ? 'No es un contrasena valido': '';
    }
  */

}
