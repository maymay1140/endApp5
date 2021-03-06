import { WelcomePage } from './../pages/welcome/welcome';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { MenuUserPage } from '../pages/menu-user/menu-user';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'About', component: AboutPage, icon:'information-circle' },
      // { title: 'List', component: ListPage, icon:'home' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.storage.clear();
    
    this.nav.push(WelcomePage)

}

about(){
  this.storage.get('id').then((val) => {

  if(val==null){
    alert('กรุณาเข้าสู่ระบบก่อน');
  }else{
    this.nav.push(AboutPage);
  }
});
}

  home(){
    this.storage.get('type').then((val) => {
  
    if(val=='1'){
      this.nav.push(HomePage);
    }else if(val=='2'){
      this.nav.push(MenuUserPage);
    }else{
      alert('กรุณาเข้าสู่ระบบก่อน');
    }
  });
  
  
  }

}//end class
