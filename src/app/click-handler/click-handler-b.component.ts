import { Component, OnInit } from '@angular/core';
import { ClickHandler } from './click-handler.mixin';
import { inputs, outputs } from './click-handler-params';

@Component({
  selector: 'app-click-handler-b',
  templateUrl: './click-handler.component.html',
  inputs,
  outputs,
})
export class ClickHandlerBComponent extends ClickHandler() implements OnInit {
  ngOnInit(): void {
    console.log('component b init');
  }
}
