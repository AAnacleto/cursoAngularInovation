import { Component, OnChanges, Input } from '@angular/core';


@Component({
   selector: 'app-star',
   templateUrl: '../star/star.component.html',
   styleUrls: ['../star/star.component.css']
})
export class StarComponent implements OnChanges {

  @Input()
  rating: number = 0;

  starWidth: number;

  ngOnChanges(): void{
      this.starWidth = this.rating * 74 / 5;
  }

}
