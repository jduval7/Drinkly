import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { FavoritesService } from '../services/favorites.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;
  par: any;
  test: any;
  saving = [];

  DataArray: Array<string> = [];



  toggle = true;
  status = 'Enable'; 
  


  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.drinkService.getData('json/v1/1/search.php?s=margarita')
    .subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  upDateList(ev) {
    console.log(ev.target.value);

    this.drinkService.getData('json/v1/1/search.php?s=' + ev.target.value)
    .subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  addToFavorites(i) {
    this.par = this.data.drinks[i];
    this.saving.push(this.par);
    console.log(this.saving);
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';

    let json = JSON.stringify(this.par);



    // let show = JSON.parse(json);
    // console.log(show);
  }
  

}
