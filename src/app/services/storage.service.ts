import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  id: number,
  title: string,
  value: string,
  modified: number
}

 let favorites = [];

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }


  setItem(json) {
      favorites.push(json);
      console.log("This is the favs" + favorites);
  }
  
  getItem() {
   //  let favList = JSON.parse(StorageService(favorites));
  }

}
