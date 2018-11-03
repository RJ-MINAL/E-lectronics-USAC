import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})


export class LogoutComponent {

  constructor(private router:Router, private auth: AuthService) { }

  logout(){    
      this.auth.logout();         
      this.router.navigate(['/']);
  }

}
