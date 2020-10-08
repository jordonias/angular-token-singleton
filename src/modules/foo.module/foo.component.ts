import { Component, Inject, OnInit } from '@angular/core';

import { FooService } from './foo.service';

@Component({
  selector: 'foo-component',
  styles: [ 'div.container { border: 1px solid black; padding: 10px; margin: 10px; }' ],
  template: `
  <div class="container">
    <div>FOO (Token={{ tokenValue }})</div>
  </div>
  `
})
export class FooComponent implements OnInit {
  public tokenValue: string;

  public constructor(
    @Inject(FooService) private readonly fooService: FooService
  ) {
    this.tokenValue = '';
  }

  public ngOnInit(): void {
    this.tokenValue = this.fooService.getTokenValue();
  }
}