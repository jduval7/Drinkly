import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Flashlight } from '@ionic-native/flashlight/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Drinks',
      url: '/home',
      icon: 'paper-plane'
    },
    {
      title: 'Ingredients',
      url: '/ingredients',
      icon: 'paper-plane'
    },
    {
      title: 'Random',
      url: '/random',
      icon: 'paper-plane'
    }
    
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private flashlight: Flashlight
  ) {
   // this.initializeApp();
  }

/*  initializeApp() {

    firebase.initializeApp({
      apiKey: "AIzaSyDxkTKcgFdHrI0KQnukntA52reTXH2g0NU",
      authDomain: "finale2-56cce.firebaseapp.com",
      databaseURL: "https://finale2-56cce.firebaseio.com",
      projectId: "finale2-56cce",
      storageBucket: "finale2-56cce.appspot.com",
      messagingSenderId: "630839493079",
      appId: "1:630839493079:web:b010b91cb4e3b913e10b92",
      measurementId: "G-MPYLV61XVZ"
    })

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

*/

  ngOnInit() {
    
  }

  /*
  logout() {
    firebase.auth().signOut();
    this.menu.close();
    console.log(firebase.auth().signOut());
  }
*/

  flash() {
    this.flashlight.toggle();
   }

}
