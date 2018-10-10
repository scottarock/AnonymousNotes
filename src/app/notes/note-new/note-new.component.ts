import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Note } from '../../models';
import { NoteService } from '../../services';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  note: Note = new Note();
  @Output() newNote: EventEmitter<Note> = new EventEmitter;

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('new note submitted', this.note);
    this.noteService.createNote(this.note)
      .subscribe( note => {
        this.newNote.emit(note);
        this.note = new Note();
    });
  }

}
