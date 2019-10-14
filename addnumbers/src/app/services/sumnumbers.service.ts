import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumNumbersService {

  constructor() { }


  public  getSum(): number {
    return 10;
  }

}
