import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

/*
  Generated class for the AlertPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {
  constructor(private nav: NavController) {}

  user: string = 'none';

  showAlert(){
    let alert = Alert.create({
      title: 'Nome',
      message: 'Digite seu nome',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Seu nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Ok',
          handler: (data) =>{
            this.user = data.nome;
          }
        }
      ]
    });

    this.nav.present(alert);
  }
}
