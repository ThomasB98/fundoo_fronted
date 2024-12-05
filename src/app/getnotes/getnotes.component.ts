import { Component, OnInit } from '@angular/core';
import { NoteinputComponent } from "../noteinput/noteinput.component";
import { DisplaynoteComponent } from "../displaynote/displaynote.component";
import { NoteService } from '../service/noteService/note.service';
import { Router } from '@angular/router';
import { log } from 'console';



@Component({
  selector: 'app-getnotes',
  imports: [NoteinputComponent, DisplaynoteComponent],
  templateUrl: './getnotes.component.html',
  styleUrl: './getnotes.component.css'

})
export class GetnotesComponent implements OnInit{

  NotesArray:any[]=[];
  constructor(private noteService:NoteService,private router:Router) {
  
  }

  ngOnInit(): void {
    this.getNotes();
  }

  closeNote(){
    
    this.getNotes();//Refresh notes
  }

  getNotes(){
    this.noteService.getNotes().subscribe(
      (response:any)=>{
        console.log("printing response");
        console.log(response);
        this.NotesArray=response;
        console.log("Notes fetched successfully:", this.NotesArray);
      },
      (error)=>{
        console.error('Error fetching notes:', error);
      }
    )
  }
}
