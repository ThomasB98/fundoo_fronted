import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppiconsComponent } from '../appicons/appicons.component';
import { title } from 'process';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-displaynote',
  imports: [
    MatCardModule,
    AppiconsComponent,
    CommonModule
  ],
  templateUrl: './displaynote.component.html',
  styleUrl: './displaynote.component.css'
})
export class DisplaynoteComponent{

  @Input()notesList:any[]=[];

}
