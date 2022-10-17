import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{value}}</button>
  `,
  styles: [
    'button {height: 100px; width: 100px;}'
  ]
})
export class SquareComponent  {
  @Input() value: any;
}
