import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;

  constructor( private fb: FormBuilder,
               private authS: AuthService,
               private router:Router ) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      usuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required]],
      rol: ['', [Validators.required]]
  });
  }

  registro(){
if( this.registroForm.invalid ){ return; }

const { usuario, contrasena, rol } = this.registroForm.value; 
    
  this.authS.crearUsuario( usuario, contrasena, rol )
  .then( credenciales => {
    console.log( credenciales );
  })
  .catch( err => console.error( err ));
  
  
  }

}
