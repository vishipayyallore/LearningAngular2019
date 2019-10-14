import { Component } from '@angular/core';

import { SumNumbersService } from './services/sumnumbers.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addnumbers';
  sum = 0;
  value1 = 0;
  value2 = 0;

  constructor(private numbersService: SumNumbersService) 
  { 
    this.sum = numbersService.getSum();
  }

  public calculateSum(){
    this.sum = 101;
  }

}
