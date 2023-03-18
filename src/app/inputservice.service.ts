import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputserviceService {
  myProperty: string = "Initial value";

  myFunction(newVal: string) {
    this.myProperty = newVal;
  }
 
  constructor() { }
}
