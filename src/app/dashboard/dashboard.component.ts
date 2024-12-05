import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GetnotesComponent } from "../getnotes/getnotes.component";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatGridListModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // tiles: Tile[] = [
  //   {text: 'One', cols: 4, rows: 1, color: 'white'},
  //   {text: 'Two', cols: 1, rows: 6, color: 'lightgreen'},
  //   {text: 'Three', cols: 3, rows: 6, color: 'lightpink'}
  // ];
}
