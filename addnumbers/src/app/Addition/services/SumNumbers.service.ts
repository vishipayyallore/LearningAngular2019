import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumNumbersService {

  constructor() { }


  public  getSum(value1: number = 10, value2: number = 10): number {
    return value1 + value2;
  }

}
