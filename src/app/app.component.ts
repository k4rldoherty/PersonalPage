import { Component } from '@angular/core';
import {
  trigger, state, style, animate, transition, query, group
 } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-page';
}
