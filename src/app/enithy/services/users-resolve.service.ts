import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<User[]> {
  constructor(private dataService : DataService) { }
  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.dataService.getUsers()
  }
}
