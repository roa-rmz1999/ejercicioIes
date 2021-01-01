import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  public usuarioHeader:string ='';
    

  constructor( private authS: AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.usuarioHeader = this.authS.usuarioHeader; 
  }

  logout(){
    this.authS.logout().then( () => {
      this.router.navigate(['/login']);
    });

  }

}
