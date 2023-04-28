import { Component, EventEmitter, Input, Output } from "@angular/core";

type Constructor<T> = new(...args: any[]) => T;

export const ClickHandler = <T extends Constructor<{}>>(Base: T = (class {} as any)) => {

  @Component({
    template: '',
  })
  class Temporary extends Base {
    @Input()
    name!: string;

    @Output()
    output = new EventEmitter<string>();

    onClick(): void {
      this.output.emit(this.name);
    }
  }

  return Temporary;
}
