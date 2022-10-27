import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  private apiUrl: String = "http://localhost:8080/api";

  getAll(auth_token: string): Observable<Productos[]>{
    const url = `${this.apiUrl}/productos`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get<Productos[]>(url, { headers: headers });
  }
//metodo mostrar
  getById(auth_token: string, id:number): Observable<Productos>{
    const url = `${this.apiUrl}/productos/${id}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.get<Productos>(url, {headers: headers})
  }
//metodo crear
  create(auth_token: string, producto: Productos, img?: File): Observable<Productos> {
    const url = `${this.apiUrl}/productos`;
    const formData = new FormData();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    })


    let json = new Blob([JSON.stringify(producto)], {type: "application/json"})
    formData.append("producto", json );

    if(img != undefined && img != null) {
      formData.append("img", img, img.name);
    }

    return this.http.post<Productos>(url, formData, {headers: headers});
  }

  update(auth_token: string, producto: Productos, img?: File): Observable<Productos> {
    const url = `${this.apiUrl}/productos`;
    const formData = new FormData();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    })


    let json = new Blob([JSON.stringify(producto)], {type: "application/json"})
    formData.append("producto", json );

    if(img != undefined && img != null) {
      formData.append("img", img, img.name);
    }

    return this.http.put<Productos>(url, formData);

  }



}
