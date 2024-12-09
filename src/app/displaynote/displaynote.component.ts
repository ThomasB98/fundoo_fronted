import { Component, Input, OnInit } from '@angular/core';

import { SearchService } from '../service/searchService/search.service';
import { SearchPipe } from '../pipe/searchpipe/search.pipe';

import {MatCardModule} from '@angular/material/card';
import { AppiconsComponent } from '../appicons/appicons.component';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { response } from 'express';

@Component({
  selector: 'app-displaynote',
  standalone:true,
  imports: [
    MatCardModule,
    AppiconsComponent,
    CommonModule,
    MatDialogModule,
    SearchPipe
  ],
  templateUrl: './displaynote.component.html',
  styleUrl: './displaynote.component.css'
})
export class DisplaynoteComponent implements OnInit{

  @Input()notesList:any[]=[];

  filterNote:any;

  constructor(public dialog:MatDialog,private _SearchService:SearchService) {  
  }

  ngOnInit(): void {
    this._SearchService.IncomingMessage.subscribe((response)=>{
      console.log("Search in process");
      this.filterNote =response;
    })
  }

  
  openEditDialog(note:any):void{
    const dialogbox=this.dialog.open(UpdatenoteComponent,{
      width:'50%',
      height:'auto',
      data:note
    })
  }

}
