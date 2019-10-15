import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumComponent } from './Addition/Components/sum.component'
import { SumNumbersService } from './Addition/services/SumNumbers.service'

@NgModule({
  declarations: [
    AppComponent,
    SumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SumNumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
