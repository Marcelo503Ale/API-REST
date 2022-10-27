import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, AfterContentInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    this.authService.auth = undefined;
    console.log(this.authService.auth);
    this.router.navigate(['./login']);
  }

}
