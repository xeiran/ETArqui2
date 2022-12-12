import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { create } from 'domain';
import { environment } from 'src/environments/environment';
import { Usuario } from '../modelos/usuario';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public urlserver = environment.url + '/users';

  private comportamientoListar = new BehaviorSubject<Array<any>>([]);
  public listarUser$ = this.comportamientoListar.asObservable();

  constructor(
    public http: HttpClient
  ) {
  }


  getUser(){
    return this.http.get<Array<Usuario>>(this.urlserver).subscribe(data =>{
      this.comportamientoListar.next(data);

    })
  }
}
