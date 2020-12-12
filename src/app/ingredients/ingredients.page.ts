import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {

  data: any;
  


  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.drinkService.getData('json/v1/1/search.php?i=vermouth')
    .subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  upDateList(ev) {
    console.log(ev.target.value);

    this.drinkService.getData('json/v1/1/search.php?i=' + ev.target.value)
    .subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}
