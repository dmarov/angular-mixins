import { Component, EventEmitter } from "@angular/core";

type Constructor<T> = new(...args: any[]) => T;

export const ClickHandler = <T extends Constructor<{}>>(Base: T = (class {} as any)) => {

  @Component({
    template: '',
  })
  class Temporary extends Base {
    name!: string;

    output = new EventEmitter<string>();

    onClick(): void {
      this.output.emit(this.name);
    }
  }

  return Temporary;
}
