import { Component } from '@angular/core';

import { SumNumbersService } from './Addition/services/SumNumbers.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample Application';
  sum: number = 0;
  value1: number = 0;
  value2: number = 0;

  constructor(private numbersService: SumNumbersService) 
  { 
    this.sum = numbersService.getSum();
  }

  public calculateSum(){
    this.sum = this.value1 + this.value2;
  }

}
