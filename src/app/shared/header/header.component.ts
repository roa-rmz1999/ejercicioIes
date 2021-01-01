import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public rol: string ='';

  constructor( private authS: AuthService,
               private router: Router ) { }

  ngOnInit(): void {

    this.rol = this.authS.rol;
  }

  logout(){
    this.authS.logout().then( () => {
      this.router.navigate(['/login']);
    });

}
}
