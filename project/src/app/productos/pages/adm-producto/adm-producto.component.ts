import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { Productos } from '../../interfaces/Producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-adm-producto',
  templateUrl: './adm-producto.component.html',
  styleUrls: ['./adm-producto.component.css']
})
export class AdmProductoComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService , private productoservice: ProductoService ) { }

  public producto:Productos[] = [];

  public action: string = "crear";

  imagePath: string = "http://localhost:8080/api/image";
  dialogTitle: string = "";

  public selectedproductos: Productos[] = [];

  productou : Productos = {}
  imagen?: File;

  saveOrUpdateDialog: boolean = false;

  showDialog(message: string, id?: number) {
    this.productou = {}
    this.dialogTitle = message + " producto";
    this.action = message;
    this.saveOrUpdateDialog = true;

    this.productou.id = id != undefined ? id:undefined

    //solo si se actualizara el item
    if(this.productou.id != undefined) {
      this.productoservice.getById(this.authService.token, id!).subscribe({
        next: (producto) => {
            this.productou = producto;
        },
        error: (err) => {
          console.log("Error al obtener el producto...", err);
        }
      })
    }
  }

  delete() {

  }

  ngOnInit(): void {
    if(this.authService.auth == undefined) {
      this.router.navigate(['./login']);
    }
    this.productoservice.getAll(this.authService.token).subscribe({
      next: (response) =>{ console.log
        this.producto = response;
      },
      error: (err) => {
        if(err.status == 403) {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No tienes los permisos para acceder a esta sección',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['./']);
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error al acceder',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
    });
  }
  processFile(event: any) {

    this.imagen = event.target.files[0];


  }
  save(event: any){
    if(this.action === "crear") {
      this.productoservice.create(this.authService.token,  this.productou, this.imagen).subscribe({
        next: (producto) => {
          this.producto = [...this.producto, producto];

          this.productou = {}

          this.saveOrUpdateDialog = false;

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto creado correctamente',
            showConfirmButton: false,
            timer: 1500
          })

          event.target.reset();


        },
        error: (err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error al crear un nuevo producto',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });

    }


  }

}
