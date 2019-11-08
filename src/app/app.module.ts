import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import LocaleFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';

registerLocaleData(LocaleFr,'fr');

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
