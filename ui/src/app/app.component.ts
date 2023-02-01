import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  constructor(router: Router){
    if(window.location.pathname !== "/cadastro"){
    if(localStorage.getItem('token') === null
      || localStorage.getItem('token') == ""){
      router.navigate(['/login']);
    }else{
      {}
    }
  }
  }
}
// http://localhost:4200/personal-infos
