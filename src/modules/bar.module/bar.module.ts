import { NgModule } from '@angular/core';

import { FooModule } from '../foo.module/foo.module';
import { ANOTHER_TOKEN } from './another-token';
import { SOME_TOKEN } from '../foo.module/some-token';

import { BarComponent } from './bar.component';

@NgModule({
  imports: [ FooModule ],
  providers: [{
    provide: SOME_TOKEN,
    useValue: 'b'
  },
  {
    provide: ANOTHER_TOKEN,
    useValue: 'z'
  }],
  declarations: [ BarComponent ],
  exports: [ BarComponent ]
})
export class BarModule { }