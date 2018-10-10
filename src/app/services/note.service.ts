import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Note } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  // mock api base
  private readonly base = 'http://5bbd8aa08be32700139e3444.mockapi.io/notes';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.base);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.base, note);
  }

}
