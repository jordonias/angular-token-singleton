import { NgModule } from '@angular/core';

import { FooComponent } from './foo.component';
import { FooService } from './foo.service';
import { SOME_TOKEN } from './some-token';

@NgModule({
  imports: [],
  declarations: [ FooComponent ],
  exports: [ FooComponent ],
  providers: [
    {
      provide: SOME_TOKEN,
      useValue: 'a'
    },
    FooService
  ]
})
export class FooModule { }