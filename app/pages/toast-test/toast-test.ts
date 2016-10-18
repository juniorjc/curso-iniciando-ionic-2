import { Component } from '@angular/core';
import { NavController, Toast } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/toast-test/toast-test.html',
})
export class ToastTestPage {
  constructor(private nav: NavController) {}

  showToast() {
    let toast = Toast.create({
      message: 'Olá mundo',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'middle'
    });

    toast.onDismiss(() =>{
      console.log('Toast finalizado.');
    });

    this.nav.present(toast);
  }
}
