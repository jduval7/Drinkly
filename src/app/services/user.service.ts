import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Router } from '@angular/router';
import 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 // public signedIn = false;

  constructor() {
//    firebase.auth().onAuthStateChanged((user: firebase.User) => {
//      if (user) {
//        console.log('User is logged in');
//        this.router.navigateByUrl('folder/Inbox');
//      } else {
//        console.log('User is not logged in');
//        this.router.navigateByUrl('/login');
//      }
//    });
  }

 
}

