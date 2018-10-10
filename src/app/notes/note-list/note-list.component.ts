import { Component, OnInit } from '@angular/core';

import { NoteService } from '../../services';
import { Note } from '../../models';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  noteAdded(note) {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes()
      .subscribe( notes => {
        this.notes = notes;
    });
  }

}
