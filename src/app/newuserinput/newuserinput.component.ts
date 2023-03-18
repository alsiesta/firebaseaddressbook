import { Component } from '@angular/core';
import { InputserviceService } from '../inputservice.service';

@Component({
  selector: 'app-newuserinput',
  templateUrl: "./newuserinput.component.html",
  styleUrls: ['./newuserinput.component.scss']
})
export class NewuserinputComponent {
  newInputValue: string = "";

  constructor(public inputservice: InputserviceService) { }

  updateMyProperty() {
    this.inputservice.myFunction(this.newInputValue);
  }
  }
