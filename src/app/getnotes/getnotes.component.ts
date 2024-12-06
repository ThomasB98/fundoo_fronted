import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  trashNotesArray:any[]=[];
  archivedNotesArray:any[]=[];

  @Input() archiveClick!: boolean;
  @Input() trashClick!:boolean;

  @Output() trashNotesEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() archivedNotesEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();
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
        this.NotesArray = response.data.filter(
          (note: any) => note.isDeleted === false &&
          note.isArchived===false
        );

        this.trashNotesArray = response.data.filter(
          (note: any) => note.isDeleted === true
        );
  
        this.archivedNotesArray = response.data.filter(
          (note: any) => note.isArchived === true
        );

        console.log("Notes fetched successfully:", this.NotesArray);
      },
      (error)=>{
        console.error('Error fetching notes:', error);
      }
    )
  }


  ngOnChanges(){
    if(this.archiveClick){
      this.archivedNotesEmitter.emit(this.archivedNotesArray);
    }
    
    if(this.trashClick){
      this.archiveClick=false;
      this.trashNotesEmitter.emit(this.trashNotesArray);
    }
  }
}
