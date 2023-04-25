import { Component, OnInit } from '@angular/core';
import { inputs, outputs } from './click-handler-params';
import { ClickHandler } from './click-handler.mixin';

@Component({
  selector: 'app-click-handler-a',
  templateUrl: './click-handler.component.html',
  inputs,
  outputs,
})
export class ClickHandlerAComponent extends ClickHandler() implements OnInit {
  ngOnInit(): void {
    console.log('component a init');
  }
}
