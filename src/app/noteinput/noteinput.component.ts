import { Component, EventEmitter, Output } from '@angular/core';
import { AppiconsComponent } from '../appicons/appicons.component';
import { CommonModule } from '@angular/common';
import { title } from 'process';

import { NoteService } from '../service/noteService/note.service';
import { error } from 'console';

@Component({
  selector: 'app-noteinput',
  imports: [AppiconsComponent,CommonModule],
  templateUrl: './noteinput.component.html',
  styleUrl: './noteinput.component.css'
})
export class NoteinputComponent {
  @Output() noteClosed = new EventEmitter<void>();

  isNoteExpanded: boolean = false;
  title:any='';
  body:any='';

  constructor(private noteService:NoteService){}

  expandNote(): void {
    this.isNoteExpanded = true;
    
  }

  closeNote(): void {
    
    this.isNoteExpanded = false;

    const noteTitle: any = document.getElementById('title_text');
    const noteBody: any = document.getElementById('content_text');

    console.log(noteTitle.value);
    console.log(noteBody.value);

    if (!noteTitle.value && !noteBody.value) {
      console.log("Note not created as title and body are empty.");
      return; // Exit if both fields are empty
    }
    else{
      const requData={
        title:noteTitle.value,
        content:noteBody.value,
        color:"pink",
        isPinned: false,
        isArchived: false,
        isDeleted: false,
        userId: Number(localStorage.getItem('userId'))
      }
      
      this.noteService.createNote(requData).subscribe((res:any)=>{
        if(res.success){
          
          console.log(res.data);
          alert("Note Created");
          console.log('Emitting noteClosed event...');
          this.noteClosed.emit();//notify the parent
        }
        else{
          console.log(res.data);
          alert("Note Not Created");
        }
  
      },(error)=>{
        console.error("Error creating note:", error);
        alert("An error occurred while creating the note.");
      });
    }
  }
}
