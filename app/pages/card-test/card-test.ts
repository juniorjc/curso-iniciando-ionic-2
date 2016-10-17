import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/card-test/card-test.html',
})
export class CardTestPage {
  constructor(private nav: NavController, public params: NavParams) {
    console.log('Parâmetro',params.get('mensagem'));
  }

  voltar() {
    this.nav.pop();
  }

}
