import { Component, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AppiconsComponent } from '../appicons/appicons.component';
import { FormsModule } from '@angular/forms';

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
import { NoteService } from '../service/noteService/note.service';
import { response } from 'express';
import { log } from 'console';

@Component({
  selector: 'app-updatenote',
  imports: [
    MatDialogModule,
    MatCardModule,
    AppiconsComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './updatenote.component.html',
  styleUrl: './updatenote.component.css'
})
export class UpdatenoteComponent {

  title:any;
  content:any;
  id:any;
  userId:any;
  color:any;
  isArchived:any;
  isPinned:any;
  isDeleted:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogbox:MatDialogRef<UpdatenoteComponent>,
    private noteService:NoteService
  ){
    console.log("note id recived in update")
    console.log(data.id);
    
    this.title=data.title,
    this.content=data.content,
    this.id=data.id,
    this.isArchived=data.isArchived,
    this.isPinned=data.isPinned,
    this.isDeleted=data.isDeleted,
    this.userId=data.userId
    this.color=data.color
  }


  closeDialog(){
    let reqData ={
      title:this.title,
      content:this.content,
      color:this.color,
      isPinned:false,
      isArchived:this.isArchived,
      isDeleted:this.isDeleted,
      userId:this.userId,
      id:this.id
    }
    this.noteService.updateNote(reqData).subscribe(
      (response:any)=>{
        console.log("update response");
        console.log(response);
      }
    )
    console.log("update data");
    
    console.log(reqData)

    this.dialogbox.close();
  }
}
