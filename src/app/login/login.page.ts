import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../modelos/usuario';
import { UsuarioService } from './../servicios/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public listaUsuarios: Array<any> = [];

  constructor(
  public http: HttpClient,
  private api : UsuarioService) {
  }
  ngOnInit() {
    this.api.listarUser$.subscribe(datos => {
      this.listaUsuarios = datos
      console.log(datos)
    });
    this.api.getUser();
  }


}
