import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';



@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  data: any;
  

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {

    this.drinkService.getData2('json/v1/1/random.php')
    .subscribe(data => {
      console.log(data);
      this.data = data;
    })

  }

  upDateList(ev) {
    console.log(ev.target.value);

    this.drinkService.getData2('json/v1/1/random.php')
    .subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }


}
