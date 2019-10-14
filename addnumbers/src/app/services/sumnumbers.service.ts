import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumNumbersService {

  constructor() { }


  public  getSum(): any {
    return 10;
  }

}
