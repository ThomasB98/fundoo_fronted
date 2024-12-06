import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppiconsComponent } from '../appicons/appicons.component';
import { CommonModule } from '@angular/common';

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
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-display-trash',
  imports: [
    MatCardModule,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './display-trash.component.html',
  styleUrl: './display-trash.component.css'
})
export class DisplayTrashComponent {
  @Input() notesList:any[]=[];

  constructor(public dialog:MatDialog) {  
  }
  openEditDialog(note:any){
    const dialogbox=this.dialog.open(UpdatenoteComponent,{
      width:'50%',
      height:'auto',
      data:note
    })
  }
}
