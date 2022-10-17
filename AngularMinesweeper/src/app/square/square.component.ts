import { Component, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!IsVisiableToPlayer"></button>
    <button *ngIf="IsVisiableToPlayer">{{value}}</button>
  `,
  styles: [
    'button {height: 100px; width: 100px;}'
  ]
})
export class SquareComponent  {
  @Input() value: any;

  private _IsVisiableToPlayer: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public IsVisiableToPlayer: Observable<boolean> = this._IsVisiableToPlayer.asObservable();
  visibleToPlayer: boolean = false;

  public UpdateVisibility(): void{
    this._IsVisiableToPlayer.next(true);
  }
}
