import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<Post[]> {

  constructor(private dataService : DataService) { }
  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.dataService.getPosts()
  }
}
