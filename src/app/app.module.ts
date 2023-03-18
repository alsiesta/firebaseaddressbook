import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewuserinputComponent } from './newuserinput/newuserinput.component';
import { InputserviceService } from './inputservice.service';

// import { NewuserinputComponent } from './newuserinput/newuserinput.component';

@NgModule({
  declarations: [
    AppComponent,
    NewuserinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [InputserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
