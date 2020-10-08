import { Component, Inject, OnInit } from '@angular/core';

import { FooService } from '../foo.module/foo.service';

@Component({
  selector: 'bar-component',
  styles: [ 'div.container { border: 1px solid black; padding: 10px; margin: 10px; }' ],
  template: `
    <div class="container">
      <div>BAR (Token={{ tokenValue }})</div>
      <foo-component></foo-component>
    </div>
  `

})
export class BarComponent implements OnInit {
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

