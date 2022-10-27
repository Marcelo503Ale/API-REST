import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  styleUrls: ['./admin-usuario.component.css']
})
export class AdminUsuarioComponent implements OnInit {

  public usuarios: Usuario[] = [];

  public action: string = "crear";

  public selectedUsuario: Usuario[] = [];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  save(): void {

  }

  showDialog(): void {

  }

  delete(): void {

  }

}
