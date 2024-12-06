import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-displaynote',
  standalone:true,
  imports: [
    MatCardModule,
    AppiconsComponent,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './displaynote.component.html',
  styleUrl: './displaynote.component.css'
})
export class DisplaynoteComponent{

  @Input()notesList:any[]=[];

  constructor(public dialog:MatDialog) {  
  }

  openEditDialog(note:any):void{
    const dialogbox=this.dialog.open(UpdatenoteComponent,{
      width:'50%',
      height:'auto',
      data:note
    })
  }

}
