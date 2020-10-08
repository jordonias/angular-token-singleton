import { Inject, Injectable } from '@angular/core';

import { SOME_TOKEN } from './some-token';

@Injectable()
export class FooService {
  public constructor(
    @Inject(SOME_TOKEN) private readonly something: string
  ) {}

  public getTokenValue(): string {
    return this.something;
  }
}