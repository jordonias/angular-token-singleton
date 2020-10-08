import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BarModule } from '../modules/bar.module/bar.module';
import { FooModule } from '../modules/foo.module/foo.module';
import { SOME_TOKEN } from '../modules/foo.module/some-token';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BarModule, BrowserModule, FooModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: SOME_TOKEN,
      useValue: 'c'
    }
  ]
})
export class AppModule { }
