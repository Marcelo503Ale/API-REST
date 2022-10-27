import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  
  auth: any = {
    nombre: "",
    apellido: ""
  };

  ngOnInit(): void {
    if(this.authService.auth == undefined) {
      this.router.navigate(['./login']);
    }else {
      this.auth = this.authService.auth;
    }


  }

}
