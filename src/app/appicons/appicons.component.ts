import { Component,Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NoteService } from '../service/noteService/note.service';
import { response } from 'express';
@Component({
  selector: 'app-appicons',
  standalone:true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './appicons.component.html',
  styleUrl: './appicons.component.css'
})
export class AppiconsComponent {

  @Input() note: any;

  constructor(private noteService:NoteService) {
  
  }

  colorArray:Array<any>=[
    { code: '#ffffff', name: 'white'},
    { code: '#FF6347', name: 'Tomato'},
    { code: '#FF4500', name: 'OrangeRed'},
    { code: '#FFFF00', name: 'yellow'},
    { code: '#ADFF2F', name: 'greenyellow'},
    { code: '#B0C4DE', name: 'LightSteeelBlue'},
    { code: '#EEE8AA', name: 'PaleGoladenRod'},
    { code: '#7FFFD4', name: 'Aquamarine'},
    { code: '#C0C0C0', name: 'Silver'},
    { code: '#BC8F8F', name: 'RosyBrown'},
    { code: '#D3D3D3', name: 'grey'},
  ]
  applyStyle(event: MouseEvent): void{
    const target=event.target as HTMLElement;

    // if (target && target instanceof SVGElement) {
    //   // Toggle the "clicked" class on the clicked SVG
    //   target.classList.toggle('clicked');
    // }

    if (target && target instanceof SVGElement) {
      // Toggle the "clicked" class on the clicked SVG
      target.classList.toggle('clicked');
    }
  }

  arciveNote(){
    if (this.note) {
      console.log('Note clicked:', this.note);
      console.log('Note ID:', this.note.id);
      this.noteService.archiveNote(this.note.id,!this.note.isArchived).subscribe(
        (response:any)=>{
          console.log("printing response");
          console.log(response);
        }
      );

    } else {
      console.log('No note data available');
    }
  }

  deleteNote(){
    if (this.note) {
      console.log("delete button pressed")
      console.log('Note clicked:', this.note);
      console.log('Note ID:', this.note.id);
      this.noteService.TrashNote(this.note.id,!this.note.isDeleted).subscribe(
        (response:any)=>{
          console.log("printing response");
          console.log(response);
        }
      );

    } else {
      console.log('No note data available');
    }
  }

  makeCopy(){
    const requData={
      title:this.note.title,
      content:this.note.content,
      color:this.note.color,
      isPinned: false,
      isArchived: false,
      isDeleted: false,
      userId: Number(localStorage.getItem('userId'))
    }
    
    this.noteService.createNote(requData).subscribe((res:any)=>{
      if(res.success){
        
        console.log(res.data);
        alert("copy Created");
      }
      else{
        console.log(res.data);
        alert("copy Not Created");
      }

    },(error)=>{
      console.error("Error creating copy:", error);
      alert("An error occurred while creating the note.");
    });
  }

  setColor(colors:any){
    const reqdata={
      id:this.note.id,
      color:colors.code
    }
    console.log(reqdata);
    this.noteService.colorUpdate(reqdata).subscribe(
      (res:any)=>{
        if(res.success){
          console.log(res.data);
        }
        else{
          console.log("color not changed");
        }
      }
    )
  }
}
