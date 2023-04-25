import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  onOutput(name: string): void {
    console.log(name);
  }
}
