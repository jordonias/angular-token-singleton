import { NgModule } from '@angular/core';

import { FooModule } from './foo.module/foo.module';
import { SOME_TOKEN } from './foo.module/some-token';

import { BarComponent } from './bar.component';

@NgModule({
  imports: [ FooModule ],
  providers: [{
    provide: SOME_TOKEN,
    useValue: 'b'
  }],
  declarations: [ BarComponent ],
  exports: [ BarComponent ]
})
export class BarModule { }