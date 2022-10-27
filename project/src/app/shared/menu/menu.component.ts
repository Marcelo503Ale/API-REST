import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: "Inicio",
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: "productos",
        icon: "pi pi-user",
        routerLink: 'productos'
      },
      {
        label: "Cerrar sesion",
        icon: "pi pi-power-off",
        routerLink: 'logout'
      }


    ];
  }

}
