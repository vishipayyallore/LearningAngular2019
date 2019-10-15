import { Component } from '@angular/core';

import { SumNumbersService } from '../services/SumNumbers.service'

@Component({
  selector: 'sum-numbers',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent {
  title = 'Addition of Number';
  sum: number = 0;
  value1: number = 0;
  value2: number = 0;

  constructor(private numbersService: SumNumbersService) {
    this.sum = numbersService.getSum(this.value1, this.value2);
  }

  public calculateSum() {
    this.sum = this.value1 + this.value2;
  }

}
