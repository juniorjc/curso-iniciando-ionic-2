import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ConnectionService} from './providers/connection-service/connection-service';
import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {GeneratedTestPage} from './pages/generated-test/generated-test';

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
      {component: MenuTestPage, title: 'Menu Test', icon: 'menu'},
      {component: GeneratedTestPage, title: 'Generated Test', icon: 'home'}
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
