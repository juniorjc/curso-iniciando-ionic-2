import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ConnectionService} from './providers/connection-service/connection-service';
import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {GeneratedTestPage} from './pages/generated-test/generated-test';
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';
import {CardTestPage} from './pages/card-test/card-test';
import {IconTestPage} from './pages/icon-test/icon-test';
import {InputTestPage} from './pages/input-test/input-test';
import {ListTestPage} from './pages/list-test/list-test';
import {GridTestPage} from './pages/grid-test/grid-test';
import {ModalTestPage} from './pages/modal-test/modal-test';
import {NavigationTestPage} from './pages/navigation-test/navigation-test';
import {TabTestPage} from './pages/tab-test/tab-test';
import {ToastTestPage} from './pages/toast-test/toast-test';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  home: any = HomePage;
  rootPage: any = this.home;
  pages: Array<{component: any, title: string, icon: string}>;

  constructor(platform: Platform, private menuCtrl: MenuController) {

    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestPage, title: 'Menu', icon: 'menu'},
      {component: GeneratedTestPage, title: 'Generated', icon: 'home'},
      {component: AlertPage, title: 'Alert', icon: 'home'},
      {component: ButtonTestPage, title: 'Button', icon: 'home'},
      {component: CardTestPage, title: 'Card', icon: 'home'},
      {component: IconTestPage, title: 'Icon', icon: 'home'},
      {component: InputTestPage, title: 'Input', icon: 'star'},
      {component: ListTestPage, title: 'List', icon: 'home'},
      {component: GridTestPage, title: 'Grid', icon: 'home'},
      {component: ModalTestPage, title: 'Modal', icon: 'home'},
      {component: NavigationTestPage, title: 'Navigation', icon: 'home'},
      {component: TabTestPage, title: 'Tab', icon: 'home'},
      {component: ToastTestPage, title: 'Toast', icon: 'home'},
    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any) : void{
    this.rootPage = page.component;
  }
}

ionicBootstrap(MyApp,[ConnectionService],{
  menuType: 'push',
  platforms: {
    ios: {
      menuType: 'overlay'
    }
  }
});
