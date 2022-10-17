import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[];

  constructor() { }

  ngOnInit(): void {
    this.NewGame();
  }

  public NewGame(): void {
    this.squares = Array(9).fill(null);
  }

  public MakeMove(idx: number): void{
    this.squares.splice(idx, 1, 'test')
  }

}
