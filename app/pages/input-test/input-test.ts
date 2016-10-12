import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

/*
  Generated class for the InputTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/input-test/input-test.html',
})
export class InputTestPage {

  login: string;
  senha: string;

  constructor(private nav: NavController) {}

  entrar(){
    let texto = 'Login: ' + this.login + ', Senha: ' + this.senha;

    let alert = Alert.create({
      title: 'Entrando...',
      message: texto
    });

    this.nav.present(alert);
  }
}
