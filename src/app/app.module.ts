import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexModule],
  declarations: [AppComponent, HelloComponent, MainComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
