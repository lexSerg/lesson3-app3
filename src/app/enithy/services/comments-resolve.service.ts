import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from '../models/Comment';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<Comment[]>{

  constructor(private dataService : DataService) {}
  resolve() : Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.dataService.getComments()
  }
}
