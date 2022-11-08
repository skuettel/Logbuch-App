import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MainComponent } from './main/main.component';

import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MainComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
